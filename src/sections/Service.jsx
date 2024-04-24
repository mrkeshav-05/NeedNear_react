import React from "react";

const Service = (props) => {
  return (
    <section className="flex bg-[#032830] w-full  flex-row justify-center py-20">
      <div className="bg-gray-200 p-4 m-4 flex  items-center  w-full rounded-lg shadow-lg">
        <div className=" object-cover flex-none  h-80 w-90">
          <img
            className="object-cover "
            width={400}
            src={props.service.img}
            alt=""
          />
        </div>
        <div className="flex-grow pl-4 flex flex-col justify-center h-full w-full ">
          <div className="bg-gray-700 p-4 rounded-md h-full w-full  text-white ">
            <div className="text-center ">
              <h3 className="text-4xl mt-2 ">{props.service.title}</h3>
              <p className="text-2xl text-yellow-300 my-3 ">
                {props.service.description}
              </p>
              <div>
                <h4 className="text-lg font-semibold my-3">
                  Available Services
                </h4>
                <ul className="pl-8 mt-2">
                  {props.service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;