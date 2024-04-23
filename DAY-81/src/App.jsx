import { useEffect, useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [form, setform] = useState({ site: "", username: "", pass: "" });
  const [Passwords, setPasswords] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      let Passwords = JSON.parse(localStorage.getItem("passwords"));
      setPasswords(Passwords);
    }
  }, []);

  const storetoloc = () => {
    localStorage.setItem("passwords", JSON.stringify(Passwords));
  };

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const save = () => {
    setPasswords([...Passwords, { form ,id:uuidv4()}]);
    toast.success('Password Saved', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    setform({site:"",username:"",pass:""});
    storetoloc();
  };

  const edit=(e)=>{
    let index=Passwords.findIndex(item=>{
      return item.id === e;
    });
    setform(Passwords[index].form);
    Delete(e);
  }
  const Delete=(e)=>{
    let passwords=Passwords.filter(item=>{
      return item.id !== e;
    });
    setPasswords(passwords);
    storetoloc();
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="flex flex-col gap-3 justify-center items-center bg-[#5465FF] h-screen">
        <div className="flex flex-col bg-[#788BFF] w-[80vw] h-[30vh] gap-4 justify-center items-center rounded-xl">
          <input
            type="text"
            name="site"
            className="w-[80%] rounded-lg p-2"
            value={form.site}
            placeholder="WEB SITE URL"
            onChange={handlechange}
          />
          <div className="flex w-[80%] justify-between">
            <input
              type="text"
              name="username"
              value={form.username}
              placeholder="Username"
              className="w-[30%] rounded-lg p-2"
              onChange={handlechange}
            />
            <input
              type="password"
              name="pass"
              value={form.pass}
              placeholder="Password"
              className="w-[30%] rounded-lg p-2"
              onChange={handlechange}
            />
            <button
              className="bg-[#9BB1FF] w-[30%] font-extrabold"
              onClick={()=>{save()}}
            >
              SAVE
            </button>
          </div>
        </div>
        <div className="flex flex-col item-center w-[80vw] h-[55vh] bg-[#788BFF] rounded-xl p-2">
          <div className="text-xl font-extrabold">Your Save Passwords</div>
          <table className="table-auto">
            <thead className="bg-[#BFD7FF]">
              <tr>
                <th>WEBSITE LINK</th>
                <th>USERNAME</th>
                <th>PASSWORD</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Passwords.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="font-bold text-center bg-[#E2FDFF]"
                  >
                    <td>
                      <a href={item.form.site} target="_blank">
                        {item.form.site}
                      </a>
                    </td>
                    <td>{item.form.username}</td>
                    <td>{item.form.pass}</td>
                    <td>
                      <div className="flex gap-3 justify-center">
                        <button onClick={()=>{edit(item.id)}}>Edit</button>
                        <button onClick={()=>{Delete(item.id)}}>Delete</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
