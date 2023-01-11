const lista = document.querySelector('.c-contacts')
const image = document.querySelector('.image')

const changeFather = () => {
  const desktop = window.matchMedia("(min-width: 800px)");

  if(desktop.matches){
    document.querySelector('.l-hero').appendChild(lista)

    document.body.insertBefore(image, document.body.querySelector('.l-main'))
  }else{
    document.querySelector('.l-main').appendChild(lista)
  }
}


const imagem = document.querySelector('.image img')
console.log(imagem)

imagem.src="/src/img/bg-desktop.jpg"

window.addEventListener('resize', changeFather)
