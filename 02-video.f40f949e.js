!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var l=r("gK76q"),i=r("dCfNN"),d=document.querySelector("iframe"),c=new(0,l.default)(d);c.on("play",(function(){console.log("played the video!")})),c.getVideoTitle().then((function(e){console.log("title:",e)}));c.on("timeupdate",e(i)((function(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e.seconds)),console.log("videoplayer-current-time:",e.seconds,"seconds"),console.log(e.seconds)}),1e3));var u=localStorage.getItem("videoplayer-current-time");console.log(u),c.setCurrentTime(u||0)}();
//# sourceMappingURL=02-video.f40f949e.js.map
