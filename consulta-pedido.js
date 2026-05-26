// ============================================================
// CATÁLOGO DE PEDIDOS
// Para adicionar novos pedidos, inclua mais objetos aqui.
// ============================================================
const pedidos = [
    { id: 1, descricao: "Bomba Alta Pressão - Modelo AP200", preco: 1250.00, imagem: "./IMG/1.jpg" },
    { id: 2, descricao: "Bomba Submersível - Modelo BS100" },
    { id: 3, descricao: "Kit Manutenção - Revisão Completa" },
];


// ============================================================
// FUNÇÃO: abrirConsulta
// Chamada ao clicar em "Consultar Pedido" na barra lateral.
// Esconde o card de boas-vindas e exibe o card de consulta.
// ============================================================
function abrirConsulta(event) {
    event.preventDefault();
    document.getElementById("tela-bemvindo").style.display = "none";
    document.getElementById("tela-consulta").style.display = "block";
    document.getElementById("erro-consulta").style.display = "none";
    document.getElementById("input-consulta").value = "";
}


// ============================================================
// FUNÇÃO: consultarPedido
// Busca o número digitado no array de pedidos.
// Exibe a descrição se encontrado, ou erro se não encontrado.
// ============================================================
function consultarPedido() {
    const numero = parseInt(document.getElementById("input-consulta").value);
    const erroEl = document.getElementById("erro-consulta");

    if (!numero) {
        erroEl.style.color = "#c0392b";
        erroEl.textContent = "Digite um número de pedido.";
        erroEl.style.display = "block";
        return;
    }

    const encontrado = pedidos.find(p => p.id === numero);

    if (encontrado) {
        erroEl.style.color = "#1447b8";
        erroEl.textContent = "Pedido encontrado: " + encontrado.descricao ;
        erroEl.style.display = "block";
    } else {
        erroEl.style.color = "#c0392b";
        erroEl.textContent = "Produto não encontrado!";
        erroEl.style.display = "block";
    }
}
