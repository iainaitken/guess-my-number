<p align="center">
  <h3 align="center">Guess My Number</h3>

  <p align="center">
    A small JavaScript-only front-end number-guessing game.
    <br />
    <a href="https://github.com/iainaitken/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.iainaitken.io/guess-my-number">Play on GitHub Pages</a>
  </p>
</p>

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project

This project is part of the[Complete JavaScript](https://www.udemy.com/course/the-complete-javascript-course/) course on Udemy, by Jonas Schmedtman. See my learning notes [here](https://github.com/iainaitken/courses/blob/main/udemy/complete_javascript/notes/section-7/070-guess-my-number.md).

The HTML and CSS files for the webpage were provided; the challenge was to implement the game logic using JavaScript. The features to be included in the app were:

- A random number between 1 and 20 is generated.
- The user attempts to guess the number by entering a number in the box, and clicking 'Check!'.
- If the number is too high or low, a message to that effect appears, and the user's score decreases by one.
- If the correct number is entered, the score is saved as a highscore, the number appears in the central box and the background turns green.
- Clicking on the 'Again!' button resets the game, but not the highscore.

In addition, I decided to include:

- Input validation; a guess outside the range 1-20, or a blank input, generate error messages.
- Background colour changes on an incorrect guess.

### Approach

My approach was to watch a demonstration of the features of the app and then attempt to implement the game logic without watching the course videos.

### Built With

- JavaScript

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

The app runs in a browser; one option of running it is to use live-server.

- npm

  ```sh
  npm install npm@latest -g
  ```

- live-server

  ```sh
  npm install -g live-server
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/iainaitken/repo_name.git
   ```

2. Navigate to the project folder

   ```sh
   cd repo_name
   ```

3. Start the server running

   ```sh
   live-server
   ```

## Usage

See [About the Project](#about-the-project) for an explanation of the game features, and how to play.

## Roadmap

Planned future features:

- Option of switching to a modern theme
- Persistent high-scores in local storage, with initials and date

## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Project Link: [https://github.com/iainaitken/guess-my-number](https://github.com/iainaitken/guess-my-number)

## Acknowledgements

- [WebPlatform.org](https://webplatform.github.io/) for a [tutorial](https://webplatform.github.io/docs/tutorials/animation_in_javascript_2/) on animating background colour fades in JavaScript.
