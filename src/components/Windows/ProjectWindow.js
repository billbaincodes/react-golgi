import React from 'react'

const ProjectWindow = ({ projectWindow }) => {

  let state = {
    flo: false,
    joh: false,
    tpg: false
  }

  let tabController = (choice) => {
    if (choice === "flo") {
      state.flo = true
      state.joh = false
      state.tpg = false
    } else if (choice === "joh") {
      state.flo = false
      state.joh = true
      state.tpg = false
    }
    else
    {
      state.flo = false
      state.joh = false
      state.tpg = true
    } 
  }


  return(
    <div class="window-container">
      <div class="window">
        <div class="window-title">
          <div>My Projects</div>
          <div class="close-button" onClick={() => projectWindow(false)}>
            X
          </div>
        </div>
        <div class="window-body">
          <h3 className="window-headline">About Me</h3>

          <div className="project-menu">
            <div className="project-header">
              <div onClick={tabController("flo")} className={state.flo ? "project active" : "project"}>Coffee</div>
              <div onClick={() => tabController("joh")} className={state.joh ? "project active" : "project"}>Candy</div>
              <div className="project">Beans</div>
            </div>
            <div className="project-body">
              <p>aslkdjfawiefjaskd   l;aksdjf;laskdjfa;wleijf a;sldkfjas;ldkfj as;ldfjas;ldkfj aweiofj asd;klfjaw e;goijasd;lkfja;lekfja</p>
            </div>

          </div>



          <div className="window-buttons">
            <div onClick={() => projectWindow(false)}>OK</div>
            <div onClick={() => projectWindow(false)}>Cancel</div>
            <div>Help</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectWindow