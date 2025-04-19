//------------------------------------------------------------------------------------
// Mock user for login
const mockUser = {
       email: "george@gmail.com",
       nome: "george"
   };
   // Login Form Handling
   if (document.getElementById('loginForm')) {
       const loginForm = document.getElementById('loginForm');
       const loginError = document.getElementById('loginError');
       
       loginForm.addEventListener('submit', function(event) {
           event.preventDefault();
           
        const email = document.getElementById('email').value.trim().toLowerCase();
        const nome = document.getElementById('nome').value.trim().toLowerCase();
           
        if (email === mockUser.email.toLowerCase() && nome === mockUser.nome.toLowerCase()) {
               // Successful login - redirect to home page
              window.location.href = 'index.html';
        } else {
               // Show error message
              loginError.textContent = '!!!E-mail ou Nome incorreto!!!';
        }
     });
   }