$(document).ready(function () {

    $("#btn-cambiar-modo").click(function () {
        $("#pagina").toggleClass("modo-oscuro")
        if ($("#pagina").hasClass("modo-oscuro")){
            $("#icono").attr("src","imgs/sol.png")
        }
        else {
            $("#icono").attr("src","imgs/luna.png")
        }
    })
})