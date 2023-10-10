import { useState } from "react";
import { Segment, Image } from "semantic-ui-react";
import * as Images from "../services/Images";
import HostInfo from './HostInfo'

function Details({ currentHost, hostSelected }) {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.
  
  return (
    <Segment id="details" className="HQComps">
      {!hostSelected ? <Image size="medium" src={Images.westworldLogo} /> : <HostInfo {...currentHost}/>}
    </Segment>
  );
}

export default Details;
