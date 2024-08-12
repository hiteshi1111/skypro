import React, { useEffect, useRef, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { GetRequest } from "../../utils/requests";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Pages from "../../data/search.json";
import Cities from "../../data/cities.json";

function Searchbar() {
  const searchRef = useRef(null);
  const [show, setShow] = useState(false);
  const [packages, setPackages] = useState({ addon: [], isaddon: [] });
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    GetRequest(`${process.env.REACT_APP_API_URL}/packages`)
      .then((response) => {
        const data = response?.data || { addon: [], isaddon: [] };
        setPackages(data);
      })
      .catch((error) => {
        console.log(error, "error getting packages");
      });
  }, []);
  useEffect(() => {
    const addonPackages = packages?.addon || [];
    const isaddonPackages = packages?.isaddon || [];
    const combinedPackages = [...addonPackages, ...isaddonPackages];
    const combinedItems = [
      ...combinedPackages.map((item) => ({
        name: item.name,
        path: item.pdfFile,
        isPackage: true,
        id: item._id,
      })),
      ...Pages.map((page) => ({
        name: page.name,
        path: page.path,
        isPackage: false,
      })),
      ...Cities.map((city) => ({
        name: city.cityname,
        path: `/cities/${city.types}`,
        isPackage: false,
      })),
    ];
    const filteredResult = combinedItems.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(filteredResult);
    setShow(searchTerm.length > 0);
  }, [searchTerm, packages]);
  useEffect(() => {
    setSearchTerm("");
    setFilteredResults([]);
  }, [location]);
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      e.preventDefault();
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShow(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div className="relative" ref={searchRef}>
        <div className="relative flex items-center">
          <div className="absolute left-[15px]">
            <IoSearchSharp className="text-[18px]" />
          </div>
          <input
            type="text"
            placeholder="Package..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            className="search-field rounded w-full block pl-10 pr-2.5 py-[7px] border-[none] outline-0"
          />
        </div>
        {show && searchTerm && (
          <div
            className="absolute top-full mt-[1px] left-0 w-full rounded shadow-[0_5px_10px_5px_rgba(0,0,0,0.2)] bg-white z-[999999]"
            role="listbox"
            aria-live="polite"
          >
            {filteredResults.length === 0 ? (
              <ul>
                <li
                  className="text-[#fd5901] p-[10px]"
                  role="option"
                  aria-selected
                >
                  Not Found
                </li>
              </ul>
            ) : (
              <ul className="max-h-[400px] overflow-y-auto">
                {filteredResults.map((item) => (
                  <li
                    key={item?.id || item?.path}
                    className="text-white border-t first:border-hidden"
                    role="option"
                    aria-selected
                  >
                    <Link
                      to={item?.path}
                      target={item.isPackage ? "_blank" : "_self"}
                      className="p-[10px] inline-block w-full text-[#000] text-[15px]"
                      aria-label={`Open ${item?.name}`}
                      onClick={() => {
                        setShow(false);
                        // setSearchTerm("");
                      }}
                    >
                      {item?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
