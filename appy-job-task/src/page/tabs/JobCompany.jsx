import { useEffect, useState } from "react";

const JobCompany = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("companydata.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // console.log(data);
  return (
    <div data-aos="fade-right">
      <h1 className="text-3xl font-bold text-center my-10">Job Cerculer</h1>
      <div className="grid md:grid-cols-3 gap-3">
        {data.map((pd) => (
          <div
            key={pd.company}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <span className="sr-only">Open dropdown</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>

              <div
                id="dropdown"
                className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul className="py-2" aria-labelledby="dropdownButton">
                  <li>
                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={pd.logoUrl}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {pd.position}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {pd.location}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {pd.company}
              </span>
            </div>
            <div className="card-actions ">
              <button className="btn btn-primary ml-[40%] mb-4">APPLY</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCompany;
