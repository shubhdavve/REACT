import "./Component.css";
import CarCard from "./CarCard"

export default function Cars({ refreshData, refresh }){

    return (
        <>
            <div className="cars-container bg-blue-200 h-screen w-330 flex flex-wrap gap-5">
                <CarCard refreshData={refreshData} refresh={refresh} /> 
            </div>
        
        </>
    );
}
