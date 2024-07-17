// var elem1= document.querySelector("#elem1")
// var img=document.querySelector("#elem1 img")
// elem1.addEventListener("mousemove",function(dets){
//     img.style.left=dets.x+"px"
//     img.style.top=dets.y+"px"
//     // img.style.opacity="2"
// })
// elem1.addEventListener("mouseenter",function(){
//     img.style.opacity="2"
// })
// elem1.addEventListener("mouseleave",()=>{
//     img.style.opacity="0"
// })


// **************************************************************  uper vala code elem1 ke liye tha sirf

var elem= document.querySelectorAll(".elem");

//elem variable ab ak nodelist h array -----> jo ki 5 div elem ko contain kr ke rkhi h to hr ak ko unko access
// krne ke liye for each loop lga dege 
elem.forEach(function(val){              // <---------- ak iteration m div elem val ke pass ayega
    // console.log(val.childNodes)
    // console.log(val.childNodes[3])
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity="1"             //text h1 text img  ->  0 1 2 3
    });
    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left=dets.x+"px"
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity="0"
    });
    
});         
