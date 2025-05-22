import BotaoChat from '@/components/chat/BotaoChat';
import React from 'react';

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="bg-black">
      {props.children}
      <BotaoChat />
    </div>
  );
}
