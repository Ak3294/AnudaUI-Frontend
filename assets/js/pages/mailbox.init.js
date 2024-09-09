var url = "assets/json/",
  allmaillist = "";
const loader = document.querySelector("#elmLoader");
var getJSON = function (e, t) {
  var a = new XMLHttpRequest();
  a.open("GET", url + e, !0),
    (a.responseType = "json"),
    (a.onload = function () {
      var e = a.status;
      200 === e
        ? ((document.getElementById("elmLoader").innerHTML = ""),
          t(null, a.response))
        : t(e, a.response);
    }),
    a.send();
};
function loadMailData(e) {
  (document.querySelector("#mail-list").innerHTML = ""),
    Array.from(e).forEach(function (e, t) {
      var a = e.readed ? "" : "unread",
        l = e.starred ? "active" : "",
        r = e.counted ? "(" + e.counted + ")" : "";
      (document.querySelector("#mail-list").innerHTML +=
        '<li class="' +
        a +
        '">        <div class="col-mail col-mail-1">            <div class="form-check checkbox-wrapper-mail fs-14">                <input class="form-check-input" type="checkbox" value="' +
        e.id +
        '" id="checkbox-' +
        e.id +
        '">                <label class="form-check-label" for="checkbox-' +
        e.id +
        '"></label>            </div>            <input type="hidden" value=' +
        e.userImg +
        ' class="mail-userimg" />            <button type="button" class="btn avatar-xs p-0 favorite-btn fs-15 ' +
        l +
        '">            <i class="ri-star-fill"></i>            </button>            <a href="javascript: void(0);" class="title"><span class="title-name">' +
        e.name +
        "</span> " +
        r +
        '</a>        </div>        <div class="col-mail col-mail-2">            <a href="javascript: void(0);" class="subject"><span class="subject-title">' +
        e.title +
        '</span> – <span class="teaser">' +
        e.description +
        '</span>            </a>            <div class="date">' +
        e.date +
        "</div>        </div>    </li>"),
        favoriteBtn(),
        emailDetailShow(),
        emailDetailChange(),
        checkBoxAll();
    });
}
function favoriteBtn() {
  Array.from(document.querySelectorAll(".favorite-btn")).forEach(function (e) {
    e.addEventListener("click", function () {
      e.classList.contains("active")
        ? e.classList.remove("active")
        : e.classList.add("active");
    });
  });
}
function emailDetailShow() {
  var a = document.getElementsByTagName("body")[0],
    t =
      (Array.from(document.querySelectorAll(".message-list a")).forEach(
        function (e) {
          e.addEventListener("click", function (t) {
            a.classList.add("email-detail-show"),
              Array.from(
                document.querySelectorAll(".message-list li.unread")
              ).forEach(function (e) {
                e.classList.contains("unread") &&
                  t.target.closest("li").classList.remove("unread");
              });
          });
        }
      ),
      Array.from(document.querySelectorAll(".close-btn-email")).forEach(
        function (e) {
          e.addEventListener("click", function () {
            a.classList.remove("email-detail-show");
          });
        }
      ),
      !1),
    l = document.getElementsByClassName("email-menu-sidebar");
  Array.from(document.querySelectorAll(".email-menu-btn")).forEach(function (
    e
  ) {
    e.addEventListener("click", function () {
      Array.from(l).forEach(function (e) {
        e.classList.add("menubar-show"), (t = !0);
      });
    });
  }),
    window.addEventListener("click", function (e) {
      document
        .querySelector(".email-menu-sidebar")
        .classList.contains("menubar-show") &&
        (t ||
          document
            .querySelector(".email-menu-sidebar")
            .classList.remove("menubar-show"),
        (t = !1));
    });
}
function checkBoxAll() {
  Array.from(document.querySelectorAll(".checkbox-wrapper-mail input")).forEach(
    function (e) {
      e.addEventListener("click", function (e) {
        1 == e.target.checked
          ? e.target.closest("li").classList.add("active")
          : e.target.closest("li").classList.remove("active");
      });
    }
  );
  var e = document.querySelectorAll(
    ".mail-primary .checkbox-wrapper-mail input"
  );
  function a() {
    var e = document.querySelectorAll(
        ".mail-primary .checkbox-wrapper-mail input"
      ),
      t = document.querySelectorAll(
        ".mail-primary .checkbox-wrapper-mail input:checked"
      ).length;
    Array.from(e).forEach(function (e) {
      (e.checked = !0),
        e.parentNode.parentNode.parentNode.classList.add("active");
    }),
      (document.getElementById("email-topbar-actions").style.display =
        0 < t ? "none" : "block"),
      0 < t
        ? Array.from(e).forEach(function (e) {
            (e.checked = !1),
              e.parentNode.parentNode.parentNode.classList.remove("active");
          })
        : Array.from(e).forEach(function (e) {
            (e.checked = !0),
              e.parentNode.parentNode.parentNode.classList.add("active");
          }),
      (this.onclick = l),
      removeItems();
  }
  function l() {
    var e = document.querySelectorAll(
        ".mail-primary .checkbox-wrapper-mail input"
      ),
      t = document.querySelectorAll(
        ".mail-primary .checkbox-wrapper-mail input:checked"
      ).length;
    Array.from(e).forEach(function (e) {
      (e.checked = !1),
        e.parentNode.parentNode.parentNode.classList.remove("active");
    }),
      (document.getElementById("email-topbar-actions").style.display =
        0 < t ? "none" : "block"),
      0 < t
        ? Array.from(e).forEach(function (e) {
            (e.checked = !1),
              e.parentNode.parentNode.parentNode.classList.remove("active");
          })
        : Array.from(e).forEach(function (e) {
            (e.checked = !0),
              e.parentNode.parentNode.parentNode.classList.add("active");
          }),
      (this.onclick = a);
  }
  Array.from(e).forEach(function (e) {
    e.addEventListener("click", function (e) {
      var t = document.querySelectorAll(
          ".mail-primary .checkbox-wrapper-mail input"
        ),
        a = document.getElementById("checkall"),
        l = document.querySelectorAll(
          ".mail-primary .checkbox-wrapper-mail input:checked"
        ).length;
      (a.checked = 0 < l),
        (a.indeterminate = 0 < l && l < t.length),
        e.target.closest("li").classList.contains("active"),
        (document.getElementById("email-topbar-actions").style.display =
          0 < l ? "block" : "none");
    });
  }),
    (document.getElementById("checkall").onclick = a);
}
function scrollToBottom() {
  setTimeout(() => {
    new SimpleBar(
      document.getElementById("chat-conversation")
    ).getScrollElement().scrollTop =
      document.getElementById("users-conversation").scrollHeight;
  }, 100);
}
function removeItems() {
  document
    .getElementById("removeItemModal")
    .addEventListener("show.bs.modal", function (e) {
      document
        .getElementById("delete-record")
        .addEventListener("click", function () {
          Array.from(document.querySelectorAll(".message-list li")).forEach(
            function (e) {
              var t, a;
              e.classList.contains("active") &&
                ((t = e.querySelector(".form-check-input").value),
                (a = t),
                (allmaillist = allmaillist.filter(function (e) {
                  return e.id != a;
                })),
                e.remove());
            }
          ),
            document.getElementById("btn-close").click(),
            document.getElementById("email-topbar-actions") &&
              (document.getElementById("email-topbar-actions").style.display =
                "none"),
            (checkall.indeterminate = !1),
            (checkall.checked = !1);
        });
    });
}
function removeSingleItem() {
  var a;
  document.querySelectorAll(".remove-mail").forEach(function (t) {
    t.addEventListener("click", function (e) {
      (a = t.getAttribute("data-remove-id")),
        document
          .getElementById("delete-record")
          .addEventListener("click", function () {
            var t;
            (t = a),
              loadMailData(
                (allmaillist = allmaillist.filter(function (e) {
                  return e.id != t;
                }))
              ),
              document.getElementById("close-btn-email").click();
          });
    });
  });
}
getJSON("mail-list.init.json", function (e, t) {
  null !== e
    ? console.log("Something went wrong: " + e)
    : loadMailData((allmaillist = t[0].primary));
}),
  Array.from(document.querySelectorAll(".mail-list a")).forEach(function (a) {
    a.addEventListener("click", function () {
      var t,
        e = document.querySelector(".mail-list a.active");
      e && e.classList.remove("active"),
        a.classList.add("active"),
        loadMailData(
          a.querySelector(".mail-list-link").hasAttribute("data-type")
            ? ((t = a.querySelector(".mail-list-link").innerHTML),
              allmaillist.filter((e) => e.labeltype === t))
            : ((t = a.querySelector(".mail-list-link").innerHTML),
              (document.getElementById("mail-list").innerHTML = ""),
              "All" != t
                ? allmaillist.filter((e) => e.tabtype === t)
                : allmaillist)
        );
    });
  }),
  ClassicEditor.create(document.querySelector("#email-editor"))
    .then(function (e) {
      e.ui.view.editable.element.style.height = "200px";
    })
    .catch(function (e) {
      console.error(e);
    }),
  scrollToBottom(),
  removeItems(),
  removeSingleItem();
var markAllReadBtn = document.getElementById("mark-all-read"),
  dummyUserImage =
    (markAllReadBtn.addEventListener("click", function (e) {
      0 === document.querySelectorAll(".message-list li.unread").length &&
        ((document.getElementById("unreadConversations").style.display =
          "block"),
        setTimeout(function () {
          document.getElementById("unreadConversations").style.display = "none";
        }, 1e3)),
        Array.from(
          document.querySelectorAll(".message-list li.unread")
        ).forEach(function (e) {
          e.classList.contains("unread") && e.classList.remove("unread");
        });
    }),
    "assets/images/users/user-dummy-img.jpg"),
  mailChatDetailElm = !1;
function emailDetailChange() {
  Array.from(document.querySelectorAll(".message-list li")).forEach(function (
    r
  ) {
    r.addEventListener("click", function () {
      var e = r.querySelector(".checkbox-wrapper-mail .form-check-input").value,
        e =
          (document
            .querySelector(".remove-mail")
            .setAttribute("data-remove-id", e),
          r.querySelector(".subject-title").innerHTML),
        a =
          ((document.querySelector(".email-subject-title").innerHTML = e),
          r.querySelector(".title-name").innerHTML),
        t =
          (Array.from(
            document.querySelectorAll(".accordion-item.left")
          ).forEach(function (e) {
            e.querySelector(".email-user-name").innerHTML = a;
            var t = r.querySelector(".mail-userimg").value;
            e.querySelector("img").setAttribute("src", t);
          }),
          document.querySelector(".user-name-text").innerHTML),
        l = document.querySelector(".header-profile-user").getAttribute("src");
      Array.from(document.querySelectorAll(".accordion-item.right")).forEach(
        function (e) {
          (e.querySelector(".email-user-name-right").innerHTML = t),
            e.querySelector("img").setAttribute("src", l);
        }
      );
    });
  });
}
function resizeEvent() {
  var e;
  document.documentElement.clientWidth < 767 &&
    ((e = document.querySelector(".email-chat-list a.active")) &&
      e.classList.remove("active"),
    (document.getElementById("emailchat-detailElem").style.display = "none"));
}
document.querySelectorAll(".email-chat-list a").forEach(function (l) {
  var e, t;
  l.classList.contains("active") &&
    ((document.getElementById("emailchat-detailElem").style.display = "block"),
    (e = document
      .querySelector(".email-chat-list a.active")
      .querySelector(".chatlist-user-name").innerHTML),
    (t = document
      .querySelector(".email-chat-list a.active")
      .querySelector(".chatlist-user-image img")
      .getAttribute("src")),
    (document.querySelector(".email-chat-detail .profile-username").innerHTML =
      e),
    document
      .getElementById("users-conversation")
      .querySelectorAll(".left .chat-avatar")
      .forEach(function (e) {
        t
          ? e.querySelector("img").setAttribute("src", t)
          : e.querySelector("img").setAttribute("src", dummyUserImage);
      })),
    l.addEventListener("click", function (e) {
      (document.getElementById("emailchat-detailElem").style.display = "block"),
        (mailChatDetailElm = !0);
      var t = document.querySelector(".email-chat-list a.active"),
        t =
          (t && t.classList.remove("active"),
          this.classList.add("active"),
          scrollToBottom(),
          l.querySelector(".chatlist-user-name").innerHTML),
        a = l.querySelector(".chatlist-user-image img").getAttribute("src"),
        t =
          ((document.querySelector(
            ".email-chat-detail .profile-username"
          ).innerHTML = t),
          document.getElementById("users-conversation"));
      Array.from(t.querySelectorAll(".left .chat-avatar")).forEach(function (
        e
      ) {
        a
          ? e.querySelector("img").setAttribute("src", a)
          : e.querySelector("img").setAttribute("src", dummyUserImage);
      });
    });
}),
  document
    .getElementById("emailchat-btn-close")
    .addEventListener("click", function () {
      (document.getElementById("emailchat-detailElem").style.display = "none"),
        (mailChatDetailElm = !1),
        document
          .querySelector(".email-chat-list a.active")
          .classList.remove("active");
    }),
  resizeEvent(),
  (window.onresize = resizeEvent),
  Array.from(document.querySelectorAll(".toggle-email-panel")).forEach(
    function (e) {
      e.addEventListener("click", function () {
        document
          .querySelector(".email-wrapper .email-panel")
          .classList.contains("show")
          ? document
              .querySelector(".email-wrapper .email-panel")
              .classList.remove("show")
          : document
              .querySelector(".email-wrapper .email-panel")
              .classList.add("show");
      });
    }
  ),
  Array.from(document.querySelectorAll(".mail-user-dropdown")).forEach(
    function (t) {
      t.querySelectorAll(".dropdown-menu .dropdown-item").forEach(function (e) {
        e.addEventListener("click", function () {
          t.querySelector(".mail-profile-img").src =
            e.querySelector(".mail-user-img").src;
        });
      });
    }
  );
var searchList = document.getElementById("searchResultList");
searchList.addEventListener("keyup", function () {
  var t,
    e = searchList.value.toLowerCase();
  (t = e),
    loadMailData(
      allmaillist.filter(function (e) {
        return (
          -1 !== e.name.toLowerCase().indexOf(t.toLowerCase()) ||
          -1 !== e.description.toLowerCase().indexOf(t.toLowerCase()) ||
          -1 !== e.title.toLowerCase().indexOf(t.toLowerCase())
        );
      })
    );
});