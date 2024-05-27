// JavaScript for Toggle Menu
function toggleMenu() {
  const navbarLinks = document.querySelector(".navbar-links");
  const toggleButton = document.querySelector(".toggle-button");

  navbarLinks.classList.toggle("active"); // Tambah atau hapus class 'active'
  toggleButton.classList.toggle("active"); // Tambah atau hapus class 'active' pada tombol toggle
}

// jagung manis
document
  .getElementById("decisionForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Mengambil nilai input
    var taste = parseInt(document.getElementById("taste").value);
    var texture = parseInt(document.getElementById("texture").value);
    var color = parseInt(document.getElementById("color").value);

    // Logika Keputusan
    var totalScore = taste + texture + color;
    var result = "";

    if (totalScore >= 25) {
      result = "Bahan-bahan tersebut layak digunakan untuk membuat es pepaya.";
    } else {
      result =
        "Bahan-bahan tersebut tidak layak digunakan untuk membuat es pepaya.";
    }

    // Menampilkan hasil
    document.getElementById("result").innerHTML = result;
  });

// batagor ikan
document
  .getElementById("decisionForm2")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Mengambil nilai input
    var taste = parseInt(document.getElementById("jenisikan").value);
    var texture = parseInt(document.getElementById("kesegaranikan").value);
    var color = parseInt(document.getElementById("warnainsang").value);
    var color = parseInt(document.getElementById("warnamata").value);

    // Logika Keputusan
    var totalScore = taste + texture + color;
    var result = "";

    if (totalScore >= 25) {
      result =
        "Bahan-bahan tersebut layak digunakan untuk membuat Batagor Ikan.";
    } else {
      result =
        "Bahan-bahan tersebut tidak layak digunakan untuk membuat Batagor Ikan.";
    }

    // Menampilkan hasil
    document.getElementById("renol").innerHTML = result;
  });
