
// // app.js

// document.addEventListener('DOMContentLoaded', () => {
//     const navLinks = document.querySelectorAll('nav ul li a:not(#loginBtn):not(#homeLink)');
//     navLinks.forEach(link => {
//         link.addEventListener('click', (e) => {
//             if (!firebase.auth().currentUser) {
//                 e.preventDefault();
//                 alert('Please log in to access this page.');
//                 document.getElementById('loginModal').style.display = 'block';
//             }
//         });
//     });
// });


// app.js

document.addEventListener('DOMContentLoaded', () => {
    // Select all nav links except for the login button
    const navLinks = document.querySelectorAll('nav.navbar-nav .nav-link:not(#loginBtn)');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (!firebase.auth().currentUser) {
                e.preventDefault();
                alert('Please log in to access this page.');
                document.getElementById('loginModal').style.display = 'block';
            }
        });
    });
});
