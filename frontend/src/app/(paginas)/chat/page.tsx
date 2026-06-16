'use client';

import useChat from '@/hooks/useChat';

export default function Chat() {
  const { chatId } = useChat();

  return (
    <div>
      <span>
        <h1>Chat: {chatId}</h1>
      </span>
    </div>
  );
}
