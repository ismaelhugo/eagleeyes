import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image src={"/image.png"} alt="Logo" width={500} height={500} />
      <h1 className="font-bold text-center text-4xl">
        Operação Olhos de Águia
      </h1>
      <h3 className="text-center text-2xl">
        Plataforma cidadã de transparência parlamentar
      </h3>
      <p className="text-center text-base">Em breve</p>
    </div>
  );
}
