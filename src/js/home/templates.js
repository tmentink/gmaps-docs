// ------------------------------------------------------------------------
// gmaps-docs: home/templates.js
// ------------------------------------------------------------------------

/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable quotes */

var Temp = ((Temp) => {
  "use strict"


  // ------------------------------------------------------------------------
  // HTML Templates
  // ------------------------------------------------------------------------

  Temp.button = function(parms) {
    const example = parms.example
    const method  = parms.method

    return `<a data-example="${example}" data-method="${method}" class="ui black pointing below label">Run Code</a>`
  }

  Temp.codeSegment = function(code) {
    let HTML  = '<div class="ui code segment mt-0">'
        HTML +=   `<pre class="m-0 p-0"><code>${code}</code></pre>`
        HTML += '</div>'

    return HTML
  }

  Temp.divider = function() {
    return '<div class="ui divider my-4 mx-2 mx-md-5"></div>'
  }

  Temp.example = function(parms) {
    const content = parms.content
    const header  = parms.header
    const id      = parms.id

    let HTML  = `<div id="${id}" class="two column row">`
        HTML +=   '<div class="column">'
        HTML +=     `<h2 class="ui header">${header}</h2>`
        HTML +=     `${content}`
        HTML +=   '</div>'
        HTML +=   '<div class="column">'
        HTML +=     `<div id="${id}_map" class="gmap"></div>`
        HTML +=   '</div>'
        HTML += '</div>'

    return HTML
  }


  return Temp
})(Temp || (Temp = {}))
