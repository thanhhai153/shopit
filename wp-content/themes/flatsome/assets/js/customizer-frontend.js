!(function (e) {
  var t = {};
  function o(n) {
    if (t[n]) return t[n].exports;
    var a = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.m = e),
    (o.c = t),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          o.d(
            n,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = ""),
    o((o.s = 14));
})([
  function (e, t) {
    var o;
    o = (function () {
      return this;
    })();
    try {
      o = o || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (o = window);
    }
    e.exports = o;
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, o) {
    e.exports = o(15);
  },
  function (e, t, o) {
    "use strict";
    o.r(t);
    o(16), o(17), o(18), o(19), o(20), o(21), o(22), o(23), o(24), o(25);
  },
  function (e, t, o) {
    (function (e) {
      e.appendStyle = function (e, t) {
        jQuery("style#customizer-preview-" + e).length
          ? jQuery("style#customizer-preview-" + e).text(t)
          : jQuery("head").append(
              '<style id="customizer-preview-' + e + '">' + t + "</style>"
            );
      };
    }).call(this, o(0));
  },
  function (e, t, o) {
    (function (e) {
      e.removeStyle = function (e) {
        jQuery("style#customizer-preview-" + e).remove();
      };
    }).call(this, o(0));
  },
  function (e, t) {
    var o;
    (o = jQuery)(document).ready(function () {
      o("style#custom-css")
        .clone()
        .attr("id", "custom-css-temp")
        .appendTo("head"),
        wp.customize.selectiveRefresh &&
          wp.customize.selectiveRefresh.bind(
            "partial-content-rendered",
            function (e) {
              Flatsome.attach(e.container),
                t(e.container),
                o(".partial-refreshing").remove(),
                o("style#custom-css-temp").remove(),
                o("style#custom-css")
                  .clone()
                  .attr("id", "custom-css-temp")
                  .appendTo("head");
            }
          );
      var e = [
        {
          target: ".product-footer",
          text: "Product Tabs",
          focus: "product_display",
          pos: "top",
        },
        {
          target: ".product-gallery",
          text: "Product Gallery",
          focus: "product_zoom",
          pos: "top",
        },
        {
          target: "#wrapper",
          text: "Layout",
          focus: "body_layout",
          pos: "left",
        },
        {
          target: ".header-top",
          text: "Top Bar",
          focus: "top_bar",
          type: "section",
        },
        {
          target: ".header-main",
          text: "Header Main",
          focus: "main_bar",
          type: "section",
        },
        {
          target: ".header-bottom",
          text: "Header Bottom",
          focus: "bottom_bar",
          type: "section",
        },
        {
          target: ".product-info",
          text: "Product Summary",
          focus: "product_info_meta",
          pos: "top",
        },
        {
          target: ".widget-upsell",
          text: "Product Upsells",
          focus: "product_upsell",
        },
        {
          target: ".social-icons.share-icons",
          text: "Share Icons",
          focus: "social_icons",
        },
        { target: "#logo", text: "Logo", focus: "blogname" },
        {
          target: "#header.transparent",
          text: "Transparent Header",
          focus: "header_height_transparent",
          pos: "bottom-left",
        },
        {
          target: ".header-wrapper .nav-dropdown",
          text: "Dropdown Style",
          focus: "dropdown_border",
          pos: "top-left",
        },
        {
          target: ".product-container",
          text: "Product Layout",
          focus: "product_layout",
          pos: "top",
        },
        {
          target: "#product-sidebar",
          text: "Product Sidebar Widgets",
          focus: "sidebar-widgets-product-sidebar",
          type: "section",
          pos: "top",
        },
        {
          target: "#shop-sidebar",
          text: "Catalog Sidebar Widgets",
          focus: "sidebar-widgets-shop-sidebar",
          type: "section",
          pos: "top",
        },
        {
          target: ".category-page-row",
          text: "Catalog Layout",
          focus: "woocommerce_product_catalog",
          type: "section",
          pos: "top",
        },
        {
          target: ".woocommerce-breadcrumbs",
          text: "Shop Breadcrumbs",
          focus: "woocommerce_product_catalog",
          type: "section",
        },
        {
          target: ".shop-page-title .breadcrumbs",
          text: "Shop Breadcrumbs",
          focus: "breadcrumb_size",
        },
        {
          target: ".related-products-wrapper",
          text: "Related Products",
          focus: "max_related_products",
          pos: "top",
        },
        {
          target: ".woocommerce-cart .cart-container",
          text: "Cart Layout",
          focus: "cart-checkout",
          type: "section",
          pos: "top",
        },
        {
          target: "form.woocommerce-checkout",
          text: "Checkout Layout",
          focus: "woocommerce_checkout",
          type: "section",
          pos: "top",
        },
        {
          target: ".absolute-footer",
          text: "Absolute Footer",
          focus: "footer_left_text",
        },
        {
          target: ".footer-1",
          text: "Footer 1 Options",
          focus: "footer",
          type: "section",
          pos: "top",
        },
        {
          target: ".footer-2",
          text: "Footer 2 Options",
          focus: "footer",
          type: "section",
          pos: "top",
        },
        {
          target: ".footer-1 .col",
          text: "Footer 1 Widgets",
          focus: "sidebar-widgets-sidebar-footer-1",
          type: "section",
          pos: "top",
        },
        {
          target: ".footer-2 .col",
          text: "Footer 2 Widgets",
          focus: "sidebar-widgets-sidebar-footer-2",
          type: "section",
          pos: "top",
        },
        {
          target: ".portfolio-page-wrapper",
          text: "Portfolio Layout",
          focus: "fl-portfolio",
          type: "section",
          pos: "top",
        },
        {
          target: ".featured-posts",
          text: "Featured Blog Posts",
          focus: "blog_featured",
          pos: "top",
        },
        {
          target: ".blog-wrapper.blog-archive",
          text: "Blog Layout",
          focus: "blog_layout",
          pos: "top",
        },
        {
          target: ".blog-wrapper.blog-single",
          text: "Blog Single Post layout",
          focus: "blog_post_layout",
          pos: "top",
        },
        {
          target: ".payment-icons",
          text: "Payment Icons",
          focus: "payment-icons",
          type: "section",
          pos: "top",
        },
        {
          target: "li.cart-item",
          text: "Header Cart",
          focus: "header_cart",
          type: "section",
          pos: "top",
        },
        {
          target: "li.account-item",
          text: "Header Account",
          focus: "header_account",
          type: "section",
          pos: "top",
        },
        {
          target: "li.header-newsletter-item",
          text: "Header Newsletter",
          focus: "header_newsletter",
          type: "section",
          pos: "top",
        },
        {
          target: "li.header-button-2",
          text: "Button 2",
          focus: "header_buttons",
          type: "section",
          pos: "top",
        },
        {
          target: "li.header-button-1",
          text: "Button 1",
          focus: "header_buttons",
          type: "section",
          pos: "top",
        },
        {
          target: "li.header-social-icons",
          text: "Header Social",
          focus: "follow",
          type: "section",
          pos: "top",
        },
        {
          target: "li.header-search",
          text: "Header Search",
          focus: "header_search",
          type: "section",
          pos: "top",
        },
        {
          target: "li.html.custom",
          text: "Custom Content",
          focus: "header_content",
          type: "section",
          pos: "top",
        },
        {
          target: "#secondary",
          text: "Sidebar Widgets",
          focus: "sidebar-widgets-sidebar-main",
          type: "section",
          pos: "top",
        },
        {
          target: ".flatsome-cookies",
          text: "Cookie Notice",
          focus: "notifications",
          type: "section",
          pos: "top",
        },
      ];
      function t(t) {
        e.forEach(function (e) {
          e.pos || (e.pos = "bottom"),
            e.type || (e.type = "control"),
            o(e.target).hasClass("tooltipstered") ||
              jQuery(e.target, t).tooltipster({
                content:
                  '<button class="customizer-focus" data-focus="' +
                  e.focus +
                  '">' +
                  e.text +
                  "</button>",
                interactive: !0,
                arrow: !1,
                offsetY: -22,
                theme: "tooltip-customizer",
                position: e.pos,
                hideOnClick: !0,
                functionReady: function () {
                  o(this).addClass("customizer-active"),
                    o(".customizer-focus").on("click", function () {
                      "control" == e.type &&
                        "undefined" !== o(this).data("focus") &&
                        window.parent.wp.customize
                          .control(o(this).data("focus"))
                          .focus(),
                        "section" == e.type &&
                          "undefined" !== o(this).data("focus") &&
                          window.parent.wp.customize
                            .section(o(this).data("focus"))
                            .focus(),
                        "panel" == e.type &&
                          "undefined" !== o(this).data("focus") &&
                          window.parent.wp.customize
                            .panel(o(this).data("focus"))
                            .focus();
                    });
                },
                functionAfter: function () {
                  o(this).removeClass("customizer-active");
                },
                speed: 10,
                delay: 10,
                contentAsHTML: !0,
              });
        });
      }
      t(jQuery("body"));
    });
  },
  function (e, t) {
    !(function (e) {
      function t() {
        if (!e(".has-dropdown.menu-item.current-dropdown").length) {
          var t,
            o = e(".has-dropdown.menu-item:first");
          o.hasClass("nav-dropdown-toggle")
            ? o.find("a:first").trigger("click")
            : ((t = o).trigger({ type: "mouseover", pageX: 1, pageY: 1 }),
              t.trigger({ type: "mousemove", pageX: 1, pageY: 1 }),
              setTimeout(function () {
                o.addClass("current-dropdown");
              }, 500));
        }
      }
      wp.customize("header_width", function (t) {
        t.bind(function (t) {
          e("#header").removeClass("header-full-width"),
            "full-width" == t && e("#header").addClass("header-full-width");
        });
      }),
        wp.customize("logo_position", function (t) {
          t.bind(function (t) {
            e(".header-inner").removeClass("logo-center logo-left"),
              "center" == t
                ? (e(
                    ".header-builder .hb-desktop .hb-main",
                    parent.document
                  ).addClass("hb-logo-center"),
                  e(".header-inner").addClass("logo-center"))
                : (e(
                    ".header-builder .hb-desktop .hb-main",
                    parent.document
                  ).removeClass("hb-logo-center"),
                  e(".header-inner").addClass("logo-left"));
          });
        }),
        wp.customize("logo_position_mobile", function (t) {
          t.bind(function (t) {
            e(".header-inner").removeClass("medium-logo-center"),
              "center" == t
                ? (e(
                    ".header-builder .hb-mobile .hb-main",
                    parent.document
                  ).addClass("hb-logo-center"),
                  e(".header-inner").addClass("medium-logo-center"))
                : e(
                    ".header-builder .hb-mobile .hb-main",
                    parent.document
                  ).removeClass("hb-logo-center");
          });
        }),
        wp.customize("logo_width", function (t) {
          t.bind(function (t) {
            t = parseInt(t);
            e("#logo").removeClass("changed"),
              setTimeout(function () {
                e("#logo").addClass("changed");
              }, 50),
              appendStyle("logo_width", "#logo{width: " + t + "px}");
          });
        }),
        wp.customize("logo_max_width", function (e) {
          e.bind(function (e) {
            e = parseInt(e);
            appendStyle("logo_max_width", "#logo a{max-width: " + e + "px}");
          });
        }),
        wp.customize("logo_padding", function (e) {
          e.bind(function (e) {
            e = parseInt(e);
            appendStyle("logo_padding", "#logo img {padding: " + e + "px 0}");
          });
        }),
        wp.customize("sticky_logo_padding", function (e) {
          e.bind(function (e) {
            e = parseInt(e);
            appendStyle(
              "sticky_logo_padding",
              ".stuck #logo img {padding: " + e + "px 0}"
            );
          });
        }),
        wp.customize("header_bg", function (e) {
          e.bind(function (e) {
            appendStyle(
              "header_bg",
              ".header-bg-color {background-color:" + e + ";}"
            );
          });
        }),
        wp.customize("nav_position_bg", function (e) {
          e.bind(function (e) {
            appendStyle(
              "nav_position_bg",
              ".header-bottom {background-color:" + e + ";}"
            );
          });
        }),
        wp.customize("nav_height_top", function (e) {
          e.bind(function (e) {
            appendStyle(
              "nav_height_top",
              ".top-bar-nav > li > a{line-height:" + e + "px;}"
            );
          });
        }),
        wp.customize("nav_height", function (e) {
          e.bind(function (e) {
            16 !== e &&
              appendStyle(
                "nav_height",
                ".header-main .nav > li > a{line-height:" + e + "px;}"
              );
          });
        }),
        wp.customize("type_nav_color", function (e) {
          e.bind(function (e) {
            appendStyle(
              "type_nav_color",
              ".header:not(.transparent) .header-nav-main.nav > li > a{color: " +
                e +
                ";}"
            );
          });
        }),
        wp.customize("nav_push", function (e) {
          e.bind(function (e) {
            e = parseInt(e);
            appendStyle(
              "nav_push",
              ".header-wrapper:not(.stuck) .header-main .header-nav{margin-top:" +
                e +
                "px;}"
            );
          });
        }),
        wp.customize("nav_height_sticky", function (e) {
          e.bind(function (e) {
            appendStyle(
              "nav_height_sticky",
              ".stuck .header-main .nav > li > a{line-height:" + e + "px;}"
            );
          });
        }),
        wp.customize("nav_height_bottom", function (e) {
          e.bind(function (e) {
            appendStyle(
              "nav_height_bottom",
              ".header-bottom-nav > li > a{line-height:" + e + "px;}"
            );
          });
        }),
        wp.customize("header_bg_transparent", function (e) {
          e.bind(function (e) {
            appendStyle(
              "header_bg_transparent",
              "#header.transparent .header-wrapper {background-color:" +
                e +
                ";}"
            );
          });
        }),
        wp.customize("header_bg_img", function (e) {
          e.bind(function (e) {
            (e = 'url("' + e + '")'),
              appendStyle(
                "header_wrapper_bg",
                ".header-bg-image {background-image: " + e + "}"
              );
          });
        }),
        wp.customize("header_bg_img_repeat", function (e) {
          e.bind(function (e) {
            appendStyle(
              "header-wrapper-repeat",
              ".header-bg-image {background-repeat: " + e + "}"
            );
          });
        }),
        wp.customize("header_height", function (e) {
          e.bind(function (e) {
            e = parseInt(e);
            appendStyle(
              "logo-height",
              "#header #logo img{max-height: " + e + "px!important}"
            ),
              appendStyle(
                "header-height",
                "#header .header-main{height: " + e + "px!important}"
              );
          });
        }),
        wp.customize("header_height_transparent", function (e) {
          e.bind(function (e) {
            e = parseInt(e);
            appendStyle(
              "transparent-height",
              "#header.transparent #masthead{height: " + e + "px!important}"
            ),
              appendStyle(
                "transparent-height-logo",
                "#header.transparent #logo img{max-height: " +
                  e +
                  "px!important}"
              );
          });
        }),
        wp.customize("header_height_stuck", function (e) {
          e.bind(function (e) {
            appendStyle(
              "header_height_stuck",
              ".header.show-on-scroll, .stuck .header-main{height: " +
                parseInt(e) +
                "px}"
            );
          });
        }),
        wp.customize("header_bottom_height", function (e) {
          e.bind(function (e) {
            e = parseInt(e);
            appendStyle(
              "header-bottom-height",
              ".header-bottom{min-height: " + e + "px}"
            );
          });
        }),
        wp.customize("header_top_height", function (e) {
          e.bind(function (e) {
            e = parseInt(e);
            appendStyle(
              "header_top_height",
              ".header-top {min-height: " + e + "px}"
            );
          });
        }),
        wp.customize("header_height_mobile", function (e) {
          e.bind(function (e) {
            jQuery("button.preview-mobile", parent.document).trigger("click"),
              appendStyle(
                "header_height_mobile",
                "@media (max-width: 550px) { .header-main{height: " +
                  e +
                  "px} #logo img{max-height: " +
                  e +
                  "px}"
              );
          });
        }),
        wp.customize("mobile_overlay", function (t) {
          t.bind(function (t) {
            e("html.has-off-canvas").removeClass(
              "has-off-canvas-right has-off-canvas-center has-off-canvas-left"
            ),
              e(".mfp-bg, .mfp-wrap").removeClass(
                "off-canvas-right off-canvas-center off-canvas-left"
              ),
              e(".sidebar-menu").removeClass("text-center"),
              t &&
                (e("html.has-off-canvas").addClass("has-off-canvas-" + t),
                e(".mfp-bg, .mfp-wrap").addClass("off-canvas-" + t),
                "center" == t && e(".sidebar-menu").addClass("text-center"));
          });
        }),
        wp.customize("mobile_overlay_bg", function (e) {
          e.bind(function (e) {
            appendStyle(
              "mobile_overlay_bg",
              ".main-menu-overlay{background-color: " + e + "!important}"
            );
          });
        }),
        wp.customize("mobile_overlay_color", function (t) {
          t.bind(function (t) {
            e(".off-canvas").removeClass("dark"),
              "dark" == t && e(".off-canvas").addClass("dark");
          });
        }),
        wp.customize("header_color", function (t) {
          t.bind(function (t) {
            e(
              'body:not([class*="transparent-header"]):not([class*="single-page-nav-transparent"]) .header-main'
            ).removeClass("nav-dark"),
              "dark" == t &&
                e(
                  'body:not([class*="transparent-header"]):not([class*="single-page-nav-transparent"]) .header-main'
                ).addClass("nav-dark");
          });
        }),
        wp.customize("nav_position_color", function (t) {
          t.bind(function (t) {
            e(
              'body:not([class*="transparent-header"]):not([class*="single-page-nav-transparent"]) .header-bottom'
            ).removeClass("nav-dark"),
              "dark" == t &&
                e(
                  'body:not([class*="transparent-header"]):not([class*="single-page-nav-transparent"]) .header-bottom'
                ).addClass("nav-dark");
          });
        }),
        wp.customize("topbar_color", function (t) {
          t.bind(function (t) {
            e("#top-bar").removeClass("nav-dark"),
              "dark" == t && e("#top-bar").addClass("nav-dark");
          });
        }),
        wp.customize("box_shadow_header", function (t) {
          t.bind(function (t) {
            e("body").removeClass("header-shadow"),
              t && e("body").addClass("header-shadow");
          });
        }),
        wp.customize("search_placeholder", function (t) {
          t.bind(function (t) {
            t && e("input.search-field").attr("placeholder", t);
          });
        }),
        wp.customize("header_search_width", function (e) {
          e.bind(function (e) {
            appendStyle(
              "header_search_width",
              ".search-form{width: " + e + "%}"
            );
          });
        }),
        wp.customize("header_search_form_style", function (t) {
          t.bind(function (t) {
            e("header .searchform-wrapper").removeClass("form-flat"),
              e("header .searchform-wrapper").addClass("form-" + t);
          });
        }),
        wp.customize("dropdown_text", function (o) {
          o.bind(function (o) {
            t(),
              e(".nav-dropdown").removeClass("dark"),
              "dark" == o && e(".nav-dropdown").addClass(o);
          });
        }),
        wp.customize("dropdown_text_style", function (o) {
          o.bind(function (o) {
            t(),
              e(".nav-dropdown").removeClass("dropdown-uppercase"),
              "uppercase" == o && e(".nav-dropdown").addClass("dropdown-" + o);
          });
        }),
        wp.customize("dropdown_arrow", function (o) {
          o.bind(function (o) {
            t(),
              e("body").removeClass("nav-dropdown-has-arrow"),
              o && e("body").addClass("nav-dropdown-has-arrow");
          });
        }),
        wp.customize("dropdown_shadow", function (o) {
          o.bind(function (o) {
            t(),
              e("body").removeClass("nav-dropdown-has-shadow"),
              o && e("body").addClass("nav-dropdown-has-shadow");
          });
        }),
        wp.customize("dropdown_nav_size", function (e) {
          e.bind(function (e) {
            t(),
              100 !== e &&
                appendStyle(
                  "dropdown_nav_size",
                  ".nav-dropdown{font-size: " + e + "%}"
                );
          });
        }),
        wp.customize("nav_top_uppercase", function (t) {
          t.bind(function (t) {
            var o = e(".header-top .top-bar-nav");
            o.removeClass("nav-uppercase"), t && o.addClass("nav-uppercase");
          });
        }),
        wp.customize("nav_uppercase", function (t) {
          t.bind(function (t) {
            e(".header-main .header-nav").removeClass("nav-uppercase"),
              t && e(".header-main .header-nav").addClass("nav-uppercase");
          });
        }),
        wp.customize("nav_uppercase_bottom", function (t) {
          t.bind(function (t) {
            e(".header-bottom .header-nav").removeClass("nav-uppercase"),
              t && e(".header-bottom .header-nav").addClass("nav-uppercase");
          });
        }),
        wp.customize("topbar_elements_left", function (t) {
          t.bind(function (t) {
            t &&
              !e("#top-bar").length &&
              e("#masthead").before('<div id="top-bar"></div>');
          });
        }),
        wp.customize("topbar_elements_center", function (t) {
          t.bind(function (t) {
            t &&
              !e("#top-bar").length &&
              e("#masthead").before('<div id="top-bar"></div>');
          });
        }),
        wp.customize("topbar_elements_right", function (t) {
          t.bind(function (t) {
            t &&
              !e("#top-bar").length &&
              e("#masthead").before('<div id="top-bar"></div>');
          });
        }),
        wp.customize("header_elements_bottom_left", function (t) {
          t.bind(function (t) {
            t &&
              !e("#wide-nav").length &&
              e("#masthead").after('<div id="wide-nav"></div>');
          });
        }),
        wp.customize("header_elements_bottom_right", function (t) {
          t.bind(function (t) {
            t &&
              !e("#wide-nav").length &&
              e("#masthead").after('<div id="wide-nav"></div>');
          });
        }),
        wp.customize("header_elements_bottom_center", function (t) {
          t.bind(function (t) {
            t &&
              !e("#wide-nav").length &&
              e("#masthead").after('<div id="wide-nav"></div>');
          });
        }),
        wp.customize("dropdown_style", function (o) {
          o.bind(function (o) {
            t(),
              e(".nav-dropdown").removeClass(
                "nav-dropdown-bold nav-dropdown-simple nav-dropdown-default"
              ),
              o && e(".nav-dropdown").addClass("nav-dropdown-" + o);
          });
        }),
        wp.customize("dropdown_border_enabled", function (o) {
          o.bind(function (o) {
            t(),
              e("body").removeClass("nav-dropdown-has-border"),
              o && e("body").addClass("nav-dropdown-has-border");
          });
        }),
        wp.customize("dropdown_border", function (e) {
          e.bind(function (e) {
            t(),
              appendStyle(
                "dropdown_border",
                ".nav-dropdown-has-arrow.nav-dropdown-has-border li.has-dropdown:before{border-bottom-color:" +
                  e +
                  ";} .nav .nav-dropdown{border-color: " +
                  e +
                  " }"
              );
          });
        }),
        wp.customize("dropdown_radius", function (e) {
          e.bind(function (e) {
            t(),
              appendStyle(
                "dropdown_radius",
                ".nav-dropdown{border-radius:" + e + ";}"
              );
          });
        }),
        wp.customize("dropdown_bg", function (e) {
          e.bind(function (e) {
            t(),
              e
                ? appendStyle(
                    "dropdown_bg",
                    ".nav-dropdown-has-arrow li.has-dropdown:after{border-bottom-color:" +
                      e +
                      ";} .nav .nav-dropdown{background-color: " +
                      e +
                      " }"
                  )
                : removeStyle("dropdown_bg");
          });
        }),
        wp.customize("top_right_text", function (t) {
          t.bind(function (t) {
            e(".html_top_right_text").html(t);
          });
        }),
        wp.customize("nav_position_text_top", function (t) {
          t.bind(function (t) {
            e(".html_nav_position_text_top").html(t);
          });
        }),
        wp.customize("topbar_left", function (t) {
          t.bind(function (t) {
            e(".html_topbar_left").html(t);
          });
        }),
        wp.customize("topbar_right", function (t) {
          t.bind(function (t) {
            e(".html_topbar_right").html(t);
          });
        }),
        wp.customize("nav_position_text", function (t) {
          t.bind(function (t) {
            e(".html_nav_position_text").html(t);
          });
        }),
        wp.customize("header_newsletter_height", function (t) {
          t.bind(function (t) {
            e("#header-newsletter-signup .banner").css("padding-top", t);
          });
        });
    })(jQuery);
  },
  function (e, t) {
    !(function (e) {
      var t = 0;
      function o() {
        clearTimeout(t),
          (t = setTimeout(function () {
            jQuery.fn.flickity && jQuery(".slider").flickity("resize"),
              jQuery.fn.packery && jQuery(".row-grid").packery("layout");
          }, 300));
      }
      wp.customize("type_size", function (e) {
        e.bind(function (e) {
          appendStyle("type_size", "body {font-size: " + e + "%;}");
        });
      }),
        wp.customize("type_size_mobile", function (e) {
          e.bind(function (e) {
            appendStyle(
              "type_size_mobile",
              "@media screen and (max-width: 550px){body{font-size: " +
                e +
                "%;}}"
            );
          });
        }),
        wp.customize("body_layout", function (t) {
          t.bind(function (t) {
            e("body").removeClass("boxed framed full-width"),
              e("body").addClass(t);
          });
        }),
        wp.customize("site_width", function (e) {
          e.bind(function (e) {
            (e = parseInt(e)) < 300 ||
              (appendStyle(
                "site_width",
                ".container, .row {max-width: " +
                  parseInt(e - 30) +
                  "px } .row.row-collapse{max-width:" +
                  parseInt(e - 60) +
                  "px} .row.row-small{max-width: " +
                  parseInt(e - 37.5) +
                  "px} .row.row-large{max-width: " +
                  parseInt(e) +
                  "px}"
              ),
              o());
          });
        }),
        wp.customize("site_width_boxed", function (e) {
          e.bind(function (e) {
            (e = parseInt(e)) < 300 ||
              (appendStyle(
                "site_width_boxed",
                "body.framed, body.framed header, body.framed .header-wrapper, body.boxed, body.boxed header, body.boxed .header-wrapper, body.boxed .is-sticky-section{ max-width:" +
                  e +
                  "px}"
              ),
              o());
          });
        }),
        wp.customize("body_bg", function (e) {
          e.bind(function (e) {
            appendStyle(
              "body_bg",
              "html{background-color: " + e + "!important}"
            );
          });
        }),
        wp.customize("box_shadow", function (t) {
          t.bind(function (t) {
            e("body").removeClass("box-shadow"),
              t && e("body").addClass("box-shadow");
          });
        }),
        wp.customize("body_bg_image", function (e) {
          e.bind(function (e) {
            appendStyle(
              "body_bg_image",
              'html {background-image: url("' + e + '") }'
            );
          });
        }),
        wp.customize("body_bg_type", function (t) {
          t.bind(function (t) {
            e("html").removeClass("bg-fill"),
              "bg-full-size" == t && e("html").addClass("bg-fill");
          });
        }),
        wp.customize("content_color", function (t) {
          t.bind(function (t) {
            e("#main").removeClass("dark"),
              "dark" == t && e("#main").addClass("dark");
          });
        }),
        wp.customize("content_bg", function (e) {
          e.bind(function (e) {
            appendStyle(
              "content_bg",
              ".sticky-add-to-cart--active,#wrapper,#main,#main.dark{background-color: " +
                e +
                "!important}"
            );
          });
        });
    })(jQuery);
  },
  function (e, t) {
    var o;
    (o = jQuery),
      wp.customize("pages_title_bg_image", function (e) {
        e.bind(function (e) {
          o(".page-title-bg .bg-title").css(
            "background-image",
            "url(" + e + ")"
          );
        });
      }),
      wp.customize("pages_title_bg_color", function (e) {
        e.bind(function (e) {
          o(".title-overlay").css("background-color", e);
        });
      });
  },
  function (e, t) {
    var o;
    (o = jQuery),
      wp.customize("footer_1_bg_color", function (e) {
        e.bind(function (e) {
          appendStyle(
            "footer_1_bg_color",
            ".footer-1{background-color: " + e + "}"
          );
        });
      }),
      wp.customize("footer_2_bg_color", function (e) {
        e.bind(function (e) {
          appendStyle(
            "footer_2_bg_color",
            ".footer-2{background-color: " + e + "}"
          );
        });
      }),
      wp.customize("footer_bottom_color", function (e) {
        e.bind(function (e) {
          appendStyle(
            "footer_bottom_color",
            ".absolute-footer, html{background-color: " + e + "}"
          );
        });
      }),
      wp.customize("back_to_top_shape", function (e) {
        e.bind(function (e) {
          var t = o(".back-to-top");
          t.removeClass("circle round"),
            "circle" === e && t.addClass("circle"),
            "square" === e && t.addClass("round");
        });
      }),
      wp.customize("back_to_top_position", function (e) {
        e.bind(function (e) {
          var t = o(".back-to-top");
          t.removeClass("left"), "left" === e && t.addClass("left");
        });
      }),
      wp.customize("back_to_top_mobile", function (e) {
        e.bind(function (e) {
          var t = o(".back-to-top");
          t.removeClass("hide-for-medium"), e || t.addClass("hide-for-medium");
        });
      });
  },
  function (e, t) {
    var o;
    (o = jQuery),
      wp.customize("product_image_width", function (e) {
        e.bind(function (e) {
          o(".product-gallery.col").removeClass(
            "large-5 large-6 large-4 large-8 large-9 large-7 large-3 large-2"
          ),
            o(".product-gallery.col").addClass("large-" + e),
            o(".js-flickity").flickity("resize");
          var t = o(".product-gallery").find(".slide").outerWidth();
          o(
            "#customize-control-product_image_width .selectize-control",
            parent.document
          ).attr(
            "data-helper-label",
            "Recommended product image size: " +
              t +
              "px. You can change this in WooCommerce Image Settings."
          );
        });
      }),
      wp.customize("category_image_height", function (e) {
        e.bind(function (e) {
          appendStyle(
            "category_image_height",
            ".products.has-equal-box-heights .box-image { padding-top:" +
              e +
              "% }"
          );
        });
      }),
      wp.customize("terms_and_conditions_lightbox_buttons", function (e) {
        e.bind(function (e) {
          var t = o(".terms-and-conditions-lightbox__buttons");
          t.length
            ? e
              ? t.show()
              : t.hide()
            : wp.customize.selectiveRefresh.requestFullRefresh();
        });
      });
  },
  function (e, t) {
    jQuery,
      wp.customize("html_custom_css", function (e) {
        e.bind(function (e) {
          appendStyle("html_custom_css", e);
        });
      }),
      wp.customize("html_custom_css_mobile", function (e) {
        e.bind(function (e) {
          appendStyle(
            "html_custom_css_mobile",
            "@media (max-width: 550px){" + e + "}"
          );
        });
      }),
      wp.customize("html_custom_css_tablet", function (e) {
        e.bind(function (e) {
          appendStyle(
            "html_custom_css_tablet",
            "@media (max-width: 850px){" + e + "}"
          );
        });
      });
  },
  function (e, t) {
    var o;
    (o = jQuery),
      wp.customize("cookie_notice_text_color", function (e) {
        e.bind(function (e) {
          var t = o(".flatsome-cookies");
          t.removeClass("dark"), "dark" === e && t.addClass("dark");
        });
      }),
      wp.customize("cookie_notice_button_style", function (e) {
        e.bind(function (e) {
          var t = o(".flatsome-cookies .button");
          t.removeClass("is-outline is-shade is-underline is-link"),
            e && t.addClass("is-" + e);
        });
      });
  },
]);
