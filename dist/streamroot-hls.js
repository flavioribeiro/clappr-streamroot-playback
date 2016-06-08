(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["Clappr"], factory);
	else if(typeof exports === 'object')
		exports["StreamrootHlsjs"] = factory(require("Clappr"));
	else
		root["StreamrootHlsjs"] = factory(root["Clappr"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if('value' in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();var _get=function get(_x,_x2,_x3){var _again=true;_function: while(_again) {var object=_x,property=_x2,receiver=_x3;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;}}else if('value' in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}function _inherits(subClass,superClass){if(typeof superClass !== 'function' && superClass !== null){throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}var _clappr=__webpack_require__(1);var StreamrootHlsjs=(function(_HLS){_inherits(StreamrootHlsjs,_HLS);function StreamrootHlsjs(){_classCallCheck(this,StreamrootHlsjs);_get(Object.getPrototypeOf(StreamrootHlsjs.prototype),'constructor',this).apply(this,arguments);}_createClass(StreamrootHlsjs,[{key:'_setupHls',value:function _setupHls(){var _this=this;this._hls = new window.Hls(this._options.hlsjsConfig || {},this._options.p2pConfig);this._hls.on(Hls.Events.MEDIA_ATTACHED,function(){_this._hls.loadSource(_this._options.src);});this._hls.on(Hls.Events.LEVEL_LOADED,function(evt,data){return _this._updatePlaybackType(evt,data);});this._hls.on(Hls.Events.LEVEL_UPDATED,function(evt,data){return _this._onLevelUpdated(evt,data);});this._hls.on(Hls.Events.LEVEL_SWITCH,function(evt,data){return _this._onLevelSwitch(evt,data);});this._hls.on(Hls.Events.FRAG_LOADED,function(evt,data){return _this._onFragmentLoaded(evt,data);});this._hls.on(Hls.Events.ERROR,function(evt,data){return _this._onHLSJSError(evt,data);});this._hls.attachMedia(this.el);}},{key:'name',get:function get(){return 'streamroot_playback';}}]);return StreamrootHlsjs;})(_clappr.HLS);exports['default'] = StreamrootHlsjs;StreamrootHlsjs.canPlay = _clappr.HLS.canPlay;module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;