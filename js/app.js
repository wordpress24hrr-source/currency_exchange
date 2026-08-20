const apiURL = "https://api.exchangerate-api.com/v4/latest/USD";
let exchangeRates = {};

const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const exchangeRate = document.getElementById("exchangeRate");
const loadingMessage = document.querySelector(".loading");
const themeToggle = document.querySelector(".toggle-switch");

async function loadCurrencies() {
    try {
        loadingMessage.style.display = "block";
        const response = await fetch(apiURL);
        const data = await response.json();
        exchangeRates = data.rates;

        Object.keys(exchangeRates).forEach((currency) => {
            fromCurrency.add(new Option(currency, currency));
            toCurrency.add(new Option(currency, currency));
        });

        fromCurrency.value = "USD";
        toCurrency.value = "INR";
        loadingMessage.style.display = "none";
        convertCurrency();
    } catch (error) {
        loadingMessage.style.display = "none";
        exchangeRate.innerText = "Error fetching data.";
    }
}

function convertCurrency() {
    const amount = amountInput.value;
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (!exchangeRates[from] || !exchangeRates[to]) {
        exchangeRate.innerText = "Exchange rate unavailable.";
        return;
    }

    const rate = exchangeRates[to] / exchangeRates[from];
    const convertedAmount = (amount * rate).toFixed(2);
    exchangeRate.innerText = `${amount} ${from} = ${convertedAmount} ${to}`;
}

function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    themeToggle.innerHTML = isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
    themeToggle.setAttribute("aria-pressed", String(isDarkMode));
}

amountInput.addEventListener("input", convertCurrency);
fromCurrency.addEventListener("change", convertCurrency);
toCurrency.addEventListener("change", convertCurrency);
themeToggle.addEventListener("click", toggleDarkMode);
window.addEventListener("load", loadCurrencies);
