const lista = document.querySelector('.c-contacts')

const changeFather = () => {
  const desktop = window.matchMedia('(min-width: 800px)')

  if (desktop.matches) {
    document.querySelector('.l-hero').appendChild(lista)
    document.body.insertBefore(image, document.body.querySelector('.l-main'))
  } else {
    document.querySelector('.l-main').appendChild(lista)
  }
}

window.addEventListener('resize', changeFather)
