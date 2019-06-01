//making typeadj global
var typeadj;
var current_adj_index = 0;
var list_of_adjs = [
	"smart",
	"boi",
	"nut"
];
window.onload = function() {
	typeadj = document.getElementById("typeadj");
	list_of_adjs = [
		"smart",
		"passionate",
		"efficient",
		"creative",
		"productive"
	];
	setInterval(() => {
		updateadj();
	}, 3000);
};

function updateadj() {
	console.log(list_of_adjs[current_adj_index]);
	typeadj.innerHTML = list_of_adjs[current_adj_index];
	//go to next adj
	current_adj_index++;
	if (current_adj_index == list_of_adjs.length) {
		current_adj_index = 0;
	}
}
function aboutmescroll() {
	//scrolls to top of div so to srcoll to bottom of about me u scroll to the div below it
	var elmnt = document.getElementById("aboutmebelow");
	elmnt.scrollIntoView();
}
