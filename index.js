// start of menu color change function =======================================================================================

let whatColor=0;
function changeBackgroundColor() {
	var elements = document.querySelectorAll('.navBar');
    if(whatColor==0){
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "transparent";
        }
        whatColor++;
    }
    else{
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "#131512";
        }
        whatColor--;
    }
}

// end of menu color change function =========================================================================================

// start of rearrange words ==================================================================================================

var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;
// console.log(words); // delete later 
words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
//   console.log(words[i]); // delete later
}
// console.log(wordArray);

function changeWord() {
  var cw = wordArray[currentWord];
//   console.log(cw);
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
//   console.log(nw);
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
//   console.log(content); // delete later
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++)
   {
      // ===========================
      if(content.charAt(i)==" "){
        var spaceLetter = document.createElement('label');
        spaceLetter.innerHTML = "&nbsp&nbsp&nbsp&nbsp";
        spaceLetter.className = 'letter';
        word.appendChild(spaceLetter);
        letters.push(spaceLetter);
      }
        // =========================
        else{
            var letter = document.createElement('span');
            letter.className = 'letter';
            letter.innerHTML = content.charAt(i);
            word.appendChild(letter);
            letters.push(letter);
    // console.log(letter);
        }
  }
  
  wordArray.push(letters);
//   console.log(letters);
}

changeWord();
setInterval(changeWord, 4000);

// end of rearrange words ==================================================================================================

// ========================= start of products carousel ========================================
function prevItem(){
  let windowSize= window.matchMedia("(max-width: 750px)");
  let windowSizeSmaller= window.matchMedia("(max-width: 530px)");
  let allItems = document.querySelector("#productsItemsContent");
  if(windowSizeSmaller.matches)
  {
    allItems.scrollLeft -= 100;
  }
  else if(windowSize.matches)
  {
    allItems.scrollLeft -= 150;
  }
  else{
    allItems.scrollLeft -= 300;
  }
 }
 function nextItem(){ 
  let windowSize= window.matchMedia("(max-width: 750px)");
  let windowSizeSmaller= window.matchMedia("(max-width: 530px)");
  let allItems = document.querySelector("#productsItemsContent");
  if(windowSizeSmaller.matches)
  {
    allItems.scrollLeft += 100;
  }
  else if(windowSize.matches)
  {
    allItems.scrollLeft += 150;
  }
  else{
    allItems.scrollLeft += 300;
  }
  }
  // ========================== end of products carousel ==============================================
 // ========================== start of hairstyles carousel ==============================================
 function prevHairstyle(){
  let windowSize= window.matchMedia("(max-width: 750px)");
  let windowSizeSmaller= window.matchMedia("(max-width: 530px)");
  let allItems = document.querySelector("#hairstylesItemsContent");
  if(windowSizeSmaller.matches)
  {
    allItems.scrollLeft -= 100;
  }
  else if(windowSize.matches)
  {
    allItems.scrollLeft -= 150;
  }
  else{
    allItems.scrollLeft -= 300;
  }
 }
 function nextHairstyle(){ 
  let windowSize= window.matchMedia("(max-width: 750px)");
  let windowSizeSmaller= window.matchMedia("(max-width: 530px)");
  let allItems = document.querySelector("#hairstylesItemsContent");
  if(windowSizeSmaller.matches)
  {
    allItems.scrollLeft += 100;
  }
  else if(windowSize.matches)
  {
    allItems.scrollLeft += 150;
  }
  else{
    allItems.scrollLeft += 300;
  }
  }
  // ========================== end of hairstyles carousel ==============================================