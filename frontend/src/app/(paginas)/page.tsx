import Curriculo from '@/components/curriculo';
import Principal from '@/components/landing/Principal';
import Projetos from '@/components/projetos/Projetos';
import Container from '@/components/shared/Container';

import { obterProjetos } from '@/functions/projetos';
import { obterTecnologias } from '@/functions/tecnologias';

export const revalidate = 60; // Revalidar a cada 60 segundos

export default async function Home() {
  const tecnologias = await obterTecnologias();
  const projetos = await obterProjetos();
  return (
    <div>
      <Principal tecnologias={tecnologias.destaques}/>
      <Container className='py-16 flex flex-col gap-10 items-center'>
        <Projetos titulo="Destaque" lista={projetos.destaques} />
        <Projetos titulo="Web" lista={projetos.web} />
        <Projetos titulo="Mobile" lista={projetos.mobile} />
        <Projetos titulo="Jogos" lista={projetos.jogos} />
        <Curriculo tecnologias={tecnologias.todas} />
      </Container>
    </div>
  );
}
