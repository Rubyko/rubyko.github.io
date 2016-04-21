$wnd.gwtmaterialdemo.runAsyncCallback38("function ThemesPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(715, 53, $intern_55, ThemesPresenter);\n_.onReveal = function onReveal_58(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Theming', 'Learn how to easily start using GWT Material Design in your app.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_style_themes_ThemesPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.style.themes', 'ThemesPresenter', 715);\nfunction ThemesView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_29(new ThemesView_BinderImpl$Widgets));\n}\n\ndefineClass(986, 56, $intern_56, ThemesView);\nvar Lgwt_material_design_demo_client_application_style_themes_ThemesView_2_classLit = createForClass('gwt.material.design.demo.client.application.style.themes', 'ThemesView', 986);\nfunction ThemesView_BinderImpl(){\n}\n\ndefineClass(1341, 1, {}, ThemesView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_style_themes_ThemesView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.style.themes', 'ThemesView_BinderImpl', 1341);\nfunction $build_f_HTMLPanel1_29(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialLink3, f_MaterialTitle4, f_PrettyPre5, f_MaterialTitle6, f_PrettyPre7, sb, sb_0;\n  f_HTMLPanel1 = new HTMLPanel($html3_1(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setText_9(f_MaterialTitle2.paragraph, 'We created another project for gwtmaterial themes .See below the link of the repo.') , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Theming') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialLink3 = new MaterialLink , $setIconType(f_MaterialLink3, ($clinit_IconType() , LINK_2)) , $setIconPosition(f_MaterialLink3, ($clinit_IconPosition() , LEFT_6)) , f_MaterialLink3.span_1.setText('Gwt Material Themes Github Repo') , $add_12(f_MaterialLink3, f_MaterialLink3.span_1) , $setAttribute(f_MaterialLink3.element, 'href', 'https://github.com/GwtMaterialDesign/gwt-material-themes') , $setTextColor_0((!f_MaterialLink3.colorsMixin_0 && (f_MaterialLink3.colorsMixin_0 = new ColorsMixin(f_MaterialLink3)) , f_MaterialLink3.colorsMixin_0), 'blue') , $setAttribute(f_MaterialLink3.element, 'target', '_blank') , f_MaterialLink3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle4 = new MaterialTitle , $setText_9(f_MaterialTitle4.paragraph, 'First: Make sure you are using GwtMaterialDesignBasic module (This will not load the materialize.css default file allowing you to customize your design.)') , f_MaterialTitle4), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre5 = new PrettyPre , $setHTML_0(f_PrettyPre5, (sb = new StringBuilder , sb.string += '&lt;inherits name=\"gwt.material.design.GwtMaterialDesignBasic\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre5.element, 'lang-xml', true) , setStyleName(f_PrettyPre5.element, 'z-depth-1', true) , f_PrettyPre5), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle6 = new MaterialTitle , $setText_9(f_MaterialTitle6.paragraph, 'Second: Checkout the theme project and add it to your build path. And define it on your app.gwt.xml file.') , f_MaterialTitle6), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre7 = new PrettyPre , $setHTML_0(f_PrettyPre7, (sb_0 = new StringBuilder , sb_0.string += '&lt;inherits name=\"gwt.material.design.themes.GwtMaterialThemeBlue\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre7.element, 'lang-xml', true) , setStyleName(f_PrettyPre7.element, 'z-depth-1', true) , f_PrettyPre7), $get_0(this$static.domId5Element));\n  return f_HTMLPanel1;\n}\n\nfunction ThemesView_BinderImpl$Widgets(){\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n}\n\ndefineClass(1342, 1, {}, ThemesView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_style_themes_ThemesView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.style.themes', 'ThemesView_BinderImpl/Widgets', 1342);\nfunction $html3_1(arg0, arg1, arg2, arg3, arg4, arg5){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesPresenter$_annotation$$none$$) {\n    result = new ThemesPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesView$_annotation$$none$$) {\n    result = new ThemesView(new ThemesView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesView$_annotation$$none$$;\n}\n\ndefineClass(647, 1, $intern_80);\n_.onSuccess_0 = function onSuccess_37(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(38);\n\n//# sourceURL=gwtmaterialdemo-38.js\n")
