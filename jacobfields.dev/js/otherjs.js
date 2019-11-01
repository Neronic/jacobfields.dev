//jquery
$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.fixed-action-btn').floatingActionButton();
    $('.scrollspy').scrollSpy();
    
    var quotes = new Array("You think it, I build it.", "Bringing your ideas to life.",
                              "Professionally built projects.", "We're all sloths here.", 
                              "Don't forget the semicolon.", "I turn coffee into code.",
                              "Let's work together.", "Coding is more than just a hobby.",
                          "Talk is cheap. Show me the code. - Linus Torvalds.",
                          "A good programmer looks both ways before crossing a one-way street. - Doug Linder",
                          "A CPU is really just a rock we tricked into thinking.");
    textRandomizer = quotes[Math.floor(Math.random() * quotes.length)];
    $('.textGen').text(textRandomizer);
});