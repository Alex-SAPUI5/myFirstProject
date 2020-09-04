//@ui5-bundle sap/ui/demo/walkthrough/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"sap/ui/demo/walkthrough/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/model/json/JSONModel"],function(e,t){"use strict";return e.extend("sap.ui.demo.walkthrough.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);var n={recipient:{name:"World"}};var i=new t(n);this.setModel(i)}})});
},
	"sap/ui/demo/walkthrough/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],function(e,t,o,r){"use strict";return e.extend("sap.ui.demo.walkthrough.controller.App",{onShowHello:function(){var e=this.getView().getModel("i18n").getResourceBundle();var o=this.getView().getModel().getProperty("/recipient/name");var r=e.getText("helloMsg",[o]);t.show(r)}})});
},
	"sap/ui/demo/walkthrough/i18n/i18n.properties":'# App Descriptor\r\nappTitle=Hello World\r\nappDescription=A simple walkthrough app that explains the most important concepts of SAPUI5\r\n\r\n# Hello Panel\r\nshowHelloButtonText=Say Hello\r\nhelloMsg=Hello {0}',
	"sap/ui/demo/walkthrough/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"sap.ui.demo.walkthrough","type":"application","i18n":"i18n/i18n.properties","title":"{{appTitle}}","description":"{{appDescription}}","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"sap.ui.demo.walkthrough.view.App","type":"XML","async":true,"id":"app"},"dependencies":{"minUI5Version":"1.60","libs":{"sap.m":{}}},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"sap.ui.demo.walkthrough.i18n.i18n","supportedLocales":[""],"fallbackLocale":""}}}}}',
	"sap/ui/demo/walkthrough/view/App.view.xml":'<mvc:View xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc" controllerName="sap.ui.demo.walkthrough.controller.App"><Button text="{i18n>showHelloButtonText}" press=".onShowHello"/><Input value="{/recipient/name}" description="Hello {/recipient/name}" valueLiveUpdate="true" width="60%"/></mvc:View>'
}});
