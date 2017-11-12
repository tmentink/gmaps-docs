// ------------------------------------------------------------------------
// gmaps-docs: docs/header.js
// ------------------------------------------------------------------------

var Header = ((Header) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const Selector = {
    HEADER : "#header"
  }


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  Header.getOuterHeight = function() {
    return $cache(Selector.HEADER).outerHeight()
  }


  return Header
})(Header || (Header = {}))
