
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

   
    if (usuario || senha ) {
        
        document.getElementById('login-container').style.display = 'none'; 
        document.getElementById('produto-container').style.display = 'block';
        
    } else {
        
        alert('Usuário ou senha inválidos');
    }
});
