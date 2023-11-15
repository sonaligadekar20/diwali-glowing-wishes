import {useSearchParams} from 'react-router-dom';
import DiwaliLamp from "./diwali-lamp1.png";
import Lamp from "./lamp.png";
import "./Home.css"; 
import { useState } from 'react';

const GREETINGS = [
"आठवण सूर्याची,साठवण स्नेहाची,कणभर दु:ख,मणभर प्रेम,फराळाचा गोडवा, ऋणानुबंध वाढवा,आली आली दिवाळी स्नेहहर्षाची… सर्वांना दिपावलीच्या हार्दिक शुभेच्छा…🌹🌹",
"दिन दिन दिवाळी, गाई म्हशी ओवाळी,इडा – पिडा जाऊ दे, बळीचं राज येऊ दे!दिवाळीच्या हार्दिक शुभेच्छा!",
"लक्ष लक्ष दिव्यांनी उजळुन निघो ही निशा घेऊनि येवो नवी उमेद नवी आशा,सोबत आमच्या लक्ष लक्ष शुभेच्छा!",
"धनाची पुजा यशाचा प्रकाश किर्तीचे अभ्यंगस्नान,मनाचे लक्ष्मीपुजन संबंधाचा फराळ समृध्दीचा पाडवाप्रेमाची भाऊबीज अशा या दिपावलीच्या आपल्या सहकुटुंब,सहपरिवरास सोनेरी शुभेच्छा!!!"
]

function Home (){
    const [searchParams] = useSearchParams();

    const [to, setTo] =useState(searchParams.get("to"));
    const [from, setFrom] = useState(searchParams.get("from"));
    const [greetingNumber, setGreetingNumber] =useState(searchParams.get("g") >= GREETINGS.length ? 0 : searchParams.get("g") || 0);
    const [themeNumber, setThemeNumber] = useState(searchParams.get("t"))      

    return(
        <div>
            <div className={`glowing-wishes-container ${`theme-${themeNumber}`}`}>
               <h2 className='glowing-wishes'>🎆..HAPPY DIWALI..🪔</h2>
                <img src={DiwaliLamp} className='diwali-lamp left-lamp'/>
                <img src={DiwaliLamp} className='diwali-lamp right-lamp'/>
                <br/><br/><br/>
   
        <span className='to-text'>Dear {to} 💐</span>
      
        <p>
            {GREETINGS[greetingNumber]}

        </p>
        <span className='form-text'>From - 🙏 {from}</span>
        <br/><br/><br/>
        <img src={Lamp} className='lamp'/>
     </div>

     <p className='create-your-own'>Do you want to create your own Diwali Greeting? Customise it here👇</p>

     <p className='url'>{import.meta.env.VITE_BASE_URL}?to={to}&from={from}&g={greetingNumber}&t={themeNumber}</p>
     
     <div className='input-container'>
     <input type="text" placeholder='To'
     className='input'
     value={to}
     onChange={(e) =>{
        setTo(e.target.value)
     }}/>

     <input type="text" placeholder='From'
className='input'
     value={from}
     onChange={(e) =>{
        setFrom(e.target.value)
     }}/>

     <select value={greetingNumber} 
     className='input'
     onChange={(e)=>{
        setGreetingNumber(e.target.value)
     }}>
        <option value="0">Greeting 1</option>
        <option value="1">Greeting 2</option>
        <option value="2">Greeting 3</option>
        <option value="3">Greeting 4</option>
       </select>

       <select value={themeNumber} 
       className='input'
       onChange={(e)=>{
        setThemeNumber(e.target.value)
     }}>
        <option value="0">None</option>
        <option value="1">Theme 1</option>
        <option value="2">Theme 2</option>
        <option value="3">Theme 3</option>
        <option value="4">Theme 4</option>
        <option value="5">Theme 5</option>
       </select>

     </div>


        </div>   
    )
}
export default Home