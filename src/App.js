import './App.css';
import { useState } from 'react';
const App = () => {

  const [name, setName] = useState("");
  const [names, setNames] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const getName = async () => {
      const response = await fetch(`https://api.agify.io/?name=${name}`);
      const data = await response.json();
      setNames(data);
      //console.log(data);
    }

    getName();
  }

  return (
    <div className="App">
      <section>
        <h1>Predict the age by using your name</h1>

        <form onSubmit={handleSubmit}>
        <article>
        <label htmlFor='name'>Search a Name</label>
        <input type='text' name='name' id='name' placeholder='Search for a Name'

          value={name}
          onChange={(e) => setName(e.target.value)}

        />
        </article>
        <button onClick={handleSubmit} type='submit'>Click Here</button>
      </form>

      {names ?       <div>
        <ul>
          <li>You Searched For {names.name}</li>
          <li>You are {names.age} years old</li>
          
        </ul>
      </div> :  <label htmlFor='name'></label>}

      </section>

    </div>
  );
}

export default App;
