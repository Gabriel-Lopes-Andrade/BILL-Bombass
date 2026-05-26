// ============================================================
// BANCO DE USUÁRIOS CADASTRADOS
// Para adicionar novos usuários, basta incluir mais objetos
// neste array com os campos "email" e "senha".
// ============================================================
const usuariosCadastrados = [
    { email: "admin@hidraulicapro.com", senha: "admin123" },
    { email: "joao@hidraulicapro.com", senha: "joao2026" },
    { email: "maria@hidraulicapro.com", senha: "maria2026" },
    { email: "lopes@hidraulicapro.com", senha: "lopes2020"},

];  


// ============================================================
// CAPTURA DOS ELEMENTOS DO DOM
// Reúne todos os elementos HTML necessários em um único objeto.
// ============================================================
const elemento = {
    email: document.querySelector("#email"),
    senha: document.querySelector("#senha"),
    form: document.querySelector("#form"),
    button: document.querySelector("#button"),
    mensagemErro: document.querySelector("#mensagem-erro"),
};


// ============================================================
// EVENTO DE SUBMIT DO FORMULÁRIO
// Escuta o envio do form e chama a função de autenticação.
// A vírgula foi corrigida para ponto: form.addEventListener
// ============================================================
elemento.form.addEventListener("submit", (event) => {
    event.preventDefault();
    autenticarUsuario(elemento.email.value, elemento.senha.value); // .value corrigido (era .ariaValueMax)
});


// ============================================================
// FUNÇÃO: autenticarUsuario
// Valida se os campos estão preenchidos, depois verifica se
// o email e senha correspondem a algum usuário cadastrado.
// Se sim, redireciona para bem-vindo.html. Se não, exibe erro.
// ============================================================
function autenticarUsuario(email, senha) {

    // 1. Verifica se os campos estão vazios
    if (email.trim() === "" || senha.trim() === "") {
        exibirErro("Por favor, preencha o e-mail e a senha.");
        return;
    }

    // 2. Procura o usuário no array de cadastrados
    const usuarioEncontrado = usuariosCadastrados.find(
        (usuario) => usuario.email === email && usuario.senha === senha
    );

    // 3. Se encontrou, redireciona. Se não, bloqueia e avisa.
    if (usuarioEncontrado) {
        window.location.href = "bem-vindo.html";
    } else {
        exibirErro("E-mail ou senha incorretos. Acesso negado.");
        elemento.senha.value = ""; // Limpa o campo senha por segurança
    }
}


// ============================================================
// FUNÇÃO: exibirErro
// Mostra uma mensagem de erro na tela dentro do elemento
// com id="mensagem-erro" no login.html.
// ============================================================
function exibirErro(mensagem) {
    if (elemento.mensagemErro) {
        elemento.mensagemErro.textContent = mensagem;
        elemento.mensagemErro.style.display = "block";
    } else {
        alert(mensagem);
    }
}


// ============================================================
// FUNÇÃO: funcaoIndisponivel
// Usada nos botões "Saiba Mais" da home.html.
// Mantida sem alterações pois está correta e funcional.
// ============================================================
function funcaoIndisponivel() {
    alert("Função Indisponível");
}