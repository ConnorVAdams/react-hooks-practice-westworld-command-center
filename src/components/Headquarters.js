import { useState } from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import LogPanel from './LogPanel'
import ColdStorage from './ColdStorage'

function Headquarters({ hosts, toggleActive }) {
  const [hostSelected, setHostSelected] = useState(false)
  const [currentHost, setCurrentHost] = useState(null)

  const displayHost = (hostObj) => {
    setCurrentHost(hostObj)
    setHostSelected(true)
  }
  

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage hosts={hosts} onClick={displayHost}/>  
      </Grid.Column>
      <Grid.Column width={5}>
        <Details toggleActive={toggleActive} currentHost={currentHost} hostSelected={hostSelected}/>
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
