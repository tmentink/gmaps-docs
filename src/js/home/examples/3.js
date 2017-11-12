// ------------------------------------------------------------------------
// gmaps-docs: home/examples/3.js
// ------------------------------------------------------------------------

/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable quotes */

var Example = ((Example) => {
  "use strict"

  // ------------------------------------------------------------------------
  // Constants
  // ------------------------------------------------------------------------

  const namespace = "3"
  const header    = "Method Chaining"
  const id        = `example${namespace}`
  let map         = null


  // ------------------------------------------------------------------------
  // HTML
  // ------------------------------------------------------------------------

  let hover  = `myMap.${Code.method("polygons")}().${Code.method("on")}(${Code.text("mouse over")}, ${Code.purple("function")}() {\n`
      hover += `  myMap.${Code.method("polygons")}(${Code.red("this")}.gmaps.id)\n`
      hover += `    .${Code.method("setOptions")}(${Code.text("fill opacity")}, 1)\n`
      hover += `    .${Code.method("others")}().${Code.method("setOptions")}(${Code.text("fill opacity")}, .25)\n`
      hover += "}));"


  let zoom  = `myMap.${Code.method("polygons")}([1,2,3,4,5]).${Code.method("zoom")}()\n`
      zoom += `  .${Code.method("others")}().${Code.method("hide")}();`


  let content  = "<p>Gmaps enables certain methods to be chained together which can improve your code's readability.</p>"
      content += "<p>Combine this with the use of the <b>.others()</b> method to easily create some powerful effects.</p>"
      content += Temp.button({
        example : namespace,
        method  : "zoom"
      })
      content += Temp.codeSegment(zoom)

      content += Temp.button({
        example : namespace,
        method  : "hover"
      })
      content += Temp.codeSegment(hover)


  // ------------------------------------------------------------------------
  // Namespace
  // ------------------------------------------------------------------------

  Example[namespace] = {
    buildHTML: function() {
      return Temp.example({
        content : content,
        header  : header,
        id      : id
      })
    },
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

  return Example
})(Example || (Example = {}))
