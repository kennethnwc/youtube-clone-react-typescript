import React, { useState, ChangeEvent, FormEvent } from "react";

import { Paper, TextField } from "@material-ui/core";

interface Props {
  onFormSubmit: (searchTerm: string) => void;
}

const SearchBar: React.FC<Props> = ({ onFormSubmit }) => {
  const [searchTerm, setsearchTerm] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onFormSubmit(searchTerm);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setsearchTerm(e.target.value);
  };

  console.log(searchTerm);

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="search..." onChange={handleChange} />
      </form>
    </Paper>
  );
};

export default SearchBar;
