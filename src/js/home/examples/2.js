// ------------------------------------------------------------------------
// gmaps-docs: home/examples/2.js
// ------------------------------------------------------------------------

/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable quotes */

var Example = ((Example) => {
  "use strict"

  // ------------------------------------------------------------------------
  // Constants
  // ------------------------------------------------------------------------

  const namespace = "2"
  const header    = "Integrated Id System"
  const id        = `example${namespace}`
  let map         = null


  // ------------------------------------------------------------------------
  // HTML
  // ------------------------------------------------------------------------

  let add  = `myMap.${Code.method("add")}(${Code.text("markers")}, locations.${Code.method("map")}(${Code.purple("function")}(obj) {\n`
      add += `  ${Code.purple("return")} {\n`
      add += "    id: obj.name,\n"
      add += "    position: obj.coords\n"
      add += "  }\n"
      add += "}));"


  let all = `myMap.${Code.method("markers")}().${Code.method("toggle")}();`


  let ids  = `myMap.${Code.method("markers")}(${Code.text("Bondi Beach")})\n`
      ids += `  .${Code.method("setOptions")}(${Code.text("animation")}, 1);\n\n`

      ids += `myMap.${Code.method("markers")}([${Code.text("Coogee Beach")}, ${Code.text("Manly Beach")}])\n`
      ids += `  .${Code.method("toggle")}();`


  let content  = "<p>Every component is assigned an Id when it is added to the map. You can either manually assign these or let gmaps autogenerate them.</p>"
      content += Temp.codeSegment(add)

      content += "<p>This enables methods to be called on all components at once, or you can target specific ids.</p>"
      content += Temp.button({
        example : namespace,
        method  : "all"
      })
      content += Temp.codeSegment(all)

      content += Temp.button({
        example : namespace,
        method  : "ids"
      })
      content += Temp.codeSegment(ids)


  // ------------------------------------------------------------------------
  // Namespace
  // ------------------------------------------------------------------------

  Example[namespace] = {
    all: function() {
      map.markers().toggle()
    },
    buildHTML: function() {
      return Temp.example({
        content : content,
        header  : header,
        id      : id
      })
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


  return Example
})(Example || (Example = {}))
