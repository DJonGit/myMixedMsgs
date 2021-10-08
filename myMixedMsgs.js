
const randAddition = (number) => {
      return Math.floor(Math.random() * number);
};


const havePhrase = (ch) =>{
     if (!ch) {
        return genChoice(randAddition(3));
    }else {
        return genChoice(ch);
    }
}


const genChoice = (num) => {
    switch(num) {
        case 0:
            console.log('Let\'s go see ' + see[randAddition(see.length)] + '.');
            break;
        case 1:
            console.log(`We are cooking ${cook[randAddition(cook.length)]} tonight!`);
            break;
        case 2:
            console.log('Here is quote for you: ' + motivation[randAddition(motivation.length)]);
            break;
        default:
            console.log('Oh no you messed my code :) No you didn\'t it\'s just an error.');
    };      
};

const see = ['Jety-Oguz', 'Camden', 'Aussen-Alster'];
const cook = ['Nice Pizza', 'Steamy Plov', 'Cheeky Burger'];
const motivation = ['“Impossible is just an opinion.” – Paulo Coelho','“The hard days are what make you stronger.” – Aly Raisman', '“It’s hard to beat a person who never gives up.” – Babe Ruth'];



havePhrase();

