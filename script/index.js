$(document).ready(function(){
//   togle do menu
$("#menu-button").on("click", function(){
    $("#submenu-container").slideToggle()
})
// toggle linguagens
$("#html").on("click", function(){
    $(".html-description").slideToggle()
    $(".css-description").slideUp()
    $(".js-description").slideUp()

})
$("#css").on("click", function(){
    $(".css-description").slideToggle()
    $(".html-description").slideUp()
    $(".js-description").slideUp()
})
$("#js").on("click", function(){
    $(".js-description").slideToggle()
    $(".css-description").slideUp()
    $(".html-description").slideUp()
})
// validação de formulario
$("form").validate({
    rules:{
        id:{
            required:true
        }
    },

    
})
}

)