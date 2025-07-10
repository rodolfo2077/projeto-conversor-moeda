function Converter() {
  const moedaSelecionada = document.getElementById("moeda").value;
  const entradaElement = document.querySelector(".display");
  const entrada = parseFloat(entradaElement.value);

  const cotacoes = {
    usd: 5.58,
    brl: 1,
  };

  const cotacao = cotacoes[moedaSelecionada] || 0;
  const convertido = entrada / cotacao;

  // Atualiza o valor em BRL
  const valorAtualBRL = document.getElementById("ValorAtual");
  valorAtualBRL.textContent = `R$ ${entrada.toFixed(2)}`;

  // Atualiza o valor em USD ou exibe erro
  const valorAtualUSD = document.getElementById("ValorConvertido");
  valorAtualUSD.textContent =
    cotacao > 0 ? `USD$ ${convertido.toFixed(2)}` : "USD$ Invalid Format";
}
