import { Projeto, Tipo } from '@/core*';
import { httpGet } from './api';

export async function obterProjetos() {
  const projetosRaw = await httpGet('/projetos');
  console.log('Retorno do httpGet /projetos:', projetosRaw);

  // Verifique se o retorno é array
  const projetos = Array.isArray(projetosRaw) ? projetosRaw : [];

  return {
    todos: projetos,
    get mobile() {
      return projetos.filter((projeto) => projeto.tipo === Tipo.MOBILE);
    },
    get web() {
      return projetos.filter((projeto) => projeto.tipo === Tipo.WEB);
    },
    get jogos() {
      return projetos.filter((projeto) => projeto.tipo === Tipo.JOGO);
    },
    get destaques() {
      return projetos.filter((projeto) => projeto.destaque);
    },
  };
}


export async function obterProjeto(id: string): Promise<Projeto | null> {
  return await httpGet(`/projetos/${id}`);
}
