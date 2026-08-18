'use client';

import { useState } from 'react';
import useChat from '@/hooks/useChat';
import Image from 'next/image';
import ConteudoMD from '@/components/shared/ConteudoMD';

export default function Chat() {
  const { chatId, mensagens, adicionarMensagem, limparMensagens, pensando } = useChat();
  const [texto, setTexto] = useState('');

  return (
    <div className="h-350px color-white p-4">
      <span>
        <h1>Chat: {chatId}</h1>
        <button onClick={limparMensagens}> </button>
        <ul>
          {mensagens.map((mensagem) => {
            return (
              <li key={mensagem.id} className="flex flex-col gap-2">
                <div>{mensagem.autor}</div>
                <ConteudoMD markdown={mensagem.texto} />
              </li>
            );
          })}
        </ul>

        {pensando && (
          <div>
            <Image src="/pensando.gif" width={50} height={50} alt="Pensando..." />
          </div>
        )}
        <input
          type="text"
          value={texto}
          className="border p-2 rounded w-full"
          onChange={(e: any) => {
            setTexto(e.target.value);
          }}
          onKeyDown={(e: any) => {
            if (e.key === 'Enter') {
              adicionarMensagem(texto);
              setTexto('');
            }
          }}
        />
      </span>
    </div>
  );
}
