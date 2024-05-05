import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-3 h-[83vh]">
        <div className="md:w-[30%] md:text-[50px] w-full text-[40px] text-center font-bold">
          Fund your creative work
        </div>
        <p className=" text-center">A crowdfunding platform for creators to fund their projects.</p>
        <p className=" text-center">Unleash the power of your fans and get your projects funded.</p>
        <div className="flex gap-4">
          <Link href="/login">
            <button className="px-4 p-2  rounded-lg font-bold bg-gradient-to-br from-blue-600 to-purple-700">
              Start Here
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
