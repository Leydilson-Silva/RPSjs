var playerOptions = document.querySelectorAll('.player-options div > img');
var enemyOptions = document.querySelectorAll('.enemy-options div > img');

var playerSelection = ""
var enemySelection = ""

var playerWinCount = 0;
var enemyWinCount = 0;

// get player selection
function resetOpacityPlayer() {
  for (var i = 0; i < playerOptions.length; i++) {
    playerOptions[i].style.opacity = 0.3;
  }
}
for (var i = 0; i < playerOptions.length; i++) {
  playerOptions[i].addEventListener('click', click => {
    resetOpacityPlayer();
    click.target.style.opacity = 1;

    playerSelection = click.target.getAttribute('selec');

    getMoveEnemy();
  })
}

// get enemy selection
function resetOpacityEnemy() {
  for (var i = 0; i < enemyOptions.length; i++) {
    enemyOptions[i].style.opacity = 0.3;
  }
}
function getMoveEnemy() {
  let rand = Math.floor(Math.random() * 3);

  resetOpacityEnemy();

  for (var i = 0; i < enemyOptions.length; i++) {
    if (i == rand) {
      enemyOptions[i].style.opacity = 1;
      enemySelection = enemyOptions[i].getAttribute('selec');
    }
  }

  winValidation();

}

// Win validation
function winValidation() {
  let winner = document.querySelector('.winner');

  // alert('Player: ' + playerSelection + ' enemy: ' + enemySelection);


  //PLAYER SELECTION ROCK
  if (playerSelection == 'rock') {
    if (enemySelection == 'scissor') {
      // player win
      winner.innerHTML = `🏆 Player win`
      return
    }
    else if (enemySelection == 'paper') {
      // enemy win
      winner.innerHTML = `😢 Enemy win`
      return
    }
    else {
      //empatou
      winner.innerHTML = `⚔️ Tied game`
      return
    }
  }
  //PLAYER SELECTION PAPER
  if (playerSelection == 'paper') {
    if (enemySelection == 'rock') {
      // player win
      winner.innerHTML = `🏆 Player win`
      return
    }
    else if (enemySelection == 'scissor') {
      // enemy win
      winner.innerHTML = `😢 Enemy win`
      return
    }
    else {
      //empatou
      winner.innerHTML = `⚔️ Tied game`
      return
    }
  }
  //PLAYER SELECTION SCISSOR
  if (playerSelection == 'scissor') {
    if (enemySelection == 'paper') {
      // player win
      winner.innerHTML = `🏆 Player win`
      return
    }
    else if (enemySelection == 'rock') {
      // enemy win
      winner.innerHTML = `😢 Enemy win`
      return
    }
    else {
      //empatou
      winner.innerHTML = `⚔️ Tied game`
      return
    }
  }


}