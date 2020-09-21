$(".selall").click(function(){
    console.log($(this).prop("checked"));
    let bool=$(this).prop("checked");
    $(".singlechk , .selall").prop("checked",bool);
})