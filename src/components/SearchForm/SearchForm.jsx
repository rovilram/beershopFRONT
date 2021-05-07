import React from 'react';

import './SearchForm.css';


const SearchForm = (props) => {

const nameFilterHandler = (e) => {
  props.setName(e.target.value);
}

const companyFilterHandler = (e) => {
  props.setCompany(e.target.value);
}

return (
  <form className="searchForm">
    <label>
      Buscar por nombre:
          <input type="text" onChange={nameFilterHandler} />
    </label>
    <label>
      Buscar por fabricante:
          <input type="text" onChange={companyFilterHandler} />
    </label>
  </form>
)
};

export default SearchForm;
