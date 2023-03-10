import { BLOCK_SIZE } from "../services/constant";
import { IPiece } from "./ipiece";

export class Piece implements IPiece {
    x!: number;
    y!: number;
    color!: string;
    shape!: number[][];
  
    constructor(private ctx: CanvasRenderingContext2D) {
      this.spawn();
    }
  
    spawn() {
      this.color = 'blue';
      this.shape = [[2, 0, 0], [2, 2, 2], [0, 0, 0]];
  
      // Position where the shape spawns.
      this.x = 3;
      this.y = 0;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row, y) => {

            row.forEach((value,  x) => {
                if(value > 0) {
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1 );
                }
            })

            this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

        })
    }
    

  }