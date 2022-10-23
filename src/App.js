import { useState } from "react";
import SearchInput from "./components/SearchInput";
import Button from "./components/Button";
import Card from "./components/Card";
import "./App.css";
import data from "./data";

function App() {
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getInput = (e) => {
    setInput(e.target.value);
  };
  const searchData = (e) => {
    e.preventDefault();
    input !== "" && setFilteredData(data.filter((e) => e.nama_lengkap.toLowerCase().includes(input.toLowerCase())));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aegis Member</h1>
        <p>Tugas Modul 2 RPLBK by Kelompok 11</p>
        <div className="Searchbar">
          <SearchInput type="text" border="red" background="#282c34" onChange={getInput} placeholder="Cari nama seseorang" />
          <Button type="submit" background="#282c34" border="blue 2px solid" onClick={searchData}>
            Search
          </Button>
        </div>
        <div id="result"></div>
        {filteredData.map((e) => {
          return <Card data={e} />;
        })}
      </header>
    </div>
  );
}

export default App;
