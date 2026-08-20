# Live Currency Converter

A responsive browser-based currency converter with live exchange rates, accessible form labels, and light/dark mode support.

## Project Structure

```text
.
├── index.html       # Page structure and entry point
├── css/
│   └── styles.css   # Layout, theme, and responsive styles
├── js/
│   └── app.js       # Currency API, conversion logic, and interactions
└── README.md        # Project documentation
```

## Run Locally

Open `index.html` directly in a browser, or serve the folder with a local web server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Data Source

Exchange rates are loaded from the ExchangeRate-API endpoint configured in `js/app.js`.
