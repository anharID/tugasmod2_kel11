import SearchInput from "./components/SearchInput";
import Button from "./components/Button";
import Card from "./components/Card";
import "./App.css";
import { useState } from "react";
import data from "./data";

function App() {
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getInput = (e) => {
    setInput(e.target.value);
  };
  const searchData = () => {
    input !== "" && setFilteredData(data.filter((e) => e.nama_lengkap.toLowerCase().includes(input.toLowerCase())));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aegis Member</h1>
        <p>Tugas Modul 2 RPLBK by Kelompok 11</p>
        <div className="Searchbar">
          <SearchInput border="red" background="#282c34" onChange={getInput} placeholder="Cari nama seseorang" required />
          <Button background="#282c34" border="blue 2px solid" onClick={searchData}>
            Cari
          </Button>
        </div>
        <div id="result"></div>
        {filteredData.map((e, index) => {
          return <Card data={e} key={index} />;
        })}
      </header>
    </div>
  );
}

export default App;
