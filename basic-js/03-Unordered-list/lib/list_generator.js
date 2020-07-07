listItem = (content) => {
  // TODO: return the proper <li> HTML tag with its content (as a string)
  return `<li class="list-group-item">${content}</li>`
};

console.log(listItem('milk'))

unorderedList = (items) => {
  // TODO: return the proper <ul> markup (as a string)
  let resultStr = '<ul class="list-group">\n'
  items.forEach((item) => {
    resultStr += `\t<li class="list-group-item">${item}</li>\n`

  }
    )
  resultStr += '</ul>'
  return resultStr
}

console.log(unorderedList([ 'milk', 'butter', 'bread' ]))
