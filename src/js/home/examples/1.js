// ------------------------------------------------------------------------
// gmaps-docs: home/examples/1.js
// ------------------------------------------------------------------------

/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable quotes */

var Example = ((Example) => {
  "use strict"

  // ------------------------------------------------------------------------
  // Constants
  // ------------------------------------------------------------------------

  const namespace = "1"
  const header    = "Simplified API"
  const id        = `example${namespace}`
  let map         = null


  // ------------------------------------------------------------------------
  // HTML
  // ------------------------------------------------------------------------

  let add  = `${Code.purple("var")} locations = [\n`
      add += `  { name: ${Code.text("Bondi Beach")},    coords: { lat: -33.89, lng: 151.27 } },\n`
      add += `  { name: ${Code.text("Coogee Beach")},   coords: { lat: -33.92, lng: 151.25 } },\n`
      add += `  { name: ${Code.text("Cronulla Beach")}, coords: { lat: -34.02, lng: 151.15 } },\n`
      add += `  { name: ${Code.text("Manly Beach")},    coords: { lat: -33.80, lng: 151.28 } },\n`
      add += `  { name: ${Code.text("Maroubra Beach")}, coords: { lat: -33.95, lng: 151.25 } }\n`
      add += "];\n\n"

      add += `myMap.${Code.method("add")}(${Code.text("marker")}, {\n`
      add += `  position: { lat: -33.89, lng: 151.27 }\n`
      add += "});\n\n"

      add += `myMap.${Code.method("add")}(${Code.text("markers")}, locations.${Code.method("map")}(${Code.purple("function")}(obj) {\n`
      add += `  ${Code.purple("return")} { position: obj.coords }\n`
      add += "}));"


  let remove = `myMap.${Code.method("remove")}(${Code.text("markers")});`


  let content  = '<p>With gmaps, you can add one or several components with a single command. Removing components is even easier!</p>'
      content += Temp.button({
        example : namespace,
        method  : "add"
      })
      content += Temp.codeSegment(add)

      content += Temp.button({
        example : namespace,
        method  : "remove"
      })
      content += Temp.codeSegment(remove)


  // ------------------------------------------------------------------------
  // Namespace
  // ------------------------------------------------------------------------

  Example[namespace] = {
    add: function() {
      map.add("markers", data.locations.map(function(obj) {
        return {
          position: obj.coords
        }
      }))
    },
    buildHTML: function() {
      return Temp.example({
        content : content,
        header  : header,
        id      : id
      })
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


  return Example
})(Example || (Example = {}))
