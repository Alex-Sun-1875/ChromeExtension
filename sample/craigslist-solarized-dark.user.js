// ==UserScript==
// @name          Craigslist - Solarized Dark
// @namespace     http://userstyles.org
// @description	  A solarized dark theme user-style for http://craigslist.org
// @author        incrediblygood
// @homepage      https://userstyles.org/styles/97103
// @include       http://craigslist.org/*
// @include       https://craigslist.org/*
// @include       http://*.craigslist.org/*
// @include       https://*.craigslist.org/*
// @run-at        document-start
// @version       0.20140828211244
// ==/UserScript==
(function() {var css = [
	"* {",
	"		color: #93a1a1 !important;",
	"	}",
	"",
	"	body, div, table, tr, td, ul, .ban, article, header, footer, blockquote, form, fieldset, a {",
	"		background-color: #002b36 !important;",
	"	}",
	"",
	"	a, a span, h1, h2, h3, h4, h5 {",
	"		color: #2aa198 !important;",
	"	}",
	"",
	"	h1,h2,h3,h4,h5 {",
	"		border-bottom: 1px solid #073642 !important;",
	"		border-top: 1px solid #073642 !important;",
	"	}",
	"",
	"	a:hover {",
	"		background-color: #073642 !important;",
	"	}",
	"",
	"	a:visited, a:visited span {",
	"		color: #b58900 !important;",
	"	}",
	"",
	"	.l2 a {",
	"		color: #93a1a1 !important;",
	"	}",
	"",
	"	li a {",
	"		border-bottom: 1px solid #073642 !important;",
	"	}",
	"",
	"	.leaflet-control a {",
	"		background-color: #ddd !important;",
	"	}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
