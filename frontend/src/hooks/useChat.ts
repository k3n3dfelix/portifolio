import { Id } from '@/core';
import useLocalStorage from './useLocalStorage';
import Mensagem from '@/models/Mensagem';
import conversar from '@/functions/chat';
import { useState } from 'react';

export default function useChat() {
  const [chatId] = useLocalStorage<string>('chatId', Id.gerar());
  const [mensagens, setMensagens] = useLocalStorage<Mensagem[]>('mensagens', []);
  const [pensando, setPensando] = useState<boolean>(false);

  async function adicionarMensagem(texto: string) {
    try {
      setPensando(true);
      const novaMensagem: Mensagem = {
        id: Id.gerar(),
        texto,
        autor: 'Visitante',
        lado: 'direita',
      };
      setMensagens((msgs) => [...msgs, novaMensagem]);

      const resposta = await conversar(chatId, novaMensagem);

      if (!resposta) return;

      const mensagemResposta: Mensagem = {
        id: Id.gerar(),
        texto: resposta,
        autor: 'Assistente',
        lado: 'esquerda',
      };
      setMensagens((msgs) => [...msgs, mensagemResposta]);
    } finally {
      setPensando(false);
    }
  }

  function limparMensagens() {
    setMensagens([]);
  }

  return {
    chatId,
    mensagens,
    adicionarMensagem,
    limparMensagens,
    pensando,
  };
}
