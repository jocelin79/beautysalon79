/* Abre e Fecha Menu quando clicar no icone: hamburger e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do Menu, fecha-o. */
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der Scorll */
const header = document.querySelector('#header')
const navheight = header.offsetHeight
window.addEventListener('scroll', function () {
  if (window.scrollY >= navheight) {
    /* Scroll maior que altura do header*/
    header.classList.add('scroll')
  } else {
    /* Scroll menor que altura do header*/
    header.classList.remove('scroll')
  }
})
/*==== Testimonials Sliders ==========*/
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/*==== Scroll Revel - Mostrar Elementos ao fazer Scroll ==========*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '20px',
  duration: 900,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .reveal-1, #contact div`,
  { interval: 100 }
)

/*==== BACK TO TOP BUTTOM ==========*/
const bttButtom = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    bttButtom.classList.add('show')
  } else {
    bttButtom.classList.remove('show')
  }
})

/*==== ATIVAR MENU conforme a seção visível na página ==========*/

const sections = document.querySelectorAll('main section[id]')
window.addEventListener('scroll', function () {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionID = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionID + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionID + ']')
        .classList.remove('active')
    }
  }
})
