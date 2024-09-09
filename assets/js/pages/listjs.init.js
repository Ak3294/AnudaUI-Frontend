var customerList,
  checkAll = document.getElementById("checkAll"),
  perPage =
    (checkAll &&
      checkAll.addEventListener("click", function () {
        var e = document.querySelectorAll(
          '.form-check-all input[type="checkbox"]'
        );
        Array.from(e).forEach(function (e) {
          (e.checked = checkAll.checked),
            e.checked
              ? e.closest("tr").classList.add("table-active")
              : e.closest("tr").classList.remove("table-active");
        });
      }),
    8),
  editlist = !1,
  options = {
    valueNames: ["id", "customer_name", "email", "date", "phone", "status"],
    page: perPage,
    pagination: !0,
    plugins: [ListPagination({ left: 2, right: 2 })],
  };
document.getElementById("customerList") &&
  (customerList = new List("customerList", options).on("updated", function (e) {
    0 == e.matchingItems.length
      ? (document.getElementsByClassName("noresult")[0].style.display = "block")
      : (document.getElementsByClassName("noresult")[0].style.display = "none");
    var t = 1 == e.i,
      a = e.i > e.matchingItems.length - e.page;
    document.querySelector(".pagination-prev.disabled") &&
      document
        .querySelector(".pagination-prev.disabled")
        .classList.remove("disabled"),
      document.querySelector(".pagination-next.disabled") &&
        document
          .querySelector(".pagination-next.disabled")
          .classList.remove("disabled"),
      t && document.querySelector(".pagination-prev").classList.add("disabled"),
      a && document.querySelector(".pagination-next").classList.add("disabled"),
      e.matchingItems.length <= perPage
        ? (document.querySelector(".pagination-wrap").style.display = "none")
        : (document.querySelector(".pagination-wrap").style.display = "flex"),
      e.matchingItems.length == perPage &&
        document
          .querySelector(".pagination.listjs-pagination")
          .firstElementChild.children[0].click(),
      0 < e.matchingItems.length
        ? (document.getElementsByClassName("noresult")[0].style.display =
            "none")
        : (document.getElementsByClassName("noresult")[0].style.display =
            "block");
  }));
const xhttp = new XMLHttpRequest();
(xhttp.onload = function () {
  var e = JSON.parse(this.responseText);
  Array.from(e).forEach((e) => {
    customerList.add({
      id:
        '<a href="javascript:void(0);" class="fw-medium link-primary">#VZ' +
        e.id +
        "</a>",
      customer_name: e.customer_name,
      email: e.email,
      date: e.date,
      phone: e.phone,
      status: isStatus(e.status),
    }),
      customerList.sort("id", { order: "desc" }),
      refreshCallbacks();
  }),
    customerList.remove(
      "id",
      '<a href="javascript:void(0);" class="fw-medium link-primary">#VZ2101</a>'
    );
}),
  xhttp.open("GET", "assets/json/table-customer-list.json"),
  xhttp.send();
var isValue = (isCount = new DOMParser().parseFromString(
    customerList.items.slice(-1)[0]._values.id,
    "text/html"
  )).body.firstElementChild.innerHTML,
  idField = document.getElementById("id-field"),
  customerNameField = document.getElementById("customername-field"),
  emailField = document.getElementById("email-field"),
  dateField = document.getElementById("date-field"),
  phoneField = document.getElementById("phone-field"),
  statusField = document.getElementById("status-field"),
  addBtn = document.getElementById("add-btn"),
  editBtn = document.getElementById("edit-btn"),
  removeBtns = document.getElementsByClassName("remove-item-btn"),
  editBtns = document.getElementsByClassName("edit-item-btn");
function filterContact(e) {
  var t = e;
  customerList.filter(function (e) {
    e = (matchData = new DOMParser().parseFromString(
      e.values().status,
      "text/html"
    )).body.firstElementChild.innerHTML;
    return "All" == e || "All" == t || e == t;
  }),
    customerList.update();
}
function updateList() {
  var t = document.querySelector("input[name=status]:checked").value;
  (data = userList.filter(function (e) {
    return "All" == t || e.values().sts == t;
  })),
    userList.update();
}
refreshCallbacks(),
  document.getElementById("showModal") &&
    (document
      .getElementById("showModal")
      .addEventListener("show.bs.modal", function (e) {
        e.relatedTarget.classList.contains("edit-item-btn")
          ? ((document.getElementById("exampleModalLabel").innerHTML =
              "Edit Customer"),
            (document
              .getElementById("showModal")
              .querySelector(".modal-footer").style.display = "block"),
            (document.getElementById("add-btn").innerHTML = "Update"))
          : e.relatedTarget.classList.contains("add-btn")
          ? ((document.getElementById("exampleModalLabel").innerHTML =
              "Add Customer"),
            (document
              .getElementById("showModal")
              .querySelector(".modal-footer").style.display = "block"),
            (document.getElementById("add-btn").innerHTML = "Add Customer"))
          : ((document.getElementById("exampleModalLabel").innerHTML =
              "List Customer"),
            (document
              .getElementById("showModal")
              .querySelector(".modal-footer").style.display = "none"));
      }),
    ischeckboxcheck(),
    document
      .getElementById("showModal")
      .addEventListener("hidden.bs.modal", function () {
        clearFields();
      })),
  document
    .querySelector("#customerList")
    .addEventListener("click", function () {
      ischeckboxcheck();
    });
var table = document.getElementById("customerTable"),
  tr = table.getElementsByTagName("tr"),
  trlist = table.querySelectorAll(".list tr"),
  count = 11,
  forms = document.querySelectorAll(".tablelist-form"),
  statusVal =
    (Array.prototype.slice.call(forms).forEach(function (a) {
      a.addEventListener(
        "submit",
        function (e) {
          var t;
          a.checkValidity()
            ? (e.preventDefault(),
              "" === customerNameField.value ||
              "" === emailField.value ||
              "" === dateField.value ||
              "" === phoneField.value ||
              editlist
                ? "" !== customerNameField.value &&
                  "" !== emailField.value &&
                  "" !== dateField.value &&
                  "" !== phoneField.value &&
                  editlist &&
                  ((t = customerList.get({ id: idField.value })),
                  Array.from(t).forEach(function (e) {
                    (isid = new DOMParser().parseFromString(
                      e._values.id,
                      "text/html"
                    )).body.firstElementChild.innerHTML == itemId &&
                      e.values({
                        id:
                          '<a href="javascript:void(0);" class="fw-medium link-primary">' +
                          idField.value +
                          "</a>",
                        customer_name: customerNameField.value,
                        email: emailField.value,
                        date: dateField.value,
                        phone: phoneField.value,
                        status: isStatus(statusField.value),
                      });
                  }),
                  document.getElementById("close-modal").click(),
                  clearFields(),
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Customer updated Successfully!",
                    showConfirmButton: !1,
                    timer: 2e3,
                    showCloseButton: !0,
                  }))
                : (customerList.add({
                    id:
                      '<a href="javascript:void(0);" class="fw-medium link-primary">#VZ' +
                      count +
                      "</a>",
                    customer_name: customerNameField.value,
                    email: emailField.value,
                    date: dateField.value,
                    phone: phoneField.value,
                    status: isStatus(statusField.value),
                  }),
                  customerList.sort("id", { order: "desc" }),
                  document.getElementById("close-modal").click(),
                  refreshCallbacks(),
                  clearFields(),
                  filterContact("All"),
                  count++,
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Customer inserted successfully!",
                    showConfirmButton: !1,
                    timer: 2e3,
                    showCloseButton: !0,
                  })))
            : (e.preventDefault(), e.stopPropagation());
        },
        !1
      );
    }),
    new Choices(statusField));
function isStatus(e) {
  switch (e) {
    case "Active":
      return (
        '<span class="badge bg-success-subtle text-success text-uppercase">' +
        e +
        "</span>"
      );
    case "Block":
      return (
        '<span class="badge bg-danger-subtle text-danger text-uppercase">' +
        e +
        "</span>"
      );
  }
}
function ischeckboxcheck() {
  Array.from(document.getElementsByName("checkAll")).forEach(function (e) {
    e.addEventListener("click", function (e) {
      e.target.checked
        ? e.target.closest("tr").classList.add("table-active")
        : e.target.closest("tr").classList.remove("table-active");
    });
  });
}
function refreshCallbacks() {
  removeBtns &&
    Array.from(removeBtns).forEach(function (e) {
      e.addEventListener("click", function (e) {
        e.target.closest("tr").children[1].innerText,
          (itemId = e.target.closest("tr").children[1].innerText);
        e = customerList.get({ id: itemId });
        Array.from(e).forEach(function (e) {
          var t = (deleteid = new DOMParser().parseFromString(
            e._values.id,
            "text/html"
          )).body.firstElementChild;
          deleteid.body.firstElementChild.innerHTML == itemId &&
            document
              .getElementById("delete-record")
              .addEventListener("click", function () {
                customerList.remove("id", t.outerHTML),
                  document.getElementById("deleteRecordModal").click();
              });
        });
      });
    }),
    editBtns &&
      Array.from(editBtns).forEach(function (e) {
        e.addEventListener("click", function (e) {
          e.target.closest("tr").children[1].innerText,
            (itemId = e.target.closest("tr").children[1].innerText);
          e = customerList.get({ id: itemId });
          Array.from(e).forEach(function (e) {
            var t = (isid = new DOMParser().parseFromString(
              e._values.id,
              "text/html"
            )).body.firstElementChild.innerHTML;
            t == itemId &&
              ((editlist = !0),
              (idField.value = t),
              (customerNameField.value = e._values.customer_name),
              (emailField.value = e._values.email),
              (dateField.value = e._values.date),
              (phoneField.value = e._values.phone),
              statusVal && statusVal.destroy(),
              (statusVal = new Choices(statusField)),
              (t = (val = new DOMParser().parseFromString(
                e._values.status,
                "text/html"
              )).body.firstElementChild.innerHTML),
              statusVal.setChoiceByValue(t),
              flatpickr("#date-field", {
                dateFormat: "d M, Y",
                defaultDate: e._values.date,
              }));
          });
        });
      });
}
function clearFields() {
  (customerNameField.value = ""),
    (emailField.value = ""),
    (dateField.value = ""),
    (phoneField.value = "");
}
function deleteMultiple() {
  ids_array = [];
  var e = document.getElementsByName("chk_child");
  if (
    (Array.from(e).forEach(function (e) {
      1 == e.checked &&
        ((e =
          e.parentNode.parentNode.parentNode.querySelector(".id a").innerHTML),
        ids_array.push(e));
    }),
    "undefined" != typeof ids_array && 0 < ids_array.length)
  ) {
    if (!confirm("Are you sure you want to delete this?")) return !1;
    Array.from(ids_array).forEach(function (e) {
      customerList.remove(
        "id",
        `<a href="javascript:void(0);" class="fw-medium link-primary">${e}</a>`
      );
    }),
      (document.getElementById("checkAll").checked = !1);
  } else
    Swal.fire({
      title: "Please select at least one checkbox",
      confirmButtonClass: "btn btn-info",
      buttonsStyling: !1,
      showCloseButton: !0,
    });
}
document.querySelector(".pagination-next") &&
  document
    .querySelector(".pagination-next")
    .addEventListener("click", function () {
      document.querySelector(".pagination.listjs-pagination") &&
        document
          .querySelector(".pagination.listjs-pagination")
          .querySelector(".active") &&
        document
          .querySelector(".pagination.listjs-pagination")
          .querySelector(".active")
          .nextElementSibling.children[0].click();
    }),
  document.querySelector(".pagination-prev") &&
    document
      .querySelector(".pagination-prev")
      .addEventListener("click", function () {
        document.querySelector(".pagination.listjs-pagination") &&
          document
            .querySelector(".pagination.listjs-pagination")
            .querySelector(".active") &&
          document
            .querySelector(".pagination.listjs-pagination")
            .querySelector(".active")
            .previousSibling.children[0].click();
      });
var attroptions = {
    valueNames: [
      "name",
      "born",
      { data: ["id"] },
      { attr: "src", name: "image" },
      { attr: "href", name: "link" },
      { attr: "data-timestamp", name: "timestamp" },
    ],
  },
  attrList = new List("users", attroptions),
  existOptionsList =
    (attrList.add({
      name: "Leia",
      born: "1954",
      image: "assets/images/users/avatar-5.jpg",
      id: 5,
      timestamp: "67893",
    }),
    { valueNames: ["contact-name", "contact-message"] }),
  existList = new List("contact-existing-list", existOptionsList),
  fuzzySearchList = new List("fuzzysearch-list", { valueNames: ["name"] }),
  paginationList = new List("pagination-list", {
    valueNames: ["pagi-list"],
    page: 3,
    pagination: !0,
  });
