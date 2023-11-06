import {useSearchParams} from 'react-router-dom';
import "./Home.css";    
function Home (){
    const [searchParams] = useSearchParams();

    const to = searchParams.get("to");
    const from = searchParams.get("from");

    return(
     <div>
        <h1>To {to} from {from}</h1>
    </div>
    )
}
export default Home