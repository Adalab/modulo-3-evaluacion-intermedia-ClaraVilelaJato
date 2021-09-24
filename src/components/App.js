import '../styles/App.css';
import initialData from '../data/clubs.json';
import { useState } from 'react';

function App() {
  //datos iniciales json en el estado

  console.log(initialData);
  const htmlClubsList = initialData.map((oneClub, index) => (
    <li>
      Book club
      <p>Abierto entre semana: Si</p>
      <p>Abierto el fin de semana:Si</p>
    </li>
  ));

  return (
    <div>
      <header>
        <h1>Mis clubs</h1>
        <ul>{htmlClubsList}</ul>
      </header>
    </div>
  );
}

export default App;
