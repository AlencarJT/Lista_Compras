var tabela = document.querySelectorAll(".produto");
var adicionarTabela = document.querySelector(".tabela-produtos")

for (i = 0; i < tabela.length; i++){
	var quantidadeTD = tabela[i].querySelector(".info-qtd");
	var quantidade = quantidadeTD.textContent;
	var precoUnitarioTD = tabela[i].querySelector(".info-precoUnitario");
	var precoUnitario = precoUnitarioTD.innerText;
	var precoTotal = tabela[i].querySelector(".info-precoTotal")
	precoTotal.textContent = quantidade * precoUnitario
}

var botao = document.querySelector("#adiciona-produto")

botao.addEventListener("click", function(event){
	event.preventDefault();
	var novoProduto = document.querySelector("#produto").value;
	var novaQuantidade = document.querySelector("#quantidade").value;
	var novoUnitario = document.querySelector("#unitario").value;
	
	var novaLinha = document.createElement('tr');
	novaLinha.classList.add("produto")
	
	var produto = document.createElement('td');
	produto.classList.add("info-produto")
	produto.textContent = novoProduto;

	var quantidade = document.createElement('td');
	quantidade.classList.add("info-qtd")
	quantidade.textContent = novaQuantidade

	var unitario = document.createElement('td');
	unitario.classList.add("info-precoUnitario")
	unitario.textContent = novoUnitario;

	var total = document.createElement('td');
	total.classList.add("info-precoTotal")
	total.textContent = quantidade.textContent * unitario.textContent;

	novaLinha.appendChild(produto)
	novaLinha.appendChild(quantidade)
	novaLinha.appendChild(unitario)
	novaLinha.appendChild(total)

	adicionarTabela.appendChild(novaLinha)

})