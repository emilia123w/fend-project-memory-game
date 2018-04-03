//a list that holds all of your cards:

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

//shuffle function:
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
array= shuffle(array);

//displays cards on the page:
  function addCards(item, index)  {
    document.querySelector(".deck").innerHTML+=`<li class="card"><i class="${item}"></i></li>`
  }

array.forEach(addCards);  //adding cards to html

//open cards:
  let clicks = 0;
  $(".card").click(open);
  function open(e){
    $(this).addClass("open show")
    clicks= clicks+1;  //count clicks
    let openCards = document.getElementsByClassName("open","show");
 Array.from(openCards); //array of all open cards

//matching cards:
if (openCards.length>1) {
    if(openCards[0].firstChild.className === openCards[1].firstChild.className){
    openCards[0].classList.add("match");
    openCards[1].classList.add("match");
    openCards[0].classList.remove("open");
    openCards[1].classList.remove("open")
    }

  if(openCards[0].firstChild.className !== openCards[1].firstChild.className){
    setTimeout(function(){
    openCards[0].classList.remove("open", "show");
    openCards[0].classList.remove("open", "show");
  },700);
}
}  // turns the cards if they match or not turns if match

//show clicks:
document.querySelector(".moves").innerHTML=clicks;

//display stars:
if (clicks>20){
  if (clicks<23){
document.querySelector(".stars").lastChild.remove();
}
}
if (clicks>40){
  if (clicks<43){
document.querySelector(".stars").lastChild.remove();
}
}
}

//reloading button:
$(".restart").on("click", function(){
  location.reload()
})

//
