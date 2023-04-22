
import "./featuredProperties.css";

const FeaturedProperties = () => {

  return (
    <div className="fp">
      <div className="fpItem">
     <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className="fpImg" />
     <span className="fpName"> Aparte Stare Miasto</span>
     <span className="fpCity">Madrid</span>
     <span className="fpPrice"> Starting from $120</span>
     <div className="fpRating">
      <button>8.9</button>
      <span>Excellent</span>
     </div>
    </div>

    <div className="fpItem">
     <img src="https://cf.bstatic.com/xdata/images/region/square250/68606.webp?k=4b43b9128b79beaab4ca2e8c038ddf5709b0b90608afbca222cfbe08fabda7d2&o=" alt="" className="fpImg" />
     <span className="fpName"> Wolinio Da Quo</span>
     <span className="fpCity">Alabama</span>
     <span className="fpPrice"> Starting from $120</span>
     <div className="fpRating">
      <button>7.9</button>
      <span>Excellent</span>
     </div>
    </div>

    <div className="fpItem">
     <img src="https://cf.bstatic.com/xdata/images/city/square250/684938.webp?k=9d07ff707ce59768769b5e9a5381a4c705d921209dafd8fd0e2f1a6acdf0c68a&o=" alt="" className="fpImg" />
     <span className="fpName"> Zilliqa Villa</span>
     <span className="fpCity">Spain</span>
     <span className="fpPrice"> Starting from $120</span>
     <div className="fpRating">
      <button>8.5</button>
      <span>Excellent</span>
     </div>
    </div>

    <div className="fpItem">
     <img src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018192.jpg?k=f6e8398d4cbb7ea834bb5f0b6b0a2ae285e87edfb51cd0e38e2f813c3015b4d0&o=" alt="" className="fpImg" />
     <span className="fpName"> Monliquo Minalino</span>
     <span className="fpCity">France</span>
     <span className="fpPrice"> Starting from $120</span>
     <div className="fpRating">
      <button>8.2</button>
      <span>Excellent</span>
     </div>
    </div>

    </div>

  );
};

export default FeaturedProperties;