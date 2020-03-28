import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square(props) {
  return (
    <button className="square" onClick={props.onClick} style={props.style}>
      {props.value}
    </button>
  )
}
  
class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        style={this.props.style[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const createBoard = () => {
      let board = [];
      let counter = 0;
      for(let i = 0; i < 3; i++) {
        let row = []
        for(let j = 0; j < 3; j++) {
          row.push(this.renderSquare(counter++))
        }
        board.push(<div className="board-row">{row}</div>);
      }
      return board;
    }
    return (
      <div>
        {createBoard()}
      </div>
    );
  }
}

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        moveLocation: {row: null, col: null}
      }],
      stepNumber: 0,
      xIsNext: true,
      desc: true
    };
  }

  handleClick(i) {
    const history = this.state.desc ?
      this.state.history.slice(0, this.state.stepNumber + 1) :
      this.state.history.slice(this.state.stepNumber)
    const current = this.state.desc ?
      history[history.length - 1] : history[0];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    let newEntry = {
      squares: squares,
      moveLocation: {row: Math.floor(i / 3) + 1, col: i % 3 + 1}
    }
    this.setState({
      history: this.state.desc ?
        history.concat([newEntry]) : [newEntry].concat(history),
      stepNumber: this.state.desc ?
        history.length : 0,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  sortMoves() {
    this.setState({
      history: this.state.history.reverse(),
      stepNumber: this.state.history.length - 1 - this.state.stepNumber,
      desc: !this.state.desc
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const moves = step.moveLocation.row !== null ?
      'Go to move #' + (this.state.desc ? move : history.length - 1 - move)
        + ' at row: '+ step.moveLocation.row + ', col: ' + step.moveLocation.col:
      'Go to game start';
      const fontStyle = {'fontWeight': this.state.stepNumber === move ? 'bold' : 'normal'};
      return (
        <li key={move}>
          <button
            onClick={() => this.jumpTo(move)}
            style={fontStyle}>
            {moves}
          </button>
        </li>
      )
    })
    let status;
    let squareStyling = new Array(9);
    let winnerStyle = {'background': 'yellow'}
    if (winner) {
      status = 'Winner: ' + current.squares[winner[0]];
      squareStyling[winner[0]] = squareStyling[winner[1]] = squareStyling[winner[2]] = winnerStyle;
      
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            style={squareStyling}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button onClick={() => this.sortMoves()}>Sort moves</button>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
  
// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c];
    }
  }
  return null;
}
