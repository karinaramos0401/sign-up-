const forms = document.querySelectorAll('[data-form]')
const buttons = document.querySelectorAll('[data-button]');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const formValue = button.dataset.button
    button.classList.add('button--active')
    forms.forEach((form) => {
      if(form.dataset.form === formValue) {
        form.classList.add('form--active')
      } else {
        form.classList.remove('form--active')
      }
    })
  })
})

//pegar todos os botões
//pegar todos os formulários
//quando eu clicar em um botão
// qual é o formulário relacionado a esse botão? (botão clicado)
//quero que mostre o formulário relacionado
//e esconda os outros 

