import { Controller, Get, Param } from '@nestjs/common';
import { ProjetoProvider } from './projeto.provider';
import { Projeto } from '@core';

@Controller('projetos')
export class ProjetoController {
  constructor(private readonly repo: ProjetoProvider) {}

  @Get()
  async obterTodas(): Promise<Projeto[]> {
    return this.repo.obterTodos();
  }

  @Get(':id')
  async obterPorId(@Param('id') id: string): Promise<Projeto | null> {
    return this.repo.obterPorId(Number(id));
  }
}
