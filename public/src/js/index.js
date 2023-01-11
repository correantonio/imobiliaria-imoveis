const lista = document.querySelector('.c-contacts')
const image = document.querySelector('.image')

const changeFather = () => {
  const desktop = window.matchMedia('(min-width: 800px)')

  if (desktop.matches) {
    document.querySelector('.l-hero').appendChild(lista)
    document.body.insertBefore(image, document.body.querySelector('.l-main'))

    const newLocal = '/public/src/img/bg-desktop.jpg'
    image.querySelector('img').setAttribute('src', newLocal)

    console.log(image.querySelector('img').getAttribute('src'))
  } else {
    document.querySelector('.l-main').appendChild(lista)
  }
}

window.addEventListener('resize', changeFather)
