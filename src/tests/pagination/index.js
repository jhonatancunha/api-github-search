
// USANDO METODO DE DEFAULT VALUE DO ES6
const pagination = ({ total = 1, activePage = 1 } = {}) => {
  // VERIFICAÇÃO
  if (typeof (total) !== 'number') { throw new TypeError('total should be a number') }

  if (typeof (activePage) !== 'number') { throw new TypeError('activePage should be a number') }

  if (total < 6) { return Array.from({ length: total }, (_, index) => index + 1) }

  let visiblePages = []

  if (activePage === 1) {
    visiblePages = [activePage, activePage + 1, activePage + 2]
  } else if (activePage === total) {
    visiblePages = [activePage - 2, activePage - 1, activePage]
  } else {
    visiblePages = [activePage - 1, activePage, activePage + 1]
  }

  let pages = [
    1,
    ...visiblePages,
    total
  ]

  // FILTRANDO PARA RETIRAR ELEMENTOS REPETIDOS DO ARRAY
  pages = pages.filter((item, index, array) => array.indexOf(item) === index)

  // VERIFICANDO INICIO PAGINAÇÃO
  let firstPage = pages[0]
  let secondPage = pages[1]

  if (secondPage === (firstPage + 2)) {
    pages = [
      firstPage,
      firstPage + 1,
      ...pages.slice(1)
    ]
  }

  firstPage = pages[0]
  secondPage = pages[1]

  if (secondPage > (firstPage + 2)) {
    pages = [
      firstPage,
      '...',
      ...pages.slice(1)
    ]
  }

  // VERIFICANDO FINAL DA PAGINAÇÃO
  let penultimatePage = pages[pages.length - 2]
  let lastPage = pages[pages.length - 1]

  if (penultimatePage === (lastPage - 2)) {
    pages = [
      ...pages.slice(0, -1),
      lastPage - 1,
      lastPage
    ]
  }

  penultimatePage = pages[pages.length - 2]
  lastPage = pages[pages.length - 1]

  if (penultimatePage < (lastPage - 2)) {
    pages = [
      ...pages.slice(0, -1),
      '...',
      lastPage
    ]
  }

  return pages
}

export default pagination
