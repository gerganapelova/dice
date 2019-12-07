function rollDice(){
				var num=Math.floor(Math.random()*6)+1;
				var imgName="";
				switch (num) {
					case 1: imgName = "images/dice1.jpg"; break;
					case 2: imgName = "images/dice2.jpg"; break;
					case 3: imgName = "images/dice3.jpg"; break;
					case 4: imgName = "images/dice4.jpg"; break;
					case 5: imgName = "images/dice5.jpg"; break;
					case 6: imgName = "images/dice6.jpg"; break;
				}
				document.getElementById("dice").src = imgName;
			}
					