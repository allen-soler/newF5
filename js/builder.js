function get_json(link, callback) 
{
	var xhr = new XMLHttpRequest();
	var	data;
	xhr.onreadystatechange = function () 
	{
		if (xhr.readyState === 4 && xhr.status === 200)
		{
			data = JSON.parse(xhr.responseText);
			callback(link, data);
		}
	};
	xhr.open('GET',link);
	xhr.send();
}

function header_builder(link, d)
{
	let	header = document.getElementById("header");
	let	nav = document.createElement("nav");
	let	ul = document.createElement("ul");
	let	section = document.createElement("section");

	header.appendChild(nav);
	header.appendChild(section);
	nav.appendChild(ul);
	for (var i = 0; i < d.nav.length; i++)
	{
		let li = document.createElement("li");
		li.innerHTML = d.nav[i];
		ul.appendChild(li);
	}
	for (var i = 0; i < d.text.length; i++)
	{
		console.log(d.text.h1[i]);
	}
}

get_json('JSON/header.json', header_builder);
