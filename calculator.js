
let operations = {
    "+": (a, b) => a+b,
    "-": (a, b) => a-b,
    "*": (a, b) => a*b,
    "/": (a, b) => a/b,
}



$(document).ready(function () {
    $(this).css("backgrund-color", "green");
    let kumbara = "";
    let firstOperant = "";
    let secondOperant = "";
    let operant = null;



    $("#numberButton button").on("click", function () {
        let basilanButonunDegeri = $(this).html();
        kumbara = kumbara + basilanButonunDegeri;
        $("header").html(kumbara);
    });



    //+,-,*,/
    $("button.operation").on("click",function(){
        operant = $(this).html();
        firstOperant = kumbara;
        kumbara = "";
        $("#operation-container button").css("backgrund-color", "orangered");
        $(this).css("backgrund-color", "green");
    })

    //=
    $("button.calculet").on("click",function(){
        secondOperant = kumbara;
        kumbara = "";
        let result = operations[operant](parseInt(firstOperant), parseInt(secondOperant));
        $("header").html(result);
        firstOperant = "";
        secondOperant = "";
        $("opartion-container button").css("backgrund-color", "orangred")
        $(this).css("background-color", "green");
    });



    $("button.reset").css("text-align", "right");

    //Ce
    $("button.reset").on("click",function(){
        
        $("header").html(0);
        firstOperant = "";
        secondOperant = "";
        kumbara = "";
        $("#operation-container button").css("background-color", "#ff00c8");
    
    })

    let isDragAndDropActive = false;
    let offsetX = null;
    let offsetY = null;
    let container = $("#container");
    let html = $("html");
    
    container.mousedown(function (event) {
        isDragAndDropActive = true;
        offsetX = event.pageX - Number(container.css("left").split("px")[0]);
        offsetY = event.pageY - Number(container.css("top").split("px")[0]);
        container.css("backgroundColor", "blue");
    });
    html.mouseup(function () {
        isDragAndDropActive = false;
        offsetX = null;
        offsetY = null;
    
    });
    
    html.mousemove(function (event) {
        if (isDragAndDropActive) {
            container.css("left", (event.pageX - offsetX) + "px");
            container.css("top", (event.pageY - offsetY) + "px");
        }
    });

});








































