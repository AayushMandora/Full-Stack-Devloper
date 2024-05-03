import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-3 h-[83vh]">
        <div className="w-[30%] text-[50px] text-center font-bold">
          Fund your creative work
        </div>
        <p>A crowdfunding platform for creators to fund their projects.</p>
        <p>Unleash the power of your fans and get your projects funded.</p>
        <div className="flex gap-4">
          <Link href="/login">
            <button className="px-4 p-2 rounded-lg font-bold bg-gradient-to-br from-blue-600 to-purple-700">
              Start Here
            </button>
          </Link>
          <button className="bg-gradient-to-br from-blue-600 to-purple-700 px-4 p-2 rounded-lg font-bold ">
            Read More
          </button>
        </div>
      </div>
    </>
  );
}
