document.querySelector('.save-button').addEventListener('click', (event) => {
    event.preventDefault(); // Hindari langsung pindah laman
    const mainContainer = document.querySelector('.main-container');

    // Tambahkan kelas untuk animasi swipe keluar ke kanan
    mainContainer.classList.add('slide-out-right');

    // Tunggu animasi selesai sebelum pindah laman
    setTimeout(() => {
        window.location.href = '../edit_team.html'; // URL laman sebelumnya
    }, 500); // Sesuai durasi animasi di CSS
});

document.addEventListener('DOMContentLoaded', () => {
    // Muat data dari LocalStorage saat halaman dimuat
    loadUserSelections();

    document.querySelector('.save-button').addEventListener('click', () => {
        saveUserSelections();
        document.querySelector('.main-container').classList.add('slide-out-right');
        setTimeout(() => {
            window.location.href = 'edit_team.html';
        }, 300); // Sesuaikan waktu dengan durasi transisi
    });
});

function saveUserSelections() {
    const role = document.querySelector('input[name="role"]:checked')?.value;
    const permissions = Array.from(document.querySelectorAll('input[name="permission"]:checked')).map(input => input.value);

    // Simpan data ke LocalStorage
    localStorage.setItem('userRole', role || '');
    localStorage.setItem('userPermissions', JSON.stringify(permissions));

    alert('Perubahan berhasil disimpan!');
}

function loadUserSelections() {
    // Muat data dari LocalStorage
    const savedRole = localStorage.getItem('userRole');
    const savedPermissions = JSON.parse(localStorage.getItem('userPermissions') || '[]');

    // Terapkan data ke form
    if (savedRole) {
        const roleInput = document.querySelector(`input[name="role"][value="${savedRole}"]`);
        if (roleInput) roleInput.checked = true;
    }

    savedPermissions.forEach(permission => {
        const permissionInput = document.querySelector(`input[name="permission"][value="${permission}"]`);
        if (permissionInput) permissionInput.checked = true;
    });
}
