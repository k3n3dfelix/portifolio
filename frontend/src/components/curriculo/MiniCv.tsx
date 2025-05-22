import Image from 'next/image';

export default function MiniCv() {
  return (
    <div className="flex-1 flex flex-col-reverse md:flex-row  xl:flex-row lg:flex-col-reverse items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6 gap-6">
      <div className="relative min-w-72 h-64 xl:self-end">
        <Image src="/minha-foto.png" alt="Kened Felix" fill />
      </div>
      <div className="flex flex-col gap-5 self-center py-6 items-center md:items-start xl:items-start lg:items-center">
        <div className="flex flex-col items-start md:items-start  xl:items-start lg:items-center">
          <span className="bg-gradient-to-r from-red-500 via-white to-white text-transaparent bg-clip-text text-2xl font-bold">
            Desenvolvedor Full-Stack
          </span>
          <span className="text-zinc-400">CTO da KSF Consulting</span>
        </div>
        <p className="text-sm text-center md:text-left  xl:text-left lg:text-center text-zinc-400 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris. Nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
        </p>
      </div>
    </div>
  );
}
