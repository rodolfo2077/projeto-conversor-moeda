function Converter() {
  const moeda = document.getElementById("moeda");

  let cotacao = 0;
  if (moeda.value === "usd") cotacao = 5.58;
  if (moeda.value === "brl") cotacao = 1;

  const entradaElement = document.getElementsByClassName("display")[0];
  const entrada = entradaElement.value;

  const resultado = parseFloat(entrada);

  const soma = resultado / cotacao;

  /* Mostrar os valores nos campos correspondente das moedas */

  // -- BRL --
  const valorAtualBRL = document.getElementById("ValorAtual");

  valorAtualBRL.textContent = `R$ ` + resultado.toFixed(2);

  // -- USD --
  const valorAtualUSD = document.getElementById("ValorConvertido");

  if (cotacao === 5.58) valorAtualUSD.textContent = `USD$ ` + soma.toFixed(2);
  if (cotacao === 1) valorAtualUSD.textContent = `USD$ ` + `Invalid Format`;
}
