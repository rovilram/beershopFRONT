import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="Home_Wrapper">

    <h2>Bienvenido</h2>

    <p>

      En esta web podrás encontrar nuestro catálogo de cervezas.
      En breve podrás disponer de una tienda online desde la que hacer
      los pedidos de tus cervezas favoritas.

    </p>

    <Link to="/shop">Accede a la tienda</Link>

  </div>
);

export default Home;
