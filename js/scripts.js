//Back-End
function Board () {
  this.row1 = [0, 1, 2]
  this.row2 = [0, 1, 2]
  this.row3 = [0, 1, 2]
  this.matrix = [this.row1, this.row2, this.row3]
};

function Player (player, mark) {
  this.player = player;
  this.mark = mark;
}

var board = new Board ();

var player1 = new Player ("Riki", "X");
var player2 = new Player ("Javi", "O");

function switch () {
  if (board.matrix === this.mark("X")) {

  }
}

//Front-End
$(document).ready(function() {

  //well [0][0]
  $('.well#1').click(function(event) {
    event.preventDefault();
    board.matrix[0][0] = player1.mark
    board.matrix[0][0] = player2.mark
    console.log(board);
  });

  //well [0][1]
  $('.well#2').click(function(event) {
    board.matrix[0][1] = player1.mark
  });

  //well [0][2]
  $('.well#3').click(function(event) {
  });

  //well [1][0]
  $('.well#4').click(function(event) {
  });

  //well [1][1]
  $('.well#5').click(function(event) {
  });

  //well [1][2]
  $('.well#6').click(function(event) {
  });

  //well [2][0]
  $('.well#7').click(function(event) {
  });

  //well [2][1]
  $('.well#8').click(function(event) {
  });

  //well [2][2]
  $('.well#9').click(function(event) {
  });
});
