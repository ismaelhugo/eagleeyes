import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image src={"/logo-bg.png"} alt="Logo" width={500} height={500} />
      <h3 className="text-center text-2xl text-[#1F2937]">
        Plataforma cidadã de transparência parlamentar
      </h3>
      <p className="text-center text-base text-[#1F2937]">Em breve</p>
    </div>
  );
}
