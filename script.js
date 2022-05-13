$(".button").dblclick(function() {
    let name = $(".input1").val();
    let times = $(".input2").val();
    let styles = $(".input3").val();
let result= times * 12 * 10;
    let message = name + " will get" + " " + styles +" " + result +"" +  "times" + " by" + " 2032";
    console.log(message);
    $("p").text(message );
    
});