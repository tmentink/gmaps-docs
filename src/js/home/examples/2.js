// ------------------------------------------------------------------------
// gmaps-docs: home/examples/2.js
// ------------------------------------------------------------------------

var Examples = ((Examples) => {
  "use strict"

  // ------------------------------------------------------------------------
  // Constants
  // ------------------------------------------------------------------------

  const namespace = "2"
  const id        = `example${namespace}`
  let map         = null


  // ------------------------------------------------------------------------
  // Namespace
  // ------------------------------------------------------------------------

  Examples[namespace] = {
    all: function() {
      map.markers().toggle()
    },
    ids: function() {
      map.markers(["Bondi Beach"]).setOptions("animation", 1)
      map.markers(["Coogee Beach", "Manly Beach"]).toggle()
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

      map.add("markers", data.locations.map(function(obj) {
        return {
          id: obj.name,
          position: obj.coords
        }
      }))
    }
  }


  return Examples
})(Examples || (Examples = {}))
