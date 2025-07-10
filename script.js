const btnConverter = document.querySelector(".btn-converter");
const inputCurrency = document.querySelector("#inputCurrency");
const currencyValue1 = document.querySelector("#Valor1");
const currencyValue2 = document.querySelector("#Valor2");
const selectCurrency1 = document.querySelector("#selectCurrency1");
const selectCurrency2 = document.querySelector("#selectCurrency2");

function Converter() {
  const usdCurrencyValue = 5.55;
  const euroCurrencyValue = 6.3;
  const ieneCurrencyValue = 0.038;

  /* BRL exchange currency */
  if (selectCurrency1.value === "brl" && selectCurrency2.value === "usd") {
    currencyValue1.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency.value / usdCurrencyValue);
  }
  if (selectCurrency1.value === "brl" && selectCurrency2.value === "euro") {
    currencyValue1.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency.value / euroCurrencyValue);
  }
  if (selectCurrency1.value === "brl" && selectCurrency2.value === "iene") {
    currencyValue1.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrency.value / ieneCurrencyValue);
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
    }).format(inputCurrency.value / 0.18);
  }
  if (selectCurrency1.value === "usd" && selectCurrency2.value === "euro") {
    currencyValue1.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency.value / 1.17);
  }
  if (selectCurrency1.value === "usd" && selectCurrency2.value === "iene") {
    currencyValue1.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrency.value / 0.0068);
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
    }).format(inputCurrency.value / 26.36);
  }
  if (selectCurrency1.value === "iene" && selectCurrency2.value === "usd") {
    currencyValue1.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency.value / 146.35);
  }
  if (selectCurrency1.value === "iene" && selectCurrency2.value === "euro") {
    currencyValue1.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency.value / 171.06);
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
    }).format(inputCurrency.value / 0.15);
  }
  if (selectCurrency1.value === "euro" && selectCurrency2.value === "usd") {
    currencyValue1.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency.value / 0.86);
  }
  if (selectCurrency1.value === "euro" && selectCurrency2.value === "iene") {
    currencyValue1.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency.value);

    currencyValue2.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrency.value / 0.0058);
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
  }
  if (selectCurrency1.value === "brl" && selectCurrency2.value === "euro") {
    bandeira1.src = "./assets/brasil.png";
    bandeira2.src = "./assets/euro.png";
  }
  if (selectCurrency1.value === "brl" && selectCurrency2.value === "iene") {
    bandeira1.src = "./assets/brasil.png";
    bandeira2.src = "./assets/jpy.png";
  }

  // USD exchange change banners
  if (selectCurrency1.value === "usd" && selectCurrency2.value === "brl") {
    bandeira1.src = "./assets/estados-unidos.png";
    bandeira2.src = "./assets/brasil.png";
  }
  if (selectCurrency1.value === "usd" && selectCurrency2.value === "euro") {
    bandeira1.src = "./assets/estados-unidos.png";
    bandeira2.src = "./assets/euro.png";
  }
  if (selectCurrency1.value === "usd" && selectCurrency2.value === "iene") {
    bandeira1.src = "./assets/estados-unidos.png";
    bandeira2.src = "./assets/jpy.png";
  }

  // JPY exchange change banners
  if (selectCurrency1.value === "iene" && selectCurrency2.value === "brl") {
    bandeira1.src = "./assets/jpy.png";
    bandeira2.src = "./assets/brasil.png";
  }
  if (selectCurrency1.value === "iene" && selectCurrency2.value === "euro") {
    bandeira1.src = "./assets/jpy.png";
    bandeira2.src = "./assets/euro.png";
  }
  if (selectCurrency1.value === "iene" && selectCurrency2.value === "usd") {
    bandeira1.src = "./assets/jpy.png";
    bandeira2.src = "./assets/estados-unidos.png";
  }

  // EURO exchange change banners
  if (selectCurrency1.value === "euro" && selectCurrency2.value === "brl") {
    bandeira1.src = "./assets/euro.png";
    bandeira2.src = "./assets/brasil.png";
  }
  if (selectCurrency1.value === "euro" && selectCurrency2.value === "usd") {
    bandeira1.src = "./assets/euro.png";
    bandeira2.src = "./assets/estados-unidos.png";
  }
  if (selectCurrency1.value === "euro" && selectCurrency2.value === "iene") {
    bandeira1.src = "./assets/euro.png";
    bandeira2.src = "./assets/jpy.png";
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
