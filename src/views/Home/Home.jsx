import {useSearchParams} from 'react-router-dom';
import DiwaliLamp from "./diwali-lamp1.png";
import Lamp from "./lamp.png";
import "./Home.css"; 

const GREETINGS = [
"आठवण सूर्याची,साठवण स्नेहाची,कणभर दु:ख,मणभर प्रेम,फराळाचा गोडवा, ऋणानुबंध वाढवा,आली आली दिवाळी स्नेहहर्षाची… सर्वांना दिपावलीच्या हार्दिक शुभेच्छा…🌹🌹",
"दिन दिन दिवाळी, गाई म्हशी ओवाळी,इडा – पिडा जाऊ दे, बळीचं राज येऊ दे!दिवाळीच्या हार्दिक शुभेच्छा!",
"लक्ष लक्ष दिव्यांनी उजळुन निघो ही निशा घेऊनि येवो नवी उमेद नवी आशा,सोबत आमच्या लक्ष लक्ष शुभेच्छा!",
"धनाची पुजा यशाचा प्रकाश किर्तीचे अभ्यंगस्नान,मनाचे लक्ष्मीपुजन संबंधाचा फराळ समृध्दीचा पाडवाप्रेमाची भाऊबीज अशा या दिपावलीच्या आपल्या सहकुटुंब,सहपरिवरास सोनेरी शुभेच्छा!!!"
]

function Home (){
    const [searchParams] = useSearchParams();

    const to = searchParams.get("to");
    const from = searchParams.get("from");
    const greetingNumber = searchParams.get("g") >= GREETINGS.length ? 0 : searchParams.get("g") || 0;  
    const themeNumber = searchParams.get("t");            

    return(
        <div>
            <div className={`glowing-wishes-container ${`theme-${themeNumber}`}`}>
                <img src={DiwaliLamp} className='diwali-lamp left-lamp'/>
                <img src={DiwaliLamp} className='diwali-lamp right-lamp'/>
                <br/><br/><br/>
        {/* <h1>To {to} from {from}</h1> */}
        <span>Dear {to} 💐</span>
        {/* <p>
        "स्नेहाचा सुगंध दरवळला,आनंदाचा सण आला.विनंती आमची परमेश्वराला,सौख्य, समृध्दी लाभो तुम्हाला.दिवाळीच्या हार्दिक शुभेच्छा!"
        </p> */}
        <p>
            {GREETINGS[greetingNumber]}

        </p>
        <span className='form-text'>🙏आपली शुभेच्छुक {from}</span>
        <br/><br/><br/>
        <img src={Lamp} className='lamp'/>
     </div>
     <h1>{import.meta.env.VITE_BASE_URL}</h1>
        </div>
    )
}
export default Home