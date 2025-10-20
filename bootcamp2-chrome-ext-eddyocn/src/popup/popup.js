const btn = document.getElementById('ping');
const statusEl = document.getElementById('status');

btn.addEventListener('click', async () => {
  statusEl.textContent = 'Enviando... ⏳';
  const res = await chrome.runtime.sendMessage({ type: 'PING' });
  statusEl.textContent = `🕒 hora certa respondeu: ${res.time}`;
});
