'use client';
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "src/components/ui/form";
import { Input } from "src/components/ui/input";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const formSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address")
      .max(50),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters long")
      .max(50),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
    fullName: z.string().min(1, "Full Name is required").max(50),
    phoneNumber: z.string().min(1, "Phone Number is required").max(50),
    type: z.enum(["Company", "Student"]),
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const buttons = [
  {
    label: "Transportater",
    type: "transport",
    className:
      "1/2  bg-black rounded-xl border-transparent py-5 px-8  text-white hover:ease-in-out font-bold focus:bg-[#446de2]",
  },
  {
    label: "Company",
    type: "company",
    className:
      "bg-black rounded-xl border-transparent py-5 px-8 text-white hover:ease-in-out font-bold focus:bg-[#446de2]",
  },
];

type BaseProps = {
  name: string;
  placeholder: string;
  icon: React.ReactNode;
  control: any;
  toggle?: boolean;
};

type TextOrPasswordInputProps = BaseProps & {
  type?: "text" | "password";
};

type OptionsInputProps = BaseProps & {
  type: "options";
  items: string[];
};

type CustomInputFieldProps = TextOrPasswordInputProps | OptionsInputProps;

const CustomInputField: React.FC<CustomInputFieldProps> = ({
  name,
  placeholder,
  icon,
  control,
  type = "text",
  toggle = false,
  ...rest
}) => {
  const [show, setShow] = useState(false);
  const inputType = toggle ? (show ? "text" : "password") : type;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                {icon}
              </span>
              <Input
                type={inputType}
                placeholder={placeholder}
                {...field}
                className="pl-10 pr-10"
              />
              {toggle && (
                <span
                  onClick={() => setShow(!show)}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 bg-transparent hover:opacity-45 cursor-pointer"
                >
                  {!show ? (
                    <EyeOff size={24} className="opacity-50" />
                  ) : (
                    <Eye size={24} className="opacity-50" />
                  )}
                </span>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const SignUpForm = () => {
  const [userType, setUserType] = useState<"transport" | "company">("transport");
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      phoneNumber: "",
    },
  });

  const signUpMutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      let payload;
      if (userType === "company") {
        payload = {
          email: values.email,
          password: values.password,
          type: userType,
          name: values.fullName,
          phoneNumber: values.phoneNumber,
          [userType]: {},
        };
      } else if (userType === "transport") {
        payload = {
          email: values.email,
          password: values.password,
          type: userType,
          name: values.fullName,
          phoneNumber: values.phoneNumber,
          [userType]: {
            trucks: [],
          },
        };
      }
      const api = axios.create({
        baseURL: 'http://localhost:8000'  // or whatever your backend URL is
      });
      try {

        return await api.post('/Auth/signup', payload);
      } catch (e) {
        console.log(e);
      }
    },
    onSuccess: (data) => {
      toast.success("Signed up successfully!");
      // Add any additional success handling (e.g., redirect)
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "An error occurred during sign up");
      console.error("Sign up error:", error);
    },
  });

  const fields: CustomInputFieldProps[] = [
    {
      name: "email",
      placeholder: "E-mail",
      icon: <Mail className="h-5 w-auto opacity-45 " />,
      control: form.control,
      type: "text",
      toggle: false,
    },
    {
      name: "fullName",
      placeholder: "Full Name",
      icon: <User className="h-5 w-auto opacity-45" />,
      control: form.control,
      type: "text",
      toggle: false,
    },
    {
      name: "phoneNumber",
      placeholder: "Phone Number",
      icon: <Phone className="h-5 w-auto opacity-45" />,
      control: form.control,
      type: "text",
      toggle: false,
    },
    {
      name: "password",
      placeholder: "Password",
      icon: <Lock className="h-5 w-5 opacity-45" />,
      control: form.control,
      toggle: true,
    },
    {
      name: "confirmPassword",
      placeholder: "Confirm Password",
      icon: <Lock className="h-5 w-5 opacity-45" />,
      control: form.control,
      toggle: true,
    },
  ];

  function onSubmit(values: z.infer<typeof formSchema>) {
    signUpMutation.mutate(values);
  }

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-5 sm:p-10 md:p-12 rounded-lg shadow-lg h-md mx-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <ul className="flex justify-center items-center flex-col">
              <h1 className="text-4xl font-bold mb-4">Sign up</h1>
              <ul className="flex justify-center items-center gap-3">
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`${button.className} ${
                      userType === button.type ? "bg-[#446de2]" : ""
                    }`}
                    onClick={() => setUserType(button.type as "transport" | "company")}
                  >
                    {button.label}
                  </button>
                ))}
              </ul>
            </ul>

            {fields.map((field) => (
              <CustomInputField key={field.name} {...field} />
            ))}

            <button
              type="submit"
              className="w-full bg-primary rounded-full py-4 text-white hover:opacity-85 hover:ease-in-out"
              disabled={signUpMutation.isPending}
              onClick={onSubmit}
            >
              {signUpMutation.isPending ? "Signing Up..." : "Sign Up"}
            </button>
            Already have an account?&nbsp;
            <Link href="/signin" className="text-[#446de2] hover:underline">
              Sign in
            </Link>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;