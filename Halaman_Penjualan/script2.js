// JavaScript for Toggle Menu
function toggleMenu() {
    const navbarLinks = document.querySelector(".navbar-links");
    const toggleButton = document.querySelector(".toggle-button");
  
    navbarLinks.classList.toggle("active"); // Tambah atau hapus class 'active'
    toggleButton.classList.toggle("active"); // Tambah atau hapus class 'active' pada tombol toggle
  }

function beli() {
    var nomorPenjual = "+6281339972838"; // Ganti dengan nomor penjual sebenarnya
    window.location.href = "https://wa.me/" + nomorPenjual + "?text=Saya%20ingin%20memesan%20es%20JASUKE"; // Mengarahkan ke WhatsApp dengan pesan prapesan
}
