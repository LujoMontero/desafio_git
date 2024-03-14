$("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente.");
});

$("#ingre").on("dblclick", function () {
    $(this).css({
        "color" : "red"
    });
});

$("#prepa").on("dblclick", function () {
    $(this).css({
        "color" : "red"
    });
});


$(Document).ready(function(){
    $('.card-title').dblclick(function(){
        $('.card').hide("slow");
    });
});

$(Document).ready(function(){
    $('h2').dblclick(function(){
        $('.card').show("slow");
    });
});
