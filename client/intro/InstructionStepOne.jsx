import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InstructionStepOne extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;

    return (
      <Centered>
        <div className="instructions">
          <h1> Let's Play Guessing Game </h1>
          <hr/>
          <h2> Instructions 1 : What's Guessing Game? </h2>
          <p>
            A <a href="https://en.wikipedia.org/wiki/Guessing_game" target="_blank">Guessing Game</a> is a game in which the object is to guess some 
            kind of information, such as a word, a phrase, a title, or the location of an object.
          </p>
          <div align="center">
            <img src="/instructions/img_empirica01.jpg" height="400px" />
          </div>
          <h2> Instructions 2 : How to Play the Game? </h2>
          <p>
            You must guess a number between <b>0 and 100</b>. Each round, you make a guess, and
            you will be told if your guess was above the number to guess, below the number
            to guess, or correct.
          </p>
          <p>
            Choose a random a number from 0 to 100 for the game. Do not show
            it to the player.
          </p>
          <h2> Instructions 3 : Round and Stage </h2>
          <p>
            The game should have <b>10 rounds</b>, each <b>lasting 30s</b>. Each round, the player should
            input a <b>guess for the number</b>. After they submit their guess, tell the player if
            their guess was:
          </p>
          <ul type="disc">
            <li>Below the number to guess</li>
            <li>Above the number to guess</li>
            <li>Correct</li>
          </ul>
          <h2> Instructions 4 : Example Case </h2>
          <p>The secret number is <b>37</b>.</p>
          <ul type="square">
            <li>Round 1: the player guesses 85, the game says: "<b>Above</b> the number to guess"</li>
            <li>Round 2: the player guesses 12, the game says: "<b>Below</b> the number to guess"</li>
            <li>Round 2: the player guesses 55, the game says: "<b>Above</b> the number to guess"</li>
            <li>...</li>
            <li>Round X: the player guesses 37, the game says: "<b>Correct!</b>" and you move the</li>
          </ul>
          <hr/>
          <h3>Show what you waiting for? <b>Let's Play and Click Button NEXT below</b></h3>
          <p>
            <button type="button" onClick={onPrev} disabled={!hasPrev}>
              Previous
            </button>
            <button type="button" onClick={onNext} disabled={!hasNext}>
              Next
            </button>
          </p>
        </div>
      </Centered>
    );
  }
}
