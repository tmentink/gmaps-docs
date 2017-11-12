// ------------------------------------------------------------------------
// gmaps-docs: code.js
// ------------------------------------------------------------------------

var Code = ((Code) => {
  "use strict"


  // ------------------------------------------------------------------------
  // Code Templates
  // ------------------------------------------------------------------------

  Code.method = function(str) {
    return `<span class="text-blue text-darken-2">${str}</span>`
  }

  Code.purple = function(str) {
    return `<span class="text-purple text-darken-2">${str}</span>`
  }

  Code.red = function(str) {
    return `<span class="text-red text-darken-2">${str}</span>`
  }

  Code.text = function(str) {
    return `<span class="text-teal text-darken-2">"${str}"</span>`
  }


  return Code
})(Code || (Code = {}))
