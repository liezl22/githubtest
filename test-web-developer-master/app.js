var images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
		path: 'images/man.jpg'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: 'images/wizard.jpg'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: 'images/beast.jpg'
	}
};

var html = "<div>";
for (let key in images) {
   if (images.hasOwnProperty(key)) {
		 html+="<div class='item'><div class='image-holder' style='background-image:url("+images[key].path+")'><div class='description'>"+images[key].description+"</div></div></div>";
   }
}
html+="</div>";

document.getElementById("demo").innerHTML = html;


function myFunction() {
  var x = document.getElementById("navigation");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}
