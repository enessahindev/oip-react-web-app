import priceImage from "../../assets/images/priceImage.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Prices() {
  const notifyMontly = () =>
    toast("💵 Montly Price Plans", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "dark",
    });
  const notifyAnnualy = () =>
    toast("💵 Annualy Price Plans", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "dark",
    });
  return (
    <section className="">
      <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
        <div className="lg:flex items-center justify-between">
          <div className=" lg:w-1/2 w-full">
            <p className="text-base leading-4 text-gray-600">
              Choose your plan
            </p>
            <h1 className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-indigo-800">
              Here are all our plans
            </h1>
            <p className="text-base leading-5 mt-5 text-gray-600">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human happiness
            </p>
            <div className="w-56">
              <div className="bg-gray-100 shadow rounded-full flex items-center mt-10">
                <button
                  className="bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6 mr-1"
                  id="monthly"
                  onClick={notifyMontly}
                >
                  Monthly
                  <ToastContainer
                    position="bottom-left"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    theme="dark"
                  />
                </button>
                <button
                  className="bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:outline-none text-base leading-none text-white rounded-full py-4 px-6"
                  id="annually"
                  onClick={notifyAnnualy}
                >
                  Annually
                  <ToastContainer
                    position="bottom-left"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    theme="dark"
                  />
                </button>
              </div>
            </div>
          </div>
          <div
            className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8"
            role="list"
          >
            <img
              src={priceImage}
              className="absolute w-full -ml-12 mt-24"
              alt="background circle images"
            />
            <div
              role="listitem"
              className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30"
            >
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                  Starter Package
                </h2>
                <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800">
                  $19.99<span className="font-normal text-base">/mo</span>
                </p>
              </div>
              <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                File Share, Task Management, Schedule Integration, Reporting
                Features
              </p>
            </div>
            <div
              role="listitem"
              className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
            >
              <div className="w-2.5  h-auto bg-indigo-700 rounded-tl-md rounded-bl-md" />
              <div className="w-full p-8">
                <div className="md:flex items-center justify-between">
                  <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                    Premium Package
                  </h2>
                  <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                    $49.99<span className="font-normal text-base">/mo</span>
                  </p>
                </div>
                <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                  File Share, Task Management, Schedule Integration, Reporting
                  Features, Project Management, Collaboration Tools,
                  Customizable Reports, Customer Support
                </p>
              </div>
            </div>
            <div
              role="listitem"
              className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7"
            >
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                  Royal Package
                </h2>
                <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                  $99.99<span className="font-normal text-base">/mo</span>
                </p>
              </div>
              <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                File Share, Task Management, Schedule Integration, Reporting
                Features, Project Management, Collaboration Tools, Customizable
                Reports, Customer Support, Advanced Data Analytics, Multi
                Language, Primary Customer Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
