// ------------------------------------------------------------------------
// gmaps-docs: home/init.js
// ------------------------------------------------------------------------

!(() => {
  "use strict"


  // ------------------------------------------------------------------------
  // Page Init
  // ------------------------------------------------------------------------

  $(document).ready(function() {

    $cache("#version").html(`v${gmap.version}`)

    const $examples = $cache("#examples")
    Object.keys(Example).forEach(function(key, index, arr) {
      let HTML = Example[key].buildHTML()
      if (index < arr.length -1) {
        HTML += Temp.divider()
      }

      $examples.append(HTML)
      Example[key].initMap()
    })

    $examples.on("click", "[data-method]", function() {
      const btn = $(this)
      const key = btn.data("example")
      Example[key][btn.data("method")]()
    })
  })

})()
