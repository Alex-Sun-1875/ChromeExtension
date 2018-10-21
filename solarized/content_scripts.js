// ==UserScript==
// @name          Underscore JS and Backbone JS - Solarized Dark
// @namespace     http://userstyles.org
// @description	  A "solarized dark" theme for http://underscorejs.org and http://backbonejs.org
// @author        incrediblygood
// @homepage      https://userstyles.org/styles/84919
// @include       http://underscorejs.org/*
// @include       https://underscorejs.org/*
// @include       http://*.underscorejs.org/*
// @include       https://*.underscorejs.org/*
// @include       http://backbonejs.org/*
// @include       https://backbonejs.org/*
// @include       http://*.backbonejs.org/*
// @include       https://*.backbonejs.org/*
// @run-at        document-start
// @version       0.20131113094258
// ==/UserScript==
(function() {var css = [
	"*{",
	"		color:#93a1a1 !important;",
	"		background:#002b36 !important;",
	"	}",
	"	",
	"	a{",
	"		color:#2aa198 !important;",
	"	}",
	"	",
	"	code, pre, tt{",
	"		color:#b58900 !important;",
	"		background:#073642 !important;",
	"	}",
	"	",
	"	tt{",
	"		border:1px solid #93a1a1 !important;",
	"	}",
	"	",
	"	pre{",
	"		border-left:5px solid #93a1a1 !important;",
	"	}",
	"	",
	"	a:hover{",
	"		background:#073642 !important;",
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
