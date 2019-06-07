var questions = [];

class Qi {
    constructor(questionText, aKey, aHeader, aText, timeToAnswer, timeToLearn, at1, at2, at3, at4, at5, at6, at7, at8) {
        this.questionText = questionText;
        this.aKey = aKey;
        this.aHeader = aHeader;
        this.aText = aText;
        this.timeToAnswer = timeToAnswer;
        this.timeToLearn = timeToLearn;
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
    questions.length = 0;
    var IObj = new Qi( // use the above constructor for a guide to creating questions.
        "What does Bilbo name his sword?",
        3,
        "Sting",
        "Sting is an ancient Elvish blade made by weapon-smiths in Gondolin. When Orcs or goblins are within an undetermined radius, the blade glows blue, alerting Bilbo to their presence.",
        20,
        25,
        "Gash",
        "Pointy",
        "Sting",
        "Goblin Bane"
    );
    questions.push(IObj);

    var IObj = new Qi(
        "Hobbits have strange calendars How many days are in all the months in a Hobbit Calendar?",
        2,
        "30",
        "The Hobbits have special days which do not sit in any month - Yule 1 (New Year’s Eve) and Yule 2 (New Year’s Day) and Midsummer Lithe Day. Every fourth year there is an extra Litheday used as we use leap years to sort out the shift in seasons.",
        20,
        70,
        "29",
        "30",
        "31"
    );
    questions.push(IObj);

    var IObj = new Qi(
        "Hobbits never give gifts to those celibrating a birthday",
        2,
        "False",
        "A Hobbit would be expected to throw a party on the eve of their birthday, providing gifts for those invited. Guests would give gifts to the host as well but they would be delivered in person before that date, never on the day.",
        12,
        47,
        "True",
        "False"
    );
    questions.push(IObj);
}