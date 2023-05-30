/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./searchPanel.scss";
const SearchPanel = ({ value }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      value(inputValue);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [inputValue]);

  return (
    <div className="search">
      <input
        className="search_input"
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default SearchPanel;
