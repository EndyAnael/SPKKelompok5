// JavaScript for Toggle Menu
function toggleMenu() {
  const navbarLinks = document.querySelector(".navbar-links");
  const toggleButton = document.querySelector(".toggle-button");

  navbarLinks.classList.toggle("active"); // Tambah atau hapus class 'active'
  toggleButton.classList.toggle("active"); // Tambah atau hapus class 'active' pada tombol toggle
}

// Dapatkan modal
var modal = document.getElementById("modal-ikan");
var modal2 = document.getElementById("modal-jasuke");

// Dapatkan tombol yang membuka modal
var btn = document.getElementById("open-modal-ikan");
var btn2 = document.getElementById("open-modal-jasuke");

// Dapatkan elemen <span> yang menutup modal
var span = modal.getElementsByClassName("close")[0];
var span2 = modal2.getElementsByClassName("close")[0];

// Ketika pengguna mengklik tombol, buka modal
if (btn) {
  btn.onclick = function () {
    modal.style.display = "block";
  };
}
if (btn2) {
  btn2.onclick = function () {
    modal2.style.display = "block";
  };
}

// Ketika pengguna mengklik <span> (x), tutup modal
if (span) {
  span.onclick = function () {
    modal.style.display = "none";
  };
}

if (span2) {
  span2.onclick = function () {
    modal2.style.display = "none";
  };
}

// Ketika pengguna mengklik di luar modal, tutup modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
