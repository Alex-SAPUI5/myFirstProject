sap.ui.define(["sap/ui/core/UIComponent","sap/ui/model/json/JSONModel","./controller/HelloDialog"],function(o,e,t){"use strict";return o.extend("sap.ui.demo.walkthrough.Component",{metadata:{manifest:"json"},init:function(){o.prototype.init.apply(this,arguments);var i={recipient:{name:"World"}};var l=new e(i);this.setModel(l);this._helloDialog=new t(this.getRootControl())},exit:function(){this._helloDialog.destroy();delete this._helloDialog},openHelloDialog:function(){this._helloDialog.open()}})});