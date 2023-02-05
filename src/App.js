import './App.css';
import React, {useState} from 'react';
import head from './head';

function App() {
  // All my components are here outside of the functions
  const [journal, setJournal] = useState("");
  const [ent, setEnt] = useState([]);

  function submitEntry() {
    //If the user tries to enter something within the input
    // it won't allow them to enter nothing into the journal
    //entries.
    if (journal === " ") return

      //I created a object that will hold the order of the
      //journal entries.
    const entry = {
      id: 1,
      ent: journal
    };

    setEnt(oldentries => [...oldentries, entry]);
    setJournal('');
  }


  return (

    <div className="App">

      {/* <head /> */}
      <h1>Enter Journal entry here</h1>
      
      {/* This is the user input for the journal entry
      the type makes it so that it is read as text. The
      place holder is the faint text in the box. I wanted
      the box to be larger so I edited the style. */}
      <input 
      type="text" 
      placeholder='Entry...'
      style={{width: "500px"}}
      jour = {journal}
      onChange={j => setJournal(j.target.value)}/>
      
      {/* The click uses the onClick to call the function handleClick  */}
      <button onClick={() => submitEntry()}>Record Journal</button>
        {ent.map(entry => {
          return(
            <p key={entry.id}>{entry.ent}</p>
          )
          })}
    </div>
  );
}

export default App;
