/* ============================================================
   Spring Cake — Páscoa que Renasce | script.js
   ============================================================ */

// Animação fade-in ao rolar a página
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Função de agendamento via WhatsApp
function enviarAgendamento() {
  const nome    = document.getElementById('ag-nome').value.trim();
  const data    = document.getElementById('ag-data').value;
  const hora    = document.getElementById('ag-hora').value;
  const produto = document.getElementById('ag-produto').value;
  const obs_txt = document.getElementById('ag-obs').value.trim();
  const erro    = document.getElementById('agend-erro');

  if (!nome || !data || !hora || !produto) {
    erro.style.display = 'block';
    return;
  }
  erro.style.display = 'none';

  const dataFormatada = new Date(data + 'T12:00:00').toLocaleDateString('pt-BR');
  let msg = `Olá! Gostaria de agendar uma retirada 🗓️\n\n`;
  msg += `*Nome:* ${nome}\n`;
  msg += `*Produto:* ${produto}\n`;
  msg += `*Data:* ${dataFormatada}\n`;
  msg += `*Horário:* ${hora}\n`;
  if (obs_txt) msg += `*Observações:* ${obs_txt}\n`;
  msg += `\nPode confirmar meu agendamento? 🍫`;

  window.open('https://wa.me/559888223162?text=' + encodeURIComponent(msg), '_blank');
}
