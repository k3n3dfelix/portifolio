'use client';
import Link from 'next/link';

export default function Menu() {

  return (
    <nav className="flex gap-6">
      <MenuItem href="/" selecionado={true} novaAba={true}>
        Inicio
      </MenuItem>
      <MenuItem href="/projetos" selecionado={false} novaAba={false}>
        Projetos
      </MenuItem>
      <MenuItem
        href="/https://api.whatsapp.com/send/?phone=5516981948281&text&type=phone_number"
        selecionado={false}
        novaAba={false}
      >
        Contato
      </MenuItem>
    </nav>
  );
}

function MenuItem(props: {
  href: string;
  children: React.ReactNode;
  selecionado: boolean;
  novaAba?: boolean;
}) {
  return (
    <Link
      href={props.href}
      target={props.novaAba ? '_blank' : '_self'}
      className={`${
        props.selecionado ? 'text-red-500' : 'text-gray-500'
      } hover:text-red-500 transition-colors duration-300`}
    >
      <span
        className={`flex items-center gap-2 text-sm border-red-600 hover:text-white ${
          props.selecionado ? 'border-b-4 text-white' : 'text-zinc-300'
        }`}
      >
        {props.children}
      </span>
    </Link>
  );
}
