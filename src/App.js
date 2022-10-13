import { useForm } from "react-hook-form";
import { useState } from 'react';

export default function ReactHookSimpleJs() {
  const [thanksMessage, setThanksMessage] = useState(false)
  const { register, handleSubmit } = useForm();
  const mySubmit = (data) => {
    console.log(data);
    setThanksMessage(true);
  };

  return(
    <>
    <h1>Simple React Hook Form using .js</h1>

    <form onSubmit={handleSubmit(mySubmit)}>
      <div>
        <label>name</label>
        <input {...register("name")} />
      </div>

      <div>
        <label>email</label>
        <input {...register("email")} />
      </div>

      <div>
        <label>message</label>
        <input {...register("message")} />
      </div>

      <input type="submit" />
      </form>

      {thanksMessage &&
        <h2>Thanks for contacting us, we'll get back to you shortly.</h2>
      }

    </>
  )
  
}


