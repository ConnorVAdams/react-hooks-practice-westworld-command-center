import { useState } from "react";
import { Segment, Image } from "semantic-ui-react";
import * as Images from "../services/Images";
import HostInfo from './HostInfo'

function Details() {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.
  const [hostSelected, setHostSelected] = useState(false)

  return (
    <Segment id="details" className="HQComps">
      {!hostSelected ? <Image size="medium" src={Images.westworldLogo} /> : <HostInfo />}
    </Segment>
  );
}

export default Details;
