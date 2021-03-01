var index =1;
slide(1);

function pre(){
    index=index-1;
    slide(index);
}
function post(){
    index=index+1;
    slide(index);
}

function slide(n){
    var x=document.getElementsByClassName("slideshow");
    var i;
    if(n>x.length){
        index=1;
    }

    else if(n<1){
        index=x.length;
    }

    for(i=0;i<x.length;i++){
        x[i].style.display="none";
    }
    x[index-1].style.display="block";

}

$(document).ready(function(){
    $(".ourclass").click(function(){
        $(".navigation").toggle();
    });
});