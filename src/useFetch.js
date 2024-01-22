import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";


export default function DayList(){
       const days = useFetch("http://localhost:3001/days"); 

    return <ul className="list_day">
        {days.map((a)=>{
            return(
                <li key={a.id}>
                    <Link to={`/day/${a.day}`}>Day{a.day}</Link>
                </li>
            )
            
        })}
        
    </ul>
} 