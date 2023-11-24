
function showToast(message) {
    var toast = document.getElementById('toast');
    toast.innerHTML = message;
    toast.style.display = 'block';

    setTimeout(function () {
        toast.style.display = 'none';
    }, 9000); // Hides the toast after 3 seconds
}

function acceptProposal() {
    showToast('Selamat! sekarang lo sudah jadi pacar gua.');
    // Tambahan logika atau aksi lainnya setelah tombol diterima
}

function rejectProposal() {
    showToast('Maaf, lo tetep bakalan jadi pacar gua');
    // Tambahan logika atau aksi lainnya setelah tombol ditolak
}

// script.js

// script.js

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

