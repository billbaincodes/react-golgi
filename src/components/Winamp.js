import React, { Component } from "react";
import Webamp from "webamp";
import winampSkin from "../assets/winamp-skin.wsz";
import llama from "../assets/johnny-cash.m4a";

/* ESLint likes to complain about the marquee*/
/* eslint-disable jsx-a11y/no-distracting-elements */

class Winamp extends Component {
  componentDidMount() {
    this.renderWinamp()
  }

  renderWinamp(){
    this.webamp = new Webamp({
      initialTracks: [
        {
          metaData: {
            artist: "DJ Mike Llama",
            title: "Llama Whippin' Intro"
          },
          url: llama,
          duration: 5.322286
        }
      ],
      availableSkins: [{ url: winampSkin, name: "Internet Archvie" }]
    });
    this.buttonBindings();
    this.bindTrackChange();
    this.bindClose();
    this.webamp.renderWhenReady(document.getElementById("app"));
  }

  buttonBindings(){
    const buttonBindings = [
      { id: "prev", cb: () => this.webamp.previousTrack() },
      { id: "play", cb: () => this.webamp.play() },
      { id: "pause", cb: () => this.webamp.pause() },
      { id: "stop", cb: () => this.webamp.stop() },
      { id: "next", cb: () => this.webamp.nextTrack() }
    ];
    buttonBindings.forEach(({ id, cb }) => {
      document.getElementById(id).addEventListener("click", cb);
    });
  }

  bindTrackChange(){
    this.webamp.onTrackDidChange(trackInfo => {
      const { artist, title } = trackInfo.metaData;
      // Another option might be to set `document.title`;
      document.getElementById(
        "current-track"
      ).innerText = `Now playing: ${title} by ${artist}`;
    });
  }

  bindClose() {
    this.webamp.onClose(() => {
      const open = document.createElement("button");
      open.innerText = "Reopen";
      document.getElementById("app").appendChild(open);
      function handleClick() {
        this.webamp.reopen();
        open.remove();
        open.removeEventListener("click", handleClick);
      }
      open.addEventListener("click", handleClick);
    });
  }

  render() {
    return (
      <div>
        <div id="app"></div>
        <marquee id="current-track"></marquee>
        <div id="controls">
          <button hidden={true} id="prev">Previous</button>
          <button hidden={true} id="play">Play</button>
          <button hidden={true} id="pause">Pause</button>
          <button hidden={true} id="stop">Stop</button>
          <button hidden={true} id="next">Next</button>
        </div>
      </div>
    );
  }
}

export default Winamp;
