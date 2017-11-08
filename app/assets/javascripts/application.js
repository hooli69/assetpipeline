// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require turbolinks
//= require_tree .

function show() {
	var getContenu = document.getElementById('contenu');
	
	var showButton = document.getElementById('showButton');
	
	if (getContenu.style.display == 'none') {
	
		showButton.style.display = 'block';
	
	}
	else {
		getContenu.style.display = 'flex';
		showButton.style.display = 'none';
	}
}

setTimeout(function(){
	window.confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please")
	if (window.confirm('Etes-vous sûr ?')){
		window.location.href = 'https://www.youtube.com/watch?v=jA6manyvCo0';
	}
}, 10000);


function search(){
	var recupSearch=document.getElementById('search').value;
	window.location.href = 'https://www.google.com/search?q=' + recupSearch
}
