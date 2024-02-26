const itemdetail1 = document.querySelector('#button-1');
const itemdetail2 = document.querySelector('#button-2');
const itemdetail3 = document.querySelector('#button-3');
const itemdetail4 = document.querySelector('#button-4');
const itemdetail5 = document.querySelector('#button-5');
const itemdetail6 = document.querySelector('#button-6');
const itemdetail7 = document.querySelector('#button-7');
const itemdetail8 = document.querySelector('#button-8');
const itemdetail9 = document.querySelector('#button-9');

// Saat di klik
function togglePopup1() {
    itemdetail1.classList.toggle("active");
}
function togglePopup2() {
    itemdetail2.classList.toggle("active");
}
function togglePopup3() {
    itemdetail3.classList.toggle("active");
}
function togglePopup4() {
    itemdetail4.classList.toggle("active");
}
function togglePopup5() {
    itemdetail5.classList.toggle("active");
}
function togglePopup6() {
    itemdetail6.classList.toggle("active");
}
function togglePopup7() {
    itemdetail7.classList.toggle("active");
}
function togglePopup8() {
    itemdetail8.classList.toggle("active");
}
function togglePopup9() {
    itemdetail9.classList.toggle("active");
}

// Saat klik keluar
document.querySelectorAll('.close-btn').forEach((button) => {
    button.onclick = (e) => {
        const modal = e.target.closest('.button');
        modal.classList.remove('active');
        e.preventDefault();
    };
});
document.querySelectorAll('.close-btn2').forEach((button) => {
    button.onclick = (e) => {
        const modal = e.target.closest('.button2');
        modal.classList.remove('active');
        e.preventDefault();
    };
});
document.querySelectorAll('.close-btn3').forEach((button) => {
    button.onclick = (e) => {
        const modal = e.target.closest('.button3');
        modal.classList.remove('active');
        e.preventDefault();
    };
});


// Tambahkan event listener ke seluruh dokumen
document.addEventListener('mousedown', function(event) {
    // Dapatkan kotak modal
    const modal = document.querySelector('.content', '.content2', '.content3');

    // Periksa apakah klik terjadi di luar kotak modal
    if (!modal.contains(event.target)) {
        // Tutup modal jika klik di luar kotak modal
        itemdetail1.classList.remove('active');
        itemdetail2.classList.remove('active');
        itemdetail3.classList.remove('active');
        itemdetail4.classList.remove('active');
        itemdetail5.classList.remove('active');
        itemdetail6.classList.remove('active');
        itemdetail7.classList.remove('active');
        itemdetail8.classList.remove('active');
        itemdetail9.classList.remove('active');
    }
});

