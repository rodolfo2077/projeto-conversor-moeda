// Consumir API https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL

const btnConverter = document.querySelector(".btn-converter");
const inputCurrency = document.querySelector("#inputCurrency");
const currencyValue1 = document.querySelector("#Valor1");
const currencyValue2 = document.querySelector("#Valor2");
const selectCurrency1 = document.querySelector("#selectCurrency1");
const selectCurrency2 = document.querySelector("#selectCurrency2");
const Valorlbl1 = document.querySelector("#Valorlbl1");
const Valorlbl2 = document.querySelector("#Valorlbl2");

const brlLabel = "Real Brasileiro";
const usdLabel = "Dólar Americano";
const jpyLabel = "Iene Japonês";
const euroLabel = "Euro";

async function Converter() {
  const data = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,BRL-USD,BRL-JPY,BRL-EUR,JPY-BRL,EUR-USD,JPY-USD,USD-JPY,EUR-JPY,USD-EUR,JPY-EUR"
  ).then((response) => response.json());

  // console.log(data);

  // Consumir os dados em tempo real apartir do api de economia acima

  /* BRL TO Others */
  const usdbrl = data.USDBRL.high;
  const jpybrl = data.JPYBRL.high;
  const eurobrl = data.EURBRL.high;

  /* USD TO Others */
  const brlusd = data.BRLUSD.high;
  const eurousd = data.EURUSD.high;
  const jpyusd = data.JPYUSD.high;

  /* JPY TO Others */
  const brljpy = data.BRLJPY.high;
  const usdjpy = data.USDJPY.high;
  const eurojpy = data.EURJPY.high;

  /* EUR TO Others */
  const brleuro = data.BRLEUR.high;
  const usdeuro = data.USDEUR.high;
  const jpyeuro = data.JPYEUR.high;

  /* BRL exchange currency */
  if (selectCurrency1.value === "brl" && selectCurrency2.value === "usd") {
    currencyValue1.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency.value / usdbrl);
  }
  if (selectCurrency1.value === "brl" && selectCurrency2.value === "euro") {
    currencyValue1.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency.value / eurobrl);
  }
  if (selectCurrency1.value === "brl" && selectCurrency2.value === "iene") {
    currencyValue1.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrency.value / jpybrl);
  }
  if (
    /* #ENDREGION */

    /* USD exchange currency  */
    selectCurrency1.value === "usd" &&
    selectCurrency2.value === "brl"
  ) {
    currencyValue1.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency.value / brlusd);
  }
  if (selectCurrency1.value === "usd" && selectCurrency2.value === "euro") {
    currencyValue1.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency.value / eurousd);
  }
  if (selectCurrency1.value === "usd" && selectCurrency2.value === "iene") {
    currencyValue1.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrency.value / jpyusd);
  }
  if (
    /* #ENDREGION */

    /* JPY Exchange currency */
    selectCurrency1.value === "iene" &&
    selectCurrency2.value === "brl"
  ) {
    currencyValue1.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency.value / brljpy);
  }
  if (selectCurrency1.value === "iene" && selectCurrency2.value === "usd") {
    currencyValue1.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency.value / usdjpy);
  }
  if (selectCurrency1.value === "iene" && selectCurrency2.value === "euro") {
    currencyValue1.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency.value / eurojpy);
  }

  /* EURO Exchange currency */
  if (selectCurrency1.value === "euro" && selectCurrency2.value === "brl") {
    currencyValue1.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency.value / brleuro);
  }
  if (selectCurrency1.value === "euro" && selectCurrency2.value === "usd") {
    currencyValue1.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency.value / usdeuro);
  }
  if (selectCurrency1.value === "euro" && selectCurrency2.value === "iene") {
    currencyValue1.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrency.value / jpyeuro);
  }
}

/* Fucntion to change the banners as the request is sucessfully ok */
function ChangeBanner() {
  const bandeira1 = document.querySelector(".bandeira1");
  const bandeira2 = document.querySelector(".bandeira2");

  // BRL exchange change banners
  if (selectCurrency1.value === "brl" && selectCurrency2.value === "usd") {
    bandeira1.src = "./assets/brasil.png";
    bandeira2.src = "./assets/estados-unidos.png";
    Valorlbl1.innerHTML = brlLabel;
    Valorlbl2.innerHTML = usdLabel;
  }
  if (selectCurrency1.value === "brl" && selectCurrency2.value === "euro") {
    bandeira1.src = "./assets/brasil.png";
    bandeira2.src = "./assets/euro.png";
    Valorlbl1.innerHTML = brlLabel;
    Valorlbl2.innerHTML = euroLabel;
  }
  if (selectCurrency1.value === "brl" && selectCurrency2.value === "iene") {
    bandeira1.src = "./assets/brasil.png";
    bandeira2.src = "./assets/jpy.png";
    Valorlbl1.innerHTML = brlLabel;
    Valorlbl2.innerHTML = jpyLabel;
  }

  // USD exchange change banners
  if (selectCurrency1.value === "usd" && selectCurrency2.value === "brl") {
    bandeira1.src = "./assets/estados-unidos.png";
    bandeira2.src = "./assets/brasil.png";
    Valorlbl1.innerHTML = usdLabel;
    Valorlbl2.innerHTML = brlLabel;
  }
  if (selectCurrency1.value === "usd" && selectCurrency2.value === "euro") {
    bandeira1.src = "./assets/estados-unidos.png";
    bandeira2.src = "./assets/euro.png";
    Valorlbl1.innerHTML = usdLabel;
    Valorlbl2.innerHTML = euroLabel;
  }
  if (selectCurrency1.value === "usd" && selectCurrency2.value === "iene") {
    bandeira1.src = "./assets/estados-unidos.png";
    bandeira2.src = "./assets/jpy.png";
    Valorlbl1.innerHTML = usdLabel;
    Valorlbl2.innerHTML = jpyLabel;
  }

  // JPY exchange change banners
  if (selectCurrency1.value === "iene" && selectCurrency2.value === "brl") {
    bandeira1.src = "./assets/jpy.png";
    bandeira2.src = "./assets/brasil.png";
    Valorlbl1.innerHTML = jpyLabel;
    Valorlbl2.innerHTML = brlLabel;
  }
  if (selectCurrency1.value === "iene" && selectCurrency2.value === "euro") {
    bandeira1.src = "./assets/jpy.png";
    bandeira2.src = "./assets/euro.png";
    Valorlbl1.innerHTML = jpyLabel;
    Valorlbl2.innerHTML = euroLabel;
  }
  if (selectCurrency1.value === "iene" && selectCurrency2.value === "usd") {
    bandeira1.src = "./assets/jpy.png";
    bandeira2.src = "./assets/estados-unidos.png";
    Valorlbl1.innerHTML = jpyLabel;
    Valorlbl2.innerHTML = usdLabel;
  }

  // EURO exchange change banners
  if (selectCurrency1.value === "euro" && selectCurrency2.value === "brl") {
    bandeira1.src = "./assets/euro.png";
    bandeira2.src = "./assets/brasil.png";
    Valorlbl1.innerHTML = euroLabel;
    Valorlbl2.innerHTML = brlLabel;
  }
  if (selectCurrency1.value === "euro" && selectCurrency2.value === "usd") {
    bandeira1.src = "./assets/euro.png";
    bandeira2.src = "./assets/estados-unidos.png";
    Valorlbl1.innerHTML = euroLabel;
    Valorlbl2.innerHTML = usdLabel;
  }
  if (selectCurrency1.value === "euro" && selectCurrency2.value === "iene") {
    bandeira1.src = "./assets/euro.png";
    bandeira2.src = "./assets/jpy.png";
    Valorlbl1.innerHTML = euroLabel;
    Valorlbl2.innerHTML = jpyLabel;
  }

  /* Call IsBannersValid funtion to valid the banners */
  IsBannersValid();
  Converter();
}

function IsBannersValid() {
  /* Valid if the selectCurren1 and selectCurrency2 is not equal */
  if (selectCurrency1.value === selectCurrency2.value)
    alert("Invalid Requirement!");
}

/* Events Listeners */
btnConverter.addEventListener("click", Converter);
selectCurrency1.addEventListener("change", ChangeBanner);
selectCurrency2.addEventListener("change", ChangeBanner);
