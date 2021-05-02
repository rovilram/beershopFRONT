import React from 'react';
import { Link } from 'react-router-dom';
import './Beers.css';

const beerDetail = {
  beer: {
    id: 1,
    name: 'La Pirata & Laugar Brewery Blackadder',
    photo:
      'https://static2.soloartesanas.es/3215-large_default/la-pirata-laugar-brewery-blackadder.jpg',
    style: 'Imperial Porter',
    price: 3.52,
    valoration: 85,
    company: 'Laugar',
  },
  company: {
    name: 'Laugar',
    CIF: 'B95713780',
    address: 'Barrio Zubiete (pol Industrial Isasi), 42 Gordexola 48192 Bizkaia',
    phoneNumber: '747493516',
  },
};

const Beers = () => (
  <div className="Home_Wrapper">

    <h2 className="beerName">{beerDetail.beer.name}</h2>

    <section className="beerInfo">
      <img src={beerDetail.beer.photo} alt="" />
      <p className="beerStyle">
        {beerDetail.beer.style}
      </p>
      <p className="beerPrice">
        {beerDetail.beer.price }
        €
      </p>
      <p className="beerValoration">
        Valoración:
        {' '}
        {beerDetail.beer.valoration}
        /100
      </p>
    </section>

    <section className="companyInfo">
      <h2 className="companyName">
        Fabricante:
        {' '}
        {beerDetail.company.name}
      </h2>
      <p className="companyCIF">
        CIF:
        {' '}
        {beerDetail.company.CIF}
      </p>
      <p className="companyAddress">
        Dirección:
        {' '}
        {beerDetail.company.address}
      </p>
      <p className="companyPhone">
        Teléfono:
        {' '}
        {beerDetail.company.phoneNumber}
      </p>
    </section>

    <Link to="/shop">Regresa al listado de Cervezas</Link>

  </div>
);

export default Beers;
