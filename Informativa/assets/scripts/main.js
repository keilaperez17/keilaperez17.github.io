//Obtener los elementos de la clase .close
    let links = document.querySelectorAll(".close");

//Recorrerlos
    links.forEach(function(link){

//Agregar un evento (funcionalidad a una propiedad) click a cada uno de ellos
//case sensitive
    links.addEvenListener("click", function(ev){
        ev.preventDefault()
        let content = document.querySelector('.content');

//Quitarle las clases de animaciones que ya tiene
        content.classList.remove(animate__jackInTheBox);
        content.classList.remove(animate__animated);

//Agregar las clases de animaciones que ya tiene
        content.classList.add("animate__fadeUutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            window.history.go(-1);
        }, 600);
        setInterval

        return false;
    });
    });