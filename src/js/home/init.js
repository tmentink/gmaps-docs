// ------------------------------------------------------------------------
// gmaps-docs: home/init.js
// ------------------------------------------------------------------------

!(() => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const DataAttributes = {
    EXAMPLE : "data-example",
    METHOD  : "data-method"
  }

  const Selector = {
    BTN_RUN_CODE : `[${DataAttributes.METHOD}]`,
    CODE_SEGMENT : ".code.segment",
    COPY_BUTTON  : ".copyButton",
    EXAMPLES     : "#examples",
    VERSION      : "#version"
  }


  // ------------------------------------------------------------------------
  // Page Init
  // ------------------------------------------------------------------------

  $(document).ready(function() {
    $cache(Selector.VERSION).html(`v${gmap.version}`)

    $cache(Selector.CODE_SEGMENT).on("click", Selector.COPY_BUTTON, function() {
      window.getSelection().selectAllChildren($(this).next("pre")[0])
      document.execCommand("copy")
    })

    Object.keys(Examples).forEach(function(key) {
      Examples[key].initMap()
    })

    $cache(Selector.EXAMPLES).on("click", Selector.BTN_RUN_CODE, function() {
      const btn    = $(this)
      const key    = btn.attr(DataAttributes.EXAMPLE)
      const method = btn.attr(DataAttributes.METHOD)
      Examples[key][method]()
    })
  })

})()
