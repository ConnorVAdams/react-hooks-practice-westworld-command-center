import React from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import Headquarters from './Headquarters'
import WestworldMap from './WestworldMap'

function App() {
  return (
    <Segment id="app">
      <WestworldMap />
      <Headquarters />
    </Segment>
  );
}

export default App;
