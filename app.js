// ============================================================
// BANCO DE USUÁRIOS CADASTRADOS
// ============================================================
const usuariosCadastrados = [
    { email: "admin@hidraulicapro.com", senha: "admin123" },
    { email: "joao@hidraulicapro.com", senha: "joao2026" },
    { email: "maria@hidraulicapro.com", senha: "maria2026" },
    { email: "lopes@hidraulicapro.com", senha: "lopes2020" },
];


// ============================================================
// CATÁLOGO DE PEDIDOS
// ============================================================
const pedidos = [
    { id: 1, descricao: "Bomba Alta Pressão - Modelo AP200", preco: 1250.00, imagem: "./IMG/1.jpg", status: "Em estoque" },
    { id: 2, descricao: "Bomba Submersível - Modelo BS100", preco: 980.00, imagem: "./IMG/2.jpg", status: "Em estoque" },
    { id: 3, descricao: "Kit Manutenção - Revisão Completa", preco: 350.00, imagem: "./IMG/3.jpg", status: "Disponível" },
];


// ============================================================
// INICIALIZAÇÃO DO LOGIN
// Só roda se os elementos do formulário existirem na página.
// ============================================================
const elemento = {
    email: document.querySelector("#email"),
    senha: document.querySelector("#senha"),
    form: document.querySelector("#form"),
    button: document.querySelector("#button"),
    mensagemErro: document.querySelector("#mensagem-erro"),
};

if (elemento.form) {
    elemento.form.addEventListener("submit", (event) => {
        event.preventDefault();
        autenticarUsuario(elemento.email.value, elemento.senha.value);
    });
}


// ============================================================
// FUNÇÃO: autenticarUsuario
// ============================================================
function autenticarUsuario(email, senha) {
    if (email.trim() === "" || senha.trim() === "") {
        exibirErro("Por favor, preencha o e-mail e a senha.");
        return;
    }

    const usuarioEncontrado = usuariosCadastrados.find(
        (usuario) => usuario.email === email && usuario.senha === senha
    );

    if (usuarioEncontrado) {
        window.location.href = "bem-vindo.html";
    } else {
        exibirErro("E-mail ou senha incorretos. Acesso negado.");
        elemento.senha.value = "";
    }
}


// ============================================================
// FUNÇÃO: exibirErro (login)
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
// ============================================================
function funcaoIndisponivel() {
    alert("Função Indisponível");
}


// ============================================================
// FUNÇÃO: abrirConsulta
// ============================================================
function abrirConsulta(event) {
    event.preventDefault();
    document.getElementById("tela-bemvindo").style.display = "none";
    document.getElementById("tela-consulta").style.display = "block";
    document.getElementById("erro-consulta").style.display = "none";
    document.getElementById("resultado-pedido").style.display = "none";
    document.getElementById("input-consulta").value = "";
}


// ============================================================
// FUNÇÃO: consultarPedido
// ============================================================
function consultarPedido() {
    const numero = parseInt(document.getElementById("input-consulta").value);
    const erroEl = document.getElementById("erro-consulta");
    const resultadoEl = document.getElementById("resultado-pedido");

    resultadoEl.style.display = "none";
    erroEl.style.display = "none";

    if (!numero) {
        erroEl.style.color = "#c0392b";
        erroEl.textContent = "⚠️ Digite um número de pedido.";
        erroEl.style.display = "block";
        return;
    }

    const encontrado = pedidos.find(p => p.id === numero);

    if (encontrado) {
        exibirResultado(encontrado);
    } else {
        erroEl.style.color = "#c0392b";
        erroEl.textContent = "❌ Produto não encontrado!";
        erroEl.style.display = "block";
    }
}


// ============================================================
// FUNÇÃO: exibirResultado
// ============================================================
function exibirResultado(pedido) {
    const resultadoEl = document.getElementById("resultado-pedido");

    const precoFormatado = pedido.preco
        ? pedido.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
        : "Consulte-nos";

    resultadoEl.innerHTML = `
        <div class="card-resultado">
            <img
                src="${pedido.imagem}"
                alt="${pedido.descricao}"
                class="card-imagem"
                onerror="this.src='./IMG/sem-imagem.jpg'; this.onerror=null;"
            />
            <div class="card-info">
                <span class="card-badge">✔ ${pedido.status || "Disponível"}</span>
                <h3 class="card-titulo">${pedido.descricao}</h3>
                <p class="card-id">Pedido Nº <strong>#${String(pedido.id).padStart(4, "0")}</strong></p>
                <p class="card-preco">${precoFormatado}</p>
            </div>
        </div>
    `;

    resultadoEl.style.display = "block";
}