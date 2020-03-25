const say = require('say');

say.speak("Hello?", 'Alex', 0.5);

setTimeout(daveApology, 5000);

function daveApology() {
    say.speak("I'm sorry Dave", 'Alex', 1)  
}
