import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen overflow-x-hidden flex-col items-center p-6 ">
      <div className="text-2xl mb-40 font-bold">Abhishek Codes</div>
      <Image src="/construction.jpg" width={500} height={500} />
      <div className="text-lg mt-[-30px] text-gray-600 font-semibold">
        Site is under Construction!
      </div>
    </main>
  );
}
