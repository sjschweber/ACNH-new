import React from 'react'
import {data} from './data.js';

export default function Sorter(props){
  let rank;
  switch(props.sort){
    case "High to Low":
    return (
      <div class="grid justify-center md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-3">
        {sortHightoLow(data).map(({name, personality, catchphrase, ranking, type, image}) => {


          return(
            <div class="w-52 h-auto bg-opacity-50 bg-yellow-100 shadow-xl rounded-lg m-4 hover:bg-opacity-75 transition duration-500 transform hover:-translate-y-1 hover:scale-110">

              <div class="h-auto w-full hover:shadow-inner pt-2">
                <img class="order-1 rounded-full w-24 h-22 border-gray-100 shadow-small" src={process.env.PUBLIC_URL + `${image}`}/>

              </div>
                <div class="h-auto flex-col pl-2 pt-2 pb-4">
                  <h3 class="text-xl">{name}</h3>
                  <p>Rank: {ranking}</p>
                  <p>Species: {type}</p>
                  <p>Personality: {personality}</p>
                </div>

            </div>
          )
        })}
      </div>
    )

    case "Low to High":
    return (
      <div class="grid justify-center md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-3">
        {sortLowtoHigh(data).map(({name, personality, catchphrase, ranking, type, image}) => {


          return(
            <div class="w-52 h-auto bg-opacity-50 bg-yellow-100 shadow-xl rounded-lg m-4 hover:bg-opacity-75 transition duration-500 transform hover:-translate-y-1 hover:scale-110">

              <div class="h-auto w-full  hover:shadow-inner pt-2">
                <img class="order-1 rounded-full w-24 h-22 border-gray-100 shadow-small" src={process.env.PUBLIC_URL + `${image}`}/>

              </div>
                <div class="h-auto flex-col pl-2 pt-2 pb-4">
                  <h3 class="text-xl">{name}</h3>
                  <p>Rank: {ranking}</p>
                  <p>Species: {type}</p>
                  <p>Personality: {personality}</p>
                </div>

            </div>
          )
        })}
      </div>
    )
    case "search":
    return (
      <div class="grid justify-center md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-3">
      {console.log(props.filter)}
        {data.filter((obj) => { return obj.name.toLowerCase().includes(props.filter.toLowerCase())}).map(({name, personality, catchphrase, ranking, type, image}) => {


          return(
            <div class="w-52 h-auto bg-opacity-50 bg-yellow-100 shadow-xl rounded-lg m-4 hover:bg-opacity-75 transition duration-500 transform hover:-translate-y-1 hover:scale-110">

              <div class="h-auto w-full hover:shadow-inner pt-2">
                <img class="order-1 rounded-full w-24 h-22 border-gray-100 shadow-small" src={process.env.PUBLIC_URL + `${image}`}/>

              </div>
                <div class="h-auto flex-col pl-2 pt-2 pb-4">
                  <h3 class="text-xl">{name}</h3>
                  <p>Rank: {ranking}</p>
                  <p>Species: {type}</p>
                  <p>Personality: {personality}</p>
                </div>

            </div>
          )
        })}
      </div>
    )
    default:
    return(
      <div class="grid justify-center md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-3">
        {sortByType(data).map(({name, personality, catchphrase, ranking, type, image}) => {

          return(
            <div class="w-52 h-auto bg-opacity-50 bg-yellow-100 shadow-xl rounded-lg m-4 hover:bg-opacity-75 transition duration-500 transform hover:-translate-y-1 hover:scale-110">

              <div class="h-auto w-full hover:shadow-inner pt-2">
                <img class="order-1 rounded-full w-24 h-22 border-gray-100 shadow-small" src={process.env.PUBLIC_URL + `${image}`}/>

              </div>
                <div class="h-auto flex-col pl-2 pt-2 pb-4">
                  <h3 class="text-xl">{name}</h3>
                  <p>Rank: {ranking}</p>
                  <p>Species: {type}</p>
                  <p>Personality: {personality}</p>
                </div>

            </div>
          )

        })}
    </div>
    )

  }

  function sortHightoLow(data){

    return data.sort((a, b) => {

      if(a.ranking > b.ranking){
          return 1;
      }
      if(a.ranking < b.ranking){
        return -1;
      }
      else{
        return 0;
      }
    })
  }
  function sortLowtoHigh(data){
    return data.sort((a, b) => {

      if(a.ranking < b.ranking){

          return 1;

      }
      if(a.ranking > b.ranking){

          return -1;


      }
      else{
        return 0;
      }
    })
  }
  function sortByType(data){
    return data.sort((a, b) => {

      if(a.type < b.type){
        return -1;
      }
      if(a.type > b.type){
        return 1;
      }else{
        return 0;
      }
    })
  }
}
