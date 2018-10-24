const elem_playButtons = document.querySelectorAll('#options > div');
const elem_computerChoice = document.querySelector('#computer');
const elem_userChoice = document.querySelector('#player');
const elem_scoreboard = document.querySelector('#scoreboard');
const elem_opt_alwaysWin = document.querySelector('#opt_alwaysWin');

//0 tie, 1 win, 2 lose; Who needs army of IFs or ugly switch..case :>
const result = [
	[0,1,2],
	[2,0,1],
	[1,2,0]
];
	
var userScore = 0, compScore = 0;
var random = Alea(new Date());//I replaced random function to make it more pr0; If you replace new Date() with static string it will always generate same result!

elem_playButtons.forEach(function applyEvent(item){
	item.addEventListener('click', function play(){
		var userChoice = parseInt(this.getAttribute('value'));
		
		do {
			var compChoice = toRange(random(), 0, 2);
			
		}while(result[userChoice][compChoice] != 1 && elem_opt_alwaysWin.checked);
		
		elem_userChoice.style.backgroundImage = 'url("images/'+userChoice+'.jpg")';
		elem_computerChoice.style.backgroundImage = 'url("images/'+compChoice+'.jpg")';
		
		if (result[userChoice][compChoice] == 1){
			userScore++;
		}else if (result[userChoice][compChoice] == 2){
			compScore++;
		}
		
		elem_scoreboard.textContent = compScore+' - '+userScore;
		
	});
});

function Alea(seed) {
    if(seed === undefined) {seed = +new Date() + Math.random();}
    function Mash() {
        var n = 4022871197;
        return function(r) {
            for(var t, s, u = 0, e = 0.02519603282416938; u < r.length; u++)
            s = r.charCodeAt(u), f = (e * (n += s) - (n*e|0)),
            n = 4294967296 * ((t = f * (e*n|0)) - (t|0)) + (t|0);
            return (n|0) * 2.3283064365386963e-10;
        }
    }
    return function() {
        var m = Mash(), a = m(" "), b = m(" "), c = m(" "), x = 1, y;
        seed = seed.toString(), a -= m(seed), b -= m(seed), c -= m(seed);
        a < 0 && a++, b < 0 && b++, c < 0 && c++;
        return function() {
            var y = x * 2.3283064365386963e-10 + a * 2091639; a = b, b = c;
            return c = y - (x = y|0);
        };
    }();
}

function toRange(input, min, max){
  return Math.floor(input * (max - min + 1)) + min;
}