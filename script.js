function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "desawakalambe27" && pass === "wakalambe27") {
    alert("Login berhasil! Selamat datang, Admin Desa Wakalambe.");
    window.location.href = "index.html";
  } else {
    alert("Username atau password salah!");
  }
}