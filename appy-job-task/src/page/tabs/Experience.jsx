import { useEffect, useState } from "react";
import { FaArrowRightLong, FaCaretDown, FaLocationDot } from "react-icons/fa6";
const Experience = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("experiencejob.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div data-aos="fade-right">
      <div className="text-center font-bold text-2xl my-6">
        <h1>Experience Job</h1>
      </div>
      <div className=" grid md:grid-cols-3 gap-4 items-center justify-center ">
        {data.map((card) => (
          <>
            <div
              key={card.company}
              className="max-w-md w-full p-6  rounded-lg shadow-lg border-2 hover:border-cyan-800"
            >
              <h1 className=" text-2xl font-medium text-center  mt-8 mb-6">
                {card.position}
              </h1>

              <div className="flex justify-evenly">
                <p className=" flex text-sm font-semibold text-center  mt-8 mb-6">
                  <FaLocationDot className="mx-2" /> {card.location}
                </p>
                <p className=" flex text-sm font-semibold text-center  mt-8 mb-6">
                  <FaCaretDown className="mx-2" /> Full Time
                </p>
              </div>
              <div className="flex  mb-8">
                <img
                  src={card.logo}
                  alt="Logo"
                  className="w-20 h-20 rounded-full"
                />
                <h1 className="text-xl font-normal mt-6 mx-4">
                  {card.company}
                </h1>
                <h1 className="text-slate-300 text-2xl font-bold mt-5 ">
                  2 hr ago
                </h1>
              </div>
              <button className="btn btn-primary px-8 mt-5 ml-[40%] ">
                Apply
              </button>
            </div>
          </>
        ))}
      </div>
      <div>
        <button className="btn btn-primary px-8 mt-5 ml-[40%]">
          Find More <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Experience;
