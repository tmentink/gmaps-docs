// ------------------------------------------------------------------------
// gmaps-docs: docs/mainContent.js
// ------------------------------------------------------------------------

var MainContent = ((MC) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const ClassName = {
    PUSHED : "mainContent--pushed"
  }

  const Selector = {
    CODE_SEGMENT : ".code.segment",
    COPY_BUTTON  : ".label",
    MAIN_CONTENT : "#mainContent"
  }


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  MC.removePushed = function() {
    $cache(Selector.MAIN_CONTENT).removeClass(ClassName.PUSHED)
  }

  MC.setPushedStyles = function() {
    JSS.set({
      styleSheet: "docs.css",
      selector:   `.${ClassName.PUSHED}`,
      style: {
        top: Header.getOuterHeight() + Sidemenu.getOuterHeight() + "px"
      }
    })
  }

  MC.togglePushed = function() {
    return $cache(Selector.MAIN_CONTENT).toggleClass(ClassName.PUSHED)
  }


  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  MC.init = function() {
    MC.setPushedStyles()

    BP.min_lg.addListener(function(e) {
      if (e.matches) {
        MC.removePushed()
      }
    })

    $cache(Selector.CODE_SEGMENT).on("click", Selector.COPY_BUTTON, function() {
      window.getSelection().selectAllChildren($(this).next("pre")[0])
      document.execCommand("copy")
    })
  }


  return MainContent
})(MainContent || (MainContent = {}))
