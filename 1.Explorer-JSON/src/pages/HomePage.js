/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-comment-textnodes */
import PromoAndExplore from '../components/PromoAndExplore';
import Destination from '../components/Destination';
import data from '../assets/data/places.json';


function HomePage() {
    return (
      <div>
        <PromoAndExplore />
        <Destination title={' Destinations'} description={'Just for you. Because you and your bike are special to us!'} places={{data}}/>
      </div>
    );
  }
  
  export default HomePage;