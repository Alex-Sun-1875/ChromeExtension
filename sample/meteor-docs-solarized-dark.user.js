// ==UserScript==
// @name          Meteor Docs - Solarized Dark
// @namespace     http://userstyles.org
// @description	  A "solarized dark" theme for the Meteor Docs site: http://docs.meteor.com
// @author        incrediblygood
// @homepage      https://userstyles.org/styles/84829
// @include       http://docs.meteor.com/*
// @include       https://docs.meteor.com/*
// @include       http://*.docs.meteor.com/*
// @include       https://*.docs.meteor.com/*
// @run-at        document-start
// @version       0.20140501161737
// ==/UserScript==
(function() {var css = [
	"* {",
	"		color:#93a1a1 !important;",
	"	}",
	"",
	"	body, #nav {",
	"		background:#002b36;",
	"	}",
	"",
	"	a {",
	"		color:#2aa198 !important;",
	"	}",
	"",
	"	code, pre, .note {",
	"		color:#b58900 !important;",
	"		background:#073642 !important;",
	"	}",
	"",
	"	a:hover {",
	"		background:#073642 !important;",
	"	}",
	"",
	"	dl.involved dt span, #main h2 span {",
	"		background:#b58900;",
	"		color:#002b36 !important;",
	"	}",
	"",
	"	.warning p {",
	"		color:#dc322f !important;",
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
