// functions.js

export function name() {
  return `Feito por Vinicius Pereira ${lastName()}`;
}

export function lastName() {
  return "de Mesquita";
}

export function label(attributes) {
  const element = document.createElement("label");
  Object.assign(element, attributes);
  return element;
}

export function input(attributes) {
  const element = document.createElement("input");
  Object.assign(element, attributes);
  return element;
}

export function br() {
  const element = document.createElement("br");
  return element;
}
