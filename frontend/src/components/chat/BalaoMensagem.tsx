import Mensagem from '@/models/Mensagem';
import ConteudoMD from '../shared/ConteudoMD';
import Image from 'next/image';

export interface BalaoMensagemProps {
  mensagem: Mensagem;
  omitirAutor?: boolean;
}

function BalaoEsquerdo(props: BalaoMensagemProps) {
  const { mensagem, omitirAutor } = props;
  return (
    <div className="flex gap-4">
      <Image src="/chat.svg" alt="Assistente" width={40} height={40} />
      <div className={`flex flex-col ${omitirAutor && "pl-16"}`}>
        {!omitirAutor && <span className="text-xs text-zinc-600">{props.mensagem.autor}</span>}
        <div className="bg-black text-white px-7 py-4 sm:w-80 rounded-r-3xl rounded-bl-3xl">
          <ConteudoMD markdown={mensagem.texto} />
        </div>
      </div>
    </div>
  );
}

function BalaoDireito(props: BalaoMensagemProps) {
  const { mensagem, omitirAutor } = props;
  return (
    // <div className="flex flex-col items-end">
    <div className={`flex flex-col items-end ${omitirAutor && 'pr-2'}`}>
      {!omitirAutor && <span className="text-xs text-zinc-600 ">{props.mensagem.autor}</span>}
      <div className="bg-red-700 text-white px-7 mt-2 py-4 sm:w-80 rounded-l-3xl rounded-br-3xl">
        <ConteudoMD markdown={mensagem.texto} />
      </div>
    </div>
  );
}
export default function BalaoMensagem(props: BalaoMensagemProps) {
  return props.mensagem.lado === 'esquerda' ? (
    <BalaoEsquerdo {...props} />
  ) : (
    <BalaoDireito {...props} />
  );
}
