document.getElementById("table-gridjs") &&
  new gridjs.Grid({
    columns: [
      {
        name: "ID",
        width: "80px",
        formatter: function (e) {
          return gridjs.html('<span class="fw-semibold">' + e + "</span>");
        },
      },
      { name: "Transaction Date & Time", width: "220px" },
      { name: "Name", width: "150px" },
      {
        name: "A/C Number",
        width: "220px",
      },
      { name: "Debit", width: "250px" },
      { name: "Credit", width: "180px" },
      { name: "Available Balance", width: "180px" },
      {
        name: "Status",
        width: "150px",
        formatter: function (e) {
          return gridjs.html("Success");
        },
      },
    ],
    pagination: { limit: 10 },
    sort: !0,
    search: !0,
    data: [
      [
        "01",
        "26 March 2023 12:52 PM",
        "Jonathan",
        "6524812523",
        "2206.00",
        "500.50",
        "10500.50",
      ],
      [
        "02",
        "26 March 2023 12:52 PM",
        "Harold",
        "6524812523",
        "2206.00",
        "500.50",
        "10500.50",
      ],
      [
        "03",
        "26 March 2023 12:52 PM",
        "Shannon",
        "6524812523",
        "2206.00",
        "500.50",
        "10500.50",
      ],
      [
        "04",
        "26 March 2023 12:52 PM",
        "Robert",
        "6524812523",
        "2206.00",
        "500.50",
        "10500.50",
      ],
      [
        "05",
        "26 March 2023 12:52 PM",
        "Noel",
        "6524812523",
        "2206.00",
        "500.50",
        "10500.50",
      ],
    ],
  }).render(document.getElementById("table-gridjs")),
  document.getElementById("table-card") &&
    new gridjs.Grid({
      columns: [
        { name: "Name", width: "150px" },
        { name: "Transaction Date & Time", width: "220px" },
        { name: "A/C Number", width: "250px" },
        { name: "Debit", width: "250px" },
        { name: "Credit", width: "250px" },
        { name: "Available Balance", width: "150px" },
      ],
      sort: !0,
      pagination: { limit: 5 },
      data: [
        [
          "01",
          "26 March 2023 12:52 PM",
          "Jonathan",
          "6524812523",
          "2206.00",
          "500.50",
          "10500.50",
        ],
        [
          "02",
          "26 March 2023 12:52 PM",
          "Harold",
          "6524812523",
          "2206.00",
          "500.50",
          "10500.50",
        ],
        [
          "03",
          "26 March 2023 12:52 PM",
          "Shannon",
          "6524812523",
          "2206.00",
          "500.50",
          "10500.50",
        ],
        [
          "04",
          "26 March 2023 12:52 PM",
          "Robert",
          "6524812523",
          "2206.00",
          "500.50",
          "10500.50",
        ],
        [
          "05",
          "26 March 2023 12:52 PM",
          "Noel",
          "6524812523",
          "2206.00",
          "500.50",
          "10500.50",
        ],
      ],
    });

document.getElementById("table-withdrawaljs") &&
  new gridjs.Grid({
    columns: [
      {
        name: "ID",
        width: "80px",
        formatter: function (e) {
          return gridjs.html('<span class="fw-semibold">' + e + "</span>");
        },
      },
      { name: "Transaction Date & Time", width: "220px" },
      { name: "Name", width: "150px" },
      {
        name: "A/C Number",
        width: "220px",
      },
      { name: "Debit", width: "250px" },
      { name: "Available Balance", width: "180px" },
      {
        name: "Status",
        width: "150px",
        formatter: function (e) {
          return gridjs.html("Success");
        },
      },
    ],
    pagination: { limit: 10 },
    sort: !0,
    search: !0,
    data: [
      [
        "01",
        "26 March 2023 12:52 PM",
        "Jonathan",
        "6524812523",
        "500.50",
        "10500.50",
      ],
      [
        "02",
        "26 March 2023 12:52 PM",
        "Harold",
        "6524812523",
        "500.50",
        "10500.50",
      ],
      [
        "03",
        "26 March 2023 12:52 PM",
        "Shannon",
        "6524812523",
        "500.50",
        "10500.50",
      ],
      [
        "04",
        "26 March 2023 12:52 PM",
        "Robert",
        "6524812523",
        "500.50",
        "10500.50",
      ],
      [
        "05",
        "26 March 2023 12:52 PM",
        "Noel",
        "6524812523",
        "500.50",
        "10500.50",
      ],
    ],
  }).render(document.getElementById("table-withdrawaljs")),
  document.getElementById("table-card") &&
    new gridjs.Grid({
      columns: [
        { name: "Name", width: "150px" },
        { name: "Transaction Date & Time", width: "220px" },
        { name: "A/C Number", width: "250px" },
        { name: "Debit", width: "250px" },
        { name: "Available Balance", width: "150px" },
      ],
      sort: !0,
      pagination: { limit: 5 },
      data: [
        [
          "01",
          "26 March 2023 12:52 PM",
          "Jonathan",
          "6524812523",
          "500.50",
          "10500.50",
        ],
        [
          "02",
          "26 March 2023 12:52 PM",
          "Harold",
          "6524812523",
          "500.50",
          "10500.50",
        ],
        [
          "03",
          "26 March 2023 12:52 PM",
          "Shannon",
          "6524812523",
          "500.50",
          "10500.50",
        ],
        [
          "04",
          "26 March 2023 12:52 PM",
          "Robert",
          "6524812523",
          "500.50",
          "10500.50",
        ],
        [
          "05",
          "26 March 2023 12:52 PM",
          "Noel",
          "6524812523",
          "500.50",
          "10500.50",
        ],
      ],
    });

document.getElementById("table-transferjs") &&
  new gridjs.Grid({
    columns: [
      {
        name: "ID",
        width: "80px",
        formatter: function (e) {
          return gridjs.html('<span class="fw-semibold">' + e + "</span>");
        },
      },
      { name: "Transaction Date & Time", width: "220px" },
      { name: "Name", width: "150px" },
      {
        name: "A/C Number",
        width: "220px",
      },
      { name: "Debit", width: "250px" },
      { name: "Credit", width: "180px" },
      { name: "Available Balance", width: "180px" },
      {
        name: "Status",
        width: "150px",
        formatter: function (e) {
          return gridjs.html("Success");
        },
      },
    ],
    pagination: { limit: 10 },
    sort: !0,
    search: !0,
    data: [
      [
        "01",
        "26 March 2023 12:52 PM",
        "Jonathan",
        "6524812523",
        "2206.00",
        "500.50",
        "10500.50",
      ],
      [
        "02",
        "26 March 2023 12:52 PM",
        "Harold",
        "6524812523",
        "2206.00",
        "500.50",
        "10500.50",
      ],
      [
        "03",
        "26 March 2023 12:52 PM",
        "Shannon",
        "6524812523",
        "2206.00",
        "500.50",
        "10500.50",
      ],
      [
        "04",
        "26 March 2023 12:52 PM",
        "Robert",
        "6524812523",
        "2206.00",
        "500.50",
        "10500.50",
      ],
      [
        "05",
        "26 March 2023 12:52 PM",
        "Noel",
        "6524812523",
        "2206.00",
        "500.50",
        "10500.50",
      ],
    ],
  }).render(document.getElementById("table-transferjs")),
  document.getElementById("table-card") &&
    new gridjs.Grid({
      columns: [
        { name: "Name", width: "150px" },
        { name: "Transaction Date & Time", width: "220px" },
        { name: "A/C Number", width: "250px" },
        { name: "Debit", width: "250px" },
        { name: "Credit", width: "250px" },
        { name: "Available Balance", width: "150px" },
      ],
      sort: !0,
      pagination: { limit: 5 },
      data: [
        [
          "01",
          "26 March 2023 12:52 PM",
          "Jonathan",
          "6524812523",
          "2206.00",
          "500.50",
          "10500.50",
        ],
        [
          "02",
          "26 March 2023 12:52 PM",
          "Harold",
          "6524812523",
          "2206.00",
          "500.50",
          "10500.50",
        ],
        [
          "03",
          "26 March 2023 12:52 PM",
          "Shannon",
          "6524812523",
          "2206.00",
          "500.50",
          "10500.50",
        ],
        [
          "04",
          "26 March 2023 12:52 PM",
          "Robert",
          "6524812523",
          "2206.00",
          "500.50",
          "10500.50",
        ],
        [
          "05",
          "26 March 2023 12:52 PM",
          "Noel",
          "6524812523",
          "2206.00",
          "500.50",
          "10500.50",
        ],
      ],
    });
