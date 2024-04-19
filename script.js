// Array para armazenar as tarefas
let tarefas = [];

// Função para adicionar uma nova tarefa à lista
function adicionarTarefa() {
    const input = document.getElementById("tarefaInput");
    const descricao = input.value.trim();
    if (descricao !== "") {
        const novaTarefa = {
            descricao: descricao,
            concluida: false
        };
        tarefas.push(novaTarefa);
        input.value = "";
        atualizarListaTarefas();
    } else {
        alert("Por favor, insira uma descrição para a tarefa.");
    }
}

// Função para marcar uma tarefa como concluída
function marcarConcluida(index) {
    tarefas[index].concluida = true;
    atualizarListaTarefas();
}

// Função para remover uma tarefa da lista
function removerTarefa(index) {
    tarefas.splice(index, 1);
    atualizarListaTarefas();
}

// Função para atualizar a lista de tarefas na página
function atualizarListaTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.textContent = tarefa.descricao;
        if (tarefa.concluida) {
            li.classList.add("concluida");
        } else {
            const concluidaButton = document.createElement("button");
            concluidaButton.textContent = "Concluir";
            concluidaButton.onclick = function() {
                marcarConcluida(index);
            };
            li.appendChild(concluidaButton);
        }
        const removerButton = document.createElement("button");
        removerButton.textContent = "Remover";
        removerButton.onclick = function() {
            removerTarefa(index);
        };
        li.appendChild(removerButton);
        listaTarefas.appendChild(li);
    });
}
