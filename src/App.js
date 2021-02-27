import React, {useState} from "react";
import {data} from './data.js';
import logo from './logo.svg';
import Sorter from './Sorter.js'
import Card from './Card';

function App() {

  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  function onChange(e){
    e.preventDefault();
    setSort(e.target.value);
  }
  function handleTextChange(e){
    e.preventDefault();
    setSort("search");
    setFilter(e.target.value);
  }

  return (
    <div class="text-center" style={{textAlign: "-webkit-center"}}>
      <div class="font-sans text-3xl text-center text-yellow-600 w-full h-20">
        <p class="bounce-finite">ACNH Villager Search</p>
      </div>
        <form>
          <select class="m-4 rounded" onChange={onChange}>
            <option>High to Low</option>
            <option>Low to High</option>
            <option>Species (A-Z)</option>
          </select>
          <input type="text" placeholder="search" class="rounded m-4" onChange={handleTextChange}></input>
        </form>

        <Sorter sort={sort} filter={filter}/>

    </div>
  );
}

export default App;
