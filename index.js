const jokes = [
    "Why don't scientists trust atoms? Because they make up everything.",
    "What do you call fake spaghetti? An impasta.",
    "How do you organize a space party? You planet.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Did you hear about the claustrophobic astronaut? He needed a little space.",
    "What do you call a can opener that doesn't work? A can't opener.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What did one wall say to the other wall? 'I'll meet you at the corner.'",
    "How do you make holy water? You boil the hell out of it.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "What did one snowman say to the other? 'Do you smell carrots?'",
    "How does a penguin build its house? Igloos it together.",
    "Why don't scientists trust stairs? Because they're always up to something.",
    "What do you call an alligator detective? An investi-gator.",
    "Did you hear about the cheese factory explosion? There was nothing left but de-brie.",
    "How does a penguin make pancakes? With its flippers.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "What did one hat say to the other? 'You stay here, I'll go on ahead.'",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call a belt made out of watches? A waist of time.",
];


function randomJokes(){
    let randomIndex = Math.floor(Math.random() * jokes.length)
    let joke_content = document.querySelector('.inner-container')
    console.log(joke_content.innerHTML = jokes[randomIndex])
}
