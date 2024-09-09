<div class="app-menu navbar-menu">
<!-- LOGO -->
<div class="navbar-brand-box">
  <a href="index.html" class="logo logo-light">
    <span class="logo-sm">
      <img
        src="assets/images/white-logo.png"
        alt="white-logo"
        height="33"
      />
    </span>
    <span class="logo-lg">
      <img src="assets/images/logo.png" alt="logo" height="40" />
    </span>
  </a>
  <button
    type="button"
    class="btn btn-sm p-0 fs-3xl header-item float-end btn-vertical-sm-hover"
    id="vertical-hover"
  >
    <i class="ri-record-circle-line"></i>
  </button>
</div>

<div id="scrollbar">
  <div class="container-fluid">
    <div id="two-column-menu"></div>
    <ul class="navbar-nav" id="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="index.html">
          <i class="ph-gauge"></i>
          <span data-key="t-dashboards">Dashboards</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          href="#sidebarEcommerce"
          class="nav-link menu-link collapsed"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="sidebarEcommerce"
        >
          <i class="ph-storefront"></i>
          <span data-key="t-ecommerce">Product</span>
        </a>
        <div class="collapse menu-dropdown" id="sidebarEcommerce">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <a
                href="products.html"
                class="nav-link"
                data-key="t-products"
                >All Products</a
              >
            </li>
            <li class="nav-item">
              <a
                href="add-product.html"
                class="nav-link"
                data-key="t-create-product"
                >Add New Product</a
              >
            </li>
            <li class="nav-item">
              <a href="orders.html" class="nav-link" data-key="t-orders"
                >Orders</a
              >
            </li>
            <li class="nav-item">
              <a
                href="order-overview.html"
                class="nav-link"
                data-key="t-order-overview"
                >Order Overview</a
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a href="profile.html" class="nav-link menu-link">
          <i class="ph-user-circle"></i>
          <span data-key="t-calendar">Profile</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="customers.html" class="nav-link menu-link"
          ><i class="bi bi-people"></i>
          <span data-key="t-calendar">Customers</span></a
        >
      </li>
      <li class="nav-item">
        <a
          href="#sidebarInvoices"
          class="nav-link menu-link"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="sidebarInvoices"
        >
          <i class="ph-file-text"></i>
          <span data-key="t-invoices">Invoices</span>
        </a>
        <div class="collapse menu-dropdown" id="sidebarInvoices">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <a
                href="invoices-list.html"
                class="nav-link"
                data-key="t-list-view"
                >List View</a
              >
            </li>
            <li class="nav-item">
              <a
                href="invoices-overview.html"
                class="nav-link"
                data-key="t-overview"
                >Overview</a
              >
            </li>
            <li class="nav-item">
              <a
                href="create-invoices.html"
                class="nav-link"
                data-key="t-create-invoice"
                >Create Invoice</a
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a href="transactions.html" class="nav-link menu-link">
          <i class="ph ph-credit-card"></i>
          <span data-key="t-calendar">Transactions</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="javascript:void(0)" class="nav-link menu-link">
          <i class="ph ph-sign-out"></i>
          <span data-key="t-calendar">Logout</span>
        </a>
      </li>
    </ul>
  </div>
  <!-- Sidebar -->
</div>

<div class="sidebar-background"></div>
</div>