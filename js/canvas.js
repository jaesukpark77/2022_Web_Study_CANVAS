const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
ctx1.fillStyle = 'chocolate';
ctx1.fillRect(150,100,300,200);

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
ctx2.moveTo(0,0);ctx2.lineTo(600,400);
ctx2.strokeStyle = 'cornflowerblue';
ctx2.stroke();

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
ctx3.moveTo(300,50); ctx3.lineTo(50,350); ctx3.lineTo(550,350); ctx3.lineTo(300,50);
// ctx3.stroke(); -> 확인하기 위해서
ctx3.fillStyle = 'coral';
ctx3.fill();

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');
ctx4.shadowColor = 'black';
ctx4.shadowBlur = 50;
ctx4.shadowOffsetX = 20;
ctx4.shadowOffsetY = 30;
ctx4.fillStyle = 'cornflowerblue';
ctx4.fillRect(150,100,300,200);

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d');
ctx5.fillStyle='cornflowerblue';
ctx5.fillRect(150,100,200,100);
ctx5.globalAlpha = .8;
ctx5.fillStyle='coral';
ctx5.fillRect(200,150,200,100);
ctx5.globalAlpha =1;
ctx5.fillStyle='black';
ctx5.fillRect(250,200,200,100);

const canvas6 = document.getElementById('canvas6');
const ctx6 = canvas6.getContext('2d');
const gra1 = ctx6.createLinearGradient(0,0,canvas6.width,canvas6.height);
gra1.addColorStop(0, 'red');
gra1.addColorStop(0.5, 'white');
gra1.addColorStop(1, 'blue');
ctx6.fillStyle = gra1;
ctx6.fillRect(150,100,300,200);
// ctx6.fillRect(0,0,300,200);
// ctx6.fillRect(300,200,300,200);

const canvas7 = document.getElementById('canvas7');
const ctx7 = canvas7.getContext('2d');
const gra2 = ctx7.createLinearGradient(0,0,0,canvas7.height);
gra2.addColorStop(0, '#FDD5C0');
gra2.addColorStop(0.6, '#F46161');
gra2.addColorStop(1, '#FFCF62');
ctx7.fillStyle = gra2; 
ctx7.fillRect(0,0,canvas7.width,canvas7.height);
ctx7.strokeStyle = gra1;
ctx7.shadowColor = 'yellow'; ctx7.shadowBlur = 30;
ctx7.strokeRect(150,100,300,200);

const canvas8 = document.getElementById('canvas8');
const ctx8 = canvas8.getContext('2d');
const gra3 = ctx8.createRadialGradient(200,150,5,300,200,300);
gra3.addColorStop(0, '#E05FFA');
gra3.addColorStop(0.2, '#A154DE');
gra3.addColorStop(0.6, '#5654DE');
gra3.addColorStop(1, '#5F86FA');

// ctx8.globalAlpha = 1;
ctx8.fillStyle = gra3;
ctx8.fillRect(0,0,canvas8.width,canvas8.height);

const canvas9 = document.getElementById('canvas9');
const ctx9 = canvas9.getContext('2d');
const patImg1 = document.getElementById('pat1');
const myPat1 = ctx9.createPattern(patImg1, 'repeat');
ctx9.fillStyle = myPat1;
ctx9.fillRect(150,100,300,200);

const canvas10 = document.getElementById('canvas10');
const ctx10 = canvas10.getContext('2d');
const myImg1 = new Image();
myImg1.src = 'img/pattern2.png';
myImg1.onload = function(){
    const myPat2 = ctx10.createPattern(myImg1, 'repeat');
    ctx10.fillStyle = myPat2;
    ctx10.fillRect(0,0,canvas10.width,canvas10.height);
}

const canvas11 = document.getElementById('canvas11');
const ctx11 = canvas11.getContext('2d'); 
const gra4 = ctx11.createLinearGradient(0,0,0,canvas11.height);
const myImg2 = new Image();
myImg2.src = 'img/car.png';
myImg2.onload = function(){
    const myPat3 = ctx11.createPattern(myImg2, 'repeat');
    ctx11.fillStyle = myPat3;
    ctx11.fillRect(0,0,canvas11.width,canvas11.height);

    ctx11.moveTo(300,75);ctx11.lineTo(150,210);ctx11.lineTo(450,210);
    ctx11.moveTo(200,210);ctx11.lineTo(200,240);ctx11.lineTo(410,240);ctx11.lineTo(410,210); 
    ctx11.moveTo(200,240);ctx11.lineTo(200,330);ctx11.lineTo(270,330);ctx11.lineTo(270,240);
    ctx11.moveTo(330,240);ctx11.lineTo(330,330);ctx11.lineTo(410,330);ctx11.lineTo(410,240);
    
    gra4.addColorStop(0, '#B8D9C4');
    gra4.addColorStop(0.2, '#A4BFAE');
    gra4.addColorStop(0.5, '#97A69C');
    gra4.addColorStop(0.7, '#D2D9D4');
    gra4.addColorStop(1, '#F2F2F2');

    ctx11.fillStyle = gra4;
    ctx11.fill();
}

const canvas12 = document.getElementById('canvas12');
const ctx12 = canvas12.getContext('2d');
ctx12.lineWidth=10;ctx12.strokeStyle='coral';

ctx12.beginPath();
ctx12.lineCap = 'butt';
ctx12.moveTo(50,100);ctx12.lineTo(550,100);
ctx12.setLineDash([20]);
ctx12.stroke();

ctx12.beginPath();
ctx12.lineCap = 'round';
ctx12.moveTo(50,200);ctx12.lineTo(550,200);
ctx12.setLineDash([20,40]);
ctx12.stroke();

ctx12.beginPath();
ctx12.lineCap = 'square';
ctx12.moveTo(50,300);ctx12.lineTo(550,300);
//ctx12.setLineDash([20,40,30,50]);
ctx12.setLineDash([]); // 초기화 시킨다.
ctx12.stroke();

const canvas13 = document.getElementById('canvas13');
const ctx13 = canvas13.getContext('2d');
ctx13.lineWidth=20;ctx13.lineCap='round';
ctx13.strokeStyle = gra3;

ctx13.beginPath();
ctx13.moveTo(50,300);ctx13.lineTo(100,100);ctx13.lineTo(150,300);
ctx13.lineJoin = 'miter';
ctx13.stroke();

ctx13.beginPath();
ctx13.moveTo(250,300);ctx13.lineTo(300,100);ctx13.lineTo(350,300);
ctx13.lineJoin = 'round';
ctx13.stroke();

ctx13.beginPath();
ctx13.moveTo(450,300);ctx13.lineTo(500,100);ctx13.lineTo(550,300);
ctx13.lineJoin = 'bevel';
ctx13.stroke();

const canvas14 = document.getElementById('canvas14');
const ctx14 = canvas14.getContext('2d');
ctx14.fillStyle = gra3;
ctx14.fillRect(150,100,300,200);
ctx14.clearRect(200,150,50,50);

const canvas15 = document.getElementById('canvas15');
const ctx15 = canvas15.getContext('2d');
ctx15.beginPath();
ctx15.rect(50,50,300,200);
ctx15.fillStyle = gra1;
ctx15.fill();

ctx15.beginPath();
ctx15.moveTo(250,150);ctx15.lineTo(500,150);ctx15.lineTo(300,350);
ctx15.fillStyle = gra2;
ctx15.fill();

const canvas16 = document.getElementById('canvas16');
const ctx16 = canvas16.getContext('2d');
ctx16.lineWidth=8;ctx16.lineCap='round';ctx16.lineJoin='round';
ctx16.setLineDash([15]);

ctx16.beginPath();
ctx16.moveTo(50,50);ctx16.lineTo(50,350);ctx16.lineTo(250,350);
ctx16.strokeStyle = 'coral';
ctx16.stroke();

ctx16.beginPath();
ctx16.moveTo(350,50);ctx16.lineTo(350,350);ctx16.lineTo(550,350);
ctx16.closePath();
ctx16.strokeStyle = 'cornflowerblue';
ctx16.stroke();

const canvas17 = document.getElementById('canvas17');
const ctx17 = canvas17.getContext('2d');

ctx17.moveTo(300,50);ctx17.lineTo(50,350);ctx17.lineTo(550,350);
ctx17.closePath();
ctx17.stroke();
ctx17.clip();

ctx17.globalAlpha = .5;
ctx17.fillStyle  = gra3;
ctx17.fillRect(0,0,600,200);
ctx17.fillStyle= myPat1;
ctx17.fillRect(0,200,600,200);

const canvas18 = document.getElementById('canvas18');
const ctx18 = canvas18.getContext('2d');

ctx18.moveTo(300,100);
ctx18.moveTo(300,50); ctx18.lineTo(330,110); ctx18.lineTo(400,130); ctx18.lineTo(350,160); ctx18.lineTo(360,230); ctx18.lineTo(300,200); ctx18.lineTo(240,230); ctx18.lineTo(250,160); ctx18.lineTo(200,130); ctx18.lineTo(270,110);
ctx18.closePath();
ctx18.stroke();