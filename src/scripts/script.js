document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário padrão

  // Verifica se todos os campos obrigatórios estão preenchidos
  const firstname = document.getElementById('firstname').value.trim();
  const lastname = document.getElementById('lastname').value.trim();
  const email = document.getElementById('email').value.trim();
  const number = document.getElementById('number').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  if (firstname && lastname && email && number && password && confirmPassword && password === confirmPassword) {
      alert('Usuário cadastrado com sucesso!');
      // Aqui você pode enviar o formulário ou fazer outra ação necessária
  } else {
      alert('Por favor, preencha todos os campos corretamente.');
  }
  this.reset();
});

