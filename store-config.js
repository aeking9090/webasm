window.NovaCartStore = {
  email: "wjbu007@gmail.com",
  phone: "+84 xxx-xxxx",
  address: "Đ. Số 3, Trung Mỹ Tây, Hồ Chí Minh",
  addressMapQuery: "Đ. Số 3, Trung Mỹ Tây, Hồ Chí Minh"
};

(function () {
  function applyStoreContact() {
    const store = window.NovaCartStore || {};

    const emailEls = document.querySelectorAll('[data-contact="email"]');
    const phoneEls = document.querySelectorAll('[data-contact="phone"]');
    const addressEls = document.querySelectorAll('[data-contact="address"]');

    emailEls.forEach((el) => {
      if (el) el.textContent = store.email || "wjbu007@gmail.com";
    });

    phoneEls.forEach((el) => {
      if (el) el.textContent = store.phone || "+84 xxx-xxxx";
    });

    addressEls.forEach((el) => {
      if (el) el.textContent = store.address || "Đ. Số 3, Trung Mỹ Tây, Hồ Chí Minh";
    });

    const mapFrame = document.getElementById("storeMapFrame");
    if (mapFrame) {
      const query = encodeURIComponent(store.addressMapQuery || store.address || "Đ. Số 3, Trung Mỹ Tây, Hồ Chí Minh");
      mapFrame.src = `https://www.google.com/maps?q=${query}&output=embed`;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyStoreContact);
  } else {
    applyStoreContact();
  }
})();
