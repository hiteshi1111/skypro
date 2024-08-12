import React, { useEffect, useState } from "react";
import { GetRequest } from "../utils/requests";
import { Link, useLocation, useNavigate } from "react-router-dom";
import pages from '../data/search.json';
import { IoSearchSharp } from "react-icons/io5";
import { windowScroll } from "../utils/windowScroll";
import cities from '../data/cities.json';
import SEO from "../components/shared/seo";

function Searchnews() {
  const [packages, setPackages] = useState({ addon: [], isaddon: [] });
  const [blogs, setBlogs] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("q") || "";
  const [inputValue, setInputValue] = useState(searchTerm);

  useEffect(() => {
    GetRequest(`${process.env.REACT_APP_API_URL}/packages`)
      .then((response) => {
        const data = response?.data || { addon: [], isaddon: [] };
        setPackages(data);
      })
      .catch((err) => {
        console.log("Error getting packages", err);
      });
  }, []);

  useEffect(() => {
    GetRequest(`${process.env.REACT_APP_API_URL}/blogs/getblogs`)
      .then((response) => {
        setBlogs(response?.data ||[]);
        console.log(response?.data);
      })
      .catch((err) => {
        console.log("Error getting blogs", err);
      });
  }, []);

  useEffect(() => {
    const combinedPackages = [...packages.addon, ...packages.isaddon];
    const combinedItems = [
      ...combinedPackages.map((item) => ({
        name: item?.name,
        path: item?.pdfFile,
        isPackage: true,
        id: item?._id,
      })),
      ...blogs.map((blog) => ({
        name: blog.title,
        path: `/blogs/${blog?.handle}`,
        isPackage: false,
        id: blog?._id,
      })),
      ...pages.map((page) => ({
        name: page?.name,
        path: page?.path,
        isPackage: false,
      })),
      ...cities.map((city) =>({
        name : city.cityname,
        path : `/cities/${city.types}`,
        isPackage : false
      }))
    ];

    const filteredResult = combinedItems.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(filteredResult);
  }, [searchTerm, packages, blogs]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`?q=${inputValue}`);
    }
  };

  return (
    <>
      <SEO
            title="Search"
            description="Skypro Tv"
            noIndex
        />
      <div className="container">
        <div className="md:mb-[30px] mb-[20px]">
          <div className="relative flex items-center max-w-[500px] mx-auto shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] border rounded-[8px] overflow-hidden">
            <div className="absolute left-[15px]">
              <IoSearchSharp className="text-[18px]" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="search-field w-full block pl-10 pr-2.5 py-[10px] border-[none] outline-0"
            />
          </div>

          <div className="text-center mt-[20px]">Showing {filteredResults.length} Results</div>
        </div>

        {filteredResults.map((item, index) => (
          <div
            key={index}
            className="bg-[#fff] rounded shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] md:mb-[30px] max-md:mb-[20px] last:mb-[0px]"
          >
            <div className="lg:p-4">
              <div onClick={windowScroll}>
                <Link
                  className="block text-black"
                  target={item.isPackage ? "_blank" : "_self"}
                  to={item.path}
                >
                  <h4 className="mb-0 duration-500 cursor-pointer hover:text-[#fd5901] font-medium">
                    {item.name}
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Searchnews;
