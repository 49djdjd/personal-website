const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const flip = document.querySelector('#flip');


const paper1 = document.querySelector('#p1');
const paper2 = document.querySelector('#p2');
const paper3 = document.querySelector('#p3');

prevBtn.addEventListener("click", goPrevious);
nextBtn.addEventListener("click", goNext);

let currentLocation = 1;
let numOfPages = 3;
let maxLocation = numOfPages + 1;
//coding things for buttons (to save thing for when i fix them)
function openFlip(){
    flip.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";


}

function closeFlip(isFirstPage){
    if(isFirstPage){
        flip.style.transform = "translateX(0%)";
    } else{
        flip.style.transform = "translateX(100%)"
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}


function goNext(){
    if(currentLocation < maxLocation){
        switch(currentLocation){
            case 1: 
                openFlip();
                paper1.classList.add("flipped");
                paper1.style.zIndex= 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex= 2;
                break;
            case 3:
                closeFlip(false);
                paper3.classList.add("flipped");
                paper3.style.zIndex= 3;
                break;
            default:
                throw new Error("unkown state");
            
        
        }
        currentLocation++;
    }
}

function goPrevious(){
    if(currentLocation>1){
        switch(currentLocation){
            case 2:
                closeFlip(true);
                paper1.classList.remove("flipped") 
                paper1.style.zIndex = 3;
                break;
            case 3: 
                paper2.classList.remove("flipped");
                paper2.style.zIndex= 2 ;
                break;
            case 4:
                openFlip();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");

            
        }
        currentLocation--;
    }

}
