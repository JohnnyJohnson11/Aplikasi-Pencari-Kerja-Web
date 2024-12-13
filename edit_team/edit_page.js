document.querySelector('.edit-btn').addEventListener('click', (event) => {
    event.preventDefault(); // Hindari langsung pindah laman
    const mainContainer = document.querySelector('.main-container');

    // Tambahkan kelas untuk animasi swipe keluar ke kiri
    mainContainer.classList.add('slide-out-left');

    // Tunggu animasi selesai sebelum pindah laman
    setTimeout(() => {
        window.location.href = 'edit_team2.html'; // URL laman baru
    }, 500); // Sesuai durasi animasi di CSS
});

document.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', () => {
        const main = document.querySelector('.main-container');
        main.classList.add('slide-out-left');
        setTimeout(() => {
            window.location.href = 'edit_team_2/edit_team2.html';
        }, 500); // Waktu harus sesuai dengan durasi transisi CSS
    });
});
