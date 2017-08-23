var cats = [
	{name: "Fluffy", color: "Red", url:"http://static3.fjcdn.com/comments/Just+make+sure+they+avoid+the+katz+motel+_6b1931e74d35a38df38728c6ba9720ce.jpg"},
	{name: "Killer", color: "Blue", url:"https://kittybloger.files.wordpress.com/2014/09/putin-and-kim-jong-un-become-cat-scratching-posts-4.jpg?w=584&h=605"},
	{name: "Jack", color: "Green", url:"https://static.comicvine.com/uploads/original/11/111746/4684849-latest.jpg"}
	];


	domString(cats);


	function domString(arrayOfCats) {
		for (var i = 0; i < arrayOfCats.length; i++) {
			var sectionNode = '';
			var nameNode = '';
			var imgNode = '';

			sectionNode = document.createElement('section');
			sectionNode.setAttribute('class', 'cat');

			nameNode = document.createElement('h2');
			nameNode.setAttribute('class', 'catName');
			nameNode.innerHTML = `${arrayOfCats[i].name}`;

			colorNode = document.createElement('p');
			colorNode.setAttribute('class', 'catColor');
			colorNode.innerHTML = arrayOfCats[i].color;

			imgNode = document.createElement('img');
			imgNode.setAttribute('class', 'catImg');
			imgNode.setAttribute('src', `${arrayOfCats[i].url}`)

			sectionNode.appendChild(nameNode);
			sectionNode.appendChild(colorNode);
			sectionNode.appendChild(imgNode);

			writeToDom(sectionNode);
		}
	}


	function writeToDom(node) {
		document.getElementById('container').appendChild(node);

	}



