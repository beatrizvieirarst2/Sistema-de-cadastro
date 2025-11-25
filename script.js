const form = document.getElementById("formCadastro");
const listaUsuarios = document.getElementById("usuarios");

let usuarios = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const usuario = { nome, email, telefone };

    usuarios.push(usuario);
    atualizarLista();
    form.reset();
});

function atualizarLista() {
    listaUsuarios.innerHTML = "";

    usuarios.forEach((u, index) => {
        const li = document.createElement("li");
        li.textContent = `${u.nome} — ${u.email} — ${u.telefone}`;
        listaUsuarios.appendChild(li);
    });
}
