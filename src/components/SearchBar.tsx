import React, { useState } from "react";

interface Props {}

const SearchBar: React.FC<Props> = () => {
  const [searchTerm, setsearchTerm] = useState("");
  return <h1>This is a search bar</h1>;
};

export default SearchBar;
