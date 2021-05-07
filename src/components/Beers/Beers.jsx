/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch/useFetch';

import './Beers.css';

const Beers = (props) => {
  const [stateDetail, fetchDetail] = useFetch();
  useEffect(() => {
    console.log(props.match);
    fetchDetail({
      url: `http://localhost:5000/detail/${props.match.params.id}`,
      method: 'GET',
    });
  // eslint-disable-next-line react/prop-types
  // eslint-disable-next-line react/destructuring-assignment
  }, [props.match.params.id]);
  const beerDetail = stateDetail.isSuccess ? stateDetail.data.response : {};
  return (
    <div className="Home_Wrapper">
      {beerDetail && <h2 className="beerName">{beerDetail.name}</h2>}

      {beerDetail
      && (
      <section className="beerInfo">
        <img src={beerDetail.photo} alt="" />
        <p className="beerStyle">{beerDetail.style}</p>
        <p className="beerPrice">
          {beerDetail.price}
          €
        </p>
        <p className="beerValoration">
          Valoración:
          {' '}
          {beerDetail.valoration}
          /100
        </p>
      </section>
      )}
      {beerDetail.Company
      && (
      <section className="companyInfo">
        <h2 className="companyName">
          Fabricante:
          {beerDetail.Company.name}
        </h2>
        <p className="companyCIF">
          CIF:
          {beerDetail.Company.CIF}
        </p>
        <p className="companyAddress">
          Dirección:
          {beerDetail.Company.address}
        </p>
      </section>
      )}

      <Link to="/shop">Regresa al listado de Cervezas</Link>
    </div>
  );
};

export default Beers;
