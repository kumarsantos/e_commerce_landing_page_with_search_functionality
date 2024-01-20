import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
const Searchbox = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({});

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.keyCode == 13 || e.key === "Enter") {
      if (searchKey) {
        setSearchParams({ searchKey: searchKey });
      } else {
        searchParams.delete("searchKey");
        setSearchParams(searchParams);
      }
    }
  };

  return (
    <div className="m-2 border w-[80%] md:w-[50%] lg:w-[50%] flex items-center px-4 py-2 rounded-full">
      <input
        placeholder="Search here"
        type="seach"
        value={searchKey}
        onChange={handleChange}
        onKeyDown={handleSearchSubmit}
        className="border-none outline-none w-full"
      />
      <IoIosSearch className="text-blue-300 cursor-pointer text-[1.8rem] " />
    </div>
  );
};

export default Searchbox;
