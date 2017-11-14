// ------------------------------------------------------------------------
// gmaps-docs: docs/search.js
// ------------------------------------------------------------------------

var Search = ((Search) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const API_KEY = "447aa2ad1b1bbd7bbd7a7bdb8e374c0a"

  const Selector = {
    TXT_SEARCH : "#txtSearch"
  }


  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  Search.init = function() {
    docsearch({
      apiKey: API_KEY,
      indexName: "gmapsjs",
      inputSelector: Selector.TXT_SEARCH,
      debug: true
    })
  }


  return Search
})(Search || (Search = {}))
