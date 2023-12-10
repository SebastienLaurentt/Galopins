import Club from "../sections/Club";
import Rejoindre from "../sections/Rejoindre";
import Home from "../sections/Home"
import Parcours from "../sections/Parcours";
import Photos from "../sections/Photos";
import News from "./News";


function MainPage() {
    return (
        <div>
            <Home/>
            <News />
            <Parcours/>
            <Club/>
            <Photos />
            <Rejoindre/>
      </div>

        
    );
}

export default MainPage;