import React, { useState } from 'react';
import { withRouter, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState({ from: '', to: '', date: '' });

  const [isValidated, setIsValidated] = useState(false);
  const [showError, setError] = useState(false);
  const updateValue = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const searchForBuses = () => {
    setIsValidated(true);
    if (!search.from || !search.to || !search.date) {
      setError(true);
      console.log(search);
      return;
    }
    dispatch({ search, type: 'SEARCH_BUS' });
    navigate('availability');
  };

  return (
    <div>
        <h1 className='speedo'>𝒮𝓅ℯℯ𝒹ℴ</h1>
         <div className='data'>
            <form action="https://mail.google.com/mail/u/0/#inbox">
                <input  className='input'  type="text" placeholder='Username'
                name='login'/> <br />
                <input className='input' type="text" placeholder='Password'
                name='logout'/> <br />
                <div className='button'>
                <input className='submit' type="submit" /> <br />
                </div>
<a className='register' href="https://mail.google.com/mail/u/0/#inbox">Register here</a>
            </form>
        </div> 
        
        <div
      class="search-container"
      className={
        isValidated ? 'was-validated search-container' : 'search-container'
      }
    >
      <h2 className='head'>𝒮ℯ𝒶𝓇𝒸𝒽 ℬ𝓊𝓈ℯ𝓈</h2>
      {showError ? <p class="error-alert"> Please enter all values </p> : ''}
      <div class="form-group">

        <label className='from'>
          From:
          <input required type="text" name="from" onChange={updateValue} />
        </label>
      </div>

      <div class="form-group">
        <label className='from'>
          To:
          <input required type="text" name="to" onChange={updateValue} />
        </label>
      </div>

      <div class="form-group">
        <label className='from'>
          Date:
          <input required type="date" name="date" onChange={updateValue} />
        </label>
      </div>
      <button className='btn'
       onClick={searchForBuses}> Search </button>
    </div></div>
  );
};
