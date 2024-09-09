!(function () {
  var a,
    n,
    l,
    s,
    t,
    o,
    e,
    d,
    c,
    r,
    i,
    m,
    u,
    g,
    y,
    b,
    p = document.querySelector(".navbar-menu").innerHTML,
    E = "en",
    h = localStorage.getItem("language");
  function f() {
    v(null === h ? E : h);
    var e = document.getElementsByClassName("language");
    e &&
      Array.from(e).forEach(function (t) {
        t.addEventListener("click", function (e) {
          v(t.getAttribute("data-lang"));
        });
      });
  }
  function v(e) {
    if (document.getElementById("header-lang-img")) {
      switch (e) {
        case "en":
          document.getElementById("header-lang-img").src =
            "assets/images/flags/us.svg";
          break;
        case "sp":
          document.getElementById("header-lang-img").src =
            "assets/images/flags/spain.svg";
          break;
        case "gr":
          document.getElementById("header-lang-img").src =
            "assets/images/flags/germany.svg";
          break;
        case "it":
          document.getElementById("header-lang-img").src =
            "assets/images/flags/italy.svg";
          break;
        case "ru":
          document.getElementById("header-lang-img").src =
            "assets/images/flags/russia.svg";
          break;
        case "ch":
          document.getElementById("header-lang-img").src =
            "assets/images/flags/china.svg";
          break;
        case "fr":
          document.getElementById("header-lang-img").src =
            "assets/images/flags/french.svg";
          break;
        case "ar":
          document.getElementById("header-lang-img").src =
            "assets/images/flags/ae.svg";
          break;
        default:
          return void console.error("Unsupported language selected:", e);
      }
      localStorage.setItem("language", e),
        null == (h = localStorage.getItem("language")) && v(E),
        (t = new XMLHttpRequest()).open("GET", "assets/lang/" + h + ".json"),
        (t.onreadystatechange = function () {
          var a;
          4 === this.readyState &&
            200 === this.status &&
            ((a = JSON.parse(this.responseText)),
            Object.keys(a).forEach(function (t) {
              var e = document.querySelectorAll("[data-key='" + t + "']");
              Array.from(e).forEach(function (e) {
                e.textContent = a[t];
              });
            }));
        }),
        t.send();
    }
    var t;
  }
  function w() {
    var e = document.querySelectorAll(".navbar-nav .collapse");
    e &&
      e.forEach(function (t) {
        const a = new bootstrap.Collapse(t, { toggle: !1 });
        t.addEventListener("show.bs.collapse", function (e) {
          e.stopPropagation();
          e = t.parentElement.closest(".collapse");
          e
            ? e.querySelectorAll(".collapse").forEach(function (e) {
                e = bootstrap.Collapse.getInstance(e);
                e !== a && e.hide();
              })
            : (function (e) {
                for (var t = [], a = e.parentNode.firstChild; a; )
                  1 === a.nodeType && a !== e && t.push(a), (a = a.nextSibling);
                return t;
              })(t.parentElement).forEach(function (e) {
                2 < e.childNodes.length &&
                  e.firstElementChild.setAttribute("aria-expanded", "false"),
                  e.querySelectorAll("*[id]").forEach(function (e) {
                    e.classList.remove("show"),
                      2 < e.childNodes.length &&
                        e.querySelectorAll("ul li a").forEach(function (e) {
                          e.hasAttribute("aria-expanded") &&
                            e.setAttribute("aria-expanded", "false");
                        });
                  });
              });
        });
      });
  }
  function S() {
    var n,
      e = document.documentElement.getAttribute("data-layout"),
      t = sessionStorage.getItem("defaultAttribute"),
      t = JSON.parse(t);
    !t ||
      ("twocolumn" != e && "twocolumn" != t["data-layout"]) ||
      (document.querySelector(".navbar-menu") &&
        (document.querySelector(".navbar-menu").innerHTML = p),
      ((n = document.createElement("ul")).innerHTML =
        '<a href="index.html" class="logo"><img src="assets/images/logo-sm.png" alt="" height="22"></a>'),
      Array.from(
        document.getElementById("navbar-nav").querySelectorAll(".menu-link")
      ).forEach(function (e) {
        n.className = "twocolumn-iconview";
        var t = document.createElement("li"),
          a = e;
        a.querySelectorAll("span").forEach(function (e) {
          e.classList.add("d-none");
        }),
          e.parentElement.classList.contains("twocolumn-item-show") &&
            e.classList.add("active"),
          t.appendChild(a),
          n.appendChild(t),
          a.classList.contains("nav-link") &&
            a.classList.replace("nav-link", "nav-icon"),
          a.classList.remove("collapsed", "menu-link");
      }),
      (e = (e =
        "/" == location.pathname
          ? "index.html"
          : location.pathname.substring(1)).substring(
        e.lastIndexOf("/") + 1
      )) &&
        (t = document
          .getElementById("navbar-nav")
          .querySelector('[href="' + e + '"]')) &&
        (e = t.closest(".collapse.menu-dropdown")) &&
        (e.classList.add("show"),
        e.parentElement.children[0].classList.add("active"),
        e.parentElement.children[0].setAttribute("aria-expanded", "true"),
        e.parentElement.closest(".collapse.menu-dropdown")) &&
        (e.parentElement.closest(".collapse").classList.add("show"),
        e.parentElement.closest(".collapse").previousElementSibling &&
          e.parentElement
            .closest(".collapse")
            .previousElementSibling.classList.add("active"),
        e.parentElement.parentElement.parentElement.parentElement.closest(
          ".collapse.menu-dropdown"
        )) &&
        (e.parentElement.parentElement.parentElement.parentElement
          .closest(".collapse")
          .classList.add("show"),
        e.parentElement.parentElement.parentElement.parentElement.closest(
          ".collapse"
        ).previousElementSibling) &&
        e.parentElement.parentElement.parentElement.parentElement
          .closest(".collapse")
          .previousElementSibling.classList.add("active"),
      (document.getElementById("two-column-menu").innerHTML = n.outerHTML),
      Array.from(
        document.querySelector("#two-column-menu ul").querySelectorAll("li a")
      ).forEach(function (a) {
        var n = (n =
          "/" == location.pathname
            ? "index.html"
            : location.pathname.substring(1)).substring(n.lastIndexOf("/") + 1);
        a.addEventListener("click", function (e) {
          var t;
          (n != "/" + a.getAttribute("href") ||
            a.getAttribute("data-bs-toggle")) &&
            document.body.classList.contains("twocolumn-panel") &&
            document.body.classList.remove("twocolumn-panel"),
            document
              .getElementById("navbar-nav")
              .classList.remove("twocolumn-nav-hide"),
            document.querySelector(".hamburger-icon").classList.remove("open"),
            ((e.target && e.target.matches("a.nav-icon")) ||
              (e.target && e.target.matches("i"))) &&
              (null !==
                document.querySelector(
                  "#two-column-menu ul .nav-icon.active"
                ) &&
                document
                  .querySelector("#two-column-menu ul .nav-icon.active")
                  .classList.remove("active"),
              (e.target.matches("i")
                ? e.target.closest("a")
                : e.target
              ).classList.add("active"),
              0 <
                (t = document.getElementsByClassName("twocolumn-item-show"))
                  .length && t[0].classList.remove("twocolumn-item-show"),
              (t = (e.target.matches("i") ? e.target.closest("a") : e.target)
                .getAttribute("href")
                .slice(1)),
              document.getElementById(t)) &&
              document
                .getElementById(t)
                .parentElement.classList.add("twocolumn-item-show");
        }),
          n != "/" + a.getAttribute("href") ||
            a.getAttribute("data-bs-toggle") ||
            (a.classList.add("active"),
            document
              .getElementById("navbar-nav")
              .classList.add("twocolumn-nav-hide"),
            document.querySelector(".hamburger-icon") &&
              document.querySelector(".hamburger-icon").classList.add("open"));
      }),
      "horizontal" !== document.documentElement.getAttribute("data-layout") &&
        ((t = new SimpleBar(document.getElementById("navbar-nav"))) &&
          t.getContentElement(),
        (e = new SimpleBar(
          document.getElementsByClassName("twocolumn-iconview")[0]
        ))) &&
        e.getContentElement());
  }
  function L() {
    "vertical" == document.documentElement.getAttribute("data-layout") &&
      ((document.getElementById("two-column-menu").innerHTML = ""),
      document.querySelector(".navbar-menu") &&
        (document.querySelector(".navbar-menu").innerHTML = p),
      document.getElementById("scrollbar").setAttribute("data-simplebar", ""),
      document.getElementById("navbar-nav").setAttribute("data-simplebar", ""),
      document.getElementById("scrollbar").classList.add("h-100")),
      "twocolumn" == document.documentElement.getAttribute("data-layout") &&
        (document.getElementById("scrollbar").removeAttribute("data-simplebar"),
        document.getElementById("scrollbar").classList.remove("h-100"));
  }
  function N() {
    var e = document.documentElement.clientWidth;
    e < 1025 && 767 < e
      ? (document.body.classList.remove("twocolumn-panel"),
        "twocolumn" == sessionStorage.getItem("data-layout") &&
          (document.documentElement.setAttribute("data-layout", "twocolumn"),
          document.getElementById("customizer-layout03") &&
            document.getElementById("customizer-layout03").click(),
          S(),
          I(),
          w()),
        "vertical" == sessionStorage.getItem("data-layout") &&
          document.documentElement.setAttribute("data-sidebar-size", "sm"),
        "horizontal" != sessionStorage.getItem("data-layout") &&
          document.documentElement.setAttribute("data-sidebar-size", "lg"),
        document.querySelector(".hamburger-icon") &&
          document.querySelector(".hamburger-icon").classList.add("open"))
      : 1025 <= e
      ? (document.body.classList.remove("twocolumn-panel"),
        "twocolumn" == sessionStorage.getItem("data-layout") &&
          (document.documentElement.setAttribute("data-layout", "twocolumn"),
          document.getElementById("customizer-layout03") &&
            document.getElementById("customizer-layout03").click(),
          S(),
          I(),
          w()),
        "vertical" == sessionStorage.getItem("data-layout") &&
          document.documentElement.setAttribute(
            "data-sidebar-size",
            sessionStorage.getItem("data-sidebar-size")
          ),
        "horizontal" == sessionStorage.getItem("data-layout") && k(),
        document.querySelector(".hamburger-icon") &&
          document.querySelector(".hamburger-icon").classList.remove("open"))
      : e <= 767 &&
        (document.body.classList.remove("vertical-sidebar-enable"),
        document.body.classList.add("twocolumn-panel"),
        "twocolumn" == sessionStorage.getItem("data-layout") &&
          (document.documentElement.setAttribute("data-layout", "vertical"),
          B("vertical"),
          w()),
        "horizontal" != sessionStorage.getItem("data-layout") &&
          document.documentElement.setAttribute("data-sidebar-size", "lg"),
        document.querySelector(".hamburger-icon")) &&
        document.querySelector(".hamburger-icon").classList.add("open"),
      D();
  }
  function D() {
    var e = document.querySelectorAll("#navbar-nav > li.nav-item");
    Array.from(e).forEach(function (e) {
      e.addEventListener("click", O.bind(this), !1),
        e.addEventListener("mouseover", O.bind(this), !1);
    });
  }
  function O(e) {
    var t,
      a,
      n,
      o,
      e = e.target,
      l = e.nextElementSibling || e.parentElement.nextElementSibling;
    e &&
      l &&
      ((e = l.getBoundingClientRect()),
      (o = l.offsetWidth),
      (t = l.offsetHeight),
      (a = window.innerWidth),
      (n = window.innerHeight),
      (o = e.left + o),
      (e = e.top + t),
      a < o || n < e) &&
      l.classList.contains("menu-dropdown") &&
      l.classList.add("dropdown-custom-right");
  }
  function G() {
    var e = document.documentElement.clientWidth;
    767 < e &&
      document.querySelector(".hamburger-icon").classList.toggle("open"),
      "horizontal" === document.documentElement.getAttribute("data-layout") &&
        (document.body.classList.contains("menu")
          ? document.body.classList.remove("menu")
          : document.body.classList.add("menu")),
      "vertical" === document.documentElement.getAttribute("data-layout") &&
        (e < 1025 && 767 < e
          ? (document.body.classList.remove("vertical-sidebar-enable"),
            "sm" == document.documentElement.getAttribute("data-sidebar-size")
              ? document.documentElement.setAttribute("data-sidebar-size", "")
              : document.documentElement.setAttribute(
                  "data-sidebar-size",
                  "sm"
                ))
          : 1025 < e
          ? (document.body.classList.remove("vertical-sidebar-enable"),
            "lg" == document.documentElement.getAttribute("data-sidebar-size")
              ? document.documentElement.setAttribute("data-sidebar-size", "sm")
              : document.documentElement.setAttribute(
                  "data-sidebar-size",
                  "lg"
                ))
          : e <= 767 &&
            (document.body.classList.add("vertical-sidebar-enable"),
            document.documentElement.setAttribute("data-sidebar-size", "lg"))),
      "twocolumn" == document.documentElement.getAttribute("data-layout") &&
        (document.body.classList.contains("twocolumn-panel")
          ? document.body.classList.remove("twocolumn-panel")
          : document.body.classList.add("twocolumn-panel"));
  }
  function R() {
    window.addEventListener("resize", N),
      N(),
      document.addEventListener("scroll", function () {
        var e;
        (e = document.getElementById("page-topbar")) &&
          (50 <= document.body.scrollTop ||
          50 <= document.documentElement.scrollTop
            ? e.classList.add("topbar-shadow")
            : e.classList.remove("topbar-shadow"));
      }),
      window.addEventListener("load", function () {
        var e;
        ("twocolumn" == document.documentElement.getAttribute("data-layout")
          ? I
          : A)(),
          (e = document.getElementsByClassName("vertical-overlay")) &&
            Array.from(e).forEach(function (e) {
              e.addEventListener("click", function () {
                document.body.classList.remove("vertical-sidebar-enable"),
                  "twocolumn" == sessionStorage.getItem("data-layout")
                    ? document.body.classList.add("twocolumn-panel")
                    : document.documentElement.setAttribute(
                        "data-sidebar-size",
                        sessionStorage.getItem("data-sidebar-size")
                      );
              });
            }),
          W();
      }),
      document.getElementById("topnav-hamburger-icon") &&
        document
          .getElementById("topnav-hamburger-icon")
          .addEventListener("click", G);
    var e = sessionStorage.getItem("defaultAttribute"),
      e = JSON.parse(e),
      t = document.documentElement.clientWidth;
    "twocolumn" == e["data-layout"] &&
      t < 767 &&
      Array.from(
        document.getElementById("two-column-menu").querySelectorAll("li")
      ).forEach(function (e) {
        e.addEventListener("click", function (e) {
          document.body.classList.remove("twocolumn-panel");
        });
      });
  }
  function I() {
    var e,
      t,
      a =
        "/" == location.pathname
          ? "index.html"
          : location.pathname.substring(1);
    (a = a.substring(a.lastIndexOf("/") + 1)) &&
      (document.body.classList.contains("twocolumn-panel") &&
        document
          .getElementById("two-column-menu")
          .querySelector('.nav-icon[href="' + a + '"]')
          .classList.add("active"),
      (a = document
        .getElementById("navbar-nav")
        .querySelector('[href="' + a + '"]'))
        ? (a.classList.add("active"),
          (t = (
            (e = a.closest(".collapse.menu-dropdown")) &&
            e.parentElement.closest(".collapse.menu-dropdown")
              ? (e.classList.add("show"),
                e.parentElement.children[0].classList.add("active"),
                e.parentElement
                  .closest(".collapse.menu-dropdown")
                  .parentElement.classList.add("twocolumn-item-show"),
                e.parentElement.parentElement.parentElement.parentElement.closest(
                  ".collapse.menu-dropdown"
                ) &&
                  ((t =
                    e.parentElement.parentElement.parentElement.parentElement
                      .closest(".collapse.menu-dropdown")
                      .getAttribute("id")),
                  e.parentElement.parentElement.parentElement.parentElement
                    .closest(".collapse.menu-dropdown")
                    .parentElement.classList.add("twocolumn-item-show"),
                  e.parentElement
                    .closest(".collapse.menu-dropdown")
                    .parentElement.classList.remove("twocolumn-item-show"),
                  document
                    .getElementById("two-column-menu")
                    .querySelector('[href="#' + t + '"]')) &&
                  document
                    .getElementById("two-column-menu")
                    .querySelector('[href="#' + t + '"]')
                    .classList.add("active"),
                e.parentElement.closest(".collapse.menu-dropdown"))
              : (a
                  .closest(".collapse.menu-dropdown")
                  .parentElement.classList.add("twocolumn-item-show"),
                e)
          ).getAttribute("id")),
          document
            .getElementById("two-column-menu")
            .querySelector('[href="#' + t + '"]') &&
            document
              .getElementById("two-column-menu")
              .querySelector('[href="#' + t + '"]')
              .classList.add("active"))
        : document.body.classList.add("twocolumn-panel"));
  }
  function A() {
    var e =
      "/" == location.pathname ? "index.html" : location.pathname.substring(1);
    (e = e.substring(e.lastIndexOf("/") + 1)) &&
      ((e = document
        .getElementById("navbar-nav")
        .querySelector('[href="' + e + '"]')) &&
        (e.classList.add("active"),
        (e = e.closest(".collapse.menu-dropdown"))) &&
        (e.classList.add("show"),
        e.parentElement.children[0].classList.add("active"),
        e.parentElement.children[0].setAttribute("aria-expanded", "true"),
        e.parentElement.closest(".collapse.menu-dropdown")) &&
        (e.parentElement.closest(".collapse").classList.add("show"),
        e.parentElement.closest(".collapse").previousElementSibling &&
          e.parentElement
            .closest(".collapse")
            .previousElementSibling.classList.add("active"),
        e.parentElement.parentElement.parentElement.parentElement.closest(
          ".collapse.menu-dropdown"
        )) &&
        (e.parentElement.parentElement.parentElement.parentElement
          .closest(".collapse")
          .classList.add("show"),
        e.parentElement.parentElement.parentElement.parentElement.closest(
          ".collapse"
        ).previousElementSibling) &&
        (e.parentElement.parentElement.parentElement.parentElement
          .closest(".collapse")
          .previousElementSibling.classList.add("active"),
        "horizontal" == document.documentElement.getAttribute("data-layout")) &&
        e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.closest(
          ".collapse"
        ) &&
        e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
          .closest(".collapse")
          .previousElementSibling.classList.add("active"),
      J());
  }
  function k() {
    var e = document.getElementById("two-column-menu"),
      e = (e && (e.innerHTML = ""), document.querySelector(".navbar-menu")),
      e = (e && (e.innerHTML = p), document.getElementById("scrollbar")),
      t =
        (e.removeAttribute("data-simplebar"),
        document.getElementById("navbar-nav"));
    t.removeAttribute("data-simplebar"), e.classList.remove("h-100");
    const a = t.parentElement.clientWidth,
      n = document.querySelectorAll("ul.navbar-nav > li.nav-item");
    let o = "",
      l = "",
      s = 0;
    Array.prototype.forEach.call(n, function (e, t) {
      (s += e.offsetWidth) + 100 > a && 0 != a
        ? ((o += e.outerHTML), e.remove())
        : (l = e),
        t + 1 === n.length &&
          l.insertAdjacentHTML &&
          o &&
          l.insertAdjacentHTML(
            "afterend",
            '<li class="nav-item">\t\t\t\t\t\t<a class="nav-link" href="#sidebarMore" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarMore">\t\t\t\t\t\t\t<i class="ri-briefcase-2-line"></i> More\t\t\t\t\t\t</a>\t\t\t\t\t\t<div class="collapse menu-dropdown dropdown-custom-right" id="sidebarMore"><ul class="nav nav-sm flex-column">' +
              o +
              "</ul></div>\t\t\t\t\t</li>"
          );
    }),
      D();
  }
  function B(e) {
    "vertical" == e
      ? ((document.getElementById("two-column-menu").innerHTML = ""),
        document.querySelector(".navbar-menu") &&
          (document.querySelector(".navbar-menu").innerHTML = p),
        document.getElementById("theme-settings-offcanvas") &&
          ((document.getElementById("sidebar-size").style.display = "block"),
          (document.getElementById("sidebar-view").style.display = "block"),
          (document.getElementById("sidebar-color").style.display = "block"),
          document.getElementById("sidebar-img") &&
            (document.getElementById("sidebar-img").style.display = "block"),
          (document.getElementById("layout-position").style.display = "block"),
          (document.getElementById("layout-width").style.display = "block")),
        L(),
        A(),
        W(),
        J())
      : "horizontal" == e
      ? (k(),
        document.getElementById("theme-settings-offcanvas") &&
          ((document.getElementById("sidebar-size").style.display = "none"),
          (document.getElementById("sidebar-view").style.display = "none"),
          (document.getElementById("sidebar-color").style.display = "none"),
          document.getElementById("sidebar-img") &&
            (document.getElementById("sidebar-img").style.display = "none"),
          (document.getElementById("layout-position").style.display = "block"),
          (document.getElementById("layout-width").style.display = "block")),
        A())
      : "twocolumn" == e &&
        (document.getElementById("scrollbar").removeAttribute("data-simplebar"),
        document.getElementById("scrollbar").classList.remove("h-100"),
        document.getElementById("theme-settings-offcanvas")) &&
        ((document.getElementById("sidebar-size").style.display = "none"),
        (document.getElementById("sidebar-view").style.display = "none"),
        (document.getElementById("sidebar-color").style.display = "block"),
        document.getElementById("sidebar-img") &&
          (document.getElementById("sidebar-img").style.display = "block"),
        (document.getElementById("layout-position").style.display = "none"),
        (document.getElementById("layout-width").style.display = "none"));
  }
  function W() {
    document
      .getElementById("vertical-hover")
      .addEventListener("click", function () {
        "sm-hover" ===
        document.documentElement.getAttribute("data-sidebar-size")
          ? document.documentElement.setAttribute(
              "data-sidebar-size",
              "sm-hover-active"
            )
          : (document.documentElement.getAttribute("data-sidebar-size"),
            document.documentElement.setAttribute(
              "data-sidebar-size",
              "sm-hover"
            ));
      });
  }
  function q(e, t) {
    document.documentElement.setAttribute(e, t);
    {
      var n = e,
        o = t,
        a;
      Array.from(document.querySelectorAll(`input[name="${n}"]`)).forEach(
        function (a) {
          (a.checked = o === a.value),
            a.addEventListener("change", function () {
              var e;
              if (
                (document.documentElement.setAttribute(n, a.value),
                sessionStorage.setItem(n, a.value),
                f(),
                "data-layout-width" === n &&
                  ("boxed" === a.value
                    ? (document.documentElement.setAttribute(
                        "data-sidebar-size",
                        "sm-hover"
                      ),
                      sessionStorage.setItem("data-sidebar-size", "sm-hover"),
                      (document.getElementById(
                        "sidebar-size-small-hover"
                      ).checked = !0))
                    : "fluid" === a.value &&
                      (document.documentElement.setAttribute(
                        "data-sidebar-size",
                        "lg"
                      ),
                      sessionStorage.setItem("data-sidebar-size", "lg"),
                      (document.getElementById("sidebar-size-default").checked =
                        !0))),
                "data-layout" === n &&
                  ("vertical" === a.value
                    ? (B("vertical"), w())
                    : "horizontal" === a.value
                    ? (B("horizontal"),
                      (e = document.getElementById("sidebarimg-none")) &&
                        e.click(),
                      setTimeout(() => {
                        k();
                      }, 50))
                    : "twocolumn" === a.value &&
                      (B("twocolumn"),
                      document.documentElement.setAttribute(
                        "data-layout-width",
                        "fluid"
                      ),
                      document.getElementById("layout-width-fluid").click(),
                      S(),
                      I(),
                      w())),
                "data-bs-theme" === n &&
                  (("light" === a.value
                    ? document.getElementById("topbar-color-light")
                    : document.getElementById("topbar-color-dark")
                  )?.click(),
                  window.dispatchEvent(new Event("resize"))),
                "data-preloader" === n)
              ) {
                const t = document.getElementById("preloader");
                "enable" === a.value && t
                  ? (document.documentElement.setAttribute(
                      "data-preloader",
                      "enable"
                    ),
                    setTimeout(() => {
                      (t.style.opacity = "0"),
                        (t.style.visibility = "hidden"),
                        document.getElementById("customizerclose-btn").click();
                    }, 1e3))
                  : "disable" === a.value &&
                    (document.documentElement.setAttribute(
                      "data-preloader",
                      "disable"
                    ),
                    document.getElementById("customizerclose-btn").click());
              }
            });
        }
      ),
        document.getElementById("collapseBgGradient") &&
          Array.from(
            document.querySelectorAll("#collapseBgGradient .form-check input")
          ).forEach(function (e) {
            var t = document.getElementById("collapseBgGradient");
            e.checked && new bootstrap.Collapse(t, { toggle: !1 }).show(),
              document.querySelector(
                "[data-bs-target='#collapseBgGradient']"
              ) &&
                document
                  .querySelector("[data-bs-target='#collapseBgGradient']")
                  .addEventListener("click", function (e) {
                    document.getElementById("sidebar-color-gradient").click();
                  });
          });
      const l = document.querySelector(
          "[data-bs-target='#collapseBgGradient']"
        ),
        s = document.querySelector(
          "#collapseBgGradient .form-check input:checked"
        );
      l &&
        (s ? l.classList.add("active") : l.classList.remove("active"),
        Array.from(document.querySelectorAll("[name='data-sidebar']")).forEach(
          function (e) {
            e.addEventListener("change", function () {
              document.querySelector(
                "#collapseBgGradient .form-check input:checked"
              )
                ? l.classList.add("active")
                : l.classList.remove("active");
            });
          }
        ));
    }
    sessionStorage.setItem(e, t);
  }
  function P(e) {
    if (e == e) {
      switch (e["data-layout"]) {
        case "vertical":
          q("data-layout", "vertical"), B("vertical"), w();
          break;
        case "horizontal":
          q("data-layout", "horizontal"), B("horizontal");
          break;
        case "twocolumn":
          q("data-layout", "twocolumn"), B("twocolumn");
          break;
        default:
          var t = sessionStorage.getItem("data-layout");
          "horizontal" === t
            ? (q("data-layout", "horizontal"), B("horizontal"))
            : "twocolumn" === t
            ? (q("data-layout", "twocolumn"), B("twocolumn"))
            : (q("data-layout", "vertical"), B("vertical"), w());
      }
      document.getElementById("fontsLink");
      switch (e["data-theme"]) {
        case "default":
          document.documentElement.setAttribute("data-theme", "default"),
            T("data-theme", "default"),
            sessionStorage.setItem("data-theme", "default"),
            x("default");
          break;
        case "material":
          document.documentElement.setAttribute("data-theme", "material"),
            T("data-theme", "material"),
            sessionStorage.setItem("data-theme", "material"),
            x("material");
          break;
        case "creative":
          document.documentElement.setAttribute("data-theme", "creative"),
            T("data-theme", "creative"),
            sessionStorage.setItem("data-theme", "creative"),
            x("creative");
          break;
        case "minimal":
          document.documentElement.setAttribute("data-theme", "minimal"),
            T("data-theme", "minimal"),
            sessionStorage.setItem("data-theme", "minimal"),
            x("minimal");
          break;
        case "modern":
          document.documentElement.setAttribute("data-theme", "modern"),
            T("data-theme", "modern"),
            sessionStorage.setItem("data-theme", "modern"),
            x("modern");
          break;
        case "interaction":
          document.documentElement.setAttribute("data-theme", "interaction"),
            T("data-theme", "interaction"),
            sessionStorage.setItem("data-theme", "interaction"),
            x("interaction");
          break;
        default:
          var a = [
              "default",
              "material",
              "creative",
              "minimal",
              "modern",
              "interaction",
            ],
            n = sessionStorage.getItem("data-theme");
          a.includes(n)
            ? (x(n),
              document.documentElement.setAttribute("data-theme", n),
              T("data-theme", n),
              sessionStorage.setItem("data-theme", n))
            : (document.documentElement.setAttribute("data-theme", "default"),
              T("data-theme", "default"),
              sessionStorage.setItem("data-theme", "default"),
              x("default"));
      }
      switch (e["data-topbar"]) {
        case "light":
          q("data-topbar", "light");
          break;
        case "dark":
          q("data-topbar", "dark");
          break;
        default:
          q("data-topbar", "light");
      }
      switch (e["data-layout-style"]) {
        case "default":
          q("data-layout-style", "default");
          break;
        case "detached":
          q("data-layout-style", "detached");
          break;
        default:
          q(
            "data-layout-style",
            sessionStorage.getItem("data-layout-style") ?? "default"
          );
      }
      switch (e["data-sidebar-size"]) {
        case "lg":
          q("data-sidebar-size", "lg");
          break;
        case "sm":
          q("data-sidebar-size", "sm");
          break;
        case "md":
          q("data-sidebar-size", "md");
          break;
        case "sm-hover":
          q("data-sidebar-size", "sm-hover");
          break;
        default:
          q("data-sidebar-size", "lg");
      }
      switch (e["data-bs-theme"]) {
        case "light":
          q("data-bs-theme", "light");
          break;
        case "dark":
          q("data-bs-theme", "dark");
          break;
        default:
          q("data-bs-theme", "light");
      }
      switch (e["data-layout-width"]) {
        case "fluid":
          q("data-layout-width", "fluid");
          break;
        case "boxed":
          q("data-layout-width", "boxed");
          break;
        default:
          q(
            "data-layout-width",
            sessionStorage.getItem("data-layout-width") ?? "fluid"
          );
      }
      switch (e["data-sidebar"]) {
        case "light":
          q("data-sidebar", "light");
          break;
        case "dark":
          q("data-sidebar", "dark");
          break;
        case "gradient":
          q("data-sidebar", "gradient");
          break;
        case "gradient-2":
          q("data-sidebar", "gradient-2");
          break;
        case "gradient-3":
          q("data-sidebar", "gradient-3");
          break;
        case "gradient-4":
          q("data-sidebar", "gradient-4");
          break;
        default:
          q("data-sidebar", "dark");
      }
      switch (e["data-sidebar-image"]) {
        case "none":
          q("data-sidebar-image", "none");
          break;
        case "img-1":
          q("data-sidebar-image", "img-1");
          break;
        case "img-2":
          q("data-sidebar-image", "img-2");
          break;
        case "img-3":
          q("data-sidebar-image", "img-3");
          break;
        case "img-4":
          q("data-sidebar-image", "img-4");
          break;
        default:
          q(
            "data-sidebar-image",
            sessionStorage.getItem("data-sidebar-image") ?? "none"
          );
      }
      switch (e["data-layout-position"]) {
        case "fixed":
          q("data-layout-position", "fixed");
          break;
        case "scrollable":
          q("data-layout-position", "scrollable");
          break;
        default:
          q(
            "data-layout-position",
            sessionStorage.getItem("data-layout-position") ?? "fixed"
          );
      }
      switch (e["data-preloader"]) {
        case "disable":
          q("data-preloader", "disable");
          break;
        case "enable":
          j();
          break;
        default:
          sessionStorage.getItem("data-preloader") &&
          "disable" == sessionStorage.getItem("data-preloader")
            ? q("data-preloader", "disable")
            : "enable" == sessionStorage.getItem("data-preloader")
            ? j()
            : document.documentElement.setAttribute(
                "data-preloader",
                "disable"
              );
      }
    }
  }
  function j() {
    q("data-preloader", "enable");
    var e = document.getElementById("preloader");
    e &&
      window.addEventListener("load", function () {
        (e.style.opacity = "0"), (e.style.visibility = "hidden");
      });
  }
  function J() {
    var e,
      t = document.getElementById("navbar-nav");
    t &&
      300 <
        (t = (t = t.querySelector(".nav-item .active")) ? t.offsetTop : 0) &&
      (e = document.getElementsByClassName("app-menu")[0] || "") &&
      e.querySelector(".simplebar-content-wrapper") &&
      (e.querySelector(".simplebar-content-wrapper").scrollTop =
        330 === t ? t + 85 : t);
  }
  function x(e) {
    var t = document.getElementById("fontsLink");
    switch (e) {
      case "default":
        t.setAttribute(
          "href",
          "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        );
        break;
      case "material":
        t.setAttribute(
          "href",
          "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        );
        break;
      case "creative":
        t.setAttribute(
          "href",
          "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
        );
        break;
      case "interaction":
        t.setAttribute(
          "href",
          "https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap"
        );
        break;
      case "minimal":
        t.setAttribute(
          "href",
          "https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&display=swap"
        );
        break;
      case "modern":
        t.setAttribute(
          "href",
          "https://fonts.googleapis.com/css2?family=Gantari:wght@300;400;500;600;700&display=swap"
        );
        break;
      default:
        t.setAttribute(
          "href",
          "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        );
    }
  }
  function T(t, a) {
    Array.from(document.querySelectorAll(`input[name="${t}"]`)).forEach(
      function (e) {
        (e.checked = a === e.value),
          e.addEventListener("change", function () {
            x(e.value),
              document.documentElement.setAttribute(t, e.value),
              ("minimal" === e.value
                ? document.getElementById("sidebar-color-light")
                : document.getElementById("sidebar-color-dark")
              ).click(),
              sessionStorage.setItem(t, e.value),
              setTimeout(() => {
                window.dispatchEvent(new Event("resize"));
              }, 100);
          });
      }
    );
  }
  function V(e, t, a, n) {
    var o = document.getElementById(a);
    n.setAttribute(e, t),
      o &&
        (document.getElementById(a).click(),
        "light" == t && (t = "dark"),
        document.getElementById("sidebar-color-" + t).click());
  }
  function z() {
    document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement ||
      document.body.classList.remove("fullscreen-enable");
  }
  sessionStorage.getItem("defaultAttribute")
    ? ((a = {}),
      [
        "data-theme",
        "data-layout",
        "data-sidebar-size",
        "data-bs-theme",
        "data-layout-width",
        "data-sidebar",
        "data-sidebar-image",
        "data-layout-position",
        "data-layout-style",
        "data-topbar",
        "data-preloader",
      ].forEach(function (e) {
        a[e] = sessionStorage.getItem(e);
      }),
      P(a))
    : ((d = document.documentElement.attributes),
      (a = {}),
      Array.from(d).forEach(function (e) {
        var t;
        e &&
          e.nodeName &&
          "undefined" != e.nodeName &&
          ((t = e.nodeName),
          (a[t] = e.nodeValue),
          sessionStorage.setItem(t, e.nodeValue));
      }),
      sessionStorage.setItem("defaultAttribute", JSON.stringify(a)),
      P(a),
      (d = document.querySelector(
        '.btn[data-bs-target="#theme-settings-offcanvas"]'
      )) && d.click()),
    S(),
    (n = document.getElementById("search-close-options")),
    (l = document.getElementById("search-dropdown")),
    (s = document.getElementById("search-options")) &&
      (s.addEventListener("focus", function () {
        0 < s.value.length
          ? (l.classList.add("show"), n.classList.remove("d-none"))
          : (l.classList.remove("show"), n.classList.add("d-none"));
      }),
      s.addEventListener("keyup", function (e) {
        var o, t;
        0 < s.value.length
          ? (l.classList.add("show"),
            n.classList.remove("d-none"),
            (o = s.value.toLowerCase()),
            (t = document.getElementsByClassName("notify-item")),
            Array.from(t).forEach(function (e) {
              var t,
                a,
                n = "";
              e.querySelector("h6")
                ? ((t = e
                    .getElementsByTagName("span")[0]
                    .innerText.toLowerCase()),
                  (n = (a = e
                    .querySelector("h6")
                    .innerText.toLowerCase()).includes(o)
                    ? a
                    : t))
                : e.getElementsByTagName("span") &&
                  (n = e
                    .getElementsByTagName("span")[0]
                    .innerText.toLowerCase()),
                n &&
                  (n.includes(o)
                    ? (e.classList.add("d-block"), e.classList.remove("d-none"))
                    : (e.classList.remove("d-block"),
                      e.classList.add("d-none"))),
                Array.from(
                  document.getElementsByClassName("notification-group-list")
                ).forEach(function (e) {
                  0 == e.querySelectorAll(".notify-item.d-block").length
                    ? (e.querySelector(".notification-title").style.display =
                        "none")
                    : (e.querySelector(".notification-title").style.display =
                        "block");
                });
            }))
          : (l.classList.remove("show"), n.classList.add("d-none"));
      }),
      n.addEventListener("click", function () {
        (s.value = ""), l.classList.remove("show"), n.classList.add("d-none");
      }),
      document.body.addEventListener("click", function (e) {
        "search-options" !== e.target.getAttribute("id") &&
          (l.classList.remove("show"), n.classList.add("d-none"));
      })),
    (t = document.getElementById("search-close-options")),
    (o = document.getElementById("search-dropdown-reponsive")),
    (e = document.getElementById("search-options-reponsive")),
    t &&
      o &&
      e &&
      (e.addEventListener("focus", function () {
        0 < e.value.length
          ? (o.classList.add("show"), t.classList.remove("d-none"))
          : (o.classList.remove("show"), t.classList.add("d-none"));
      }),
      e.addEventListener("keyup", function () {
        0 < e.value.length
          ? (o.classList.add("show"), t.classList.remove("d-none"))
          : (o.classList.remove("show"), t.classList.add("d-none"));
      }),
      t.addEventListener("click", function () {
        (e.value = ""), o.classList.remove("show"), t.classList.add("d-none");
      }),
      document.body.addEventListener("click", function (e) {
        "search-options" !== e.target.getAttribute("id") &&
          (o.classList.remove("show"), t.classList.add("d-none"));
      })),
    (d = document.querySelector('[data-toggle="fullscreen"]')) &&
      d.addEventListener("click", function (e) {
        e.preventDefault(),
          document.body.classList.toggle("fullscreen-enable"),
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement
            ? document.exitFullscreen
              ? document.exitFullscreen()
              : document.mozCancelFullScreen
              ? document.mozCancelFullScreen()
              : document.webkitExitFullscreen
              ? document.webkitExitFullscreen()
              : document.msExitFullscreen && document.msExitFullscreen()
            : document.documentElement.requestFullscreen
            ? document.documentElement.requestFullscreen()
            : document.documentElement.mozRequestFullScreen
            ? document.documentElement.mozRequestFullScreen()
            : document.documentElement.webkitRequestFullscreen
            ? document.documentElement.webkitRequestFullscreen(
                Element.ALLOW_KEYBOARD_INPUT
              )
            : document.documentElement.msRequestFullscreen &&
              document.documentElement.msRequestFullscreen();
      }),
    document.addEventListener("fullscreenchange", z),
    document.addEventListener("webkitfullscreenchange", z),
    document.addEventListener("mozfullscreenchange", z),
    document.addEventListener("MSFullscreenChange", z);
  {
    const M = document.documentElement;
    document
      .querySelectorAll("#light-dark-mode .dropdown-item")
      .forEach((a) => {
        a.addEventListener("click", (e) => {
          var t = a.dataset["mode"];
          M.hasAttribute("data-bs-theme") && "auto" !== t
            ? (V("data-bs-theme", t, "layout-mode-" + t, M),
              sessionStorage.setItem("data-layout-auto", "false"))
            : M.hasAttribute("data-bs-theme") &&
              "auto" === t &&
              (V(
                "data-bs-theme",
                (t = window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : "light"),
                "layout-mode-" + t,
                M
              ),
              sessionStorage.setItem("data-layout-auto", "true")),
            M.classList.toggle(
              "mode-auto",
              "true" === sessionStorage.getItem("data-layout-auto")
            );
        });
      }),
      M.classList.toggle(
        "mode-auto",
        "true" === sessionStorage.getItem("data-layout-auto")
      );
  }
  function Y(e) {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function C(e) {
    var t = 0,
      a =
        (Array.from(e.getElementsByClassName("product")).forEach(function (e) {
          Array.from(e.getElementsByClassName("product-line-price")).forEach(
            function (e) {
              t += parseFloat(e.innerHTML);
            }
          );
        }),
        t * r),
      n = t * m,
      o = 0 < t ? i : 0,
      l = t + a + o - n;
    (e.querySelector(".cart-subtotal").innerHTML = u + t.toFixed(2)),
      (e.querySelector(".cart-tax").innerHTML = u + a.toFixed(2)),
      (e.querySelector(".cart-shipping").innerHTML = u + o.toFixed(2)),
      (e.querySelector(".cart-total").innerHTML = u + l.toFixed(2)),
      (e.querySelector(".cart-discount").innerHTML = "-" + u + n.toFixed(2));
  }
  function $(e) {
    var t, a, n, o, l;
    e.closest(".product") &&
      ((t = e.closest(".product")),
      (a = e.closest(".product-list")),
      (t || t.getElementsByClassName("product-price")) &&
        Array.from(t.getElementsByClassName("product-price")).forEach(function (
          e
        ) {
          n = parseFloat(e.innerHTML);
        }),
      e.previousElementSibling &&
      e.previousElementSibling.classList.contains("product-quantity")
        ? (o = e.previousElementSibling.value)
        : e.nextElementSibling &&
          e.nextElementSibling.classList.contains("product-quantity") &&
          (o = e.nextElementSibling.value),
      (l = n * o),
      Array.from(t.getElementsByClassName("product-line-price")).forEach(
        function (e) {
          (e.innerHTML = l.toFixed(2)), C(a);
        }
      ));
  }
  function F() {
    0 < document.querySelectorAll(".notification-item").length
      ? document.querySelectorAll(".notification-title").forEach(function (e) {
          e.style.display = "block";
        })
      : (document.querySelectorAll(".notification-title").forEach(function (e) {
          e.style.display = "none";
        }),
        !document.querySelector(
          "#notificationItemsTabContent .empty-notification-elem"
        ) &&
          document.getElementById("notificationItemsTabContent") &&
          (document.getElementById("notificationItemsTabContent").innerHTML +=
            '<div class="empty-notification-elem text-center px-4">\t\t\t\t\t\t<div class="mt-3 avatar-md mx-auto">\t\t\t\t\t\t\t<div class="avatar-title bg-info-subtle text-info fs-24 rounded-circle">\t\t\t\t\t\t\t<i class="bi bi-bell "></i>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class="pb-3 mt-2">\t\t\t\t\t\t\t<h6 class="fs-lg fw-semibold lh-base">Hey! You have no any notifications </h6>\t\t\t\t\t\t</div>\t\t\t\t\t</div>'));
  }
  R(),
    (y = document.querySelectorAll(".counter-value")).length &&
      y.forEach((e) => {
        const t = +e.getAttribute("data-target"),
          a = t / 250;
        let n = 0;
        const o = () => {
          (n += a) < t
            ? ((e.innerText = Y(n.toFixed(0))), setTimeout(o, 1))
            : (e.innerText = Y(t));
        };
        o();
      }),
    L(),
    (y = document.getElementsByClassName("plus")),
    (b = document.getElementsByClassName("minus")),
    (c = document.getElementsByClassName("product")),
    y &&
      Array.from(y).forEach(function (e) {
        e.addEventListener("click", function (t) {
          parseInt(e.previousElementSibling.value) <
            t.target.previousElementSibling.getAttribute("max") &&
            (t.target.previousElementSibling.value++, c) &&
            Array.from(c).forEach(function (e) {
              $(t.target);
            });
        });
      }),
    b &&
      Array.from(b).forEach(function (e) {
        e.addEventListener("click", function (t) {
          parseInt(e.nextElementSibling.value) >
            t.target.nextElementSibling.getAttribute("min") &&
            (t.target.nextElementSibling.value--, c) &&
            Array.from(c).forEach(function (e) {
              $(t.target);
            });
        });
      }),
    (r = 0.125),
    (i = 65),
    (m = 0.15),
    (u = "$"),
    (g = document.querySelectorAll(".product").length),
    document.querySelectorAll(".cartitem-badge").forEach(function (e) {
      e.innerHTML = g;
    }),
    document.querySelectorAll(".product-list").forEach(function (t) {
      t.querySelectorAll(".product-count").forEach(function (e) {
        e.innerHTML = t.querySelectorAll(".product").length;
      }),
        C(t);
    }),
    document.getElementById("empty-cart") &&
      (document.getElementById("empty-cart").style.display = "none"),
    (document.getElementById("checkout-elem") ||
      document.getElementById("count-table")) &&
      ((document.getElementById("checkout-elem").style.display = "block"),
      (document.getElementById("count-table").style.display = "block")),
    (y = document.getElementById("removeCartModal")) &&
      y.addEventListener("show.bs.modal", function (t) {
        document
          .getElementById("remove-cartproduct")
          .addEventListener("click", function (e) {
            t.relatedTarget.closest(".product").remove(),
              document.getElementById("close-cartmodal").click(),
              document
                .querySelectorAll(".cartitem-badge")
                .forEach(function (e) {
                  e.innerHTML = document.querySelectorAll(".product").length;
                }),
              document.querySelectorAll(".product-list").forEach(function (t) {
                t.querySelectorAll(".product-count").forEach(function (e) {
                  e.innerHTML = t.querySelectorAll(".product").length;
                }),
                  C(t);
              }),
              document.getElementById("empty-cart") &&
                (document.getElementById("empty-cart").style.display =
                  0 == document.querySelectorAll(".product").length
                    ? "block"
                    : "none"),
              (document.getElementById("checkout-elem") ||
                document.getElementById("count-table")) &&
                ((document.getElementById("checkout-elem").style.display =
                  0 == document.querySelectorAll(".product").length
                    ? "none"
                    : "block"),
                (document.getElementById("count-table").style.display =
                  0 == document.querySelectorAll(".product").length
                    ? "none"
                    : "block"));
          });
      }),
    document.getElementsByClassName("notification-check") &&
      (F(),
      Array.from(
        document.querySelectorAll(".notification-check input")
      ).forEach(function (t) {
        t.addEventListener("change", function (e) {
          e.target.closest(".notification-item").classList.toggle("active");
          var t = document.querySelectorAll(
            ".notification-check input:checked"
          ).length;
          e.target.closest(".notification-item").classList.contains("active"),
            (document.getElementById("notification-actions").style.display =
              0 < t ? "block" : "none"),
            (document.getElementById("select-content").innerHTML = t);
        });
        var e = document.getElementById("notificationDropdown");
        e &&
          e.addEventListener("hide.bs.dropdown", function (e) {
            (t.checked = !1),
              document
                .querySelectorAll(".notification-item")
                .forEach(function (e) {
                  e.classList.remove("active");
                }),
              F(),
              (document.getElementById("notification-actions").style.display =
                "");
          });
      }),
      (b = document.getElementById("removeNotificationModal"))) &&
      b.addEventListener("show.bs.modal", function (e) {
        document
          .getElementById("delete-notification")
          .addEventListener("click", function () {
            Array.from(document.querySelectorAll(".notification-item")).forEach(
              function (e) {
                e.classList.contains("active") && e.remove(),
                  Array.from(
                    document.querySelectorAll(".notification-badge")
                  ).forEach(function (e) {
                    e.innerHTML = document.querySelectorAll(
                      ".notification-check input"
                    ).length;
                  }),
                  Array.from(
                    document.querySelectorAll(".notification-unread")
                  ).forEach(function (e) {
                    e.innerHTML = document.querySelectorAll(
                      ".notification-item.unread-message"
                    ).length;
                  });
              }
            ),
              F(),
              document.getElementById("NotificationModalbtn-close").click();
          });
      }),
    Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]')).forEach(
      function (e) {
        new bootstrap.Tooltip(e);
      }
    ),
    Array.from(document.querySelectorAll('[data-bs-toggle="popover"]')).forEach(
      function (e) {
        new bootstrap.Popover(e);
      }
    ),
    (y = document.getElementById("reset-layout")) &&
      y.addEventListener("click", function () {
        sessionStorage.clear(), location.reload();
      }),
    (b = document.querySelectorAll("[data-toast]")),
    Array.from(b).forEach(function (a) {
      a.addEventListener("click", function () {
        var e = {},
          t = a.attributes;
        t["data-toast-text"] &&
          (e.text = t["data-toast-text"].value.toString()),
          t["data-toast-gravity"] &&
            (e.gravity = t["data-toast-gravity"].value.toString()),
          t["data-toast-position"] &&
            (e.position = t["data-toast-position"].value.toString()),
          t["data-toast-className"] &&
            (e.className = t["data-toast-className"].value.toString()),
          t["data-toast-duration"] &&
            (e.duration = t["data-toast-duration"].value.toString()),
          t["data-toast-close"] &&
            (e.close = t["data-toast-close"].value.toString()),
          t["data-toast-style"] &&
            (e.style = t["data-toast-style"].value.toString()),
          t["data-toast-offset"] && (e.offset = t["data-toast-offset"]),
          Toastify({
            newWindow: !0,
            text: e.text,
            gravity: e.gravity,
            position: e.position,
            className: "bg-" + e.className,
            stopOnFocus: !0,
            offset: { x: e.offset ? 50 : 0, y: e.offset ? 10 : 0 },
            duration: e.duration,
            close: "close" == e.close,
            style:
              "style" == e.style
                ? { background: "linear-gradient(to right, #0AB39C, #405189)" }
                : "",
          }).showToast();
      });
    }),
    (b = document.querySelectorAll("[data-choices]")),
    Array.from(b).forEach(function (e) {
      var t = {},
        a = e.attributes;
      a["data-choices-groups"] &&
        (t.placeholderValue = "This is a placeholder set in the config"),
        a["data-choices-search-false"] && (t.searchEnabled = !1),
        a["data-choices-search-true"] && (t.searchEnabled = !0),
        a["data-choices-removeItem"] && (t.removeItemButton = !0),
        a["data-choices-sorting-false"] && (t.shouldSort = !1),
        a["data-choices-sorting-true"] && (t.shouldSort = !0),
        a["data-choices-multiple-remove"] && (t.removeItemButton = !0),
        a["data-choices-limit"] &&
          (t.maxItemCount = a["data-choices-limit"].value.toString()),
        a["data-choices-limit"] &&
          (t.maxItemCount = a["data-choices-limit"].value.toString()),
        a["data-choices-editItem-true"] && (t.maxItemCount = !0),
        a["data-choices-editItem-false"] && (t.maxItemCount = !1),
        a["data-choices-text-unique-true"] && (t.duplicateItemsAllowed = !1),
        a["data-choices-text-disabled-true"] && (t.addItems = !1),
        a["data-choices-text-disabled-true"]
          ? new Choices(e, t).disable()
          : new Choices(e, t);
    }),
    (b = document.querySelectorAll("[data-provider]")),
    Array.from(b).forEach(function (e) {
      var t, a, n;
      "flatpickr" == e.getAttribute("data-provider")
        ? ((t = {}),
          (n = e.attributes)["data-date-format"] &&
            (t.dateFormat = n["data-date-format"].value.toString()),
          n["data-enable-time"] &&
            ((t.enableTime = !0),
            (t.dateFormat = n["data-date-format"].value.toString() + " H:i")),
          n["data-altFormat"] &&
            ((t.altInput = !0),
            (t.altFormat = n["data-altFormat"].value.toString())),
          n["data-minDate"] &&
            ((t.minDate = n["data-minDate"].value.toString()),
            (t.dateFormat = n["data-date-format"].value.toString())),
          n["data-maxDate"] &&
            ((t.maxDate = n["data-maxDate"].value.toString()),
            (t.dateFormat = n["data-date-format"].value.toString())),
          n["data-default-date"] &&
            ((t.defaultDate = n["data-default-date"].value.toString()),
            (t.dateFormat = n["data-date-format"].value.toString())),
          n["data-multiple-date"] &&
            ((t.mode = "multiple"),
            (t.dateFormat = n["data-date-format"].value.toString())),
          n["data-range-date"] &&
            ((t.mode = "range"),
            (t.dateFormat = n["data-date-format"].value.toString())),
          n["data-inline-date"] &&
            ((t.inline = !0),
            (t.defaultDate = n["data-default-date"].value.toString()),
            (t.dateFormat = n["data-date-format"].value.toString())),
          n["data-disable-date"] &&
            ((a = []).push(n["data-disable-date"].value),
            (t.disable = a.toString().split(","))),
          n["data-week-number"] &&
            ((a = []).push(n["data-week-number"].value), (t.weekNumbers = !0)),
          flatpickr(e, t))
        : "timepickr" == e.getAttribute("data-provider") &&
          ((a = {}),
          (n = e.attributes)["data-time-basic"] &&
            ((a.enableTime = !0), (a.noCalendar = !0), (a.dateFormat = "H:i")),
          n["data-time-hrs"] &&
            ((a.enableTime = !0),
            (a.noCalendar = !0),
            (a.dateFormat = "H:i"),
            (a.time_24hr = !0)),
          n["data-min-time"] &&
            ((a.enableTime = !0),
            (a.noCalendar = !0),
            (a.dateFormat = "H:i"),
            (a.minTime = n["data-min-time"].value.toString())),
          n["data-max-time"] &&
            ((a.enableTime = !0),
            (a.noCalendar = !0),
            (a.dateFormat = "H:i"),
            (a.minTime = n["data-max-time"].value.toString())),
          n["data-default-time"] &&
            ((a.enableTime = !0),
            (a.noCalendar = !0),
            (a.dateFormat = "H:i"),
            (a.defaultDate = n["data-default-time"].value.toString())),
          n["data-time-inline"] &&
            ((a.enableTime = !0),
            (a.noCalendar = !0),
            (a.defaultDate = n["data-time-inline"].value.toString()),
            (a.inline = !0)),
          flatpickr(e, a));
    }),
    document
      .querySelectorAll('.dropdown-menu a[data-bs-toggle="tab"]')
      .forEach(function (t) {
        t.addEventListener("click", function (e) {
          e.preventDefault(),
            e.stopPropagation(),
            bootstrap.Tab.getInstance(t).show();
        });
      }),
    f(),
    w();
  let H;
  function _() {
    var e;
    "horizontal" !== document.documentElement.getAttribute("data-layout") &&
      ((e = document.getElementById("navbar-nav")) &&
        (e = new SimpleBar(e)) &&
        e.getContentElement(),
      (e = document.querySelector(".twocolumn-iconview")) &&
        (e = new SimpleBar(e)) &&
        e.getContentElement(),
      clearTimeout(H));
  }
  window.addEventListener("resize", function () {
    H && clearTimeout(H), (H = setTimeout(_, 2e3));
  });
})();
const myButton = document.getElementById("back-to-top");
myButton &&
  (window.addEventListener("scroll", function () {
    100 < window.scrollY
      ? (myButton.style.display = "block")
      : (myButton.style.display = "none");
  }),
  myButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }));
