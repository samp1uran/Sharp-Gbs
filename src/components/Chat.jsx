import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
const serviceId = import.meta.env.VITE_serviceId;
const templateId = import.meta.env.VITE_templateId;
const publicId = import.meta.env.VITE_publicId;
function Chat({setChatHidden}) {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const handleHidden=()=>{
    localStorage.setItem("chat","hidden")
    setChatHidden(true)
  }
  const sendEmail = async (e) => {
    setLoading(true);
    e.preventDefault();
    await emailjs.sendForm(serviceId, templateId, form.current, publicId).then(
      (result) => {
        toast.success("Welcome to Sharp Gbs");
        form.current.reset();
        handleHidden();
      },
      (error) => {
        toast.error("Error");
      }
    );
    setLoading(false);
  };
  return (
    <>
      <div
        onClick={handleHidden}
        className={`fixed inset-0 z-50  bg-gray-200 opacity-50`}
      ></div>
      <div
        className={`z-50 fixed w-[85%] md:w-[30%] left-1/2 top-1/2 md:left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl shadow-black xl:p-0`}
      >
        <span
          className=" fixed right-3 text-2xl cursor-pointer text-gray-600 hover:text-gray-800"
          onClick={handleHidden}
        >
          &times;
        </span>

        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
            Welcome to Sharp Gbs
          </h1>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your good name."
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer w-full bg-blue-500 text-white border-2 bg-primary-600 hover:bg-blue-600 shadow-2xl focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              {loading ? (
                <div className="m-auto w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Welcome"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Chat;
