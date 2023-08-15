import { useEffect, useState } from "react";
import { FaCaretDown, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Jobsek = () => {
  const [job, setJob] = useState([]);

  useEffect(() => {
    fetch("https://job-task-server-abujafor1924.vercel.app/jobpost")
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);
  return (
    <div data-aos="fade-right">
      <h1 className="text-2xl font-bold text-center my-10">See All job Post</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {job.map((data) => (
          <>
            <div
              key={data._id}
              className="max-w-md w-full p-6  rounded-lg shadow-lg border-2 hover:border-cyan-800"
            >
              <h1 className=" text-2xl font-medium text-center  mt-8 mb-6">
                {data.position}
              </h1>

              <div className="flex justify-evenly">
                <p className=" flex text-sm font-semibold text-center  mt-8 mb-6">
                  <FaLocationDot className="mx-2" /> {data.location}
                </p>
                <p className=" flex text-sm font-semibold text-center  mt-8 mb-6">
                  <FaCaretDown className="mx-2" /> Full Time
                </p>
              </div>
              <div className="flex  mb-8">
                <img
                  src={data.imageURL}
                  alt="Logo"
                  className="w-20 h-20 rounded-full"
                />
                <h1 className="text-xl font-normal mt-6 mx-4">
                  {data.company}
                </h1>
                <h1 className="text-slate-300 text-2xl font-bold mt-5 ">
                  2 hr ago
                </h1>
              </div>
              <button className="btn btn-primary px-8 mt-5 ml-[40%] ">
                <Link to={"protect"}>Apply</Link>
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Jobsek;
