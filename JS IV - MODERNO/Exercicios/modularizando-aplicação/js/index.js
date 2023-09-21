import calculate from "./calculate.js";
import copyToClipboard from "./copyToClipboard.js";
import themeSwitch from "./themeSwitch.js";
import inputJs from "./input.js";

const copy = document.getElementById("copyToClipboard");

const equal = document.getElementById("equal");

const themeSwitcher = document.getElementById("themeSwitcher");

equal.addEventListener("click", calculate);
copy.addEventListener("click", copyToClipboard);
themeSwitcher.addEventListener("click", themeSwitch);

document.getElementById("input").addEventListener("click", inputJs);
