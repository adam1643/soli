  class Talia {

    constructor() {
        this.cards = new Array();
        for(var i = 0; i < 52; i++) {
            let src = "png/" + (i+1) + ".png";
            let c = new Card(i%13+1,floor(i/13),70*(i%10),floor(i/10)*100, src);

            this.cards.push(c);
        }
        console.log(this.cards);

        this.cards = shuffle(this.cards);
        console.log(this.cards);

        this.highlighted = 0;
        this.clickedCard = -1;
        this.secondClickedCard = -1;

        this.animateWrong = 0;
    }

    draw() {
        for(var  i = 0; i < 52; i++) {
            this.cards[i].draw();
        }
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    rozmiesc() {

        var row1 = [];
        var row2 = [];
        var row3 = [];

        for(var i = 0; i < 10; i++) {
            row1.push(i);
            row2.push(i+10);
            row3.push(i+20);

        }

        for(var i = 0; i < 3; i++) {

            this.cards[10*i + 0].setPosition(150+250*i-30, 50);
            this.cards[10*i + 1].setPosition(120+250*i-30, 80);
            this.cards[10*i + 2].setPosition(180+250*i-30, 80);
            this.cards[10*i + 3].setPosition(90+250*i-30, 110);
            this.cards[10*i + 4].setPosition(150+250*i-30, 110);
            this.cards[10*i + 5].setPosition(210+250*i-30, 110);
            this.cards[10*i + 6].setPosition(60+250*i-30, 140);
            this.cards[10*i + 7].setPosition(120+250*i-30, 140);
            this.cards[10*i + 8].setPosition(180+250*i-30, 140);
            this.cards[10*i + 9].setPosition(240+250*i-30, 140);

        }

        for(var i = 0; i < 6; i++) {
            this.cards[i].active = 0;
            this.cards[i+10].active = 0;
            this.cards[i+20].active = 0;

        }

        for(var i = 30; i < 52; i++) {
            this.cards[i].x = 360;
            this.cards[i].y = 500;
            this.cards[i].visible = 1;
            this.cards[i].active = 0;
            this.cards[i].backed = 1;
        }

        this.cards[30].x = 440;
        this.cards[30].active = 1;

        this.cards[31].next = 1;
        this.cards[31].active = 1;
        this.cards[30].backed = 0;


    }

    isClicked() {
        for(var i = 0; i < 52; i++) {
            if(t.cards[i].isWithin(mouseX, mouseY)) {

                if(this.cards[i].next == 1) {
                    t.cards[i].next = 0;
                    if(this.cards[i-1].x == 440) {t.cards[i-1].active = 0;}

                    t.cards[i].x = 440;
                    t.cards[i].backed = 0;
                        if(i < 51) {t.cards[i+1].next = 1;
                    t.cards[i+1].active = 1;
                }
                    if(this.highlighted == 1) {
                        this.clickedCard.highlighted = 0;
                        this.clickedCard = -1;
                        this.highlighted = 0;
                    }
                    break;
                }
                else if(this.highlighted == 0) {
                    if(t.cards[i].num == 13) {
                        t.cards[i].remove();
                    } else {
                        t.cards[i].clicked();
                        this.highlighted = 1;
                        this.clickedCard = t.cards[i];
                    }
                } else {
                    if(t.cards[i] == this.clickedCard) {
                        this.clickedCard = -1;
                        this.highlighted = 0;
                        t.cards[i].clicked();
                    }
                    else if(t.cards[i].num + this.clickedCard.num == 13) {
                        this.clickedCard.remove();
                        t.cards[i].remove();
                        this.highlighted = 0;
                        this.clickedCard.clicked();
                    } else {
                        this.secondClickedCard = t.cards[i];
                        indicateRed();
                    }
                    //this.highlighted = 0;
                }
            }
        }
    }


}
