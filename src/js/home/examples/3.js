// ------------------------------------------------------------------------
// gmaps-docs: home/examples/3.js
// ------------------------------------------------------------------------

var Examples = ((Examples) => {
  "use strict"

  // ------------------------------------------------------------------------
  // Constants
  // ------------------------------------------------------------------------

  const namespace = "3"
  const id        = `example${namespace}`
  let map         = null


  // ------------------------------------------------------------------------
  // Namespace
  // ------------------------------------------------------------------------

  Examples[namespace] = {
    hover: function() {
      map.reset()

      map.polygons().show().on("mouse over", function() {
        map.polygons(this.gmaps.id)
          .setOptions("fill opacity", 1)
          .others().setOptions("fill opacity", .25)
      })
    },
    initMap: function() {
      map = new gmap({
        mapId: `${id}_map`,
        mapOptions: {
          scrollwheel : false,
          zoom        : 5
        }
      })

      map.add("polygons", data.polygons.map(function(obj) {
        return {
          id: obj.id,
          paths: obj.delimitedCoords
        }
      }))
    },
    zoom: function() {
      map.polygons().reset().off()
      map.polygons([1,2,3,4,5]).zoom().others().hide()
    }
  }

  return Examples
})(Examples || (Examples = {}))
