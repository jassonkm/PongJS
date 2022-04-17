const Application = PIXI.Application;
const app = new Application({ width : 1600,
    heigh : 1800,
    backgroundColor: 0xA35197
});

document.body.appendChild(app.view);

let directionX = 1;
let directionY = 1;

const stadium = new PIXI.Graphics();
stadium.beginFill(0x4D9F6E)
.lineStyle( 10, 0x4D9F6E, 1)
.drawRoundedRect(70, 40, 1400, 500)
.endFill();

const ball = new PIXI.Graphics();
ball.beginFill(0xF0F0EE)
.drawCircle(300, 250, 10)
.endFill();

app.stage.addChild(stadium);
app.stage.addChild(ball);

app.ticker.add(()=> {
    if(ball.x >  90) directionX = -1;
    if(ball.x < -190) directionX =  1;
    ball.x += directionX*5;

    if(ball.y >  90) directionY = -1;
    if(ball.y < -90) directionY =  1;
    ball.y += directionY*5;
    console.log(ball.x);
});
