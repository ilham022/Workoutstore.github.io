// Menunggu hingga seluruh dokumen dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Mendapatkan semua tombol "Beli sekarang"
    var buyButtons = document.querySelectorAll('.buy-button');

    // Menambahkan event listener untuk setiap tombol
    buyButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah aksi default dari anchor tag
            alert('Terima kasih sudah membeli! Kami akan menghubungi Anda melalui WhatsApp.');
            window.location.href = this.href; // Mengarahkan ke link WhatsApp setelah notifikasi
        });
    });
});
