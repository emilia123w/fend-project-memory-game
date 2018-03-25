/*
 * Create a list that holds all of your cards:
 */
let array= [
  'fa fa-diamond','fa fa-diamond',
  'fa fa-paper-plane-o','fa fa-paper-plane-o',
  'fa fa-anchor','fa fa-anchor',
  'fa fa-bolt','fa fa-bolt',
  'fa fa-cube','fa fa-cube',
  'fa fa-leaf','fa fa-leaf',
  'fa fa-bicycle','fa fa-bicycle',
  'fa fa-bomb','fa fa-bomb',
]
   //shuffle cards:
   function shuffle(array) {  // Shuffle function from http://stackoverflow.com/a/2450976
       var currentIndex = array.length, temporaryValue, randomIndex;

       while (currentIndex !== 0) {
           randomIndex = Math.floor(Math.random() * currentIndex);
           currentIndex -= 1;
           temporaryValue = array[currentIndex];
           array[currentIndex] = array[randomIndex];
           array[randomIndex] = temporaryValue;
       }

       return array;
   }
array= shuffle(array); //shuffle the cards on the page
/*
 * Display the cards on the page
*/
//for each method
/*   - loop through each card and create its HTML
*   - add each card's HTML to the page
*/
function addCards(item, index){
  document.querySelector(".deck").innerHTML+=`<li class="card"><i class="${item}"></i></li>`
}

array.forEach(addCards);  //adding cards to html
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


$(".card").click(open);
 function open(e){
   $(this).addClass("open show")
 }

 let openCards = document.getElementsByClassName("open");
 let openCard1 = openCards[0];
 let openCard2 = openCards[1];

if (openCards.length==2) {

    if(openCard1.firstChild.className === openCard2.firstChild.className){
    openCard1.addClass("match");
    openCard2.addClass("match");
    openCard1.classList.remove('open');
		openCard2.classList.remove('open');
    }

  if(openCard1.firstChild.className !== openCard2.firstChild.className){
    openCard1.classList.remove('open show');
		openCard2.classList.remove('open show');
  }
}
