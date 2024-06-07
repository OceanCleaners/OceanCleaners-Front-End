const telefoneElement = document.getElementById('telefone')
telefoneElement.addEventListener('input', () => {
  // Bloquear digitação de valores não numéricos
  telefoneElement.value = telefoneElement.value.replace(/[^\d]/ig, '')
})

telefoneElement.addEventListener('blur', () => {
  // Aplicar máscara quando sair do input
  telefoneElement.value = telefoneElement.value.replace(/(\d{2})(\d{5})(\d{4})/ig, '($1) $2-$3')
})

const cpfElement = document.getElementById('cpf')
cpfElement.addEventListener('input', () => {
  // Bloquear digitação de valores não numéricos
  cpfElement.value = cpfElement.value.replace(/[^\d]/ig, '')
})

cpfElement.addEventListener('blur', () => {
  // Aplicar máscara quando sair do input
  cpfElement.value = cpfElement.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/ig, '$1.$2.$3-$4')
})


const registroForm = document.getElementById('registro-form')
registroForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = new FormData(registroForm)

  if (formData.get('nome').split(' ').length < 2) {
    return alert('Você deve informar pelo menos um sobrenome!')
  }

  if (!validarCPF(formData.get('cpf'))) {
    return alert('O CPF fornecido é inválido!')
  }


  alert(`Olá ${formData.get('nome')}, agradecemos o seu interesse em ser voluntário! Em breve encaminharemos as instruções para o e-mail ${formData.get('email')}.`)
})


function validarCPF(value) {
  // Remove os caracteres de formatação, caso possua
  const cpf = value.replace(/[^\d]/g, '')

  // Verifica se o tamanho do CPF é diferente de 11 ou se é formado por caracteres iguais
  if (cpf.length !== 11 || /^(\d)\1{10}/.test(cpf)) return false

  // Calcula os 2 últimos dígitos do CPF e verifica se combinam com os fornecidos
  for (let toVerify = 9; toVerify < 11; toVerify++) {
    let accumulator = 0

    for (let i = 0; i < toVerify; i++) {
      accumulator += Number(cpf[i]) * ((toVerify + 1) - i)
    }

    // * Fórmula para calcular os dígitos verificadores 
    const digit = accumulator % 11 < 2 ? 0 : 11 - accumulator % 11
    if (Number(cpf[toVerify]) !== digit) return false
  }

  return true
}