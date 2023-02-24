import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Piece } from 'src/app/interfaces/piece';
import { BoardService } from 'src/app/services/board.service';
import { COLS, BLOCK_SIZE, ROWS } from '../../services/constant';

@Component({
  selector: 'game-board',
  templateUrl: 'board.component.html'
})
export class BoardComponent implements OnInit {
  // Get reference to the canvas.
  @ViewChild('board', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;

  ctx!: CanvasRenderingContext2D | null;
  points?: number;
  lines?: number;
  level?: number;
  board: any;
  piece!: Piece;

  constructor(
    private boardService : BoardService,
  )
   { }
  ngOnInit() {
    this.initBoard();
  }

  initBoard() {
    // Get the 2D context that we draw on.
    this.ctx = this.canvas.nativeElement.getContext('2d');

    // Calculate size of canvas from constants.
    this.ctx!.canvas.width = COLS * BLOCK_SIZE;
    this.ctx!.canvas.height = ROWS * BLOCK_SIZE;
  }

  play() {
    this.board = this.boardService.getEmptyBoard();
   console.table(this.board);
    if(this.ctx) {
      this.piece = new Piece(this.ctx);
    }
    this.piece.draw();
  }

}