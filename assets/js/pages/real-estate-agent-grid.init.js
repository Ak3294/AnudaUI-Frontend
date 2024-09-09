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
  agentListData = "",
  editList = !1,
  prevButton = document.getElementById("page-prev"),
  nextButton = document.getElementById("page-next"),
  currentPage = 1,
  itemsPerPage = 10,
  getJSON = function (e, t) {
    var n = new XMLHttpRequest();
    n.open("GET", url + e, !0),
      (n.responseType = "json"),
      (n.onload = function () {
        var e = n.status;
        t(200 === e ? null : e, n.response);
      }),
      n.send();
  };
function loadAgentList(e, t) {
  var n = Math.ceil(e.length / itemsPerPage);
  n < (t = t < 1 ? 1 : t) && (t = n),
    (document.getElementById("agent-list").innerHTML = "");
  for (
    var a, i = (t - 1) * itemsPerPage;
    i < t * itemsPerPage && i < e.length;
    i++
  )
    e[i] &&
      ((a = e[i].new ? '<div class="ribbon ribbon-secondary">New</div>' : ""),
      (document.getElementById("agent-list").innerHTML +=
        '<div class="col">        <div class="card ribbon-box ribbon-fill">            <div class="card-body">                ' +
        a +
        '                <div class="d-flex justify-content-end">                    <div class="flex-shrink-0">                        <div class="dropdown">                            <a class="btn btn-ghost-secondary btn-icon btn-sm" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">                                <i class="bi bi-three-dots"></i>                            </a>                            <ul class="dropdown-menu dropdown-menu-end">                                <li><a class="dropdown-item" href="apps-real-estate-agent-overview.html"><i class="bi bi-eye align-baseline me-1"></i> Overview</a></li>                                <li><a class="dropdown-item edit-list" data-bs-toggle="modal"  data-edit-id="' +
        e[i].id +
        '" href="#addAgent"><i class="bi bi-pencil-square align-baseline me-1"></i> Edit</a></li>                                <li><a class="dropdown-item remove-list" href="#deleteRecordModal" data-remove-id="' +
        e[i].id +
        '" data-bs-toggle="modal"><i class="bi bi-trash3 align-baseline me-1"></i> Delete</a></li>                            </ul>                        </div>                    </div>                </div>                <div class="mt-3 text-center">                    <div class="position-relative d-inline-block">                        <img src="' +
        e[i].agent[0].img +
        '" alt="' +
        e[i].agent[0].img_alt +
        '" class="avatar-md rounded mx-auto d-inline-block">                        <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle ' +
        isStatus(e[i].status) +
        ' p-1"><span class="visually-hidden">unread messages</span></span>                    </div>                    <h5 class="mt-4 mb-1"><a href="apps-real-estate-agent-overview.html" class="text-reset">' +
        e[i].agent[0].name +
        '</a></h5>                    <p class="text-muted"><b>#TBS' +
        e[i].id +
        '</b></p>                    <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1 text-body"></i> ' +
        e[i].location +
        '</p>                    <h6 class="fs-md text-secondary-emphasis mb-4">' +
        e[i].property +
        ' Property</h6>                    <div class="hstack gap-2">                        <button class="btn btn-subtle-primary w-100"><i class="bi bi-chat-text align-baseline me-1"></i> Message</button>                        <a href="tel:' +
        e[i].contact +
        '" class="btn btn-info btn-icon flex-shrink-0"><i class="bi bi-telephone"></i></a>                    </div>                </div>            </div>        </div>    </div>'));
  paginationEvents(),
    pageEvent(e),
    selectedPage(),
    1 == currentPage
      ? prevButton.parentNode.classList.add("disabled")
      : prevButton.parentNode.classList.remove("disabled"),
    currentPage == n
      ? nextButton.parentNode.classList.add("disabled")
      : nextButton.parentNode.classList.remove("disabled"),
    refreshCallbacks();
}
function fetchIdFromObj(e) {
  return parseInt(e.id);
}
function findNextId() {
  var e, t;
  return 0 === agentListData.length
    ? 0
    : (e = fetchIdFromObj(agentListData[agentListData.length - 1])) <=
      (t = fetchIdFromObj(agentListData[0]))
    ? t + 1
    : e + 1;
}
function sortElementsById() {
  loadAgentList(
    agentListData.sort(function (e, t) {
      (e = fetchIdFromObj(e)), (t = fetchIdFromObj(t));
      return t < e ? -1 : e < t ? 1 : 0;
    }),
    currentPage
  );
}
function isStatus(e) {
  switch (e) {
    case "Active":
      return "bg-success";
    case "Unactive":
      return "bg-danger";
  }
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
    return Math.ceil(agentListData.length / itemsPerPage);
  }
  prevButton.addEventListener("click", function () {
    1 < currentPage && loadAgentList(agentListData, --currentPage);
  }),
    nextButton.addEventListener("click", function () {
      currentPage < e() && loadAgentList(agentListData, ++currentPage);
    });
  var t = document.getElementById("page-num");
  t.innerHTML = "";
  for (var n = 1; n < e() + 1; n++)
    t.innerHTML +=
      "<div class='page-item'><a class='page-link clickPageNumber' href='javascript:void(0);'>" +
      n +
      "</a></div>";
  document.addEventListener("click", function (e) {
    "A" == e.target.nodeName &&
      e.target.classList.contains("clickPageNumber") &&
      ((currentPage = e.target.textContent),
      loadAgentList(agentListData, currentPage));
  }),
    selectedPage();
}
function pageEvent(e) {
  0 == e.length
    ? ((document.getElementById("pagination-element").style.display = "none"),
      document.getElementById("noresult").classList.remove("d-none"))
    : ((document.getElementById("pagination-element").style.display = "flex"),
      document.getElementById("noresult").classList.add("d-none"));
  for (
    var t = document.getElementById("page-num"),
      n = ((t.innerHTML = ""), Math.ceil(e.length / itemsPerPage)),
      a = 1;
    a < n + 1;
    a++
  )
    t.innerHTML +=
      "<div class='page-item'><a class='page-link clickPageNumber' href='javascript:void(0);'>" +
      a +
      "</a></div>";
}
getJSON("agent-list.json", function (e, t) {
  null !== e
    ? console.log("Something went wrong: " + e)
    : (loadAgentList((agentListData = t), currentPage), sortElementsById());
});
var idFieldInput = document.getElementById("id-field"),
  agentNameInput = document.getElementById("agent-name-input"),
  emailInput = document.getElementById("email-input"),
  contactInput = document.getElementById("contact-input"),
  statusInput = document.getElementById("status-type-input"),
  addressInput = document.getElementById("address-input"),
  removeBtns = document.getElementsByClassName("remove-item-btn"),
  editBtns = document.getElementsByClassName("edit-item-btn"),
  statusTypeVal = new Choices(statusInput, {
    searchEnabled: !1,
    removeItemButton: !0,
  }),
  date = new Date().toUTCString().slice(5, 16),
  forms = document.querySelectorAll(".tablelist-form");
function refreshCallbacks() {
  var n, a;
  Array.from(document.querySelectorAll(".edit-list")).forEach(function (t) {
    t.addEventListener("click", function (e) {
      (n = t.getAttribute("data-edit-id")),
        (agentListData = agentListData.map(function (e) {
          var t;
          return (
            e.id == n &&
              ((editList = !0),
              (document.getElementById("addAgentModalLabel").innerHTML =
                "Edit Agent Details"),
              (document.getElementById("add-btn").innerHTML = "Update"),
              (idFieldInput.value = e.id),
              (agentNameInput.value = e.agent[0].name),
              (emailInput.value = e.email),
              (contactInput.value = e.contact),
              (addressInput.value = e.location),
              statusTypeVal && statusTypeVal.destroy(),
              (statusTypeVal = new Choices(statusInput, {
                searchEnabled: !1,
                removeItemButton: !0,
              })).setChoiceByValue(e.status),
              (document.getElementById("dropzone-preview").innerHTML = ""),
              (t = { name: e.agent[0].img_alt, size: 12345 }),
              dropzone.options.addedfile.call(dropzone, t),
              dropzone.options.thumbnail.call(dropzone, t, e.agent[0].img)),
            e
          );
        }));
    });
  });
  Array.from(document.querySelectorAll(".remove-list")).forEach(function (t) {
    t.addEventListener("click", function (e) {
      (a = t.getAttribute("data-remove-id")),
        document
          .getElementById("delete-record")
          .addEventListener("click", function () {
            var t;
            (t = a),
              loadAgentList(
                (agentListData = agentListData.filter(function (e) {
                  return e.id != t;
                })),
                currentPage
              ),
              document.getElementById("deleteRecord-close").click();
          });
    });
  });
}
function clearFields() {
  (editList = !1),
    (document.getElementById("addAgentModalLabel").innerHTML = "Add Agent"),
    (document.getElementById("add-btn").innerHTML = "Add"),
    (idFieldInput.value = ""),
    (document.getElementById("dropzone-preview").innerHTML = ""),
    (agentNameInput.value = ""),
    (emailInput.value = ""),
    (contactInput.value = ""),
    (addressInput.value = ""),
    statusTypeVal && statusTypeVal.destroy(),
    (statusTypeVal = new Choices(statusInput, {
      searchEnabled: !1,
      removeItemButton: !0,
    }));
}
Array.prototype.slice.call(forms).forEach(function (e) {
  e.addEventListener("submit", function (e) {
    e.preventDefault(),
      document.querySelector(".dz-image-preview") &&
        (t = new DOMParser()
          .parseFromString(
            document.querySelectorAll(".dz-image-preview")[0].innerHTML,
            "text/html"
          )
          .body.querySelector("[data-dz-thumbnail]"));
    var t,
      n,
      a,
      i = document.getElementById("alert-error-msg"),
      e =
        (i.classList.remove("d-none"),
        setTimeout(() => i.classList.add("d-none"), 2e3),
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    return 0 == document.querySelectorAll(".dz-image-preview").length
      ? !(i.innerHTML = "Please select a image")
      : "" == agentNameInput.value
      ? !(i.innerHTML = "Please enter a agent name")
      : emailInput.value.match(e)
      ? "" == contactInput.value
        ? !(i.innerHTML = "Please enter a contact no")
        : "" == statusInput.value
        ? !(i.innerHTML = "Please select a status")
        : "" == addressInput.value
        ? !(i.innerHTML = "Please enter a address")
        : ("" !== agentNameInput.value &&
          emailInput.value.match(e) &&
          "" !== contactInput.value &&
          "" !== addressInput.value &&
          "" !== statusInput.value &&
          0 < document.querySelectorAll(".dz-image-preview").length &&
          !editList
            ? ((n = {
                id: findNextId(),
                joining_date: date,
                agent: [
                  {
                    img: t.src,
                    img_alt: t.getAttribute("alt"),
                    name: agentNameInput.value,
                  },
                ],
                property: "0",
                location: addressInput.value,
                email: emailInput.value,
                contact: contactInput.value,
                status: statusInput.value,
                new: !1,
              }),
              agentListData.push(n),
              sortElementsById())
            : "" !== agentNameInput.value &&
              emailInput.value.match(e) &&
              "" !== contactInput.value &&
              "" !== addressInput.value &&
              "" !== statusInput.value &&
              0 < document.querySelectorAll(".dz-image-preview").length &&
              editList &&
              ((a = 0),
              (a = idFieldInput.value),
              (agentListData = agentListData.map(function (e) {
                return e.id == a
                  ? {
                      id: a,
                      joining_date: e.joining_date,
                      agent: [
                        {
                          img: t.src,
                          img_alt: t.getAttribute("alt"),
                          name: agentNameInput.value,
                        },
                      ],
                      property: e.property,
                      location: addressInput.value,
                      email: emailInput.value,
                      contact: contactInput.value,
                      status: statusInput.value,
                      new: e.new,
                    }
                  : e;
              }))),
          loadAgentList(agentListData, currentPage),
          document.getElementById("alert-error-msg").classList.add("d-none"),
          document.getElementById("close-addAgentModal").click(),
          !0)
      : !(i.innerHTML = "Please enter valid email address");
  });
}),
  document
    .getElementById("addAgent")
    .addEventListener("hidden.bs.modal", function () {
      clearFields();
    });
var searchProductList = document.getElementById("searchResultList"),
  statusFilterInput =
    (searchProductList.addEventListener("keyup", function () {
      var t,
        e = searchProductList.value.toLowerCase();
      (t = e),
        loadAgentList(
          agentListData.filter(function (e) {
            return (
              -1 !== e.agent[0].name.toLowerCase().indexOf(t.toLowerCase()) ||
              -1 !== e.location.toLowerCase().indexOf(t.toLowerCase()) ||
              -1 !== e.contact.toLowerCase().indexOf(t.toLowerCase())
            );
          }),
          currentPage
        );
    }),
    new Choices(document.getElementById("status-input"), {
      searchEnabled: !0,
    }));
statusFilterInput.passedElement.element.addEventListener(
  "change",
  function (e) {
    var t = e.detail.value;
    loadAgentList(
      "All" != e.detail.value
        ? agentListData.filter(function (e) {
            return e.status == t;
          })
        : agentListData,
      currentPage
    );
  },
  !1
);