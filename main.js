let frameWeight=200;
let frame=0;
let x=300;
let y=600;
let r=60;
let velx=5;
let vely=2.5;
class Circle
{
    constructor(x,y,r,velx,vely)
    {
        this.x=x;
        this.y=y;
        this.r=r;
        this.velx=velx;
        this.vely=vely;
        this.color=color(random(0,255),random(0,255),random(0,255),100);
    }
    bounce()
    {
        if(this.y>innerHeight || this.y<0)
        {
            this.vely=-this.vely;
        }
        if(this.x>innerWidth || this.x<0) 
        {
            this.velx=-this.velx;
        }
    }
    update()
    {
        this.bounce();
        this.x+=this.velx;
        this.y+=this.vely;
        fill(this.color);
        circle(this.x,this.y,this.r);
    }
}
let circles=[];
function setup()
{
    createCanvas(innerWidth,innerHeight);
    fill(0,255,0);
    noStroke();
    for(let i=0;i<100;i++)
    {
        circles.push(new Circle(400,500,60,random(3,6),random(3,6)));
    }
    console.log(circles);
}
function draw()
{
    background(255,255,255);
    for(let i=0;i<100;i++)
    {
        circles[i].update();
    }
}
        