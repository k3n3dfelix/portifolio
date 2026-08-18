import Image from 'next/image';
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
import JanelaChat from './JanelaChat';

export default function BotaoChat() {
  return (
    <>
      <Popover>
        <PopoverTrigger className="fixed bottom-5 right-5 cursor-pointer">
          <div className="fixed bottom-5 right-5 cursor-pointer">
            <Image src="/chat.svg" alt="Chat" width={50} height={50} />
          </div>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="end"
          sideOffset={10}
          className="w-[400px] sm:w-[500px] p-0"
         
        >
          <JanelaChat />
        </PopoverContent>
      </Popover>
    </>
  );
}
