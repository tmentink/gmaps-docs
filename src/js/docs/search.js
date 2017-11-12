// ------------------------------------------------------------------------
// gmaps-docs: docs/search.js
// ------------------------------------------------------------------------

var Search = ((Search) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const BaseUrls = {
    CIRCLE             : "/docs/components/circle",
    COMPONENT_OVERVIEW : "/docs/components/overview",
    GETTING_STARTED    : "/docs/getting-started",
    LABEL              : "/docs/components/label",
    MAP                : "/docs/map",
    MARKER             : "/docs/components/marker",
    POLYGON            : "/docs/components/polygon",
    POLYLINE           : "/docs/components/polyline",
    RECTANGLE          : "/docs/components/rectangle"
  }

  const Data = [
    {
      title       : "Circle",
      description : "Circle events",
      url         : `${BaseUrls.CIRCLE}#Events`
    },
    {
      title       : "Circle",
      description : "Circle methods",
      url         : `${BaseUrls.CIRCLE}#Methods`
    },
    {
      title       : "Circle",
      description : "Circle settings",
      url         : `${BaseUrls.CIRCLE}#Settings`
    },

    // --------------------------------------------------------------------

    {
      title       : "Getting Started",
      description : "Download",
      url         : `${BaseUrls.GETTING_STARTED}#Download`
    },
    {
      title       : "Getting Started",
      description : "Starter template",
      url         : `${BaseUrls.GETTING_STARTED}#StarterTemplate`
    },

    // --------------------------------------------------------------------

    {
      title       : "Label",
      description : "Label events",
      url         : `${BaseUrls.LABEL}#Events`
    },
    {
      title       : "Label",
      description : "Label methods",
      url         : `${BaseUrls.LABEL}#Methods`
    },
    {
      title       : "Label",
      description : "Label settings",
      url         : `${BaseUrls.LABEL}#Settings`
    },

    // --------------------------------------------------------------------

    {
      title       : "Map",
      description : "Map events",
      url         : `${BaseUrls.MAP}#Events`
    },
    {
      title       : "Map",
      description : "Map methods",
      url         : `${BaseUrls.MAP}#Methods`
    },
    {
      title       : "Map",
      description : "Map settings",
      url         : `${BaseUrls.MAP}#Settings`
    },

    // --------------------------------------------------------------------

    {
      title       : "Marker",
      description : "Marker events",
      url         : `${BaseUrls.MARKER}#Events`
    },
    {
      title       : "Marker",
      description : "Marker methods",
      url         : `${BaseUrls.MARKER}#Methods`
    },
    {
      title       : "Marker",
      description : "Marker settings",
      url         : `${BaseUrls.MARKER}#Settings`
    },

    // --------------------------------------------------------------------

    {
      title       : "Overview",
      description : "Integrated id system",
      url         : `${BaseUrls.COMPONENT_OVERVIEW}#IdSystem`
    },
    {
      title       : "Overview",
      description : "Searching",
      url         : `${BaseUrls.COMPONENT_OVERVIEW}#Searching`
    },
    {
      title       : "Overview",
      description : "Calling methods",
      url         : `${BaseUrls.COMPONENT_OVERVIEW}#CallingMethods`
    },
    {
      title       : "Overview",
      description : "Base component",
      url         : `${BaseUrls.COMPONENT_OVERVIEW}#BaseComponent`
    },
    {
      title       : "Overview",
      description : "Base component array",
      url         : `${BaseUrls.COMPONENT_OVERVIEW}#BaseComponentArray`
    },

    // --------------------------------------------------------------------

    {
      title       : "Polygon",
      description : "Polygon events",
      url         : `${BaseUrls.POLYGON}#Events`
    },
    {
      title       : "Polygon",
      description : "Polygon methods",
      url         : `${BaseUrls.POLYGON}#Methods`
    },
    {
      title       : "Polygon",
      description : "Polygon settings",
      url         : `${BaseUrls.POLYGON}#Settings`
    },

    // --------------------------------------------------------------------

    {
      title       : "Polyline",
      description : "Polyline events",
      url         : `${BaseUrls.POLYLINE}#Events`
    },
    {
      title       : "Polyline",
      description : "Polyline methods",
      url         : `${BaseUrls.POLYLINE}#Methods`
    },
    {
      title       : "Polyline",
      description : "Polyline settings",
      url         : `${BaseUrls.POLYLINE}#Settings`
    },

    // --------------------------------------------------------------------

    {
      title       : "Rectangle",
      description : "Rectangle events",
      url         : `${BaseUrls.RECTANGLE}#Events`
    },
    {
      title       : "Rectangle",
      description : "Rectangle methods",
      url         : `${BaseUrls.RECTANGLE}#Methods`
    },
    {
      title       : "Rectangle",
      description : "Rectangle settings",
      url         : `${BaseUrls.RECTANGLE}#Settings`
    },
  ]

  const Selector = {
    SEARCH_WRAPPER : "#txtSearch_wrapper"
  }


  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  Search.init = function() {
    $cache(Selector.SEARCH_WRAPPER).search({
      source: Data,
      searchFields: [
        "title",
        "description",
        "keywords"
      ],
      searchFullText: true,
      maxResults: 5
    })
  }


  return Search
})(Search || (Search = {}))
