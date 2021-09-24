import '../styles/App.css';
import initialData from '../data/clubs.json';
import { useState } from 'react';

function App() {
  //datos iniciales json en el estado

  console.log(initialData);
  const htmlClubsList = initialData.map((oneClub, index) => (
    <li key={index}>
      <p>{oneClub.name}</p>
      <p>Abierto entre semana: {oneClub.openOnWeekdays ? 'Si' : 'No'}</p>
      <p>Abierto el fin de semana: {oneClub.openOnWeekend ? 'Si' : 'No'}</p>
    </li>
  ));

  return (
    <div>
      <header>
        <h1>Mis clubs</h1>
      </header>
      <main>
        <ul>{htmlClubsList}</ul>
      </main>
    </div>
  );
}

export default App;
