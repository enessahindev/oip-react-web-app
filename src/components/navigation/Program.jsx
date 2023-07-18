//toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Program = () => {
  const notify = () =>
    toast.warning("Sorry! Under constructions.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      theme: "colored",
    });
  return (
    <div>
      {/* Phone Icon & Phone number */}
      <div className="flex lg:gap-x-5 lg:text-[20px] items-baseline justify-end">
        <div className="flex items-baseline justify-end">
          <button
            type="submit"
            onClick={notify}
            className="text-white bg-gradient-to-r from-red-900 via-red-600 to-red-500 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            <a href="https://enessahin.dev">Sign Up</a>
          </button>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            theme="colored"
          />
        </div>
      </div>
    </div>
  );
};

export default Program;
