import './App.css'
import { useForm } from "react-hook-form"

function App() {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    let a= await fetch("http://localhost:3000/",{method:"POST", body: JSON.stringify(data),});
    let b= await a.text();
    console.log(data, b);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name",{required:{value:true,message:"This Field are Required"},maxLength:{value:8,message:"Maximum 8 character allowed"}})}/>
        {errors.name && <div className='red'>{errors.name.message}</div>}
        <input type="password" {...register("password",{required:{value:true,message:"This Field are Required"},maxLength:{value:8,message:"Maximum 8 character allowed"}}) }/>
        {errors.password && <div className='red'>{errors.password.message}</div>}
        <input type="submit" />
      </form>
    </>
  )
}

export default App
