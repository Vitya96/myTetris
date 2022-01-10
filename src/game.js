export default class Game {
    score = 0;
    lines = 0;
    level = 0;
    playfield = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ];
   
    activePiece = {
        x: 0,
        y: 0,
        blocks: [
        [0,1,0],
        [1,1,1],
        [0,0,0]
        ]
    };

    movePieceleft(){
        this.activePiece.x -=1;

        if (this.isPieceOutOfBounds()) {
            this.activePiece.x +=1;
        }
    }
    movePieceright(){
        this.activePiece.x +=1;

        if (this.isPieceOutOfBounds()) {
            this.activePiece.x -=1;
        }
    }
    movePiecedown(){
        this.activePiece.y +=1;
        if (this.isPieceOutOfBounds()) {
            this.activePiece.y -=1;
            this.lockPiece();
        }
    }
    hasCollision() {//ця функия для того шоб не виходила фигура за поля
        const {y: pieceY, x: pieceX, blocks} = this.activePiece;

        for  (let y = 0; y < blocks.length; y++) {
            for (let x= 0; x < blocks[y].length; x++){
                if (
                    blocks[y][x] &&
                    ((this.playfield[pieceY + y] === undefined || this.playfield[pieceY + y][pieceX + x] === undefined) ||
                    this.playfield[pieceY + y] [pieceX + x])
                    ){
                    return true;
                }
                this.playfield[pieceY + y][pieceX + x] = blocks[y][x];
            }

        }

       for( let y=0; y < this.activePiece.blocks; y++) {
           const element =  array[y];
       }

        return false;
    }
    lockPiece() {
        const {y: pieceY, x: pieceX, blocks} = this.activePiece;
        for  (let y = 0; y < blocks.length; y++) {
            for (let x= 0; x < blocks[y].length; x++){
                if (blocks[y][x]) {
                    this.playfield[pieceY + y][pieceX+ x] = blocks[y][x];
                }
                
            }

        }
    }
}

