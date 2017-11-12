// ------------------------------------------------------------------------
// gmaps-docs: util/jss.js
// ------------------------------------------------------------------------

var JSS = ((JSS) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  JSS.set = function(parms) {
    const sheet = _getStyleSheet(parms.styleSheet)
    const rules = _getMatchingSelectors(sheet, parms.selector)

    if (rules.length === 0) {
      rules.push(_addRule(sheet, parms.selector))
    }

    for (var i = 0, i_end = rules.length; i < i_end; i++) {
      _setStyleProperties(rules[i], parms.style)
    }
  }


  // ----------------------------------------------------------------------
  // Private Methods
  // ----------------------------------------------------------------------

  function _addRule(sheet, selector) {
    const rules = _getRules(sheet)
    const index = rules.length

    if (sheet.insertRule) {
      sheet.insertRule(`${selector} { }`, index)
    }
    else {
      sheet.addRule(selector, null, index)
    }

    return {
      sheet: sheet,
      index: index,
      style: rules[index].style
    }
  }

  function _getMatchingSelectors(sheet, selector) {
    const retval = []
    const rules = _getRules(sheet)

    for (var i = 0, i_end = rules.length; i < i_end; i++) {
      let selectorText = rules[i].selectorText

      if (selectorText && selector === selectorText) {
        retval.push({
          sheet: sheet,
          index: i,
          style: rules[i].style
        })
      }
    }

    return retval
  }

  function _getRules(sheet) {
    return sheet.cssRules || sheet.rules || []
  }

  function _getStyleSheet(fileName) {
    const sheets = document.styleSheets
    for (var i = 0, i_end = sheets.length; i < i_end; i++) {
      let href = sheets[i].href
      if (href && href.indexOf(fileName) !== -1) {
        return sheets[i]
      }
    }

    return undefined
  }

  function _setStyleProperties(rule, properties) {
    for (var key in properties) {
      let value = properties[key]
      let importantIndex = value.indexOf(" !important")

      if (importantIndex > 0) {
        rule.style.setProperty(key, value.substr(0, importantIndex), "important")
      }
      else {
        rule.style.setProperty(key, value)
      }
    }
  }


  return JSS
})(JSS || (JSS = {}))
