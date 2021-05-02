import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Shop.css';
import { DataGrid } from '@material-ui/data-grid';
import useFetchBeers from '../../hooks/useFetch/useFetchBeers';

const Shop = () => {
  const [beers, setBeers] = useState('');
  const history = useHistory();

  const [beersState, fetchBeers] = useFetchBeers();

  useEffect(() => {
    fetchBeers()
      .then((data) => setBeers(data));
  }, [fetchBeers]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nombre', width: 250 },
    { field: 'photo', headerName: 'FOTO', width: 130 },
    {
      field: 'style',
      headerName: 'Style',
      width: 250,
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
      field: 'company',
      headerName: 'Compañia',
      width: 125,
    },
  ];
  const rows = beersState.isSuccess && beers
    ? beers.filter((el) => el.name.toLowerCase().includes(''))
    : [];
  // const rows = [];

  const clickHandler = (e) => {
    history.push(`/beers/${e.row.id}`);
  };

  return (
    <div className="Shop_Wrapper">

      <h2>Nuestras cervezas</h2>

      {beersState.isLoading && <div>IS LOADING!!!</div>}

      {beersState.isSuccess
      && (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          onRowClick={
          (e) => {
            clickHandler(e);
          }
        }
          rows={rows}
          columns={columns}
          pageSize={10}
        />
      </div>
      )}

      {/* <Search /> */}

    </div>
  );
};

export default Shop;
