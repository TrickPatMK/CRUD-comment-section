export function createHTMLElement(tag: string, attr?: object): HTMLElement {
  const el = document.createElement(tag);
  if (attr) setAttributes(el, attr)

  return el;
}
export function createSVG(tag: string, attr?: object): SVGElement {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", tag)
  if (attr) setAttributes(svg, attr)

  return svg
}

function setAttributes(el: HTMLElement | SVGElement, attr: object): void {
  Object.entries(attr).forEach(([key, value]) => el.setAttribute(key, value))
}