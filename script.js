// Variável para o carrinho
let carrinho = [];

//Função adiciona itens ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    alert(`${nome} foi adicionado ao carrinho!`);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Função mostra o carrinho
function mostrarCarrinho() {
    const carrinhoDiv = document.getElementById('itensCarrinho');
    const carrinhoSecao = document.getElementById('carrinho');
    const itens = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (itens.length === 0) {
        carrinhoDiv.innerHTML = '<p>O carrinho está vazio no momento compre agora!.</p>';
    } else {
        const lista = document.createElement('ul');
        let total = 0;

        itens.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            lista.appendChild(li);
            total += item.preco;
        });

        carrinhoDiv.innerHTML = '';
        carrinhoDiv.appendChild(lista);

        const totalDiv = document.createElement('div');
        totalDiv.innerHTML = `<strong>Total: R$ ${total.toFixed(2)}</strong>`;
        carrinhoDiv.appendChild(totalDiv);
    }

    carrinhoSecao.style.display = 'block';
}

// Função fechar o carrinho
function fecharCarrinho() {
    const carrinhoSecao = document.getElementById('carrinho');
    carrinhoSecao.style.display = 'none';
}

