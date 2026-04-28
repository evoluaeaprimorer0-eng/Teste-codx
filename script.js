const coverageForm = document.querySelector('#coverage-form');
const coverageResult = document.querySelector('#coverage-result');
const planButtons = document.querySelectorAll('[data-plan]');
const interestField = document.querySelector('#interest');
const leadForm = document.querySelector('.lead-form');

planButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedPlan = button.getAttribute('data-plan');

    if (interestField && selectedPlan) {
      interestField.value = selectedPlan;
      interestField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      interestField.focus();
    }
  });
});

coverageForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const cepInput = document.querySelector('#cep');
  const rawCep = cepInput?.value ?? '';
  const cep = rawCep.replace(/\D/g, '');

  if (cep.length !== 8) {
    coverageResult.textContent = 'CEP inválido. Digite um CEP com 8 números.';
    return;
  }

  const firstDigit = Number(cep[0]);
  if (firstDigit <= 6) {
    coverageResult.textContent = 'Boa notícia! Temos cobertura no seu endereço. Um consultor entrará em contato.';
  } else {
    coverageResult.textContent = 'Ainda não temos cobertura nessa região, mas já estamos expandindo.';
  }
});

leadForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name')?.value?.trim();

  if (!name) {
    return;
  }

  alert(`Obrigado, ${name}! Sua solicitação foi recebida. Em breve entraremos em contato.`);
  leadForm.reset();
});
