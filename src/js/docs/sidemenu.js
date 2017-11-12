// ------------------------------------------------------------------------
// gmaps-docs: docs/sidemenu.js
// ------------------------------------------------------------------------

var Sidemenu = ((SM) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const Selector = {
    SIDE_MENU     : "#sidemenu",
    TOGGLE_BUTTON : "#btnSidemenu"
  }


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  SM.getOuterHeight = function() {
    return $cache(Selector.SIDE_MENU).outerHeight()
  }


  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  SM.init = function() {
    $cache(Selector.TOGGLE_BUTTON).on("click", function() {
      MainContent.togglePushed()
    })
  }


  return SM
})(Sidemenu || (Sidemenu = {}))
