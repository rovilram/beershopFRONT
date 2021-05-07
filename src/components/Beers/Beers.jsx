/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch/useFetch';

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import './Beers.css';

const Beers = (props) => {
  const [stateDetail, fetchDetail] = useFetch();
  useEffect(() => {
    console.log(props.match);
    fetchDetail({
      url: `http://localhost:5000/detail/${props.match.params.id}`,
      method: 'GET',
    });
  }, [fetchDetail, props.match, props.match.params.id]);

  const beerDetail = stateDetail.isSuccess ? stateDetail.data.response : {};
  
  const useStyles = makeStyles({
    root: {
      maxWidth: "100%",
      maxHeight: 750,
    },
    media: {
      height: 300,
      width: 300
    }
  });

  const classes = useStyles();

  return (
    <div className="beer_wrapper">

      <Card className={classes.root}>
        <CardContent>
          { beerDetail && 
          <>
            <h2 className="beerName">{beerDetail.name}</h2>
            <div className="infoWrapper">
              <img src={beerDetail.photo} alt="" />
              <div className="textWrapper">
                <p className="beerStyle">
                  Estilo:
                  {' '}
                  {beerDetail.style}
                </p>
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
              </div>
            </div>
          </>
           }
        </CardContent>
      </Card>


      <Card className={classes.root}>
        <CardContent>
          {beerDetail.Company
      && (
      <>
        <h2 className="companyName">
          Fabricante:{" "}
          {beerDetail.Company.name}
        </h2>
        <div className="companyWrapper">
          <p className="companyCIF">
            CIF:{" "}
            {beerDetail.Company.CIF}
          </p>
          <p className="companyAddress">
            Dirección:{" "}
            {beerDetail.Company.address}
          </p>
        </div>
      </>
      )}
        </CardContent>
      </Card>

      <div className="linkWrapper">
        <Link to="/shop">Regresa al listado de Cervezas</Link>
      </div>
    </div>
  );
};

export default Beers;
