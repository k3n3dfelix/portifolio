export default interface Mensagem {
  id: string;
  texto: string;
  autor: string;
  lado: 'direita' | 'esquerda';
}
