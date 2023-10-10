import { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import Headquarters from './Headquarters'
import WestworldMap from './WestworldMap'

function App() {
  const [hosts, setHosts] = useState([])
  const [activeHosts, setActiveHosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/hosts')
    .then(resp => resp.json())
    .then(data => setHosts(data))
  }, [])

  useEffect(() => {
    const newActiveHosts = hosts.filter(host => host.active)
    setActiveHosts(newActiveHosts)
  }, [hosts])
  
  const toggleActive = () => {
    setHosts(hosts => hosts)
  }

  console.log('rendered')

  return (
    <Segment id="app">
      <WestworldMap activeHosts={activeHosts}/>
      <Headquarters toggleActive={toggleActive} hosts={hosts}/>
    </Segment>
  );
}

export default App;
