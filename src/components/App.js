import { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import Headquarters from './Headquarters'
import WestworldMap from './WestworldMap'

function App() {
  const [hosts, setHosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/hosts')
    .then(resp => resp.json())
    .then(data => setHosts(data))
  }, [])

  return (
    <Segment id="app">
      <WestworldMap />
      <Headquarters hosts={hosts}/>
    </Segment>
  );
}

export default App;
