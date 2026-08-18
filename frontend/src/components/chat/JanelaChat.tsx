'use client';

import useChat from '@/hooks/useChat';
import { IconMessages, IconReload, IconSend } from '@tabler/icons-react';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import BalaoMensagem from './BalaoMensagem';

export default function JanelaChat() {
  const { mensagens, limparMensagens, adicionarMensagem, pensando } = useChat();
  const [texto, setTexto] = useState('');
  const fimChatRef = useRef<HTMLDivElement>(null);

  function enviarMensagem() {
    adicionarMensagem(texto);
    setTexto('');
  }

  useEffect(() => {
    if (fimChatRef.current) {
      fimChatRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [mensagens]);
  
  return (
    <div className="flex flex-col bg-zinc-300 rounded-2xl text-balck overflow-hidden">
      <div className="flex justify-between items-center bg-white p-4">
        <h2>Olá Visitante!</h2>
        <IconReload size={24} className="text-black cursor-pointer" onClick={limparMensagens} />
      </div>
      {mensagens.length === 0 ? (
        <div className="flex flex-col justify-center items-center min-h-[400px] sm:min-h-[500px]">
          <IconMessages size={230} stroke={0.2} className="text-black/30" />
          <span> Vamos Conversar? </span>
        </div>
      ) : (
        <div className="flex-1 overflow-y-scroll p-4 min-h-[400px] sm:min-h-[500px] max-h-[400px] not-[]:sm:max-h-[500px]">
          {mensagens.map((mensagem, i) => {
            const mesmoAutor = i > 0 && mensagens[i - 1].autor === mensagem.autor;
            return <BalaoMensagem key={mensagem.id} mensagem={mensagem} omitirAutor={mesmoAutor}/>;
          })}
          {pensando && <Image src="/pensando.gif" width={50} height={50} alt="Pensando..." />}
          <div ref={fimChatRef} />
        </div>
      )}
      <div className="h-px bg-zinc-400 mt-4" />
      <div className="flex gap-2 items-center p-1 rounded-full h-10 bg-white m-4">
        <input
          type="text"
          value={texto}
          className="flex-1 bg-transparent outline-none h-8 pl-3"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTexto(e.target.value);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              enviarMensagem();
            }
          }}
        />
        <button
          className="bg-red-500 flex justify-center items-center min-h-8 min-w-8 rounded-full"
          onClick={enviarMensagem}
        >
          <IconSend size={18} className="text-white" onClick={() => {}} />
        </button>
      </div>
    </div>
  );
}
