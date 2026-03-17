import axios from "axios";
import { useEffect, useState } from "react";
import EditForm from "./EditForm";

export default function CarCard({ refreshData, refresh }){

    const [data,setdata] = useState([]);
    const [editingId,setEditingId]=useState(null);
    const [localRefresh, setLocalRefresh] = useState(0);
    useEffect(()=>{     
        axios.get("http://localhost:8080/cars")
        .then((response)=>setdata(response.data))
        .catch((error)=>console.log(`there was an error while fetching..${error}`));
    },[localRefresh, refresh]);

    
    function DeleteCard(id){
        axios.delete(`http://localhost:8080/deletecar/${id}`)
        .then(()=>{
            setdata(prev => prev ? prev.filter(item => item._id !== id) : []);
            console.log(`Car Has Been Successfully Deleted...`);
        })
        .catch((error)=>console.log(`There Was An Error While Deleting...${error}`));
    }

    
    
    return (
        <>
            {data?.map((element)=>{
                return (
                    <div key={element._id} className="car-card h-100 w-80 bg-black rounded-3xl mt-5 ml-5">
                        
                        <div className="car-img h-60 w-80 rounded-tl-3xl rounded-tr-3xl">
                            <img src={element.carimg} className="h-60 w-80  rounded-tl-3xl rounded-tr-3xl"/>
                        </div>
                        <h1 className="text-white text-3xl ml-3 mt-5">Brand-{element.carname}</h1>
                        <button className="text-2xl text-zinc-950 bg-emerald-500 rounded-xl p-2 font-bold hover:bg-white mt-3 ml-5" onClick={()=>DeleteCard(element._id)}>Delete</button>
                        <button className="text-2xl text-zinc-950 bg-emerald-500 rounded-xl p-2 pr-6 font-bold hover:bg-white mt-3 ml-5" onClick={()=>{setEditingId(prev => prev === element._id ? null : element._id);}}>Edit</button>
                        {editingId === element._id && (
                            <EditForm carid={element._id} carname={element.carname} carimg={element.carimg} onClose={() => setEditingId(null)} setLocalRefresh={setLocalRefresh}/>
                        )}
                    </div>
                );
            })}
        </>
    );

}