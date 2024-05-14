import React from "react";
import { Link } from "react-router-dom";
import {Input,Button} from "../index";


function Login() {
  return (
    <div className="flex justify-between w-full ">
      <div className="">
      <div className="flex items-start pt-[5%] pl-[5%] flex-col w-[100%] max-w-[50%] h-screen">
          <h1 className="text-3xl pt-[3%] font-bold">Welcome Back </h1>
          <p className=" pt-[6%] pb-[11%] leading-5 w-full text-sm">
            Today is a new day, it's your day. You shape it . Sign in to start
            managing your project
          </p>
        <div>
          <form action="">
            <div>
              <Input type="email" placeholder="Example@gmail.com" label="Email"/>
            </div>
            <div>
              <Input type="password" placeholder="At least 8 characters" label="Password"/>
            </div>
            <div className="mb-3 flex justify-end">
              <Link className=" text-sm text-blue-600 text-end">Forgot Password ?</Link>
            </div>
            <div>
              <Button type="submit">Sign in</Button>
            </div>
          </form>
        </div>
      </div>
      </div>
      <div className=" p-2 rounded-2xl h-[100vh] flex items-center justify-center max-w-[50%]">
        <img
          className=" w-full h-full overflow-hidden object-cover object-center rounded-2xl"
          src="https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
}

export default Login;
