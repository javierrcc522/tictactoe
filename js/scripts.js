//Back-End
function Board () {
  this.row1 = [0, 0, 0]
  this.row2 = [0, 0, 0]
  this.row3 = [0, 0, 0]
  this.matrix = [this.row1, this.row2, this.row3]
};

function Player (player, mark) {
  this.player = player;
  this.mark = mark;
}

var board = new Board ();

var player1 = new Player ("Riki", "X");
var player2 = new Player ("Javi", "O");

var turnTracker = 2


//Front-End
$(document).ready(function() {
  //well [0][0]
  $('.well#1').click(function(event) {
    event.preventDefault();
    if (board.matrix[0][0] != 0) {
    } else if (turnTracker % 2 === 0) {
      board.matrix[0][0] = player1.mark
      $(".well#1 h3").text("X");
      turnTracker += 1;
    } else {
      board.matrix[0][0] = player2.mark
      $(".well#1 h3").text("O");
      turnTracker += 1;
    }
  });

  //well [0][1]
  $('.well#2').click(function(event) {
    if (board.matrix[0][1] != 0) {
    } else if (turnTracker % 2 === 0) {
      board.matrix[0][1] = player1.mark
      $(".well#2 h3").text("X");
      turnTracker += 1;
    } else {
      board.matrix[0][1] = player2.mark
      $(".well#2 h3").text("O");
      turnTracker += 1;
    }
  });

  //well [0][2]
  $('.well#3').click(function(event) {
    if (board.matrix[0][2] != 0) {
    } else if (turnTracker % 2 === 0) {
      board.matrix[0][2] = player1.mark
      $(".well#3 h3").text("X");
      turnTracker += 1;
    } else {
      board.matrix[0][2] = player2.mark
      $(".well#3 h3").text("O");
      turnTracker += 1;
    }
  });

  //well [1][0]
  $('.well#4').click(function(event) {
    if (board.matrix[1][0] != 0) {
    } else if (turnTracker % 2 === 0) {
      board.matrix[1][0] = player1.mark
      $(".well#4 h3").text("X");
      turnTracker += 1;
    } else {
      board.matrix[1][0] = player2.mark
      $(".well#4 h3").text("O");
      turnTracker += 1;
    }
  });

  //well [1][1]
  $('.well#5').click(function(event) {
    if (board.matrix[1][1] != 0) {
    } else if (turnTracker % 2 === 0) {
      board.matrix[1][1] = player1.mark
      $(".well#5 h3").text("X");
      turnTracker += 1;
    } else {
      board.matrix[1][1] = player2.mark
      $(".well#5 h3").text("O");
      turnTracker += 1;
    }
  });

  //well [1][2]
  $('.well#6').click(function(event) {
    if (board.matrix[1][2] != 0) {
    } else if (turnTracker % 2 === 0) {
      board.matrix[1][2] = player1.mark
      $(".well#6 h3").text("X");
      turnTracker += 1;
    } else {
      board.matrix[1][2] = player2.mark
      $(".well#6 h3").text("O");
      turnTracker += 1;
    }
  });

  //well [2][0]
  $('.well#7').click(function(event) {
    if (board.matrix[2][0] != 0) {
    } else if (turnTracker % 2 === 0) {
      board.matrix[2][0] = player1.mark
      $(".well#7 h3").text("X");
      turnTracker += 1;
    } else {
      board.matrix[2][0] = player2.mark
      $(".well#7 h3").text("O");
      turnTracker += 1;
    }
  });

  //well [2][1]
  $('.well#8').click(function(event) {
    if (board.matrix[2][1] != 0) {
    } else if (turnTracker % 2 === 0) {
      board.matrix[2][1] = player1.mark
      $(".well#8 h3").text("X");
      turnTracker += 1;
    } else {
      board.matrix[2][1] = player2.mark
      $(".well#8 h3").text("O");
      turnTracker += 1;
    }
  });

  //well [2][2]
  $('.well#9').click(function(event) {
    if (board.matrix[2][2] != 0) {
    } else if (turnTracker % 2 === 0) {
      board.matrix[2][2] = player1.mark
      $(".well#9 h3").text("X");
      turnTracker += 1;
    } else {
      board.matrix[2][2] = player2.mark
      $(".well#9 h3").text("O");
      turnTracker += 1;
    }
  });
});
