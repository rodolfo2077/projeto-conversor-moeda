const convertButton = document.querySelector(".btn-converter");

function Converter() {
  const moedaSelecionada = document.getElementById("moeda").value;
  const entradaElement = document.querySelector(".display");
  const entrada = parseFloat(entradaElement.value);

  const cotacoes = {
    usd: 5.58,
    euro: 6.55,
    iens: 26.67,
  };

  const cotacao = cotacoes[moedaSelecionada] || 0;
  const convertido = entrada / cotacao;

  // Atualiza o valor em BRL
  const valorAtualBRL = document.getElementById("ValorAtual");
  valorAtualBRL.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(entradaElement.value);

  // Atualiza o valor em USD ou exibe erro
  const valorAtualUSD = document.getElementById("ValorConvertido");

  valorAtualUSD.innerHTML = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(convertido);
}

convertButton.addEventListener("click", Converter);
