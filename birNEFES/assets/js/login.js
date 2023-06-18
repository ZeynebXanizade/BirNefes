function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Kullanıcı adı ve parolayı kontrol et
    if (username === 'admin' && password === 'admin') {
        // Başarılı giriş durumunda başka bir sayfaya yönlendir
        window.location.href = 'admin.html';
    } else {
        // Hatalı giriş durumunda hata mesajı göster
        alert('Hatalı kullanıcı adı veya parola.');
    }
}