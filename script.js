function login() {
    const username = document.getElementById("username")?.value;
    const password = document.getElementById("password")?.value;

    if (username === "zulham" && password === "zul123") {
        localStorage.setItem("login", "true");
        localStorage.setItem("nama", "Dzulhamsyah");
        localStorage.setItem("nim", "2311468875");
        localStorage.setItem("email", "zulhamsyah04@email.com");
        localStorage.setItem("prodi", "Sistem Informasi");
        localStorage.setItem("konsentrasi", "Sistem Informasi Manajemen");

        window.location.href = "dashboard.html";
    } else {
        alert("Login gagal!");
    }
}

// JALAN HANYA DI DASHBOARD
if (window.location.pathname.includes("dashboard.html")) {
    if (localStorage.getItem("login") !== "true") {
        window.location.href = "index.html";
    } else {
        const nama = document.getElementById("nama");
        const nim = document.getElementById("nim");
        const email = document.getElementById("email");
        const prodi = document.getElementById("prodi");
        const konsentrasi = document.getElementById("konsentrasi");

        if (nama) nama.innerText = localStorage.getItem("nama");
        if (nim) nim.innerText = localStorage.getItem("nim");
        if (email) email.innerText = localStorage.getItem("email");
        if (prodi) prodi.innerText = localStorage.getItem("prodi");
        if (konsentrasi) konsentrasi.innerText = localStorage.getItem("konsentrasi");
    }
}

// CONFIRM LOGOUT
function logout() {
    const yakin = confirm("Apakah kamu yakin ingin logout?");
    if (yakin) {
        localStorage.clear();
        window.location.href = "index.html";
    }
}
