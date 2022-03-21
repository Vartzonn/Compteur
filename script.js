let affichageNbr = document.getElementById('nombre');
let decrease = document.getElementById('less');
let reset = document.getElementById('reset');
let increase = document.getElementById('more');

// Variables mode Sombre
let modeSombre = document.getElementById('body');
let boutonModeSombre = document.getElementById('boutonModeSombre');
		

affichageNbr.innerText = 0;

decrease.addEventListener('click', () => {
	affichageNbr.innerText--;
	ifElseChangeColor();
});

increase.addEventListener('click', () => {
	affichageNbr.innerText++;
	ifElseChangeColor();
});

reset.addEventListener('click', () => {
	affichageNbr.innerText = 0;
	ifElseChangeColor();
});



function ifElseChangeColor() {
	if (modeSombre.hasAttribute('data-key')) {
		changeColorOther();
	}
	else {
		changeColor();
	}
};

function changeColor() {
	if (affichageNbr.innerText < 0) 
	{
		affichageNbr.style.color = 'red';
	}
	else if (affichageNbr.innerText > 0)
	{
		affichageNbr.style.color = 'green';
	}
	else 
	{
		affichageNbr.style.color = 'black';
	}
};

function changeColorOther() {
	if (affichageNbr.innerText < 0) 
	{
		affichageNbr.style.color = 'red';
	}
	else if (affichageNbr.innerText > 0)
	{
		affichageNbr.style.color = 'lime';
	}
	else 
	{
		affichageNbr.style.color = 'white';
	}
};



// Mode sombre
boutonModeSombre.addEventListener('click', function changementEnSombre() {

	if (modeSombre.hasAttribute('data-key')) {
			modeSombre.removeAttribute('class');
			modeSombre.removeAttribute('data-key');
			boutonModeSombre.setAttribute('id', 'boutonModeSombre');
			modeSombre.setAttribute('class', 'clair');

			changeColor();
	}
	else {
			modeSombre.removeAttribute('class');
			modeSombre.setAttribute('class', 'dark');
			modeSombre.setAttribute('data-key', 'sombre')
			boutonModeSombre.setAttribute('id', 'boutonModeClair');

			changeColorOther();
	}
});