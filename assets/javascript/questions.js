var questions = [];

class Qi {
    constructor(questionText, aKey, aHeader, aText, at1, at2, at3, at4, at5, at6, at7, at8) {
        this.questionText = questionText;
        this.aKey = aKey;
        this.aHeader = aHeader;
        this.aText = aText;
        this.at1 = at1;
        this.at2 = at2;
        this.at3 = at3;
        this.at4 = at4;
        this.at5 = at5;
        this.at6 = at6;
        this.at7 = at7;
        this.at8 = at8;
    }
}

function initItems() { // gets called once per new game 
    createItems();
}

function createItems() {
    questions.length = 0;
    var IObj = new Qi(
        "this is question 1 text?",
        1,
        "answer header",
        "answer text",
        "A1 (it's this one)", 
        "A2",
        "A3",
        "A4"
        );
    questions.push(IObj);

    var IObj = new Qi(
        "what is2?",
        2,
        "answer header22",
        "answer text22",
        "A122", 
        "A222 (it's this one)",
        "A322"
        );
    questions.push(IObj);


    var IObj = new Qi(
        "what is3?",
        2,
        "answer header3",
        "answer text3",
        "A3-1", 
        "A3-2 (it's this one)",
        "A3-3"
        );
    questions.push(IObj);

}



