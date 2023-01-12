const lista = document.querySelector('.c-contacts')
const image = document.querySelector('.image')

const changeFather = () => {
  const desktop = window.matchMedia('(min-width: 800px)')

  if (desktop.matches) {
    document.querySelector('.l-hero').appendChild(lista)
    document.body.insertBefore(image, document.body.querySelector('.l-main'))

    const newLocal = '../../src/img/bg-desktop.jpg'
    image.querySelector('img').setAttribute('src', newLocal)
  } else {
    document.querySelector('.l-main').appendChild(lista)
  }
}


// window.addEventListener('resize', changeFather)

if (window.innerWidth >= 1000) {
  window.addEventListener('resize', changeFather)
}
