import React, { useEffect, useState, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import servicesData from "../../data/cities.json";
import { MdSearchOff } from "react-icons/md";

const Search = () => {
    const [filteredCities, setFilteredCities] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const filteredServiceResult = Array.isArray(servicesData) && servicesData?.length > 0
            ? servicesData?.filter((serviceItem) => {
                const searchTermLower = searchTerm.toLowerCase();
                return (
                    serviceItem?.cityname.toLowerCase().includes(searchTermLower)
                    // serviceItem?.title.toLowerCase().includes(searchTermLower) 
                    // serviceItem?.desc.toLowerCase().includes(searchTermLower)
                );
            })
            : [];
        setFilteredCities(filteredServiceResult);
    }, [searchTerm]);
    const searchDropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchDropdownRef.current && !searchDropdownRef.current.contains(event.target)) {
                setSearchTerm('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchDropdownRef]);
    const handleSuggestionClick = (cityName) => {
        navigate(`/cities/${cityName}`);
        setSearchTerm("");
    };
    const handleSearchEnter = (e) => {
        if (e.key === 'Enter' && searchTerm.trim() !== "" && filteredCities.length > 0) {
            const cityName = filteredCities[0]?.types?.replace(/\s+/g, "-").toLowerCase();
            navigate(`/cities/${cityName}`);
            setSearchTerm("");
        }
    };
    const handleSearchIconClick = () => {
        if (searchTerm.trim() !== "" && filteredCities.length > 0) {
            const cityName = filteredCities[0]?.types?.replace(/\s+/g, "-").toLowerCase();
            navigate(`/cities/${cityName}`);
            setSearchTerm("");
        }
    };
    return (
        <>
            <div className="w-full pt-20 pb-[20px]">
                <div className="container !max-w-[900px] mx-auto">
                    <form className="mb-[40px]">
                        <div className="flex w-full relative">
                            <input
                                type="text"
                                id="search-dropdown"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={handleSearchEnter}
                                className="border focus:outline-none bg-[#fff] text-[#000] h-[50px] block w-full md:ps-5 max-md:ps-3 md:py-[8px] max-md:py-[6px] md:pe-[50px] max-md:pe-[40px]"
                                placeholder="Search for your city"
                            />
                            <div
                                className="absolute h-[50px] md:min-w-[50px] max-md:min-w-[40px] py-[8px] right-0 top-0 flex items-center justify-center text-white bg-[#061e43] cursor-pointer"
                                onClick={handleSearchIconClick}
                            >
                                <IoSearch className='md:text-[18px] max-md:text-[16px]' />
                            </div>
                        </div>
                        {searchTerm && (
                            <div className='search-fill-info bg-[#fd5901] mt-[4px] w-full' ref={searchDropdownRef}>
                                {filteredCities.length === 0 ? (
                                    <ul>
                                        <li>
                                            <div className='text-white px-[16px] py-2 border-b flex'>
                                                <MdSearchOff className='h-5 w-6 cursor-pointer' />
                                                No Found
                                            </div>
                                        </li>
                                    </ul>
                                ) : (
                                    <ul>
                                        {filteredCities?.map((serviceItem) => (
                                            <li key={serviceItem?._id} className='w-full '>
                                                <div
                                                    className='block text-white px-[16px] py-2 border-b hover:text-[#ffffff]'
                                                    onClick={() => handleSuggestionClick(serviceItem?.types?.replace(/\s+/g, "-").toLowerCase())}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    {serviceItem?.cityname}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Search;
