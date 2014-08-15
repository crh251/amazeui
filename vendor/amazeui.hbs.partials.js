(function(undefined){
  var registerAMUIPartials = function(hbs) {
    hbs.registerPartial("accordion", "{{#this}}\n  <section data-am-widget=\"accordion\" class=\"am-accordion {{#if theme}}am-accordion-{{theme}}{{else}}am-accordion-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"{{#if id}} id=\"{{id}}\"{{/if}} data-am-accordion='{ {{#if options.multiple}}\"multiple\": true{{/if}} }'>\n    {{#each content}}\n      <dl class=\"am-accordion-item{{#if active}} am-active{{/if}}\">\n        <dt class=\"am-accordion-title\">\n          {{{title}}}\n        </dt>\n        <dd class=\"am-accordion-content am-collapse {{#if active}}am-in{{/if}}\">\n          {{{content}}}\n        </dd>\n      </dl>\n    {{/each}}\n  </section>\n{{/this}}"); 

    hbs.registerPartial("divider", "{{#this}}\n  <hr data-am-widget=\"divider\" style=\"{{#if options.width}}width:{{{options.width}}};{{/if}}{{#if options.height}}height:{{{options.height}}};{{/if}}\" class=\"am-divider {{#if theme}}am-divider-{{theme}}{{else}}am-divider-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"{{#if id}} id=\"{{id}}\"{{/if}} />\n{{/this}}\n"); 

    hbs.registerPartial("figure", "{{#this}}\n  <figure data-am-widget=\"figure\" class=\"am am-figure {{#if theme}}am-figure-{{theme}}{{else}}am-figure-default{{/if}}{{#if options.zoomble}} am-figure-zoomable{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"{{#if id}}\n      id=\"{{id}}\"{{/if}}>\n    {{#if options.figcaptionPosition}}\n      {{#ifCond options.figcaptionPosition '==' 'top'}}\n        {{#if content.figcaption}}\n          <figcaption class=\"am-figure-capition-top\">\n            {{content.figcaption}}\n          </figcaption>\n        {{/if}}\n      {{/ifCond}}\n    {{/if}}\n\n    {{#if content.img}}\n      <img src=\"{{content.img}}\" alt=\"{{#if content.imgAlt}}{{content.imgAlt}}{{else}}{{content.figcaption}}{{/if}}\"/>\n    {{/if}}\n    {{#if options.figcaptionPosition}}\n      {{#ifCond options.figcaptionPosition '==' 'bottom'}}\n        {{#if content.figcaption}}\n          <figcaption class=\"am-figure-capition-btm\">\n            {{content.figcaption}}\n          </figcaption>\n        {{/if}}\n      {{/ifCond}}\n    {{else}}\n      {{#if content.figcaption}}\n        <figcaption class=\"am-figure-capition-btm\">\n          {{content.figcaption}}\n        </figcaption>\n      {{/if}}\n    {{/if}}\n  </figure>\n{{/this}}"); 

    hbs.registerPartial("footer", "{{#this}}\n  <footer data-am-widget=\"footer\" class=\"am-footer {{#if theme}}am-footer-{{theme}}{{else}}am-footer-default {{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" {{#if id}}id=\"{{id}}\"{{/if}}>\n    <span class=\"{{#if options.modal}}am-footer-ysp{{/if}}\" data-rel=\"mobile\" data-am-modal=\"{target: '#am-switch-mode'}\">\n      {{#unless content.switchName}}\n        {{#ifCond content.lang '==' 'en'}}\n          Mobile\n        {{else}}\n          云适配版\n        {{/ifCond}} \n      {{else}}\n        {{content.switchName}}\n      {{/unless}}\n    </span>\n    <span class=\"am-footer-divider\"> | </span>\n    <a id=\"godesktop\" data-rel=\"desktop\" class=\"am-footer-desktop\" href=\"#\">\n      {{#ifCond content.lang '==' 'en'}}\n        Desktop\n      {{else}}\n        电脑版\n      {{/ifCond}}  \n    </a>\n    <div class=\"am-footer-text {{#if options.textPosition}}am-footer-text-left{{/if}}\">\n\n      {{#if options.techSupportCo}}\n        {{#ifCond content.lang '==' 'en'}}\n          <p>Supported by {{#if options.techSupportSite}}<a href=\"{{options.techSupportSite}}\" title=\"{{options.techSupportCo}}\" target=\"_blank\">{{{options.techSupportCo}}}</a>{{else}}{{{options.techSupportCo}}}{{/if}}.</p>\n        {{else}}\n          <p>由{{#if options.techSupportSite}}<a href=\"{{options.techSupportSite}}\" title=\"{{options.techSupportCo}}\" target=\"_blank\">{{{options.techSupportCo}}}</a>{{else}}{{{options.techSupportCo}}}{{/if}}提供技术支持</p>\n        {{/ifCond}}\n\n      {{/if}}\n\n      {{#if content.poweredBy }}\n        {{ content.poweredBy }}\n      {{else}}\n        {{#ifCond content.lang '==' 'en'}}\n          <p>Powered by AllMobilize.</p>\n        {{else}}\n          <p>云适配驱动</p>\n        {{/ifCond}}\n      {{/if}}\n      {{#each content.companyInfo }}     \n          <p>{{{ detail }}}</p>\n      {{/each}}\n    </div>\n  </footer>\n\n  <div id=\"am-switch-mode\" class=\"am-modal am-modal-no-btn am-switch-mode-m {{#if theme}}am-switch-mode-m-{{theme}}{{/if}}\">\n    <div class=\"am-modal-dialog\">\n      <div class=\"am-modal-hd am-modal-footer-hd\">\n        <a href=\"javascript:void(0)\" data-dismiss=\"modal\" class=\"am-close am-close-spin\" data-am-modal-close>&times;</a>\n      </div>\n      <div class=\"am-modal-bd\">\n        {{#ifCond content.lang '==' 'en'}}\n          You are visiting \n        {{else}}\n          您正在浏览的是\n        {{/ifCond}}\n\n        <span class=\"am-switch-mode-owner\">\n          {{#if content.owner}}\n            {{content.owner}}\n          {{else}}\n            云适配\n          {{/if}}\n        </span>\n\n        <span class=\"am-switch-mode-slogan\">\n          {{#if content.slogan}}\n            {{{content.slogan}}}\n          {{else}}\n            {{#ifCond content.lang '==' 'en'}}\n              mobilized version for your device. \n            {{else}}\n              为您当前手机订制的移动网站。\n            {{/ifCond}}\n          {{/if}}\n        </span>\n      </div>\n    </div>\n  </div>\n{{/this}}\n"); 

    hbs.registerPartial("gallery", "{{#this}}\n  <ul data-am-widget=\"gallery\" class=\"am-gallery{{#if options.cols}} sm-block-grid-{{options.cols}}{{else}} sm-block-grid-2{{/if}}\n  md-block-grid-3 lg-block-grid-4 {{#if\n  theme}}am-gallery-{{theme}}{{else}}am-gallery-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"{{#if options.gallery}} data-am-gallery{{/if}} {{#if id}}id=\"{{id}}\"{{/if}}>\n    {{#each content}}\n      <li>\n        <div class=\"am-gallery-item\">\n          {{#if link}}\n            <a href=\"{{link}}\">\n              {{#if img}}<img src=\"{{img}}\" alt=\"{{title}}\"/>{{/if}}\n              {{#if title}}\n                <h3 class=\"am-gallery-title\">{{{title}}}</h3>\n              {{/if}}\n              {{#if desc}}\n                <div class=\"am-gallery-desc\">{{{desc}}}</div>\n              {{/if}}\n            </a>\n          {{else}}\n            {{#if img}}<img src=\"{{img}}\" alt=\"{{title}}\"/>{{/if}}\n            {{#if title}}\n              <h3 class=\"am-gallery-title\">{{{title}}}</h3>\n            {{/if}}\n            {{#if desc}}\n              <div class=\"am-gallery-desc\">{{{desc}}}</div>\n            {{/if}}\n          {{/if}}\n        </div>\n      </li>\n    {{/each}}\n  </ul>\n{{/this}}\n"); 

    hbs.registerPartial("gotop", "{{#this}}\n  <div data-am-widget=\"gotop\" class=\"am-gotop {{#if theme}}am-gotop-{{theme}}{{else}}am-gotop-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" {{#if id}}id=\"{{id}}\"{{/if}}>\n    <a href=\"#top\" title=\"{{content.hint}}\">\n      {{#if content.img}}\n        <img class=\"am-gotop-img\" src=\"{{content.img}}\" />\n      {{/if}}\n      {{#if content.hint}}\n        <span class=\"am-gotop-hint\">{{content.hint}}</span>\n      {{/if}}\n    </a>\n  </div>\n{{/this}}"); 

    hbs.registerPartial("intro", "{{#this }}\n  <div data-am-widget=\"intro\"\n       class=\"am-intro am-cf {{#if theme}}am-intro-{{theme}}{{else}}am-intro-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"\n       {{#if id}}id=\"{{id}}\"{{/if}}>\n    {{#if content.top}}\n      <div class=\"am-intro-top\">\n        {{{content.top}}}\n        {{#ifCond options.position '==' 'top'}}\n          <div class=\"am-intro-more am-intro-more-top\">{{{content.more}}}</div>\n        {{/ifCond}}\n      </div>\n    {{/if}}\n\n    {{#if content.left}}\n      <div\n          class=\"am-intro-left am-col {{#if options.leftCols}}col-sm-{{options.leftCols}}{{/if}}\">{{{content.left}}}</div>\n    {{/if}}\n    {{#if content.right}}\n      <div\n          class=\"am-intro-right am-col {{#if options.rightCols}}col-sm-{{options.rightCols}}{{/if}}\">{{{content.right}}}</div>\n    {{/if}}\n    {{#ifCond options.position '==' 'bottom'}}\n      <div class=\"am-intro-more am-intro-more-bottom\">{{{content.more}}}</div>\n    {{/ifCond}}\n  </div>\n{{/this}}"); 

    hbs.registerPartial("list_news", "{{#this}}\n  <div data-am-widget=\"list_news\" class=\"am-list-news{{#if theme}} am-list-news-{{theme}}{{else}} am-list-news-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" {{#if id}}id=\"{{id}}\"{{/if}}>\n  <!--列表标题-->\n  {{#if content.header.title}}\n    <div class=\"am-list-news-hd am-cf\">\n      {{#if content.header.link}} <!--带更多链接-->\n        <a href=\"{{content.header.link}}\">\n          <h2>{{{content.header.title}}}</h2>\n          {{#ifCond content.header.morePosition '==' 'top'}}\n            <span class=\"am-list-news-more am-fr\">{{{content.header.moreText}}}</span>\n          {{/ifCond}}\n        </a>\n      {{else}} <!--不带更多链接-->\n        <h2>{{{content.header.title}}}</h2>\n      {{/if}}\n    </div>\n  {{/if}}\n\n  <div class=\"am-list-news-bd\">\n  <ul class=\"am-list\">\n  {{#ifCond options.type '==' 'thumb'}}\n    {{#ifCond options.thumbPosition '==' 'top'}} <!--缩略图在标题上方-->\n    {{#each content.main}}\n      <li class=\"am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed am-list-item-thumb-top{{/if}}\">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        {{#if img}}\n        <div class=\"am-list-thumb am-col col-sm-12\">\n          <a href=\"{{link}}\">\n            <img src=\"{{img}}\" alt=\"{{title}}\"/>\n          </a>\n          {{#if thumbAddition}}\n            <div class=\"am-list-thumb-addon\">{{{thumbAddition}}}</div>\n          {{/if}}\n        </div>\n        {{/if}}\n\n        <div class=\"am-col{{#if img}}{{/if}} am-list-main\">\n          {{#if title}}\n            <h3 class=\"am-list-item-hd\"><a href=\"{{link}}\">{{{title}}}</a></h3>\n          {{/if}}\n\n          {{#if date}}\n            <span class=\"am-list-date\">{{date}}</span>\n          {{/if}}\n\n          {{#if desc}}\n            <div class=\"am-list-item-text\">{{{desc}}}</div>\n          {{/if}}\n\n          {{#if mainAddition}}\n            <div class=\"am-list-news-addon\">{{{mainAddition}}}</div>\n          {{/if}}\n        </div>\n      </li>\n    {{/each}}\n    {{/ifCond}}\n\n    {{#ifCond options.thumbPosition '==' 'bottom-left'}} <!--缩略图在标题下方居左-->\n    {{#each content.main}}\n      <li class=\"am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed am-list-item-thumb-bottom-left{{/if}}\">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        {{#if title}}\n          <h3 class=\"am-list-item-hd\"><a href=\"{{link}}\">{{{title}}}</a></h3>\n        {{/if}}\n        {{#if img}}\n        <div class=\"am-col col-sm-4 am-list-thumb\">\n          <a href=\"{{link}}\">\n            <img src=\"{{img}}\" alt=\"{{title}}\"/>\n          </a>\n          {{#if thumbAddition}}\n            <div class=\"am-list-thumb-addon\">{{{thumbAddition}}}</div>\n          {{/if}}\n        </div>\n        {{/if}}\n\n        <div class=\"am-col{{#if img}} col-sm-8{{/if}} am-list-main\">\n          {{#if date}}\n            <span class=\"am-list-date\">{{date}}</span>\n          {{/if}}\n\n          {{#if desc}}\n            <div class=\"am-list-item-text\">{{{desc}}}</div>\n          {{/if}}\n\n          {{#if mainAddition}}\n            <div class=\"am-list-news-addon\">{{{mainAddition}}}</div>\n          {{/if}}\n        </div>\n      </li>\n    {{/each}}\n    {{/ifCond}}\n\n    {{#ifCond options.thumbPosition '==' 'bottom-right'}} <!--缩略图在标题下方居右-->\n    {{#each content.main}}\n      <li class=\"am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed am-list-item-thumb-bottom-right{{/if}}\">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        {{#if title}}\n          <h3 class=\"am-list-item-hd\"><a href=\"{{link}}\">{{{title}}}</a></h3>\n        {{/if}}\n\n        <div class=\"am-col{{#if img}} col-sm-8{{/if}} am-list-main\">\n          {{#if date}}\n            <span class=\"am-list-date\">{{date}}</span>\n          {{/if}}\n\n          {{#if desc}}\n            <div class=\"am-list-item-text\">{{{desc}}}</div>\n          {{/if}}\n\n          {{#if mainAddition}}\n            <div class=\"am-list-news-addon\">{{{mainAddition}}}</div>\n          {{/if}}\n        </div>\n        {{#if img}}\n        <div class=\"am-list-thumb am-col col-sm-4\">\n          <a href=\"{{link}}\">\n            <img src=\"{{img}}\" alt=\"{{title}}\"/>\n          </a>\n          {{#if thumbAddition}}\n            <div class=\"am-list-thumb-addon\">{{{thumbAddition}}}</div>\n          {{/if}}\n        </div>\n        {{/if}}\n      </li>\n    {{/each}}\n    {{/ifCond}}\n\n    {{#ifCond options.thumbPosition '==' 'left'}} <!--缩略图在标题左边-->\n    {{#each content.main}}\n      <li class=\"am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed am-list-item-thumb-left{{/if}}\">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        {{#if img}}\n        <div class=\"am-col col-sm-4 am-list-thumb\">\n          <a href=\"{{link}}\">\n            <img src=\"{{img}}\" alt=\"{{title}}\"/>\n          </a>\n          {{#if thumbAddition}}\n            <div class=\"am-list-thumb-addon\">{{{thumbAddition}}}</div>\n          {{/if}}\n        </div>\n        {{/if}}\n\n        <div class=\"am-col{{#if img}} col-sm-8{{/if}} am-list-main\">\n          {{#if title}}\n            <h3 class=\"am-list-item-hd\"><a href=\"{{link}}\">{{{title}}}</a></h3>\n          {{/if}}\n          {{#if date}}\n            <span class=\"am-list-date\">{{date}}</span>\n          {{/if}}\n\n          {{#if desc}}\n            <div class=\"am-list-item-text\">{{{desc}}}</div>\n          {{/if}}\n\n          {{#if mainAddition}}\n            <div class=\"am-list-news-addon\">{{{mainAddition}}}</div>\n          {{/if}}\n        </div>\n      </li>\n    {{/each}}\n    {{/ifCond}}\n\n    {{#ifCond options.thumbPosition '==' 'right'}} <!--缩略图在标题右边-->\n    {{#each content.main}}\n      <li class=\"am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed am-list-item-thumb-right{{/if}}\">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        <div class=\"am-col{{#if img}} col-sm-8{{/if}} am-list-main\">\n          {{#if title}}\n            <h3 class=\"am-list-item-hd\"><a href=\"{{link}}\">{{{title}}}</a></h3>\n          {{/if}}\n\n          {{#if date}}\n            <span class=\"am-list-date\">{{date}}</span>\n          {{/if}}\n\n          {{#if desc}}\n            <div class=\"am-list-item-text\">{{{desc}}}</div>\n          {{/if}}\n\n          {{#if mainAddition}}\n            <div class=\"am-list-news-addon\">{{{mainAddition}}}</div>\n          {{/if}}\n        </div>\n        {{#if img}}\n          <div class=\"am-col col-sm-4 am-list-thumb\">\n            <a href=\"{{link}}\">\n              <img src=\"{{img}}\" alt=\"{{title}}\"/>\n            </a>\n            {{#if thumbAddition}}\n              <div class=\"am-list-thumb-addon\">{{{thumbAddition}}}</div>\n            {{/if}}\n          </div>\n        {{/if}}\n      </li>\n    {{/each}}\n    {{/ifCond}}\n\n  {{else}}{{!--不带缩略图--}}\n    {{#each content.main}}\n      <li class=\"am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed{{/if}}\">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        {{#if title}}\n          <a href=\"{{link}}\" class=\"am-list-item-hd\">{{{title}}}</a>\n        {{/if}}\n\n        {{#if date}}\n          <span class=\"am-list-date\">{{date}}</span>\n        {{/if}}\n\n        {{#if desc}}\n          <div class=\"am-list-item-text\">{{{desc}}}</div>\n        {{/if}}\n\n        {{#if mainAddition}}\n          <div class=\"am-list-news-addon\">{{{mainAddition}}}</div>\n        {{/if}}\n      </li>\n    {{/each}}\n  {{/ifCond}}\n  </ul>\n  </div>\n\n  {{#ifCond content.header.morePosition '==' 'bottom'}}<!--更多在底部-->\n    {{#if content.header.link}}\n      <div class=\"am-list-news-ft\">\n        <a class=\"am-list-news-more am-btn am-btn-default\" href=\"{{content.header.link}}\">{{{content.header.moreText}}}</a>\n      </div>\n    {{/if}}\n  {{/ifCond}}\n  </div>\n{{/this}}"); 

    hbs.registerPartial("map", "{{#this}}\n  <div data-am-widget=\"map\" class=\"am-map {{#if theme}}am-map-{{theme}}{{else}}am-map-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"\n      data-name=\"{{options.name}}\" data-address=\"{{options.address}}\" data-longitude=\"{{options.longitude}}\" data-latitude=\"{{options.latitude}}\">\n    <div id=\"bd-map\"></div>\n  </div>\n{{/this}}"); 

    hbs.registerPartial("menu", "{{#this}}\n  <nav data-am-widget=\"menu\" class=\"am-menu {{#if theme}} am-menu-{{theme}}{{else}} am-menu-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" {{options.dataset}} {{#if id}}id=\"{{id}}\"{{/if}}\n    {{#ifCond theme '==' 'dropdown1'}} data-am-menu-collapse{{/ifCond}}\n    {{#ifCond theme '==' 'dropdown2'}} data-am-menu-collapse{{/ifCond}}\n    {{#ifCond theme '==' 'slide1'}} data-am-menu-collapse{{/ifCond}}\n    {{#ifCond theme '==' 'offcanvas1'}} data-am-menu-offcanvas{{/ifCond}}\n    {{#ifCond theme '==' 'offcanvas2'}} data-am-menu-offcanvas{{/ifCond}}> {{!-- 与模板深耦合，与 JS 浅耦合 --}}\n    <a href=\"javascript: void(0)\" class=\"am-menu-toggle\">\n      {{#if options.toggleTitle}}\n        <span class=\"am-menu-toggle-title\">{{options.toggleTitle}}</span>\n      {{/if}}\n      {{#if options.toggleCustomIcon}}\n        <img src=\"options.toggleCustomIcon\" alt=\"Menu Toggle\"/>\n      {{else}}\n        {{#if options.toggleIcon}}\n          <i class=\"am-menu-toggle-icon am-icon-{{options.toggleIcon}}\"></i>\n          {{else}}\n          <i class=\"am-menu-toggle-icon am-icon-bars\"></i>\n        {{/if}}\n      {{/if}}\n    </a>\n\n    {{!-- offCanvas menu Wrap --}}\n    {{!-- 问题：方便用户，但是与主题名称（类名）耦合过深 --}}\n    {{#ifCond theme '==' 'offcanvas1'}}\n    <div class=\"am-offcanvas\">\n      <div class=\"am-offcanvas-bar{{#if options.offCanvasFlip}} am-offcanvas-bar-flip{{/if}}\">\n    {{/ifCond}}\n    {{#ifCond theme '==' 'offcanvas2'}}\n    <div class=\"am-offcanvas\">\n      <div class=\"am-offcanvas-bar{{#if options.offCanvasFlip}} am-offcanvas-bar-flip{{/if}}\">\n    {{/ifCond}}\n\n    {{#if content}}\n      <ul class=\"am-menu-nav {{#if options.cols}}sm-block-grid-{{options\n      .cols}}{{else}}sm-block-grid-1{{/if}}{{#ifCond theme '==' 'dropdown1'}} am-collapse{{/ifCond}}{{#ifCond theme\n      '==' 'dropdown2'}} am-collapse{{/ifCond}}{{#ifCond theme\n      '==' 'slide1'}} am-collapse{{/ifCond}}\">\n        {{#each content}}\n          <li class=\"{{#if subMenu}}am-parent{{/if}}{{#if className}} {{className}}{{/if}}\">\n            <a href=\"{{link}}\">{{{title}}}</a>\n            {{#if subMenu}}\n              <ul class=\"am-menu-sub am-collapse {{#if subCols}} sm-block-grid-{{subCols}}{{else}}\n              sm-block-grid-1{{/if}} {{subMenuClassName}}\">\n                {{#each subMenu}}\n                  <li class=\"{{#if subMenu}} am-parent{{/if}}{{#if className}} {{className}}{{/if}}\">\n                    <a href=\"{{link}}\">{{{title}}}</a>\n                  </li>\n                {{/each}}\n                {{!-- 显示进入栏目链接 --}}\n                {{#if channelLink}}\n                  <li class=\"am-menu-nav-channel\"><a href=\"{{link}}\" title=\"{{title}}\">{{{channelLink}}}</a></li>\n                {{/if}}\n              </ul>\n            {{/if}}\n          </li>\n        {{/each}}\n      </ul>\n    {{/if}}\n\n    {{#ifCond theme '==' 'offcanvas1'}}\n      </div>\n    </div>\n    {{/ifCond}}\n    {{#ifCond theme '==' 'offcanvas2'}}\n      </div>\n    </div>\n    {{/ifCond}}\n    {{!-- 不要问我为什么这样写，我也不想这样 --}}\n  </nav>\n{{/this}}\n"); 

    hbs.registerPartial("navbar", "{{#this}}\n  <div data-am-widget=\"navbar\" class=\"am-navbar am-cf {{#if theme}}am-navbar-{{theme}}{{else}}am-navbar-default{{/if}} {{#if options.iconpos}}am-navbar-{{options.iconpos}}{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"\n      id=\"{{id}}\">\n    {{#if content}}\n      <ul class=\"am-cf {{#if options.cols}}sm-block-grid-{{options.cols}}{{/if}}\">\n        {{#each content}}\n          <li class=\"am-navbar-item\" {{#if dataApi}}{{dataApi}}{{/if}}>\n            <a href=\"{{#if link}}{{link}}{{/if}}\">\n              {{#if customIcon}}\n                <img src=\"{{customIcon}}\" alt=\"{{{title}}}\"/>\n              {{else}}\n                {{#if icon}}\n                  <span class=\"am-icon-{{icon}}\"></span>\n                {{/if}}\n              {{/if}}\n              {{#if title}}\n                {{{title}}}\n              {{/if}}\n            </a>\n          </li>\n        {{/each}}\n      </ul>\n    {{/if}}\n  </div>\n{{/this}}\n"); 

    hbs.registerPartial("pagination", "{{#this}}\n  <ul data-am-widget=\"pagination\" class=\"am-pagination {{#if theme}}am-pagination-{{theme}}{{else}}am-pagination-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" {{#if id}}id=\"{{id}}\"{{/if}}>\n    {{#if content.firstTitle}}\n      <li class=\"am-pagination-first\">\n        <a href=\"{{content.firstLink}}\">{{{content.firstTitle}}}</a>\n      </li>\n    {{/if}}\n    {{#if content.prevTitle}}\n      <li class=\"am-pagination-prev\">\n        <a href=\"{{content.prevLink}}\">{{{content.prevTitle}}}</a>\n      </li>\n    {{/if}}\n    {{#if options.select}}\n      <li class=\"am-pagination-select\">\n        <select onchange=\"pageChange(this.options[this.options.selectedIndex].value)\">\n          {{#if content.total}}\n            {{#each content.page}}\n              <option value=\"{{title}}\" class=\"{{class}}\">{{{title}}}/{{../content.total}}</options>\n            {{/each}}\n          {{else}}\n            {{#each content.page}}\n              <option value=\"{{title}}\" class=\"{{class}}\">{{{title}}}</options>\n            {{/each}}\n          {{/if}}\n        </select>\n      </li>\n    {{else}}\n      {{#if content.total}}\n        {{#each content.page}}\n          <li class=\"{{class}}\">\n            <a href=\"{{link}}\">{{{title}}}/{{../content.total}}</a>\n          </li>\n        {{/each}}\n      {{else}}\n        {{#each content.page}}\n          <li class=\"{{class}}\">\n            <a href=\"{{link}}\">{{{title}}}</a>\n          </li>\n        {{/each}}\n      {{/if}}\n    {{/if}}\n    {{#if content.nextTitle}}\n      <li class=\"am-pagination-next\">\n        <a href=\"{{content.nextLink}}\">{{{content.nextTitle}}}</a>\n      </li>\n    {{/if}}\n    {{#if content.lastTitle}}\n      <li class=\"am-pagination-last\">\n        <a href=\"{{content.lastLink}}\">{{{content.lastTitle}}}</a>\n      </li>\n    {{/if}}\n  </ul>\n{{/this}}"); 

    hbs.registerPartial("paragraph", "{{#this}}\n  <article data-am-widget=\"paragraph\" class=\"am-paragraph {{#if theme}}am-paragraph-{{theme}}{{else}}am-paragraph-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" {{#if id}}id=\"{{id}}\"{{/if}} {{#if options.tableParagraph}} data-am-tableParagraph=\"true\"{{/if}}{{#if options.imgParagraph}} data-am-imgParagraph=\"true\"{{/if}}>\n  \t{{#if content.content}}\n  \t\t{{{ content.content }}}\n  \t{{/if}}\n  </article>\n{{/this}}\n"); 

    hbs.registerPartial("slider", "{{#this}}\n  <div data-am-widget=\"slider\" class=\"am-slider {{#if theme}}am-slider-{{theme}}{{else}}am-slider-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" data-slider-config='{{sliderConfig}}' {{#if id}}id=\"{{id}}\"{{/if}}>\n  <ul class=\"am-slides\">\n    {{#each content}}\n      <li{{#if thumb}} data-thumb=\"{{thumb}}\"{{/if}}>\n        {{#if link}}\n          <a href=\"{{link}}\">\n        {{/if}}\n        {{#if img}}\n        \t<img src=\"{{img}}\">\n        {{/if}}\n        {{#if desc}}\n          <div class=\"am-slider-desc\">{{{desc}}}</div>\n        {{/if}}\n        {{#if link}}</a>{{/if}} {{!--/end link--}}\n      </li>\n    {{/each}}\n  </ul>\n</div>\n{{/this}}"); 

    hbs.registerPartial("sohucs", "{{#this}}\n  <section data-am-widget=\"sohucs\" class=\"am-sohucs{{#if theme}} am-sohucs-{{theme}}{{else}} am-sohucs-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"{{#if id}} id=\"{{id}}\"{{/if}} data-am-sohucs-appid=\"{{options.appid}}\" data-am-sohucs-conf=\"{{options.conf}}\">\n    <div id=\"SOHUCS\"></div>\n  </section>\n{{/this}}"); 

    hbs.registerPartial("tabs", "{{#this }}\n  <div data-am-widget=\"tabs\" class=\"am-tabs{{#if theme}} am-tabs-{{theme}}{{else}} am-tabs-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" {{#if id}}id=\"{{id}}\"{{/if}}>\n    <ul class=\"am-tabs-hd am-cf {{#if options.cols}}sm-block-grid-{{options.cols}}{{/if}}\">\n      {{#each content}}\n        <li class=\"{{#if class}}am-tabs-hd-active{{/if}}\">{{{header}}}</li>\n      {{/each}}\n    </ul>\n    <div class=\"am-tabs-bd\">\n        <div class=\"am-tabs-bd-content\">\n          {{#each content}}\n            <div class=\"{{#if class}}am-tabs-bd-active{{/if}}\">{{{substance}}}</div>\n          {{/each}}\n        </div>\n    </div>\n  </div>\n{{/this }}"); 

    hbs.registerPartial("titlebar", "{{#this}}\n<div data-am-widget=\"titlebar\" class=\"am-titlebar {{#if theme}}am-titlebar-{{theme}}{{else}}am-titlebar-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" {{#if id}}id=\"{{id}}\"{{/if}}>\n  {{#if content.left}}\n    <div class=\"am-titlebar-left\">\n      {{{content.left}}}\n    </div>\n  {{/if}}\n  {{#if content.title}}\n    <h2 class=\"am-titlebar-title\">\n      {{{content.title}}}\n    </h2>\n  {{/if}}\n  {{#if content.right}}\n    <div class=\"am-titlebar-right\">\n      {{{content.right}}}\n    </div>\n  {{/if}}\n</div>\n{{/this}}"); 

  }; 

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = registerAMUIPartials;
  }

  this.Handlebars && registerAMUIPartials(Handlebars);
}).call(this);
