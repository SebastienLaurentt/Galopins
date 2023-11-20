import Club from "../sections/Club";
import Rejoindre from "../sections/Rejoindre";
import Home from "../sections/Home"
import Parcours from "../sections/Parcours";
import Photos from "../sections/Photos";


function MainPage() {
    return (
        <div>
            <Home/>
            <Club/>
            <Parcours/>
            <Photos />
            <Rejoindre/>
      </div>

        
    );
}

export default MainPage;