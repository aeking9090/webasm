window.NovaCartStore = {
  email: "wjbu007@gmail.com",
  phone: "+84 961xxx-xxx",
  address: "Đ. Số 3, Trung Mỹ Tây, Hồ Chí Minh",
  addressMapQuery: "Đ. Số 3, Trung Mỹ Tây, Hồ Chí Minh",
  mapEmbedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=106.6627,10.8062,106.7062,10.8730&layer=mapnik&marker=10.8530,106.6820"
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
      mapFrame.src = store.mapEmbedUrl || "https://www.openstreetmap.org/export/embed.html?bbox=106.6627,10.8062,106.7062,10.8730&layer=mapnik&marker=10.8530,106.6820";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyStoreContact);
  } else {
    applyStoreContact();
  }
})();
