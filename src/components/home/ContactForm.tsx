import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@nextui-org/react";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "next-themes";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_ID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<any>();
  const { theme } = useTheme();

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    const currTheme = theme === "dark" ? "dark" : "light";
    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current as HTMLFormElement,
        PUBLIC_ID
      );
      toast("Message Sent Successfully!", {
        type: "success",
        theme: currTheme,
        position: "top-center",
        autoClose: 3000,
        closeOnClick: false,
      });
      e.target.reset();
    } catch (error: any) {
      console.error(error);
      toast("Ooops, something went wrong!", {
        type: "error",
        theme: currTheme,
        position: "top-center",
        autoClose: 3000,
        closeOnClick: false,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 min-w-[300px] relative rounded-md">
      <div className=" px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center  text-primary-color">
          Contact
        </h2>
        <form
          action="submite"
          onSubmit={handleOnSubmit}
          ref={form}
          className="space-y-8"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
              className="shadow-sm border  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="from_subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="Job offer"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium  text-gray-300"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block p-2.5 w-full text-sm  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="flex justify-center items-center">
            <Button
              aria-labelledby="send message"
              type="submit"
              color="primary"
              isLoading={isLoading}
              className="bg-primary-color mb-4"
            >
              Send message
            </Button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
}
