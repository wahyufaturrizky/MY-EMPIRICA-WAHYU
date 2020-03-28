import React from "react";

export default class TaskStimulus extends React.Component {
  render() {
    const { round, stage, player } = this.props;

    return (
      <div className="task-stimulus">
        <div className="task-question">
          <b>Please choose a random a number from 0 to 100 for the game.</b>
          <br/>
          <p>Make sure you guess the numbers approaching or even on target</p>
        </div>
      </div>
    );
  }
}
