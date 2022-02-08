const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Particle(x,y){
    this.x = x;
    this.y = y;
    this.vol = {
        x : (Math.random()*2),
        y : (Math.random()*2)
    }
    this.radius = (Math.random()*8)+2;
    this.draw = () => {
        ctx.beginPath();
        ctx.lineWidth = '10';
        ctx.fillStyle = 'rgba(238,230,250,.5)';
        ctx.strokeStyle = 'rgba(255,255,255,.2)';
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
    }
    this.update = () => {
        this.x += this.vol.x;
        this.y += this.vol.y;
        if(this.x-this.radius < 10 || this.x+this.radius > canvas.width){
            this.vol.x = -this.vol.x;
        }
        if(this.y-this.radius < 10 || this.y+this.radius > canvas.height){
            this.vol.y = -this.vol.y;
        }
        this.draw();
    }
    this.update();
}

let particleArray = [];
for(let i=0; i<70; i++){
    const x = Math.random()*canvas.width;
    const y = Math.random()*canvas.height;
    particleArray.push(new Particle(x,y));
}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0; i<particleArray.length; i++){
        particleArray[i].update();
    }
}

window.onresize = function(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}

animate();