'use strict'

renderPortfolio()
function renderPortfolio() {
    console.log('1')
    var projects = getProjectToShow()
    console.log('pro', projects)
    const elPro = document.querySelector('.yael')
    const strHTML = projects.map(proj => {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" onclick="renderModal('${proj.id}')" href="#portfolioModal1">
    <div class="portfolio-hover">
    <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="${proj.url}" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${proj.title}</h4>
      <p class="text-muted">${proj.name}</p>
    </div>
  </div>`
    }
    )
    elPro.innerHTML = strHTML.join('')
}

function renderModal(id) {
    var project = getIdModal(id)
    var elModal = document.querySelector('.modal-body')
    const strHTML = 
        ` <h2>${project.title}</h2>
          <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
          <img class="img-fluid d-block mx-auto" src="${project.url}" alt="">
          <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
            dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
            maiores repudiandae, nostrum, reiciendis facere nemo!</p>
          <ul class="list-inline">
            <li>Date: ${project.publishedAt}</li>
            <li>Client: ${project.title}</li>
            <li>Category: ${project.name}</li>
          </ul>
          <button class="btn btn-primary" data-dismiss="modal" type="button">
              <i class="fa fa-times"></i>
              Close Project</button>
`
elModal.innerHTML=strHTML
}

function onSubmit(){
    const $email = $('.email').val()
    const $subject = $('.subject').val()
    const $textarea = $('.text').val()
    $('.email').val('')
    $('.subject').val('')
    $('.text').val('')

    var newLink = `https://mail.google.com/mail/u/0/?fs=1&to=matandamary10@gmail.com&su=${$subject}&body=${$textarea}&bcc=${$email}&tf=cm`
    window.open(newLink, '_blank')
}