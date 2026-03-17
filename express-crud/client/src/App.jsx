import { useState } from "react";
import Cars from "./components/Cars";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setdata] = useState([]);
  const [refresh, setRefresh] = useState(0);
  
  const refreshData = () => setRefresh(prev => prev + 1);
  

    function SendToDb(){
        axios.post("http://localhost:8080/cardata", data)
        .then(()=>{
          console.log(`Data Sent Successfully...`);
          setRefresh(r => r + 1);
        })
        .catch((error)=>console.log(`There Was An Error While Sending...♾️${error}`));


        
    }


  function handdata(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  function handlesubmit(e) {
    e.preventDefault();
  }

  
  return (
    <>
      <div className="main-container h-screen w-150 bg-gray-950 flex-column box">
        <form onSubmit={(e) => handlesubmit(e)}>
          <h1
            className="text-red-500 text-5xl text-center mb-10 pt-5"
            style={{ fontFamily: "clash" }}
          >
            Car Details
          </h1>
          <label
            htmlFor="title"
            className="text-white text-3xl inline-block ml-6"
          >
            Car Brand
          </label>
          <br />
          <input
            type="text"
            placeholder="eg. BMW"
            name="carname"
            className="border border-gray-300 text-white h-12 w-120 rounded-xl p-2 inline-block mb-4 ml-5 placeholder:p-3"
            onChange={(e) => handdata(e)}
          />
          <br />
          <input
            type="text"
            placeholder="give image url"
            name="carimg"
            className="text-white"
            onChange={(e) => handdata(e)}
          />
          <button
            type="submit"
            className="bg-red-500 text-white h-13 w-120 rounded-xl p-2 inline-block mb-4 ml-5 font-bold hover:bg-red-400 text-3xl"

            onClick={()=>SendToDb()}
          >
            Give It
          </button>
        </form>
      </div>

      <Cars refreshData={refreshData} refresh={refresh} />

    </>
  );
}

export default App;
