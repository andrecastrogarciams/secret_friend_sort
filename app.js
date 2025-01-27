
// Selecionando os elementos do DOM
const input = document.getElementById('amigo');
const addButton = document.getElementById('btnAddFriend');
const list = document.getElementById('listFriends');
const sortButton = document.getElementById('btnSortFriend');
const resultMessage = document.getElementById('resultMessage');


// Função para adicionar palavras à lista
function adicionarAmigo() {
  const newFriend = input.value;
  if (newFriend !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = newFriend;
    list.appendChild(listItem);
    input.value = '';
  } else {
    alert('Por favor, digite uma palavra.');
  }
};


 // Função para sortear um nome e limpar a lista
 function sortearAmigo() {
    const amigos = listFriends.querySelectorAll('li'); 

    if (amigos.length > 0) { 
        const nomes = Array.from(amigos).map(amigo => amigo.textContent);
        const nomeSorteado = nomes[Math.floor(Math.random() * nomes.length)];         
        resultado.innerHTML = `<li>Amigo sorteado: <strong>${nomeSorteado}</strong></li>`;
        listFriends.innerHTML = ''; 
    } else {
        resultado.innerHTML = '<li>A lista está vazia. Adicione amigos antes de sortear.</li>';
    }
}
