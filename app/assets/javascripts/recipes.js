$(window).load(function() {
    //alert("la pagina se ha cargado con exito")

    //designa evento al boton
    var boton = document.getElementById("miboton").addEventListener("click", sumar());




    function saludar() {
        //saludo
        alert("hola, soy el boton");
    }

    function crear()
    {
        //creacion de elementos
        var elemento=$('<p>nuevo parrafo</p>');
        elemento.appendTo('#div1');
    }

    function sumar()
    {
        //suma
        var valor1 = parseInt($('#valor1').val())
        var valor2= parseInt($('#valor2').val())
        var total = valor1+valor2;
        $('#resultado').val(total)
        alert(total)
    }


    //evento de contar movimientos de mouse sobre boton
    $( '#miboton' ).on( "mouseenter mouseleave", function() {
        console.log( "mouse hovered over or left a div" );
    });


});