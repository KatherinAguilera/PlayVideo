(function(){
	let movil = document.getElementById('movil');
	let listaNav = document.getElementById('lista-nav');

	movil.addEventListener('click', function(){
		listaNav.style.display = listaNav.style.display == 'flex'? 'none' : 'flex';
	});
})();
