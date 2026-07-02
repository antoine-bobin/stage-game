document.addEventListener("DOMContentLoaded", () =>{
    const spriteWidth = 288;
    const spriteHeight = 269;
    function spritePosition(row, col){;
        return {
            x: (
                -col * spriteWidth+"px"
            ),
            y: (
                -row * spriteHeight+"px"
            )
        };
        
    }
    function pieceStyle (){
        const activePiece = document.getElementById("Menu")
        let activePieceValue = activePiece.value;
            spriteStyle = document.getElementById("pion")
        if (activePieceValue == "1"){
            spriteStyle.style.backgroundPosition = spritePosition(1, 1).x + " " + spritePosition(1, 1).y
          //  console.log(spritePosition(1, 1).x)
          //  console.log(spritePosition(1, 1).y)
        }
        if (activePieceValue == "2"){
            spriteStyle.style.backgroundPosition = spritePosition(0, 1).x + " " + spritePosition(0, 1).y
         //   console.log(spritePosition(0, 1).x)
       //   console.log(spritePosition(0, 1).y) 
        }
        if (activePieceValue == "3"){
            spriteStyle.style.backgroundPosition = spritePosition(0, 3).x + " " + spritePosition(0, 3).y 
          //  console.log(spritePosition(0, 3).x)
        //    console.log(spritePosition(0, 3).y)
        }
        if (activePieceValue == "4"){
            spriteStyle.style.backgroundPosition = spritePosition(1, 0).x + " " + spritePosition(1, 0).y
        
          //  console.log(spritePosition(1, 1).x)
        //    console.log(spritePosition(1, 1).y)
        }
        if (activePieceValue == "5"){
            spriteStyle.style.backgroundPosition = spritePosition(0, 0).x + " " + spritePosition(0, 0).y
         //   console.log(spritePosition(0, 2).x)
          //  console.log(spritePosition(0, 2).y)
        }
        if (activePieceValue == "6"){
            spriteStyle.style.backgroundPosition = spritePosition(0, 2).x + " " + spritePosition(0, 2).y
           // console.log(spritePosition(2, 0).x)
         //   console.log(spritePosition(2, 0).y)
        }
        
        requestAnimationFrame(pieceStyle)
    }
    requestAnimationFrame(pieceStyle)
})