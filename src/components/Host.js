import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host, onClick }) {
  /* NOTE: The className "host selected" renders a different style than simply "host". */
  
  const handleClick = () => {
    onClick(host)
  }

  return (
    <Card
      id={host.id}
      className="host selected"
      onClick={handleClick}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
