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
	let builder = (text, img, classes) => 
	{
		let	section = document.createElement("section");
		let div = document.createElement("div");
		let div_l = document.createElement("div");
		let h1 = document.createElement("h1");
		let p = document.createElement("p"); 
		
		//appendChild
		header.appendChild(section);
		section.appendChild(div);
		section.appendChild(div_l);

		//ClastList.add
		nav.id = "hn_wrap";
		section.id = "hs_wrap"
		
		//innerHTML
		h1.innerHTML = text.h1;
		p.innerHTML = text.p;

		let img_builder = (alt, side, src, img_class) => {
			let figure = document.createElement("figure");
			let x = document.createElement("img");

			figure.appendChild(x);
			x.setAttribute("src", src);
			x.setAttribute("alt", alt);
			x.classList.add(img_class);
			if (side == "left")
			{
				div.classList.add("d_left");
				div.appendChild(figure);
			}
			else
			{
				div_l.classList.add("d_right");
				div_l.appendChild(figure);
			}
		}
		img_builder("Force5 école de voile présentation", "left", img[0], "logo");
		img_builder("Force5 Fanatic board", "right", img[1], "pad");
		div.appendChild(h1);
		div.appendChild(p);
	}
	let footer_header = () => 
	{
		let div = document.createElement("div");
		
	}
	header.appendChild(nav);
	nav.appendChild(ul);
	for (var i = 0; i < d.nav.length; i++)
	{
		let li = document.createElement("li");
		li.innerHTML = d.nav[i];
		ul.appendChild(li);
	}
	builder(d.text, d.img);

};

get_json('JSON/header.json', header_builder);
