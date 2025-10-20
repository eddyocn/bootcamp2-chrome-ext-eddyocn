chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "PING") {
    const now = new Date();
    const time = now.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

    console.log(`[hora certa] Resposta enviada às ${time}`);

    sendResponse({ time });
    return true; // Mantém o canal de resposta aberto
  }
});
