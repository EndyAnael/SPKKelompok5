// JavaScript for Toggle Menu
function toggleMenu() {
    const navbarLinks = document.querySelector(".navbar-links");
    const toggleButton = document.querySelector(".toggle-button");
  
    navbarLinks.classList.toggle("active"); // Tambah atau hapus class 'active'
    toggleButton.classList.toggle("active"); // Tambah atau hapus class 'active' pada tombol toggle
  }

document.addEventListener('DOMContentLoaded', function() {
    const penjualList = document.getElementById('penjual-list');

    // informasi kelompok
    const dataPenjual = [
        { nama: 'Hildegard Rambu Konda Ndima', foto: 'image/ega.png', deskripsi: 'Ketua Kelompok' },
        { nama: 'Jenitan verniati ina ', foto: 'image/jenitan.png', deskripsi: 'Wakil Kelompok' },
        { nama: 'Stefanus kaka', foto: 'image/stefanus.png', deskripsi: 'Bendahara' },
        { nama: 'Frich Nandra Mangngi', foto: 'image/frich.png', deskripsi: 'Anggota' },
        { nama: 'Yordan Kruiston Lamboru Putra ', foto: 'image/yordan.png', deskripsi: 'Anggota' },
        { nama: 'Mandala d marahongu ', foto: 'image/Mandala .png', deskripsi: 'Anggota' },
        { nama: 'Yakub Takandiwa ', foto: 'image/yakup.png', deskripsi: 'Anggota' },
        { nama: 'Esiyani May Konda Pawulung ', foto: 'image/esiyani.png', deskripsi: 'Anggota' },
        { nama: 'Difriyosin yo mbali ', foto: 'image/difriyosin.png', deskripsi: 'Anggota' },
        { nama: 'Asri Loda Nangi ', foto: 'image/asri.png', deskripsi: 'Anggota' },
        { nama: 'Oktavianus Bani ', foto: 'image/yanus.png', deskripsi: 'Anggota' },
        { nama: 'Irna Winarti Rambu Lika ', foto: 'image/irna.png', deskripsi: 'Anggota' },
        { nama: 'Damaris Bomba Atambaru ', foto: 'image/damaris.png', deskripsi: 'Anggota' },
        { nama: 'Rambu Rinta Okrin Malo ', foto: 'image/rambu.png', deskripsi: 'Anggota' },
        { nama: 'FERLIN MALO ', foto: 'image/ferlin.png', deskripsi: 'Anggota' },
        { nama: 'Djidon Day Ratu Andung ', foto: 'image/djidon.png', deskripsi: 'Anggota' },
        { nama: 'Afren Artato Wunu ', foto: 'image/afren.png', deskripsi: 'Anggota' },
        { nama: 'Melianasari D Tuwa ', foto: 'image/sari.png', deskripsi: 'Anggota' },
        { nama: 'Rambu Adinda Hamba Banju ', foto: 'image/dinda.png', deskripsi: 'Anggota' },
        { nama: 'Rivantri priskilani clarita ', foto: 'image/rifantri.png', deskripsi: 'Anggota' },
        { nama: 'Erma Permatasari Day Praing ', foto: 'image/erma.png', deskripsi: 'Anggota' },
        { nama: 'Eman Dena Gaba ', foto: 'image/eman.png', deskripsi: 'Anggota' },
        { nama: 'Alfred Domu Dorama Panja ', foto: 'image/alfred.png', deskripsi: 'Anggota' },
        { nama: 'Renol Bulu Manggal', foto: 'image/renol.jpg', deskripsi: 'Anggota' },
    ];

    // Tampilkan data informasi ke dalam halaman
    dataPenjual.forEach(function(penjual) {
        const penjualDiv = document.createElement('div');
        penjualDiv.classList.add('penjual');

        const foto = document.createElement('img');
        foto.src = penjual.foto;
        foto.alt = penjual.nama;

        const detail = document.createElement('div');
        const nama = document.createElement('h3');
        nama.textContent = penjual.nama;
        const deskripsi = document.createElement('p');
        deskripsi.textContent = penjual.deskripsi;

        detail.appendChild(nama);
        detail.appendChild(deskripsi);

        penjualDiv.appendChild(foto);
        penjualDiv.appendChild(detail);

        penjualList.appendChild(penjualDiv);
    });
});
