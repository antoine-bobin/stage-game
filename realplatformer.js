console.log('début du script');
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM chargé');
    Swal.stopTimer()
    Swal.fire({
      title: "choose your username",
      input: "text",
      inputAttributes: { autocapitalize: "off" },
      showCancelButton: true,
      confirmButtonText: "Sure ?",
      showLoaderOnConfirm: true,
      theme: 'material-ui',
      backdrop:`url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.icegif.com%2Fwp-content%2Fuploads%2F2023%2F02%2Ficegif-519.gif&f=1&nofb=1&ipt=27898edfc066575e93d80de52a0ddaf17b8b98d1110d6ee5574194fca1e75f5f")
      top left   
      no-repeat
        `,

  preConfirm: async (login) => {
    try {
      const githubUrl = `
        https://api.github.com/users/${login}
      `;
      const response = await fetch(githubUrl);
      if (!response.ok) return Swal.showValidationMessage(`
          ${JSON.stringify(await response.json())}
        `);
      return response.json();
    } catch (error) {
      Swal.showValidationMessage(`
      Request failed: ${error}
      `);
    }
  },
  allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
  if (result.isConfirmed) Swal.fire({
    title: `${result.value.login}'s this is your avatar for the game`,
    imageUrl: result.value.avatar_url
    });

});
    const keys = {};
    document.addEventListener('keydown', (e) => {
        if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) {
            e.preventDefault();
            keys[e.key] = true;
        }
    });
    document.addEventListener('keyup', (e) => {
        if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) {
            e.preventDefault();
            keys[e.key] = false;
        }
    });
    console.log('Event keydown ajouté');
    let posX = 0;
    let posY = 0;
    let direction = 'droite';
    const elem = document.getElementById("pion");
    if (elem) {
        elem.style.position = elem.style.position || 'absolute';
    }

    const speed = 300; // px par seconde
    let lastTs = null;
    function loop(ts) {
        if (!lastTs) lastTs = ts;
          const dt = (ts - lastTs) / 1000; // sec
          lastTs = ts;

            let dx = 0, dy = 0;
            if (keys['ArrowUp']) {
                dy -= 1; 
                direction = 'haut'
            }
            if (keys['ArrowDown']) {
                dy += 1;
                direction = 'bas'
            }
            if (keys['ArrowLeft']) {
                dx -= 1;
                direction = 'gauche'
            }
            if (keys['ArrowRight']) {
                dx += 1;
                direction = 'droite'
            }

        if (dx !== 0 || dy !== 0) {
            const len = Math.hypot(dx, dy);
            dx = (dx / len) * speed * dt;
            dy = (dy / len) * speed * dt;
            posX = Math.max(0, Math.min(1800, posX + dx));
            posY = Math.max(0, Math.min(800, posY + dy));
            if (elem) {
                elem.style.left = posX + 'px';
                elem.style.top = posY + 'px';
                var corrdppl = elem.style.left;
                var corrdppt = elem.style.top;
                //console.log('coordppl:', corrdppl, 'coordppt:', corrdppt);
            }
        }

        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    document.addEventListener('keydown', function(attackps){
      if (attackps.code === 'Space') {
          attackps.preventDefault();
          showandHideattack();
      }
    });

    const activePiece = document.getElementById("Menu")
  let activePieceValue = activePiece.value;
  function showAndHideattack() {
    let activePieceValue = activePiece.value;
    console.log(activePieceValue)
    if (activePieceValue == "1"){
      let weapons = document.getElementsByClassName("attackpionpsword");
      let weapon = weapons[0]
      if (direction === 'haut') {
        weapon.style.transform = 'rotate(90deg)';
        weapon.style.marginLeft = '-925px';
        weapon.style.marginTop = '-390px'; 
      }
      if (direction === 'bas') {
        weapon.style.transform = 'rotate(270deg)';
        weapon.style.marginLeft = '-925px';
        weapon.style.marginTop = '-210px';  
      }
      if (direction === 'gauche') {
        weapon.style.transform = 'rotate(180deg)';
        weapon.style.marginLeft = '-990px';
        weapon.style.marginTop = '-310px';
      
      }
      if (direction === 'droite') {
        weapon.style.transform = 'rotate(0deg)';
        weapon.style.marginLeft = '-865px';
        weapon.style.marginTop = '-310px';
      }
      weapon.style.left = posX + 'px';
      weapon.style.top = posY + 'px'; 
      weapon.style.display = "block";
      setTimeout(function() {
        weapon.style.display = "none";
      }, 380); 
    }
    if (activePieceValue == "2"){
      const pion = document.getElementById("pion")
      let posBishopX = parseFloat(window.getComputedStyle(pion).getPropertyValue("left"));
      let posBishopY = parseFloat(window.getComputedStyle(pion).getPropertyValue("top"));
      let weapon = document.getElementById("bishopAttack");
      // let weapon = weapons[0]
      console.log(weapon)
      if (direction === 'haut') {
        weapon.style.transform = 'rotate(0deg)';
        weapon.style.marginLeft = '-133.5px';
        weapon.style.marginTop = '-400px'; 
        console.log(weapon)
      }
      if (direction === 'bas') { 
        weapon.style.transform = 'rotate(180deg)';
        weapon.style.marginLeft = '-150px';
        weapon.style.marginTop = '-225px';  
        console.log(weapon)
      }
      if (direction === 'gauche') {
        weapon.style.transform = 'rotate(270deg)';
        weapon.style.marginLeft = '-200px';
        weapon.style.marginTop = '-320px';
        console.log(weapon)
      
      }
      if (direction === 'droite') {
        weapon.style.transform = 'rotate(90deg)';
        weapon.style.marginLeft = '-65px';
        weapon.style.marginTop = '-310px';
        console.log(weapon)
      }
      if (direction === 'droite' && direction === 'haut') {
        weapon.style.transform = 'rotate(45deg)';
        weapon.style.marginLeft = '-365px';
        weapon.style.marginTop = '-310px';
        console.log(weapon)
      }
      weapon.style.left = posX + 'px';
      weapon.style.top = posY + 'px'; 
      weapon.style.display = "block";
      console.log(weapon)
      console.log(weapon.getBoundingClientRect())
      console.log(window.getComputedStyle(weapon).display)
      setTimeout(function() {
        weapon.style.display = "none";
      }, 380); 

      
    }
  } 

  const launchBossButton = document.getElementById("launchbossfiht");
  if (launchBossButton) {
    launchBossButton.onclick = function launchbossfight() {
      let  ennemyDead = true;
      console.log('launch boss');

      const boss = document.getElementById("darkknightboss");
      if (!boss) return;
      boss.style.position = boss.style.position || 'absolute';
      boss.style.display = "block";
   
      let bossposX = parseInt(boss.style.left, 10);
      let bossposY = parseInt(boss.style.top, 10);
      if (isNaN(bossposX)) bossposX = 900;
      if (isNaN(bossposY)) bossposY = 100;
      boss.style.left = bossposX + 'px';
      boss.style.top = bossposY + 'px';
  
      const animationintrovsboss = document.getElementById("animationintrovsboss");
      if (animationintrovsboss) {
        animationintrovsboss.style.display = "block";
      }

      setTimeout(function() {
        console.log('pause animation laucnh');
        const spawnbossanim = document.getElementById("spawnbossanimation");
      if (spawnbossanim) {
        spawnbossanim.style.display = "block";
        animationintrovsboss.style.display = "none";

        
      }
        setTimeout(function() {
          if (spawnbossanim) {
            spawnbossanim.style.display = "none";
          }
          console.log('pause lancée');
                  if (spawnbossanim) {
            spawnbossanim.style.display = "none";
        }

          const maxSpeed = 4;
          const accel = 0.14;
          let bossVelX = 0; 
          let bossVelY = 0;
          let shootCooldown = 0;
          const projectiles = [];
          console.time("timer");
          Swal.resumeTimer();
          Swal.getTimerLeft();

          function createProjectile() {
            const cubeboss = document.createElement('div');
            cubeboss.style.position = 'absolute';
            cubeboss.style.width = '20px';
            cubeboss.style.height = '20px';
            cubeboss.style.background = 'purple';
            cubeboss.style.background = 'radial-gradient(circle,rgb(171, 8, 185) 0%, rgb(57, 0, 150) 100%)';
            cubeboss.className = 'enemie';
            cubeboss.style.left = bossposX + 'px';
            cubeboss.style.top = bossposY + 'px';
            cubeboss.style.pointerEvents = 'none';
            document.body.appendChild(cubeboss);
      
            const angle = Math.random() * Math.PI * 2;
            const speed = 6 + Math.random() * 2;
            projectiles.push({
              el: cubeboss,
              x: bossposX,
              y: bossposY,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed,
            });

            if (projectiles.length > 20) {
              const old = projectiles.shift();
              if (old && old.el && old.el.parentNode) {
                old.el.parentNode.removeChild(old.el);
              }
            }
          }

          function updateProjectiles() {
            for (let i = 0; i < projectiles.length; i++) {
              const p = projectiles[i];
              p.x += p.vx;
              p.y += p.vy;
 
              if (p.x <= 0 || p.x >= 1800 - 20) {
                p.vx = -p.vx;
                p.x = Math.max(0, Math.min(1800 - 20, p.x));
              }
              if (p.y <= 0 || p.y >= 800 - 20) {
                p.vy = -p.vy;
                p.y = Math.max(0, Math.min(850 - 20, p.y));
              }

              p.el.style.left = p.x + 'px';
              p.el.style.top = p.y + 'px';
            }
          }

          function isColliding(el1, el2) {
            const rect1 = el1.getBoundingClientRect();
            const rect2 = el2.getBoundingClientRect();
            return (
              rect1.left < rect2.right &&
              rect1.right > rect2.left &&
              rect1.top < rect2.bottom &&
              rect1.bottom > rect2.top
            );
          }

          function bossloop() {
            if (!boss) return;
            const joueurs = document.getElementById('pion');
            let playerX = 0;
            let playerY = 0;
            if (joueurs) {
              playerX = parseInt(joueurs.style.left, 10) || 0;
              playerY = parseInt(joueurs.style.top, 10) || 0;
            }

            const dx = playerX - bossposX;
            const dy = playerY - bossposY;
            const dist = Math.hypot(dx, dy) || 1;
            const avoidPlayer = dist < 250;
            const targetX = avoidPlayer ? bossposX - dx / dist : bossposX + dx * 0.02 + (Math.random() - 0.5) * 50;
            const targetY = avoidPlayer ? bossposY - dy / dist : bossposY + dy * 0.02 + (Math.random() - 0.5) * 50;

            const desiredX = targetX - bossposX;
            const desiredY = targetY - bossposY;
            const desiredLen = Math.hypot(desiredX, desiredY) || 1;
            bossVelX += (desiredX / desiredLen) * accel;
            bossVelY += (desiredY / desiredLen) * accel;

            const currentSpeed = Math.hypot(bossVelX, bossVelY);
            if (currentSpeed > maxSpeed) {
              bossVelX = (bossVelX / currentSpeed) * maxSpeed;
              bossVelY = (bossVelY / currentSpeed) * maxSpeed;
            }

            bossposX = Math.max(0, Math.min(1600, bossposX + bossVelX));
            bossposY = Math.max(0, Math.min(650, bossposY + bossVelY));
            boss.style.left = bossposX + 'px';
            boss.style.top = bossposY + 'px';

            if (joueurs) {
              for (let joueursi = 0; joueursi < projectiles.length; joueursi++) {
                const p = projectiles[joueursi];
                if (isColliding(joueurs, p.el)) {
                  joueurs.style.backgroundColor = 'green';
                  p.el.remove();
                  projectiles.splice(joueursi, 1);
                  console.timeEnd("timer");
                  console.timeLog("timer");
                  let durédufiht = console.timeLog("timer");
                  Swal.stopTimer();
                  Swal.resumeTimer();

                  Swal.fire({
                    title: "Oh no you loose !",
                    text: "You won't be able to play again u do ${timeLog(duréeCombatBoss)}'",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#2fc710",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "I'm soo bad",
                    width: 600,
                    padding: "3em",
                    color: "#cc0000",
                    background: "#fff url(/images/trees.png)",
                    backdrop: `
                      rgba(197, 0, 0, 0.42)
                    `,
                    showClass: { popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      ` },
                    hideClass: { popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      ` }
                  }).then((result) => {
                    if (result.isConfirmed) Swal.fire({
                      title: "Lets  retry !",
                      text: "Loading in progress ...",
                      icon: "success",
                      backdrop: `
                        rgba(55, 206, 25, 0.42)
                        no-repeat
                      `
                    });
                    setTimeout(function() {
                      window.location.reload();
                    }, 1080);
                  });
                  return;
                }
              }
            }

            shootCooldown -= 1;
            if (shootCooldown <= 0) {
              createProjectile();
              shootCooldown = 90;
            }

            updateProjectiles();
            requestAnimationFrame(bossloop);
          }

          requestAnimationFrame(bossloop);
        }, 4000);
      }, 1700);
    };
  }
});




 
 
