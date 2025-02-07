"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// import axios from "axios";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "src/components/ui/form";
import { Input } from "src/components/ui/input";


const formSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address")
    .max(50),
  password: z.string().min(1, "Password is required").max(50),
});

const SignForm = () => {
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });


  const buttons = [
    {
      label: "Transportater",
      className:
        "1/2  bg-black rounded-xl border-transparent py-5 px-8  text-white hover:ease-in-out font-bold focus:bg-[#446de2]",
    },
    {
      label: "Company",
      className:
        "bg-black rounded-xl border-transparent py-5 px-8 text-white hover:ease-in-out font-bold focus:bg-[#446de2]",
    },
  ];

  const [showPassword, setShowPassword] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await toast.promise(axios.post(`/Auth/Login`, values), {
      pending: "Signing in...",
      success: {
        render({ data }) {
          //   setTokens(data?.data?.access, data?.data?.refresh);
          return "Signed in successfully";
        },
      },
      error: {
        render({ data }: any) {
          const statusCode = data?.status;
          return "An error occured Check your network.";
        },
      },
    });
  }
  // --------------------

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-5 sm:p-10 md:p-12 rounded-lg shadow-lg  h-md mx-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center justify-center flex-col space-y-8" >
          <h1 className="text-4xl font-bold">Sign in</h1>

            <div className="text-center">
             <ul className="flex justify-center items-center gap-3 ">
             {
                
                buttons.map((button, index) => (
                  <button
                    key={index}
                    type={'button'}
                    className={button.className}
                  >
                    {button.label}
                  </button>
                ))
              }
             </ul>
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="E-mail"
                        {...field}
                        className=" h-12 p-7 pl-10 text-lg focus:outline-none rounded-xl   w-full  "
                      />
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Mail className="h-5 w-auto " />
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...field}
                        className=" h-12 p-7 pl-10 text-lg focus:outline-none rounded-xl  w-full"
                      />
                      <button
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        className="absolute inset-y-0 right-0 flex items-center pr-4 bg-transparent  hover:ease-out duration-500"
                      >
                        {!showPassword ? (
                          <EyeOff size={24} className=" " />
                        ) : (
                          <Eye size={24} className="" />
                        )}
                      </button>
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Lock className="h-5 w-5 o" />
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              type="submit"
              className="w-full bg-primary rounded-full border-transparent py-4 text-white 
               hover:ease-in-out"
            >
              Sign In
            </button>
            <FormLabel className="text-center justify-center flex">
            Don&apos;t have an account ?&nbsp;
              <Link href="/signup" className="text-[#446de2;] hover:underline">
                 Sign Up
              </Link>
            </FormLabel>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default SignForm;
