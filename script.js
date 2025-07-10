/* Obter referência do Botão de Converter (button) e da Moeda Selecionada (select) */
const convertButton = document.querySelector(".btn-converter");
const moedaElement = document.getElementById("moeda");

/* Lista de Cotações */
const cotacoes = {
  usd: 5.58,
  euro: 6.55,
  iens: 0.038,
};

/* Função para Converter Moeda */
function Converter() {
  const entradaElement = document.querySelector(".display");
  const entrada = parseFloat(entradaElement.value);
  const moedaSelecionada = moedaElement.value;
  const cotacao = cotacoes[moedaSelecionada];

  const bannerCurrency = document.querySelector("#bannerCurrency"); // Obter a bandeira da moeda
  const convertido = entrada / cotacao; // Calcular a moeda (moedaSelecionada / cotação)

  const valorAtualUSD = document.getElementById("ValorConvertido");
  const valorAtualBRL = document.getElementById("ValorAtual");

  /* Atualizar o Valor de Da Entrada na Saída em Real Brasileiro */
  valorAtualBRL.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(entrada);

  /* Controlar a saída de conversão de acordo com a moeda selecionada já com a formatação */
  switch (moedaSelecionada) {
    case "usd":
      valorAtualUSD.innerHTML = new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
      }).format(convertido);
      bannerCurrency.src = "./assets/estados-unidos.png";
      break;

    case "euro":
      valorAtualUSD.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(convertido);
      bannerCurrency.src = "./assets/euro.png";
      break;

    case "iens":
      valorAtualUSD.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY",
      }).format(convertido);
      bannerCurrency.src = "./assets/jpy.png";
      break;
  }
}

/* Função para mudar a banner de acordo com a moeda selecionada */
function MudarBanner() {
  const moedaSelecionada = moedaElement.value;
  const bannerCurrency = document.querySelector("#bannerCurrency");

  switch (moedaSelecionada) {
    case "usd":
      bannerCurrency.src = "./assets/estados-unidos.png";
      break;
    case "euro":
      bannerCurrency.src = "./assets/euro.png";
      break;
    case "iens":
      bannerCurrency.src = "./assets/jpy.png";
      break;
  }
}

/* Evento para Ouvir quando o Button é clicado e 
executar a função  Converter() */
convertButton.addEventListener("click", Converter);

/* Evento para Ouvir quando haver alguma mudança no 
moedaElement e executar a função mudarBanner */
moedaElement.addEventListener("change", MudarBanner);
