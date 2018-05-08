//check off 
$("ul").on("click", "li", function(){
    $(this).toggleClass("crossed");
})

//delete
$("ul").on("click", "span", function(event){
    event.stopPropagation(); //stops event
    $(this).parent().fadeOut(500, function(){
    $(this).remove(); //deletes li
    })
})

//delete whole list
$(".fa-trash").click(function(){
    $("ul").fadeOut(500, function(){
        $("li").remove();
    })
    $("ul").fadeIn();
})

//add
$("input[type='text']").keypress(function(event){
    if(event.which === 13 && $(this).val() !== "" && $(this).val().length < 30){
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + $(this).val() + "</li>");
        $(this).val("");
    }
})
//toggle input
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})
