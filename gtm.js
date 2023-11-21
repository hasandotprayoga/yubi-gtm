// Function to make HTTP request
function setProductId(id) {
  // Check if 'id' is provided
  if (!id) {
    console.error('ID parameter is required.')
    return
  }

  // Make the HTTP request using the provided 'id' parameter
  fetch(`https://gateway.yukbisnis.dev/v1/analytic?status=ACTIVE&type=GOOGLE_ANALYTIC&idProduct=${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.response.results.items.length > 0) {
        // Extract Google Analytics ID from the response
        const googleAnalyticsId = data.response.results.items[0].AnalyticValue

        // Call function to set up Google Tag Manager with the retrieved ID
        setupGoogleTagManager(googleAnalyticsId)
      }
    })
    .catch((error) => console.error('Error fetching data:', error))
}

// Function to set up Google Tag Manager with the Google Analytics ID
function setupGoogleTagManager(googleAnalyticsId) {
  // Google Tag Manager container code
  ;(function (w, d, s, l, i) {
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : ''
    j.async = true
    j.src = 'https://www.googletagmanager.com/gtag/js?id=' + i + dl
    f.parentNode.insertBefore(j, f)
  })(window, document, 'script', 'dataLayer', googleAnalyticsId)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', googleAnalyticsId)
}
