import React from "react";
import { Card } from "semantic-ui-react";
import Host from './Host'

function HostList({ hosts }) {
  const hostIcons = hosts.map(host => {
    return <Host key={host.id} {...host} />
  })
  return (
    <Card.Group itemsPerRow={6}>{hostIcons}</Card.Group>
  );
}

export default HostList;
