import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';

import axios, { AxiosResponse } from 'axios';
import { AppContext, TApartment, TOwner } from './context/AppContext';
import { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

  const { setApartments, setOwners } = useContext(AppContext);

  async function getApartments() {
    try {
      const response: AxiosResponse = await axios.get('http://localhost:5000/apartment/getAll');
      console.log(response);
      const apartmentArr: TApartment[] = response.data.apartments as TApartment[];
      setApartments(apartmentArr);
    }
    catch (err) {
      console.log(err);
    }
  }

  async function getOwners() {
    try {
      const response: AxiosResponse = await axios.get('http://localhost:5000/owner/getAll');
      console.log(response);
      const ownersArr: TOwner[] = response.data.owners as TOwner[];
      setOwners(ownersArr);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => { getApartments(); getOwners(); }, []);

  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
