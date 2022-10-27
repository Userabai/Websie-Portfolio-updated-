

           const canvas = document.getElementById('canvas1');

           const ctx = canvas.getContext('2d');


           const canvas_width =  canvas.width = 1200;

           const canvas_height =  canvas.height = 840;


           const playerImage = new Image ();

           playerImage.src = "./img/shadow_dog.png";

           const spriteWidth = 575;

           const spriteHeight = 523;

           let frameX = 0;

           let frameY = 6;

           let gameFrame = 0;

           const staggerFrame = 0;



            function animate () {

                ctx.clearRect(0,0,canvas_width,canvas_height)

             //   ctx.fillRect (50,50,100,100)

             //   ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh);

                ctx.drawImage(playerImage,frameX * spriteWidth,frameY * spriteHeight,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);

                if (gameFrame % stra == 0) {

                    if (frameX < 6) frameX ++;

                    else frameX = 0;

                    gameFrame++;

                }

                requestAnimationFrame(animate);

            };

            animate();






























       //    const canvas_height = canvas.width = 1250;

       //    const canvas_width = canvas.height = 800;


         //  const playerImage =  new Image ();

        //   playerImage.src = 'shadow.dog.png';

       /*    function animate () {

                ctx.clearRect(20,20,canvas_width,canvas_height);

                ctx.fillRect(50,50,100,100);

           }

           animate ();

        */

 












































