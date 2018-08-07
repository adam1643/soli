class Card {
    constructor(num, col, x, y, imgSrc) {
        this.num = num;
        this.col = col;
        this.x = x;
        this.y = y;

        this.width = 50;
        this.height = 75;

        this.active = 1;
        this.visible = 1;
        this.backed = 0;
        this.highlighted = 0;
        this.redded = 0;


        this.next = 0;
        this.imgSrc = imgSrc;
        this.img = loadImage(this.imgSrc);
    }

    draw() {

        if(!this.visible) {

        } else if(this.backed == 1) {
            image(backImage, this.x+1,this.y+1,this.width-2,this.height - 2);
        }
        else {

            // let color_text = "";
            // //console.log(this.col);
            // if(this.col == 0) {
            //     color_text = "Pi";
            // }
            // else if(this.col == 1) {
            //     color_text = "Te";
            // }
            // else if(this.col == 2) {
            //     color_text = "Ka";
            // }
            // else if(this.col == 3) {
            //     color_text = "Ki";
            // }

            // let number_text = this.num;
            //
            // if(this.num == 1) number_text = "A";
            // else if(this.num == 11) number_text = "J";
            // else if(this.num == 12) number_text = "D";
            // else if(this.num == 13) number_text = "K";

            stroke(2);

            if(this.redded == 1) {
                fill(255,0,0);
            }
            else if(this.highlighted == 1) {
                fill(0,255,255);
            }
            else  {
                fill(255);
            }
            rect(this.x,this.y,this.width,this.height);
            fill(255,0,255);
          //  textSize(17);
          //  let s = number_text + " " + color_text;
            //text(s,this.x+10, this.y+30);
            image(this.img,this.x+1,this.y+1,this.width-2,this.height-2);
            //console.log(this.num);
        }
    }

    isWithin(x, y) {
        if(!this.active) return 0;

        if(x > this.x && x < this.x + this.width) {
            if(y > this.y && y < this.y + this.height) {
                return 1;
            }
        }
        return 0;
    }

    setPosition(x,y) {
        this.x = x;
        this.y = y;
    }

    clicked() {

        if(this.highlighted == 1) {this.highlighted = 0}
        else {this.highlighted =  1;}
    }

    remove() {
        this.visible = 0;
    }


}
