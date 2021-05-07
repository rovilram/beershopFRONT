import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="Home_Wrapper">
    <h2>Bienvenido</h2>
    <div className="textWrapper">

      <p>
        Aau Abbey Abv Acid Acidic Additive Adjunct Aerobic, final balthazar pump
        malt degrees Balthazar chocolate reinheitsgebot, dextrin Ale conditioning
        trappist cider crystal. Kolsch saccharification aroma brewing conditioning
        dextrin Bottle pub Aerobic Balthazar bittering, yeast Berliner additive
        priming Becher beer back cold plato, krug grainy bunghole de sparge
        original chiller Alpha life.
      </p>
      <p>
        Craft filter Bung bung conditioned tank biere hoppy priming, conditioning
        noble lager glass barley enzymes bitterness, sour pitch ibu amber Aau
        abbey Barrel. Amber krausen ale autolysis microbrewery fermenting plato
        krug noble, pitch de berliner enzymes saccharification Bung dextrin
        racking brew, primary Additive lager carbonation balthazar Alcohol weisse.
        Plato yeast Acid Bottle primary Bacterial pitch rest Berliner brew dry
        Barley, barleywine gravity Additive barley fermenting mouthfeel mead
        Alcohol cask Beer, length shelf caramel secondary de hops wort racking wit
        filter.
        </p>

      <p>Hoppy chiller bunghole Bacterial Alpha sour mouthfeel draught,
      kettle infusion microbrewery All-malt grainy abbey stout conditioned,
      enzymes reinheitsgebot anaerobic Amber units primary. Craft Alpha hop
      lauter brewpub units priming Berliner Attenuation sour, Adjunct tun
      reinheitsgebot cask ibu bottom secondary dry, hoppy bock enzymes pitch
      original Back anaerobic extract.
      </p>
    </div>

    <div className="linkWrapper">
      <Link to="/shop">Accede a la tienda</Link>
    </div>
  </div>
);

export default Home;
