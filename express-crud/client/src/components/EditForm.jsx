import axios from "axios";
import { useState } from "react";

export default function EditForm({carid,carname = "", carimg = "", onClose, setLocalRefresh}){

    const [data,setdata]=useState({ carid, carname, carimg });
 
    function handledata(e){
        setdata({...data,[e.target.name]:e.target.value});
    }

    function SaveToDb(){
        axios.patch(`http://localhost:8080/updatecar/${carid}`,data)
        .then(() => {
            setLocalRefresh(prev => prev + 1);
        })
        .catch((error) => console.log(`There was an error while updating...${error}`));
    }

    function handleSubmit(e){
        e.preventDefault();
        if(onClose) onClose();
    }

    return(
        <>
            <div className="edit-form-container h-80 w-80 bg-black rounded-3xl mt-4 ml-4">
                <form onSubmit={handleSubmit}>
                    <input value={data.carname} type="text" placeholder="Give New Brand New" name="carname" className="border border-white p-3 rounded-xl text-red-500 inline-block" onChange={(e)=>handledata(e)}/>
                    <input value={data.carimg} type="text" placeholder="Give New Image URL" name="carimg" className="border border-white p-3 rounded-xl text-red-500 inline-block" onChange={(e)=>handledata(e)}/>
                    <br />
                    <button className="bg-white p-3 rounded-2xl font-bold mr-2" type="submit" onClick={()=>SaveToDb()}>Save</button>
                    <button type="button" className="bg-gray-500 p-3 rounded-2xl text-white" onClick={() => onClose && onClose()}>Cancel</button>

                </form>

            </div>
        </>
    );
}