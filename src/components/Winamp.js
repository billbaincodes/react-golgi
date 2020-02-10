import React, { Component } from "react";
import Webamp from "webamp";
import winampSkin from "../assets/winamp-skin.wsz";
import flecktones from '../assets/winamp/flecktones-off-the-top.mp3'
import './winamp.css'

/* ESLint likes to complain about the marquee*/
/* eslint-disable jsx-a11y/no-distracting-elements */

class Winamp extends Component {

  componentDidMount() {
    console.log('Thank you captbaritone for this sick Winamp clone: https://github.com/captbaritone/webamp/')
    const webamp = new Webamp({
      initialTracks: [
        {
          metaData: {
            artist: "Bela Fleck & the Flecktones",
            title: "Off the Top"
          },
          url: flecktones,
          duration: 5.322286
        }
      ],
      availableSkins: [{ url: winampSkin, name: "Internet Archive" }]
    });

    webamp.renderWhenReady(document.getElementById("app")).then(() => {
      let cb = this.props.windowToggles('winamp')
      document.getElementById('close').addEventListener('click', cb)
    });
  }

  render() {
    return (
      <div id='app'></div>
    );
  }
}

export default Winamp;
