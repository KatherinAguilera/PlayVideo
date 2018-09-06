//Menu responsive
(function(){
	let movil = document.getElementById('movil');
	let listaNav = document.getElementById('lista-nav');

	movil.addEventListener('click', function(){
		listaNav.style.display = listaNav.style.display == 'flex'? 'none' : 'flex';
	});
})();

//Animacion para likes

    const $likestart = document.getElementById('likestart');
    $likestart.addEventListener('click', (event)=>{
      // console.log(event);
      // $like.classList.add('is-liked');
      $likestart.classList.toggle('is-liked2');
      // $likestar.classList.toggle('is-liked2');
    });