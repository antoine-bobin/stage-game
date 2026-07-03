let notInSight = false
document.addEventListener("DOMContentLoaded", () =>{
    const pion = document.getElementById("pion")
    const ennemy = document.getElementById("firstEnnemy")
    let posPionX = parseFloat(window.getComputedStyle(pion).getPropertyValue("left"))
    let posPionY = parseFloat(window.getComputedStyle(pion).getPropertyValue("top"))
    let posEnnemyX = parseFloat(window.getComputedStyle(ennemy).getPropertyValue("left"))
    let posEnnemyY = parseFloat(window.getComputedStyle(ennemy).getPropertyValue("top"))
    function calculusOfPosition(){
        // console.log("calculus")
        const pion = document.getElementById("pion")
        const ennemy = document.getElementById("firstEnnemy")
        let posPionX = parseFloat(window.getComputedStyle(pion).getPropertyValue("left"))
        let posPionY = parseFloat(window.getComputedStyle(pion).getPropertyValue("top"))
        let posEnnemyX = parseFloat(window.getComputedStyle(ennemy).getPropertyValue("left"))
        let posEnnemyY = parseFloat(window.getComputedStyle(ennemy).getPropertyValue("top"))
        // console.log(posEnnemyX, posEnnemyY, posPionX, posPionY)
    }
      ennemyDead=false;
    setInterval(calculusOfPosition, 30)
    function followPlayer(){
        if (ennemyDead)   return;
            const pion = document.getElementById("pion")
            const ennemy = document.getElementById("firstEnnemy")
            let posPionX = parseFloat(window.getComputedStyle(pion).getPropertyValue("left"))
            let posPionY = parseFloat(window.getComputedStyle(pion).getPropertyValue("top"))
            let posEnnemyX = parseFloat(window.getComputedStyle(ennemy).getPropertyValue("left"))
            let posEnnemyY = parseFloat(window.getComputedStyle(ennemy).getPropertyValue("top"))
            let step = 3
            // console.log(posEnnemyX, posEnnemyY, posPionX, posPionY)
            let goingRight = 0
            let goingUp = 0
            let goingDown = 0
            let goingLeft = 0
            if (posEnnemyX < posPionX ){
                posEnnemyX = posEnnemyX+step
                // console.log(posEnnemyX)
                ennemy.style.left = posEnnemyX+"px"
                // console.log(ennemy.style.left)
                goingRight = 1
                // console.log(goingDown, goingLeft, goingRight, goingUp)
            }
            if (posEnnemyX > posPionX ){
                posEnnemyX = posEnnemyX-step
                // console.log(posEnnemyX)
                ennemy.style.left = posEnnemyX+"px"
                // console.log(ennemy.style.left)
                goingLeft = 1
                // console.log(goingDown, goingLeft, goingRight, goingUp)
            }
            if (posEnnemyY < posPionY ){
                posEnnemyY = posEnnemyY+step
                // console.log(posEnnemyY)
                ennemy.style.top = posEnnemyY+"px"
                // console.log(ennemy.style.top)
                goingDown = 1
                // console.log(goingDown, goingLeft, goingRight, goingUp)
            }
            if (posEnnemyY > posPionY ){
                posEnnemyY = posEnnemyY-step
                // console.log(posEnnemyY)
                ennemy.style.top = posEnnemyY+"px"
                // console.log(ennemy.style.top)
                goingUp = 1
                // console.log(goingDown, goingLeft, goingRight, goingUp)
            }
            if (goingDown == 1 && goingLeft || goingDown == 1 && goingRight || goingUp == 1 && goingRight || goingUp == 1 && goingLeft)
                step = step*(1/Math.sqrt(2))
                // console.log(step)
    }
    function checkAttack(){
        let posPionX = parseFloat(window.getComputedStyle(pion).getPropertyValue("left"))
        let posPionY = parseFloat(window.getComputedStyle(pion).getPropertyValue("top"))
        let posEnnemyX = parseFloat(window.getComputedStyle(ennemy).getPropertyValue("left"))
        let posEnnemyY = parseFloat(window.getComputedStyle(ennemy).getPropertyValue("top"))
        // console.log("check")
        if(posEnnemyX - posPionX < 500 && posEnnemyY - posPionY < 500 ){
            setInterval(followPlayer, 20)
            notInSight = true
        }
        if(notInSight == false)
            requestAnimationFrame(checkAttack)
            // console.log("check2")
    }
    requestAnimationFrame(checkAttack)

}
)
