const player_score = document.getElementById("player_score");
const computor_score = document.getElementById("computor_score");

const stone = document.getElementById("stone");
const paper = document.getElementById("paper");
const cisor = document.getElementById("cisor");

const main_player = document.getElementById("main_player");
const issue = document.getElementById("issue");
const main_computer = document.getElementById("main_computer");

const btn_replay = document.getElementById("btn-recommencer");

let playerScore = 0;
let computerScore = 0;

const game = (player_choose) => {
  computer_choose = Math.floor(Math.random() * 3);

  switch (computer_choose) {
    case 0:
      main_computer.innerText = "🧱";
      break;
    case 1:
      main_computer.innerText = "📃";
      break;
    case 2:
      main_computer.innerText = "✂";
      break;
  }

  switch (true) {
    case (player_choose == 0 && computer_choose == 0) ||
      (player_choose == 1 && computer_choose == 1) ||
      (player_choose == 2 && computer_choose == 2):
      issue.innerText = "Egalité !";
      break;
    case (player_choose == 0 && computer_choose == 1) ||
      (player_choose == 1 && computer_choose == 2) ||
      (player_choose == 2 && computer_choose == 0):
      issue.innerText = "Défaite !";
      computerScore++;
      break;
    case (player_choose == 0 && computer_choose == 2) ||
      (player_choose == 1 && computer_choose == 0) ||
      (player_choose == 2 && computer_choose == 1):
      issue.innerText = "Victoire !";
      playerScore++;
      break;
  }

  player_score.innerText = `Votre score : ${playerScore}`;
  computor_score.innerText = `Score de l'ordi : ${computerScore}`;
};

stone.onclick = () => {
  game(0);
  main_player.innerText = "🧱";
};

paper.onclick = () => {
  game(1);
  main_player.innerText = "📃";
};

cisor.onclick = () => {
  game(2);
  main_player.innerText = "✂";
};

btn_replay.onclick = () => {
  computerScore = 0;
  playerScore = 0;
  computor_score.innerText = `Score de l'ordi : ${computerScore}`;
  player_score.innerText = `Votre score : ${playerScore}`;
  main_player.innerText = "";
  issue.innerText = "";
  main_computer.innerText = "";
};