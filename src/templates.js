import { row, col } from "./utils"

function title(block) {
  const {tag, styles} = block.options
  return row(col(`<${tag}>${block.value}</${tag}>`), styles)
}

function text(block) {
  const {styles} = block.options
  return row(col(`<p>${block.value}</p>`), styles)
}

function textColumns(block) {
  const {styles} = block.options
  const html = block.value.map(item => col(item))
  return row(html.join(''), styles)
} 

function image(block) {
  const {styles, alt, imageStyle} = block.options
  const html = block.value.map(item => `<img src="${item}" alt="${alt}" style="${imageStyle}">`)
  return row(html.join(''), styles)
} 

export const templates = {title, text, textColumns, image}