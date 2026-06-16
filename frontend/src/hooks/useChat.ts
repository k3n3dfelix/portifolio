import { Id } from "@core";
import useLocalStorage from "./useLocalStorage";

export default function useChat() {
    const [chatId] = useLocalStorage<string>("chatId", Id.gerar());

    return {
        chatId
    }


}