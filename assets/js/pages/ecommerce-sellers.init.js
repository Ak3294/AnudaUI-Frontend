function getChartColorsArray(e) {
  var t = document.getElementById(e);
  if (t) {
    t = t.dataset.colors;
    if (t)
      return JSON.parse(t).map((e) => {
        var t = e.replace(/\s/g, "");
        return t.includes(",")
          ? 2 === (e = e.split(",")).length
            ? `rgba(${getComputedStyle(
                document.documentElement
              ).getPropertyValue(e[0])}, ${e[1]})`
            : t
          : getComputedStyle(document.documentElement).getPropertyValue(t) || t;
      });
    console.warn("data-colors attribute not found on: " + e);
  }
}
var sellerline1Chart = "",
  sellerline2Chart = "",
  sellerline3Chart = "",
  sellerline4Chart = "",
  sellerline5Chart = "",
  sellerline6Chart = "",
  sellerline7Chart = "",
  sellerline8Chart = "";
function loadCharts() {
  var e;
  (e = getChartColorsArray("chart-seller1")) &&
    ((e = {
      series: [{ data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14] }],
      chart: { type: "area", height: 43, sparkline: { enabled: !0 } },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: !1,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100],
        },
      },
      stroke: { curve: "smooth", width: 2 },
      colors: e,
      tooltip: {
        fixed: { enabled: !1 },
        x: { show: !1 },
        y: {
          title: {
            formatter: function (e) {
              return "";
            },
          },
        },
        marker: { show: !1 },
      },
    }),
    "" != sellerline1Chart && sellerline1Chart.destroy(),
    (sellerline1Chart = new ApexCharts(
      document.querySelector("#chart-seller1"),
      e
    )).render()),
    (e = getChartColorsArray("chart-seller2")) &&
      ((e = {
        series: [{ data: [12, 14, 2, 47, 42, 15, 35, 75, 20, 67, 89] }],
        chart: { type: "area", height: 43, sparkline: { enabled: !0 } },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100],
          },
        },
        stroke: { curve: "smooth", width: 2 },
        colors: e,
        tooltip: {
          fixed: { enabled: !1 },
          x: { show: !1 },
          y: {
            title: {
              formatter: function (e) {
                return "";
              },
            },
          },
          marker: { show: !1 },
        },
      }),
      "" != sellerline2Chart && sellerline2Chart.destroy(),
      (sellerline2Chart = new ApexCharts(
        document.querySelector("#chart-seller2"),
        e
      )).render()),
    (e = getChartColorsArray("chart-seller3")) &&
      ((e = {
        series: [{ data: [45, 20, 8, 42, 30, 5, 35, 79, 22, 54, 64] }],
        chart: { type: "area", height: 43, sparkline: { enabled: !0 } },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100],
          },
        },
        stroke: { curve: "smooth", width: 2 },
        colors: e,
        tooltip: {
          fixed: { enabled: !1 },
          x: { show: !1 },
          y: {
            title: {
              formatter: function (e) {
                return "";
              },
            },
          },
          marker: { show: !1 },
        },
      }),
      "" != sellerline3Chart && sellerline3Chart.destroy(),
      (sellerline3Chart = new ApexCharts(
        document.querySelector("#chart-seller3"),
        e
      )).render()),
    (e = getChartColorsArray("chart-seller4")) &&
      ((e = {
        series: [{ data: [26, 15, 48, 12, 47, 19, 35, 19, 85, 68, 50] }],
        chart: { type: "area", height: 43, sparkline: { enabled: !0 } },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100],
          },
        },
        stroke: { curve: "smooth", width: 2 },
        colors: e,
        tooltip: {
          fixed: { enabled: !1 },
          x: { show: !1 },
          y: {
            title: {
              formatter: function (e) {
                return "";
              },
            },
          },
          marker: { show: !1 },
        },
      }),
      "" != sellerline4Chart && sellerline4Chart.destroy(),
      (sellerline4Chart = new ApexCharts(
        document.querySelector("#chart-seller4"),
        e
      )).render()),
    (e = getChartColorsArray("chart-seller5")) &&
      ((e = {
        series: [{ data: [60, 67, 12, 49, 6, 78, 63, 51, 33, 8, 16] }],
        chart: { type: "area", height: 43, sparkline: { enabled: !0 } },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100],
          },
        },
        stroke: { curve: "smooth", width: 2 },
        colors: e,
        tooltip: {
          fixed: { enabled: !1 },
          x: { show: !1 },
          y: {
            title: {
              formatter: function (e) {
                return "";
              },
            },
          },
          marker: { show: !1 },
        },
      }),
      "" != sellerline5Chart && sellerline5Chart.destroy(),
      (sellerline5Chart = new ApexCharts(
        document.querySelector("#chart-seller5"),
        e
      )).render()),
    (e = getChartColorsArray("chart-seller6")) &&
      ((e = {
        series: [{ data: [78, 63, 51, 33, 8, 16, 60, 67, 12, 49] }],
        chart: { type: "area", height: 43, sparkline: { enabled: !0 } },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100],
          },
        },
        stroke: { curve: "smooth", width: 2 },
        colors: e,
        tooltip: {
          fixed: { enabled: !1 },
          x: { show: !1 },
          y: {
            title: {
              formatter: function (e) {
                return "";
              },
            },
          },
          marker: { show: !1 },
        },
      }),
      "" != sellerline6Chart && sellerline6Chart.destroy(),
      (sellerline6Chart = new ApexCharts(
        document.querySelector("#chart-seller6"),
        e
      )).render()),
    (e = getChartColorsArray("chart-seller7")) &&
      ((e = {
        series: [{ data: [15, 35, 75, 20, 67, 8, 42, 30, 5, 35] }],
        chart: { type: "area", height: 43, sparkline: { enabled: !0 } },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100],
          },
        },
        stroke: { curve: "smooth", width: 2 },
        colors: e,
        tooltip: {
          fixed: { enabled: !1 },
          x: { show: !1 },
          y: {
            title: {
              formatter: function (e) {
                return "";
              },
            },
          },
          marker: { show: !1 },
        },
      }),
      "" != sellerline7Chart && sellerline7Chart.destroy(),
      (sellerline7Chart = new ApexCharts(
        document.querySelector("#chart-seller7"),
        e
      )).render());
  (e = getChartColorsArray("chart-seller8")) &&
    ((e = {
      series: [{ data: [45, 32, 68, 55, 36, 10, 48, 25, 74, 54] }],
      chart: { type: "area", height: 43, sparkline: { enabled: !0 } },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: !1,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100],
        },
      },
      stroke: { curve: "smooth", width: 2 },
      colors: e,
      tooltip: {
        fixed: { enabled: !1 },
        x: { show: !1 },
        y: {
          title: {
            formatter: function (e) {
              return "";
            },
          },
        },
        marker: { show: !1 },
      },
    }),
    "" != sellerline8Chart && sellerline8Chart.destroy(),
    (sellerline8Chart = new ApexCharts(
      document.querySelector("#chart-seller8"),
      e
    )).render());
}
window.addEventListener("resize", function () {
  setTimeout(() => {
    loadCharts();
  }, 250);
}),
  loadCharts();
var previewTemplate,
  dropzone,
  dropzonePreviewNode = document.querySelector("#dropzone-preview-list"),
  url =
    ((dropzonePreviewNode.id = ""),
    dropzonePreviewNode &&
      ((previewTemplate = dropzonePreviewNode.parentNode.innerHTML),
      dropzonePreviewNode.parentNode.removeChild(dropzonePreviewNode),
      (dropzone = new Dropzone(".dropzone", {
        url: "https://httpbin.org/post",
        method: "post",
        previewTemplate: previewTemplate,
        previewsContainer: "#dropzone-preview",
      }))),
    "assets/json/"),
  sellerListData = "",
  editList = !1,
  prevButton = document.getElementById("page-prev"),
  nextButton = document.getElementById("page-next"),
  currentPage = 1,
  itemsPerPage = 8,
  getJSON = function (e, t) {
    var r = new XMLHttpRequest();
    r.open("GET", url + e, !0),
      (r.responseType = "json"),
      (r.onload = function () {
        var e = r.status;
        t(200 === e ? null : e, r.response);
      }),
      r.send();
  };
function loadSellerList(e, t) {
  var r = Math.ceil(e.length / itemsPerPage);
  r < (t = t < 1 ? 1 : t) && (t = r),
    (document.getElementById("seller-list").innerHTML = "");
  for (
    var l = (t - 1) * itemsPerPage;
    l < t * itemsPerPage && l < e.length;
    l++
  )
    e[l] &&
      (document.getElementById("seller-list").innerHTML +=
        '<div class="col-xl-3 col-md-6">        <div class="card">            <div class="card-body">                <div class="text-end mb-3">                    <button type="button" class="btn-close remove-list text-end" data-remove-id="' +
        e[l].id +
        '" aria-label="Close" data-bs-toggle="modal" data-bs-target="#removeItemModal"></button>                </div>                <div class="avatar-md mx-auto">                    <div class="avatar-title bg-light rounded">                        <img src="' +
        e[l].shop[0].img +
        '" alt="' +
        e[l].shop[0].img_alt +
        '" class="avatar-sm p-1">                    </div>                </div>                <div class="text-center mt-4">                    <a href="apps-ecommerce-seller-overview.html"><h5>' +
        e[l].shop[0].name +
        '</h5></a>                    <p class="text-muted mb-0">' +
        e[l].seller +
        '</p>                </div>            </div>            <div class="row g-0 text-center">                <div class="col-4">                    <div class="card-body px-3 border-top border-bottom border-end border-dashed">                        <h5 class="mb-1">' +
        e[l].stock +
        '</h5>                        <p class="text-muted text-truncate mb-0">Item Stock</p>                    </div>                </div>                <div class="col-4">                    <div class="card-body h-100 px-3 border-top border-bottom border-end border-dashed">                        <div id="chart-seller' +
        e[l].id +
        '" data-colors=\'["' +
        e[l].chartColor +
        '"]\'  dir="ltr"></div>                    </div>                </div>                <div class="col-4">                    <div class="card-body px-3 border-top border-bottom border-dashed">                        <h5 class="mb-1">' +
        e[l].revenue +
        '</h5>                        <p class="text-muted text-truncate mb-0">Revenue</p>                    </div>                </div>            </div>            <div class="card-body hstack gap-2">                <a href="apps-ecommerce-seller-overview.html" class="btn btn-subtle-secondary w-100">View Details</a>                <button type="button" class="btn btn-subtle-primary w-100 edit-list" data-edit-id="' +
        e[l].id +
        '" data-bs-toggle="modal" data-bs-target="#addSellerModal">Edit</button>            </div>        </div>    </div>');
  paginationEvents(),
    pageEvent(e),
    selectedPage(),
    1 == currentPage
      ? prevButton.parentNode.classList.add("disabled")
      : prevButton.parentNode.classList.remove("disabled"),
    currentPage == r
      ? nextButton.parentNode.classList.add("disabled")
      : nextButton.parentNode.classList.remove("disabled"),
    refreshCallbacks(),
    loadCharts();
}
function fetchIdFromObj(e) {
  return parseInt(e.id);
}
function findNextId() {
  var e, t;
  return 0 === sellerListData.length
    ? 0
    : (e = fetchIdFromObj(sellerListData[sellerListData.length - 1])) <=
      (t = fetchIdFromObj(sellerListData[0]))
    ? t + 1
    : e + 1;
}
function sortElementsById() {
  loadSellerList(
    sellerListData.sort(function (e, t) {
      (e = fetchIdFromObj(e)), (t = fetchIdFromObj(t));
      return t < e ? -1 : e < t ? 1 : 0;
    }),
    currentPage
  );
}
function selectedPage() {
  for (
    var e = document
        .getElementById("page-num")
        .getElementsByClassName("clickPageNumber"),
      t = 0;
    t < e.length;
    t++
  )
    t == currentPage - 1
      ? e[t].parentNode.classList.add("active")
      : e[t].parentNode.classList.remove("active");
}
function paginationEvents() {
  function e() {
    return Math.ceil(sellerListData.length / itemsPerPage);
  }
  prevButton.addEventListener("click", function () {
    1 < currentPage && loadSellerList(sellerListData, --currentPage);
  }),
    nextButton.addEventListener("click", function () {
      currentPage < e() && loadSellerList(sellerListData, ++currentPage);
    });
  var t = document.getElementById("page-num");
  t.innerHTML = "";
  for (var r = 1; r < e() + 1; r++)
    t.innerHTML +=
      "<div class='page-item'><a class='page-link clickPageNumber' href='javascript:void(0);'>" +
      r +
      "</a></div>";
  document.addEventListener("click", function (e) {
    "A" == e.target.nodeName &&
      e.target.classList.contains("clickPageNumber") &&
      ((currentPage = e.target.textContent),
      loadSellerList(sellerListData, currentPage));
  }),
    selectedPage();
}
getJSON("seller-list.json", function (e, t) {
  null !== e
    ? console.log("Something went wrong: " + e)
    : (loadSellerList((sellerListData = t), currentPage), sortElementsById());
});
var idFieldInput = document.getElementById("id-field"),
  sellerNameInput = document.getElementById("seller-Name"),
  ownerNameInput = document.getElementById("owner-Name"),
  emailInput = document.getElementById("email"),
  phoneInput = document.getElementById("seller-phone"),
  forms = document.querySelectorAll(".tablelist-form");
function refreshCallbacks() {
  var r, l;
  Array.from(document.querySelectorAll(".edit-list")).forEach(function (t) {
    t.addEventListener("click", function (e) {
      (r = t.getAttribute("data-edit-id")),
        (sellerListData = sellerListData.map(function (e) {
          var t;
          return (
            e.id == r &&
              ((editList = !0),
              (document.getElementById("addSellerModalLabel").innerHTML =
                "Edit seller details"),
              (document.querySelector(".submit-btn").innerHTML = "Update"),
              (idFieldInput.value = e.id),
              (sellerNameInput.value = e.shop[0].name),
              (emailInput.value = e.email),
              (ownerNameInput.value = e.seller),
              (phoneInput.value = e.phone),
              (document.getElementById("dropzone-preview").innerHTML = ""),
              (t = { name: e.shop[0].img_alt, size: 12345 }),
              dropzone.options.addedfile.call(dropzone, t),
              dropzone.options.thumbnail.call(dropzone, t, e.shop[0].img)),
            e
          );
        }));
    });
  });
  Array.from(document.querySelectorAll(".remove-list")).forEach(function (t) {
    t.addEventListener("click", function (e) {
      (l = t.getAttribute("data-remove-id")),
        document
          .getElementById("remove-element")
          .addEventListener("click", function () {
            var t;
            (t = l),
              loadSellerList(
                (sellerListData = sellerListData.filter(function (e) {
                  return e.id != t;
                })),
                currentPage
              ),
              document.getElementById("close-removemodal").click();
          });
    });
  });
}
Array.prototype.slice.call(forms).forEach(function (e) {
  e.addEventListener("submit", function (e) {
    e.preventDefault();
    let t;
    document.querySelector(".dz-image-preview") &&
      ((e = new DOMParser().parseFromString(
        document.querySelectorAll(".dz-image-preview")[0].innerHTML,
        "text/html"
      )),
      (t = e.body.querySelector("[data-dz-thumbnail]")));
    var r,
      l,
      a = document.getElementById("alert-error-msg"),
      e =
        (a.classList.remove("d-none"),
        setTimeout(() => a.classList.add("d-none"), 2e3),
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    return 0 == document.querySelectorAll(".dz-image-preview").length
      ? !(a.innerHTML = "Please select a seller logo image")
      : "" == sellerNameInput.value
      ? !(a.innerHTML = "Please enter a seller name")
      : "" == ownerNameInput.value
      ? !(a.innerHTML = "Please enter a owner name")
      : emailInput.value.match(e)
      ? "" == phoneInput.value
        ? !(a.innerHTML = "Please enter a phone no.")
        : ("" !== sellerNameInput.value &&
          "" !== ownerNameInput.value &&
          emailInput.value.match(e) &&
          "" !== phoneInput.value &&
          0 < document.querySelectorAll(".dz-image-preview").length &&
          !editList
            ? ((r = {
                id: findNextId(),
                shop: [
                  {
                    img: t.src,
                    img_alt: t.getAttribute("alt"),
                    name: sellerNameInput.value,
                  },
                ],
                seller: ownerNameInput.value,
                email: emailInput.value,
                phone: phoneInput.value,
                stock: "0",
                revenue: "0",
                chartColor: ["--tb-success"],
              }),
              sellerListData.push(r),
              sortElementsById())
            : "" !== sellerNameInput.value &&
              "" !== ownerNameInput.value &&
              emailInput.value.match(e) &&
              "" !== phoneInput.value &&
              0 < document.querySelectorAll(".dz-image-preview").length &&
              editList &&
              ((l = 0),
              (l = idFieldInput.value),
              (sellerListData = sellerListData.map(function (e) {
                return e.id == l
                  ? {
                      id: e.id,
                      shop: [
                        {
                          img: t.src,
                          img_alt: t.getAttribute("alt"),
                          name: sellerNameInput.value,
                        },
                      ],
                      seller: ownerNameInput.value,
                      email: emailInput.value,
                      phone: phoneInput.value,
                      stock: e.stock,
                      revenue: e.revenue,
                      chartColor: e.chartColor,
                    }
                  : e;
              }))),
          loadSellerList(sellerListData, currentPage),
          document.getElementById("alert-error-msg").classList.add("d-none"),
          document.getElementById("close-addSellerModal").click(),
          !0)
      : !(a.innerHTML = "Please enter valid email address");
  });
});
var searchResultList = document.getElementById("searchResultList");
function pageEvent(e) {
  0 == e.length
    ? ((document.getElementById("pagination-element").style.display = "none"),
      document.getElementById("noresult").classList.remove("d-none"))
    : ((document.getElementById("pagination-element").style.display = "flex"),
      document.getElementById("noresult").classList.add("d-none"));
  for (
    var t = document.getElementById("page-num"),
      r = ((t.innerHTML = ""), Math.ceil(e.length / itemsPerPage)),
      l = 1;
    l < r + 1;
    l++
  )
    t.innerHTML +=
      "<div class='page-item'><a class='page-link clickPageNumber' href='javascript:void(0);'>" +
      l +
      "</a></div>";
}
function clearFields() {
  (editList = !1),
    (document.getElementById("addSellerModalLabel").innerHTML = "Add Seller"),
    (document.querySelector(".submit-btn").innerHTML = "Add"),
    (idFieldInput.value = ""),
    (document.getElementById("dropzone-preview").innerHTML = ""),
    (sellerNameInput.value = ""),
    (ownerNameInput.value = ""),
    (emailInput.value = ""),
    (phoneInput.value = "");
}
searchResultList.addEventListener("keyup", function () {
  var t,
    e = searchResultList.value.toLowerCase();
  (t = e),
    loadSellerList(
      sellerListData.filter(function (e) {
        return (
          -1 !== e.shop[0].name.toLowerCase().indexOf(t.toLowerCase()) ||
          -1 !== e.seller.toLowerCase().indexOf(t.toLowerCase())
        );
      }),
      currentPage
    );
}),
  document
    .getElementById("addSellerModal")
    .addEventListener("hidden.bs.modal", function () {
      clearFields();
    });
