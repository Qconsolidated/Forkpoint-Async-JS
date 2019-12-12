
async function getQuote()
{
	const response = await fetch('https://api.chucknorris.io/jokes/random?category=dev');
	const quote = await response.json();
	const test = await addQuote(quote);
}

getQuote().catch()
{
	error => 
	{
		console.error(error);
	}
};
function addQuote(quote)
{
	var newLI = document.createElement('li');
	const list =  document.getElementById('quotes');
	newLI.innerHTML = quote.value;
	list.appendChild(newLI);
	document.getElementById('para').innerHTML = quote.value;
}
