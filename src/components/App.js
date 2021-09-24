import '../styles/App.css';
import data from '../data/clubs.json';
import { useState } from 'react';

function App() {
  //datos iniciales json en el estado
  const [initialData, setInitialData] = useState(data);
  //datos nuevos introducidos por input
  const [newClubName, setNewClubName] = useState([]);
  const [week, setWeek] = useState(false);
  const [weekEnd, setWeekEnd] = useState(false);
  const [selectClub, setSelect] = useState('todos');

  const handleChangeWeek = (ev) => {
    // En la que guardamos no el valor del input sino su propiedad checked
    setWeek(ev.target.checked);
  };

  const handleChangeWeekEnd = (ev) => {
    // En la que guardamos no el valor del input sino su propiedad checked,
    setWeekEnd(ev.target.checked);
  };

  const handleChangeInput = (ev) => {
    ev.preventDefault();
    setNewClubName(ev.currentTarget.value);
  };

  const handleBtnClick = (ev) => {
    ev.preventDefault();

    const newClub = {
      name: newClubName,
      openOnWeekdays: week,
      openOnWeekend: weekEnd,
    };
    console.log(newClub);

    setInitialData([...initialData, newClub]);
  };

  const handleFilter = (ev) => {
    setSelect(ev.currentTarget.value);
  };

  const htmlClubsList = initialData

    .filter((oneClub) => {
      if (selectClub === 'week') {
        return oneClub.openOnWeekdays;
      } else if (selectClub === 'weekend') {
        return oneClub.openOnWeekend;
      } else {
        return oneClub;
      }
    })

    .map((oneClub, index) => (
      <li key={index} id={index} className='clubcard'>
        <p className='name'>{oneClub.name}</p>
        <p>Abierto entre semana: {oneClub.openOnWeekdays ? 'Si' : 'No'}</p>
        <p>Abierto el fin de semana: {oneClub.openOnWeekend ? 'Si' : 'No'}</p>
      </li>
    ));

  return (
    <div className='container'>
      <header className='header'>
        <h1 className='title'>Mis clubs</h1>

        <div>
          <label htmlFor='size'>Mostrar:</label>
          <select
            value={selectClub}
            name='filter'
            id='filter'
            onChange={handleFilter}
          >
            <option value='all'>Todos</option>
            <option value='week'>Los que abren entre semana</option>
            <option value='weekend'>Los que abren el fin de semana</option>
          </select>
        </div>
      </header>
      <main>
        <ul>{htmlClubsList}</ul>

        <form className='form'>
          <h2>Añadir un nuevo club</h2>
          <label>
            Nombre del club
            <input
              onChange={handleChangeInput}
              type='text'
              value={newClubName}
            />
          </label>
          <label>
            ¿Abre entre semana?{week === true ? 'Sí' : 'No'}
            <input onChange={handleChangeWeek} type='checkbox' name='week' />
          </label>
          <label>
            ¿Abre los fines semana?{weekEnd === true ? 'Sí' : 'No'}
            <input
              onChange={handleChangeWeekEnd}
              type='checkbox'
              name='weekend'
            />
          </label>
          <button onClick={handleBtnClick} className='button'>
            Añadir un nuevo club
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
