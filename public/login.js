document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  try {
    const resposta = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha })
    });

    const resultado = await resposta.json();

    if (resultado.sucesso) {
      alert('Login bem-sucedido!');
    } else {
      alert('Email ou senha incorretos.');
    }
  } catch (error) {
    alert('Erro na conexão com o servidor.');
  }
});
