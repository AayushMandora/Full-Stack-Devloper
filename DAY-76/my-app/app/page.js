import { submitAction } from "@/actions/form";

export default function Home() {
  return (
    <form action={submitAction}>
      <div className="w-screen flex flex-col gap-4 items-center top-[50%] absolute -translate-y-[50%]">
        <div>
          <label htmlFor="">Name : </label>
          <input type="text" name="name" className="text-black" />
        </div>

        <div>
          <label htmlFor="">Password : </label>
          <input type="password" name="pass" className="text-black" />
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </div>
    </form>
  );
}
