import React, { Component } from "react";
import Webamp from "webamp";
import winampSkin from "../assets/winamp-skin.wsz";
import llama from "../assets/johnny-cash.m4a";
import './winamp.css'

/* ESLint likes to complain about the marquee*/
/* eslint-disable jsx-a11y/no-distracting-elements */

class Winamp extends Component {
  componentDidMount() {
    // this.renderWinamp();
    const webamp = new Webamp({
      initialTracks: [
        {
          metaData: {
            artist: "DJ Mike Llama",
            title: "Llama Whippin' Intro"
          },
          url: llama,
          duration: 5.322286
        },
        {
          metaData: {
            artist: "DJ Mike Llama",
            title: "Llama Whippin' Intro"
          },
          url: llama,
          duration: 5.322286
        }
      ],
      availableSkins: [{ url: winampSkin, name: "Internet Archive" }]
    });
    // An example of handling the close button and giving a way to reopen WEebamp
    webamp.onClose(() => {
      const open = document.createElement("button");
      open.innerText = "Reopen";
      document.getElementById("app").appendChild(open);
      function handleClick() {
        webamp.reopen();
        open.remove();
        open.removeEventListener("click", handleClick);
      }
      open.addEventListener("click", handleClick);
    });

    webamp.onWillClose(cancel => {
      if (!window.confirm("Are you sure you want to close Webamp?")) {
        cancel();
      }
    });

    // An example of adding external ways to control Webamp's behavior.
    const buttonBindings = [
      // { id: "prev", cb: () => webamp.previousTrack() },
      { id: "play", cb: () => webamp.play() },
      // { id: "pause", cb: () => webamp.pause() },
      // { id: "stop", cb: () => webamp.stop() },
      // { id: "next", cb: () => webamp.nextTrack() }
    ];
    buttonBindings.forEach(({ id, cb }) => {
      document.getElementById(id).addEventListener("click", cb);
    });

    console.log(webamp.onTrackDidChange)
    // An example of shoing the currently playing track
    // webamp.onTrackDidChange(trackInfo => {
    //   console.log({ webamp });
    //   const { artist, title } = trackInfo.metaData;
    //   // Another option might be to set `document.title`;
    //   document.getElementById(
    //     "current-track"
    //   ).innerText = `Now playing: ${title} by ${artist}`;
    // });

    // Here we go! Let's show Webamp.
    webamp.renderWhenReady(document.getElementById("app"));
  }

  renderWinamp() {}

  buttonBindings() {
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

  bindTrackChange() {
    this.webamp.onTrackDidChange(trackInfo => {
      console.log({ trackInfo });
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
        <div id="app" class='winamp'></div>
        {/* <marquee id="current-track"></marquee> */}
        <div id="controls">
          <button hidden={true} id="prev">
            Previous
          </button>
          <button hidden={true} id="play">
            Play
          </button>
          <button hidden={true} id="pause">
            Pause
          </button>
          <button hidden={true} id="stop">
            Stop
          </button>
          <button hidden={true} id="next">
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Winamp;
