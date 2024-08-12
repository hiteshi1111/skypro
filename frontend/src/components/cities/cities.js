import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import servicesData from "../../data/cities.json";
import { windowScroll } from "../../utils/windowScroll";
import { AccountContext } from "../../utils/AccountContext";
const Cities = () => {
  const { view, setView } = useContext(AccountContext);
  return (
    <>
      <div className="w-full pb-[40px]">
        <div className="container mx-auto">
          <div className="mb-[40px]">
            <h3 className="text-center mb-[20px]">Popular Cities</h3>
            <div className="lg:flex gap-x-12 mx-20">
              {servicesData?.map((item, index) => (
                <div
                  className="text-center"
                  onClick={windowScroll}
                  key={index}
                >
                  <div>
                    <Link to={`/cities/${item.types}`}>
                      <img
                        className="sm:m-auto sm:w-[300px] lg:h-full lg:w-full"
                        src={item?.icon}
                        alt={item?.cityname}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link to={`/cities/${item.types}`}>
                      <p className="sm:text-xl lg:text-base">
                        {item?.cityname}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {view ? (
        <div className="w-full md:pb-[70px] max-md:pb-[40px]">
          <div className="container mx-auto">
            <div>
              <div className="text-center">
                <button
                  onClick={() => setView(false)}
                  className="inline-flex justify-center items-center gap-[10px] duration-[400ms,700ms] px-[30px] py-3 bg-[#fd5901] hover:bg-[#ffffff] border-2 border-[#fd5901] hover:text-black hover:border-2 hover:border-[#fd5901] text-white rounded-full mb-[20px] cursor-pointer"
                >
                  Hide All States/Cities{" "}
                  <span>
                    <FaChevronUp />
                  </span>
                </button>
              </div>
              <div>
                <div className="container">
                  <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-4 lg:grid-cols-7 gap-x-[20px] gap-y-[10px] max-w-full mx-auto pt-[10px] text-center">
                    {servicesData?.map((item, index) => (
                      <div key={index} onClick={windowScroll}>
                        <Link
                          to={`/cities/${item?.types}`}
                          onClick={() => setView(false)}
                        >
                          <p className="">{item?.cityname}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full md:pb-[70px] max-md:pb-[40px]">
          <div className="container mx-auto">
            <div>
              <div className="text-center">
                <button
                  onClick={() => setView(true)}
                  className="inline-flex justify-center items-center gap-[10px] duration-[400ms,700ms] px-[30px] py-3 bg-[#fd5901] hover:bg-[#ffffff] border-2 border-[#fd5901] hover:text-black hover:border-2 hover:border-[#fd5901] text-white rounded-full mb-[20px] cursor-pointer"
                >
                  View All States/Cities{" "}
                  <span>
                    <FaChevronDown />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cities;
