const segmentoEl = document.getElementById('segmento');
const orcamentoEl = document.getElementById('orcamento');
const resultadoEl = document.getElementById('resultado');
const btnSugerir = document.getElementById('sugerir');

const ofertas = {
  varejo: ['Plano Catálogo Pro', 'Automação de WhatsApp'],
  servicos: ['Plano Agenda Inteligente', 'Campanhas de Retenção'],
  tecnologia: ['Plano Inside Sales', 'Pipeline com IA']
};

function gerarSugestao() {
  const segmento = segmentoEl.value;
  const orcamento = Number(orcamentoEl.value || 0);

  if (!segmento) {
    resultadoEl.textContent = 'Selecione um segmento para continuar.';
    return;
  }

  const recomendacoes = ofertas[segmento];

  if (orcamento < 1000) {
    resultadoEl.textContent = `Sugestão inicial: ${recomendacoes[0]}.`;
    return;
  }

  resultadoEl.textContent = `Sugestão completa: ${recomendacoes.join(' + ')}.`;
}

btnSugerir.addEventListener('click', gerarSugestao);
