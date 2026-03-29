// Relógio ao vivo
function atualizarRelogio() {
  const el = document.getElementById('live-clock');
  if (!el) return;

  const agora = new Date();
  const opcoes = { weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric',
                   hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  el.textContent = agora.toLocaleString('pt-BR', opcoes);
}

//  Validação do formulário de cadastro 
function validarFormulario() {
  const form = document.getElementById('form-cadastro');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    const alerta = document.getElementById('alerta-sucesso');
    if (alerta) {
      alerta.classList.remove('d-none');
      alerta.scrollIntoView({ behavior: 'smooth' });
      form.reset();
      form.classList.remove('was-validated');
    }
  });
}

// Data mínima do agendamento 
function definirDataMinima() {
  const campo = document.getElementById('data-agendamento');
  if (!campo) return;
  campo.setAttribute('min', new Date().toISOString().split('T')[0]);
}

// Inicialização
document.addEventListener('DOMContentLoaded', function () {
  atualizarRelogio();
  setInterval(atualizarRelogio, 1000);

  validarFormulario();
  definirDataMinima();
});
