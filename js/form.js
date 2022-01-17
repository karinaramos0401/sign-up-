//pegar todos os formulários
const forms = document.querySelectorAll('[data-form]')
//pegar todos os botões
const buttons = document.querySelectorAll('[data-button]');
buttons.forEach((clickedButton) => {
  //quando eu clicar em um botão
  clickedButton.addEventListener('click', () => {
    const formValue = clickedButton.dataset.button
    buttons.forEach((button) => {
      //removendo/inativando os botões
      button.classList.remove('button--active')
    })
    //ativando somente o botão clicado
    clickedButton.classList.add('button--active')
    forms.forEach((form) => {
      // qual é o formulário relacionado a esse botão? (botão clicado)
      if(form.dataset.form === formValue) {
        //quero que mostre o formulário relacionado
        form.classList.add('form--active')
      } else {
        //e esconda os outros 
        form.classList.remove('form--active')
      }
    })
  })
})








//dataset é uma propriedade de leitura que vai dar acesso aos dados do atributo data colocado nos elementos expondo um mapa de strings, mostrando a entrada de cada data. 
//Sendo lido como // element.dataset.keyname ou .example
