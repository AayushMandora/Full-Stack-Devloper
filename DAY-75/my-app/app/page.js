"use client"
export default function Home() {
  const handleclick = async() => {
    let data = {
      name: "Aayush",
      role: "WEB-DEV",
    };
    let a =await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res=await a.text();
    console.log(res);
  };
  return (
    <div>
      <h1>Create Api in NEXT.JS</h1>
      <button onClick={handleclick}>Click me</button>
    </div>
  );
}
