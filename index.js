import Plotly from 'plotly.js-dist';

let App = document.getElementById("app");

let data = require("./data/data.json");
let layout = { margin: { t: 0 } }

Plotly.plot(App, data, layout);