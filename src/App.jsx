import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//quote ki api nhi mile toh quote ko joke bna diya : - )

function App() {

  const [quote, changequote] = useState("_")
  const [quotestatus, changestatus] = useState("Get New Joke!")
  

// fetch('https://api.quotable.io/random')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

//api key not wokring so demo data reciveved by the api key ! 



const getquote = async() =>{ 
  try {
    changestatus("Getting New Joke!");
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    console.log(data);
    changestatus("Get Next Joke!");
    changequote(data.value);
  }
  catch (error) {
    console.log(error);
    changequote("Sorry, could not load joke!")
  }
  finally {
    changestatus("Get Next Joke!")
  }
}

  return (
    <>
    <div className="maindiv bg-[url('./assets/bgb.webp')] h-[500px] w-[900px] rounded-3xl shadow-xl ">
    <div className="transition-all duration-800 ease-in-out blueerer h-full w-full  backdrop-blur-md p-10 rounded-3xl text-white bg-cover bg-center flex justify-center items-center text-lg font-mono font-bold ">
      <p1>{quote}</p1>
    </div>
    </div>
    <div className="getquote w-full bg-transparent flex h-[40px] mt-5 justify-center items-center">
      <button onClick={getquote} className=" hover:bg-gray-200 ease-in-out transition-all duration-300 mainn w-[40%] h-full bg-white  rounded-md flex justify-center items-center font-mono font-bold ">{quotestatus}</button>
    </div>
    </>
  )
}

export default App
