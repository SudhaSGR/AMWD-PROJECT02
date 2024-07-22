import { Header } from "../Header/Header"
import './Result.css'
import { useLocation} from "react-router-dom";

export function Result(){
    const location = useLocation();
    const { result } = location.state
    return(
        <div>
            <Header />
            <div className="result-container">
                <h1> Result : {result} </h1>
                <h3> Thank you </h3>
            </div>
        </div>

    )
}