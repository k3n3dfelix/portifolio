'use server';
import Mensagem from '@/models/Mensagem';

export default async function conversar(chatId: string, mensagem: Mensagem) {
  const webHookUrl = process.env.CHAT_WEBHOOK;
  if (!webHookUrl) {
    return null;
  }

  const resposta = await fetch(webHookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chatId,
      mensagem: mensagem.texto,
    }),
  });

  const msg = await resposta.json();

  return msg.resposta;
}
