
var subgenre = [
	'comedic',
	'epic',
	'distopian',
	'surreal',
	'magical',
	'historical',
	'cozy',
	'supernatural',
	'serial',
	'slasher',
	'survival',
	'paranormal',
	'monster',
	'satirical',
	'post-apocolyptic',
	'gothic',
	'contemporary',
	'time-traveling',
	'multicultural',
	'romantic',
	'dark',
	'realistic',
	'psychological',
	'urban',
	'medical',
	'hard-boiled',
	'techno',
	'alternate-history',
	'speculative',
	
	
	]
	
	var subSubgenre = [
	'space',
	'political',
	'colonial',
	'action',
	'steampunk',
	'cyberpunk',
	'chic',
	'erotic',
	'spy',
	'crime',
	'zombie',
	'vampire',
	'werewolf',
	'occult',
	'Victorian',
	'futuristic',
	'science',
	'medieval',
	'1950\'s',
	'samurai',
	]

	var genre = [
	'mystery',
	'noir',
	'thriller',
	'romance',
	'fantasy',
	'horror',
	'drama',
	'comedy',
	'western',
	'sci-fi',
	'suspense'
	]

function generate() {
var randomNumber3 = Math.floor(Math.random() * (subSubgenre.length));
var randomNumber2 = Math.floor(Math.random() * (subgenre.length));
var randomNumber1 = Math.floor(Math.random() * (genre.length));
document.getElementById('display').innerHTML = subgenre[randomNumber2] + ' ' + subSubgenre[randomNumber3] + ' ' + genre[randomNumber1];
}
