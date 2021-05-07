import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Shop.css';
import { DataGrid } from '@material-ui/data-grid';
import useFetch from '../../hooks/useFetch/useFetch';

import SearchForm from '../SearchForm/SearchForm'

const Shop = () => {

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  const history = useHistory();
  const [stateBeers, fetchBeers] = useFetch();

  useEffect(() => {
    fetchBeers({
      url: 'http://localhost:5000/products/1',
      method: 'GET',
    });
  }, [fetchBeers]);

  const columns = [
/*     { field: 'id', headerName: 'ID', width: 70 },
 */ 
    { field: 'name', headerName: 'Nombre', width: 350 },
    {
      field: 'style',
      headerName: 'Style',
      width: 200,
    },
    {
      field: 'price',
      headerName: 'Precio',
      type: 'number',
      width: 100,
    },
    {
      field: 'valoration',
      headerName: 'Valoración',
      type: 'number',
      width: 150,
    },
    {
      field: 'Company.name',
      headerName: 'Compañia',
      width: 200,
    },
  ];
  const beers = stateBeers.isSuccess ? stateBeers.data.response : [];
  const rows = stateBeers.isSuccess && beers
    ? 
      beers.filter((el) =>
            el.name.toLowerCase().includes(name) 
      ).filter((el)=>el["Company.name"].toLowerCase().includes(company))
    :
    [];
  // const rows = [];

  const clickHandler = (e) => {
    history.push(`/beers/${e.row.id}`);
  };

  return (
    <div className="Shop_Wrapper">
      <h2>Nuestras cervezas</h2>

      <SearchForm setName={setName} setCompany={setCompany} />

      {stateBeers.isSuccess && (
        <div className="tableWrapper">
          <DataGrid
            onRowClick={(e) => {
              clickHandler(e);
            }}
            rows={rows}
            columns={columns}
            pageSize={10}
            autoHeight	
          />
        </div>
      )}
    </div>
  );
};

export default Shop;
