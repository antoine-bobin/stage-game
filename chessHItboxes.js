// let wallRight = false
// let wallLeft = false
// let wallUp = false
// let wallDown = false
// let ennemyDead = false
// document.addEventListener('DOMContentLoaded', () =>  {
//     console.log("start file hitboxes")
//     function hitboxes(){
//         // console.log("function hitboxes")
//         const pion = document.getElementById("pion")
//         const ennemy = document.getElementById("firstEnnemy")
//         const sword = document.getElementById("attackpions")
//         const walls = document.querySelectorAll(".wall")
//         let pionStyleX = parseFloat(window.getComputedStyle(pion).getPropertyValue("left"))
//         let pionStyleY = parseFloat(window.getComputedStyle(pion).getPropertyValue("top"))
//         let ennemyStyleX = parseFloat(window.getComputedStyle(ennemy).getPropertyValue("left"))
//         let ennemyStyleY = parseFloat(window.getComputedStyle(ennemy).getPropertyValue("top"))
//         let swordStyleX = parseFloat(window.getComputedStyle(sword).getPropertyValue("left"))
//         let swordStyleY = parseFloat(window.getComputedStyle(sword).getPropertyValue("top"))
//         // sword.style.display = "block"
//         let hitboxPion = {
//             x: pionStyleX,
//             y: pionStyleY,
//             width: 50,
//             height: 50,
//         }
//         let hitboxPionWall = {
//             x: pionStyleX,
//             y: pionStyleY,
//             width: 52,
//             height: 51,
//         }
//         let hitboxEnnemy = {
//             x: ennemyStyleX,
//             y: ennemyStyleY,
//             width: 45,
//             height: 44,
//         }
//         let hitboxSword = {
//             x: swordStyleX,
//             y: swordStyleY,
//             width: 160,
//             height: 50,
//         }
//
//         walls.forEach(wall => {
//         const wallStyle = wall.getBoundingClientRect()
//         // console.log(wallStyle)
//         const hitboxWall = {
//             x: wallStyle.left,
//             y: wallStyle.top,
//             width: wallStyle.width,
//             height: wallStyle.height,
//         }
//
//         if (
//             hitboxPionWall.x < hitboxWall.x + hitboxWall.width &&
//             hitboxPionWall.x + hitboxPionWall.width > hitboxWall.x &&
//             hitboxPionWall.y < hitboxWall.y + hitboxWall.height &&
//             hitboxPionWall.y + hitboxPionWall.height > hitboxWall.y
//
//         ) {
//             console.log("wall hit")
//             if (direction == "haut"  && wallDown == false ){
//                 console.log("haut")
//                 wallUp = true
//             }
//             else
//                 if (direction == "bas" && wallUp == false ){
//                     console.log("bas")
//                     wallDown = true
//                 }
//                 else
//                     if (direction == "gauche" && wallRight == false ){
//                         console.log("gauche")
//                         wallLeft = true
//                     }
//                     else
//                         if(direction == "droite" && wallLeft == false){
//                             console.log("droite")
//                             wallRight = true
//                         }
//         }
//
//         })
//         if(ennemyDead) return
//         if (
//             hitboxPion.x < hitboxEnnemy.x + hitboxEnnemy.width &&
//             hitboxPion.x + hitboxPion.width > hitboxEnnemy.x &&
//             hitboxPion.y < hitboxEnnemy.y + hitboxEnnemy.height &&
//             hitboxPion.height + hitboxPion.y > hitboxEnnemy.y
//         ) {
//             console.log("player killed")
//
//         }
//         if (sword.style.display == "block")
//             if (
//             hitboxSword.x < hitboxEnnemy.x + hitboxEnnemy.width &&
//             hitboxSword.x + hitboxSword.width > hitboxEnnemy.x &&
//             hitboxSword.y < hitboxEnnemy.y + hitboxEnnemy.height &&
//             hitboxSword.height + hitboxSword.y > hitboxEnnemy.y
//         ) {
//             console.log("ennemy killed")
//             ennemy.style.visibility = "hidden"
//             ennemyDead = true
//             ennemy.style.pointerEvents = "none"
//         }
//     }
//     setInterval(hitboxes, 0)
// })
