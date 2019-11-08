console.log('suh');
switchbg();
/* Supports 8 banner */

function switchbg(){
    var rando=getRandomInt(1,9);
    console.log("Got number "+rando);
    var bg=document.getElementsByClassName('bg');
    if (bg==0){
        console.log("Unable to get bg");
        return;
    } else {
        console.log("bg Retrieved");
    }
    var z ="url('img/banner" + rando + ".png')"; 
    console.log(z);
    bg[0].style.background= z ;
    bg[0].style.backgroundAttachment = "fixed";
    bg[0].style.backgroundSize = "cover";
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}



