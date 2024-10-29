$(document).ready(function() {
    $('#login-btn').click(function() {
        var username = $('#username').val();
        var password = $('#password').val();

        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
            $('#error-message').hide();
        } else {
            $('#error-message').show();
        }
    });
});
