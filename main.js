rover_x=10
canvas=document.getElementById("myCanvas")
tasty=canvas.getContext("2d")
rover_image="rover.png"
background_image="mars.gif"
rover_y=10
rover_height=90
rover_width=110
function add() {

    background_imgTag= new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src= background_image;


    rover_imgTag= new Image();
    rover_imgTag.onload= uploadrover;
    rover_imgTag.src= rover_image;
}

function uploadBackground(){
tasty.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadrover() {

    tasty.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);

}

window.addEventListener("keydown", my_keydown);


function my_keydown(e)
{

    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed== '38')
    {
        up();
        console.log("up")
    }


        if(keyPressed== '40')
        {
            down();
            console.log("down");
            
            
        }


        
            if(keyPress=='37')
            {
                left();
                console.log("left");
            }

            if(keyPressed== '39')

            {
                right();
                console.log("right");
            }

            

            



        
        
    
}