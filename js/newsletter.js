const newsletterForm = document.getElementById('newsletter-form')

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = document.getElementById('newsletter-email').value

  alert(`O e-mail ${email} foi cadastrado na nossa newsletter. Obrigado!`)
})