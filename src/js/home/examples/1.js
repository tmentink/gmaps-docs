// ------------------------------------------------------------------------
// gmaps-docs: home/examples/1.js
// ------------------------------------------------------------------------

var Examples = ((Examples) => {
  "use strict"

  // ------------------------------------------------------------------------
  // Constants
  // ------------------------------------------------------------------------

  const namespace = "1"
  const id        = `example${namespace}`
  let map         = null


  // ------------------------------------------------------------------------
  // Namespace
  // ------------------------------------------------------------------------

  Examples[namespace] = {
    add: function() {
      map.add("markers", data.locations.map(function(obj) {
        return {
          position: obj.coords
        }
      }))
    },
    initMap: function() {
      map = new gmap({
        mapId: `${id}_map`,
        mapOptions: {
          center      : { lat: -33.91, lng: 151.21 },
          scrollwheel : false,
          zoom        : 10
        }
      })
    },
    remove: function() {
      map.remove("markers")
    }
  }


  return Examples
})(Examples || (Examples = {}))
