// 1.
const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
ctx1.fillStyle = 'chocolate';
ctx1.fillRect(150,100,300,200);

// 2.
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
ctx2.moveTo(0,0);ctx2.lineTo(600,400);
ctx2.strokeStyle = 'cornflowerblue';
ctx2.stroke();

// 3.
const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
ctx3.moveTo(300,50); ctx3.lineTo(50,350); ctx3.lineTo(550,350); ctx3.lineTo(300,50);
// ctx3.stroke(); -> 확인하기 위해서
ctx3.fillStyle = 'coral';
ctx3.fill();

// 4.
const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');
ctx4.shadowColor = 'black';
ctx4.shadowBlur = 50;
ctx4.shadowOffsetX = 20;
ctx4.shadowOffsetY = 30;
ctx4.fillStyle = 'cornflowerblue';
ctx4.fillRect(150,100,300,200);

// 5.
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

// 6.
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

// 7.
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

// 8.
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

// 9.
const canvas9 = document.getElementById('canvas9');
const ctx9 = canvas9.getContext('2d');
const patImg1 = document.getElementById('pat1');
const myPat1 = ctx9.createPattern(patImg1, 'repeat');
ctx9.fillStyle = myPat1;
ctx9.fillRect(150,100,300,200);

// 10.
const canvas10 = document.getElementById('canvas10');
const ctx10 = canvas10.getContext('2d');
const myImg1 = new Image();
myImg1.src = 'img/pattern2.png';
myImg1.onload = function(){
    const myPat2 = ctx10.createPattern(myImg1, 'repeat');
    ctx10.fillStyle = myPat2;
    ctx10.fillRect(0,0,canvas10.width,canvas10.height);
}

// 11.
const canvas11 = document.getElementById('canvas11');
const ctx11 = canvas11.getContext('2d'); 
const gra4 = ctx11.createLinearGradient(0,0,0,canvas11.height);
gra4.addColorStop(0, '#B8D9C4');
gra4.addColorStop(0.2, '#A4BFAE');
gra4.addColorStop(0.5, '#97A69C');
gra4.addColorStop(0.7, '#D2D9D4');
gra4.addColorStop(1, '#F2F2F2');

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
    
    ctx11.fillStyle = gra4;
    ctx11.fill();
}

// 12.
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

// 13.
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

// 14.
const canvas14 = document.getElementById('canvas14');
const ctx14 = canvas14.getContext('2d');
ctx14.fillStyle = gra3;
ctx14.fillRect(150,100,300,200);
ctx14.clearRect(200,150,50,50);

// 15.
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

// 16.
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

// 17.
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

// 18.
const canvas18 = document.getElementById('canvas18');
const ctx18 = canvas18.getContext('2d');
const gra5 = ctx18.createLinearGradient(0,0,0,200);
gra5.addColorStop(0, '#A3A1A8');
gra5.addColorStop(0.3, '#7D6B7D');
gra5.addColorStop(0.5, '#FF665A');
gra5.addColorStop(0.7, '#FF8C64');
gra5.addColorStop(1, '#FFF587');

const myImg18 = new Image();
myImg18.src = 'img/pattern3.png';
myImg18.onload = function(){
    const myPat18 = ctx18.createPattern(myImg18, 'repeat');
    ctx18.fillStyle = myPat18;
    ctx18.fillRect(0,200,600,400);
}

ctx18.moveTo(300,100);ctx18.lineTo(270,170);ctx18.lineTo(200,180);ctx18.lineTo(260,215);ctx18.lineTo(235,290);ctx18.lineTo(300,240);
ctx18.lineTo(365,290);ctx18.lineTo(340,215);ctx18.lineTo(400,180);ctx18.lineTo(330,170);
ctx18.closePath();
ctx18.stroke();
ctx18.clip();

ctx18.fillStyle  = gra5;
ctx18.fillRect(0,0,600,200);

// 19.
const canvas19 = document.getElementById('canvas19');
const ctx19 = canvas19.getContext('2d');
ctx19.beginPath();
ctx19.moveTo(50,100);ctx19.lineTo(150,100);
ctx19.quadraticCurveTo(350,350,450,100);ctx19.lineTo(550,100);
ctx19.lineTo(550,350);ctx19.lineTo(50,350);
ctx19.closePath();
ctx19.lineWidth=5;ctx19.lineJoin='round';ctx19.lineCap='round';
ctx19.setLineDash([10]);
ctx19.strokeStyle = gra2;
ctx19.stroke();

// 20.
const canvas20 = document.getElementById('canvas20');
const ctx20 = canvas20.getContext('2d');
ctx20.beginPath();
ctx20.moveTo(50,100);
ctx20.bezierCurveTo(50,450,550,450,550,100);
ctx20.bezierCurveTo(550,250,50,250,50,100);
ctx20.fillStyle = gra2;
ctx20.fill();

// 21
const canvas21 = document.getElementById('canvas21');
const ctx21 = canvas21.getContext('2d');
const gra21 = ctx21.createLinearGradient(0,0,canvas21.width,canvas21.height);
gra21.addColorStop(0,'#850037');
gra21.addColorStop(0.2,'#FF1979');
gra21.addColorStop(0.4,'#D10056');
gra21.addColorStop(0.8,'#008506');
gra21.addColorStop(1,'#00D10A');

const myImg21 = new Image();
myImg21.src = 'img/love_white.png';
myImg21.onload = function(){
    const myPat21 = ctx21.createPattern(myImg21, 'repeat');
    ctx21.fillStyle = myPat21;
    ctx21.fillRect(0,0,600,400);
}

ctx21.beginPath();
ctx21.moveTo(0,100);
ctx21.bezierCurveTo(0,50,100,50,100,100);
ctx21.bezierCurveTo(100,150,200,150,200,100);
ctx21.bezierCurveTo(200,50,300,50,300,100);
ctx21.bezierCurveTo(300,150,400,150,400,100);
ctx21.bezierCurveTo(400,50,500,50,500,100);
ctx21.bezierCurveTo(500,150,600,150,600,100);
ctx21.lineTo(600,300);
ctx21.bezierCurveTo(600,250,500,250,500,300);
ctx21.bezierCurveTo(500,350,400,350,400,300);
ctx21.bezierCurveTo(400,250,300,250,300,300);
ctx21.bezierCurveTo(300,350,200,350,200,300);
ctx21.bezierCurveTo(200,250,100,250,100,300);
ctx21.bezierCurveTo(100,350,0,350,0,300);
ctx21.closePath();
ctx21.clip();

ctx21.fillStyle = gra21;
ctx21.fillRect(0,0,600,400);

// 22.
const canvas22 = document.getElementById('canvas22');
const ctx22 = canvas22.getContext('2d');
ctx22.beginPath();
ctx22.arc(300,200,100,0,Math.PI*1.5);
ctx22.stroke();

// 23.
const canvas23 = document.getElementById('canvas23');
const ctx23 = canvas23.getContext('2d');
ctx23.beginPath();
ctx23.moveTo(300,200);
ctx23.arc(300,200,100,0,Math.PI*1.5,true);
ctx23.closePath();
ctx23.stroke();

// 24.
const canvas24 = document.getElementById('canvas24');
const ctx24 = canvas24.getContext('2d');
ctx24.beginPath();
ctx24.arc(300,200,100,0,Math.PI*2);
ctx24.moveTo(370,200);ctx24.arc(300,200,70,0,Math.PI);
ctx24.moveTo(270,180);ctx24.arc(250,180,20,0,Math.PI,true);
ctx24.moveTo(370,180);ctx24.arc(350,180,20,0,Math.PI,true);
ctx24.moveTo(200,200);
ctx24.bezierCurveTo(170,200,170,250,190,250);
ctx24.bezierCurveTo(220,250,220,300,180,300);

ctx24.moveTo(400,200);
ctx24.bezierCurveTo(430,200,430,250,410,250);
ctx24.bezierCurveTo(380,250,380,300,420,300);
ctx24.moveTo(230,130);ctx24.lineTo(200,100)
ctx24.moveTo(260,110);ctx24.lineTo(240,70);
ctx24.moveTo(300,100);ctx24.lineTo(300,50);
ctx24.moveTo(340,110);ctx24.lineTo(360,70);
ctx24.moveTo(370,130);ctx24.lineTo(400,100);

ctx24.moveTo(230,170);ctx24.lineTo(220,160);
ctx24.moveTo(250,160);ctx24.lineTo(250,145);
ctx24.moveTo(270,170);ctx24.lineTo(280,160);
ctx24.moveTo(330,170);ctx24.lineTo(320,160);
ctx24.moveTo(350,160);ctx24.lineTo(350,145);
ctx24.moveTo(370,170);ctx24.lineTo(380,160);
ctx24.lineWidth=8 ;ctx24.lineCap='round';
ctx24.strokeStyle=gra3;
ctx24.stroke();

// 25.
const canvas25 = document.getElementById('canvas25');
const ctx25 = canvas25.getContext('2d');
ctx25.beginPath();
ctx25.moveTo(150,100);
ctx25.lineTo(450,100);ctx25.arcTo(500,100,500,150,50);
ctx25.lineTo(500,250);ctx25.arcTo(500,300,450,300,50);
ctx25.lineTo(150,300);ctx25.arcTo(100,300,100,250,50);
ctx25.lineTo(100,150);ctx25.arcTo(100,100,150,100,50);
ctx25.lineWidth=50;ctx25.strokeStyle=gra21;
ctx25.stroke();

// 26.
const canvas26 = document.getElementById('canvas26');
const ctx26 = canvas26.getContext('2d');
ctx26.rect(100,100,400,200);
ctx26.strokeStyle = gra2;ctx26.lineWidth=50;ctx26.lineJoin='round';
if(ctx26.isPointInPath(150,150)){
    ctx26.stroke();
}

// 27.
const canvas27 = document.getElementById('canvas27');
const ctx27 = canvas27.getContext('2d');
const w27 = canvas27.width;
const h27 = canvas27.height;

ctx27.fillStyle='#153B40';ctx27.fillRect(0,0,w27/2,h27/2);
ctx27.fillStyle='#1E5359';ctx27.fillRect(w27/2,0,w27/2,h27/2);
ctx27.fillStyle='#77A1A6';ctx27.fillRect(0,h27/2,w27/2,h27/2);
ctx27.fillStyle='#8C4E03';ctx27.fillRect(w27/2,h27/2,w27/2,h27/2);

ctx27.fillStyle='#fff';ctx27.globalAlpha=0.2;
for(let i=1;i<7;i++){
    ctx27.beginPath();
    ctx27.arc(w27/2,h27/2,30*i,0,Math.PI*2);
    ctx27.fill();
}

// 28.
const canvas28 = document.getElementById('canvas28');
const ctx28 = canvas28.getContext('2d');

ctx28.lineCap='round';ctx28.strokeStyle=gra3;
for(let i=0;i<10;i++){
    ctx28.lineWidth=2+i;ctx28.setLineDash([i*6]);
    ctx28.beginPath();
    ctx28.moveTo(100+i*50,50);
    ctx28.lineTo(50+i*50,350);
    ctx28.stroke();
}

// 29.
const canvas29 = document.getElementById('canvas29');
const ctx29 = canvas29.getContext('2d');
const w29 = canvas29.width;
const h29 = canvas29.height;

ctx29.fillStyle='#657362';ctx29.fillRect(0,0,w29/2,h29/2);
ctx29.fillStyle='#F2B56B';ctx29.fillRect(w29/2,0,w29/2,h29/2);
ctx29.fillStyle='#593E25';ctx29.fillRect(0,h29/2,w29/2,h29/2);
ctx29.fillStyle='#8C6746';ctx29.fillRect(w29/2,h29/2,w29/2,h29/2);

ctx29.fillStyle='#fff';ctx29.globalAlpha=0.2;
for(let i=0;i<5;i++){
    ctx29.beginPath();
    ctx29.rect(250-(50*i),150-(50*i),100*(i+1),100*(i+1));
    ctx29.fill();
}

// 30.
const canvas30 = document.getElementById('canvas30');
const ctx30 = canvas30.getContext('2d');

ctx30.strokeRect(50,50,100,100);
ctx30.scale(2,2);
ctx30.strokeStyle='red';ctx30.strokeRect(50,50,100,100);
ctx30.strokeStyle='green';ctx30.strokeRect(100,100,100,100);
ctx30.scale(0.5,0.5);
ctx30.strokeStyle='blue';ctx30.strokeRect(50,50,100,100);

// 31.
const canvas31 = document.getElementById('canvas31');
const ctx31 = canvas31.getContext('2d');
ctx31.rotate((Math.PI/180)*45);
ctx31.fillStyle = 'rgba(0,0,0,.5)';
ctx31.fillRect(250,150,100,100);

// 32.
const canvas32 = document.getElementById('canvas32');
const ctx32 = canvas32.getContext('2d');

ctx32.globalAlpha = .5;
ctx32.fillRect(0,0,100,50);

ctx32.translate(100,100);
ctx32.fillStyle='coral';ctx32.fillRect(0,0,100,50);
ctx32.translate(-100,-100);
ctx32.fillStyle='cornflowerblue';ctx32.fillRect(100,50,100,50);

// 33.
const canvas33 = document.getElementById('canvas33');
const ctx33 = canvas33.getContext('2d');

ctx33.fillStyle='cornflowerblue';ctx33.fillRect(150,50,300,300);
ctx33.save();

ctx33.fillStyle='coral';ctx33.fillRect(200,100,200,200);
ctx33.save();

ctx33.fillStyle='bisque';ctx33.fillRect(250,150,100,100);

ctx33.restore();ctx33.fillRect(275,175,50,50);
ctx33.restore();ctx33.fillRect(290,190,20,20);

// 34.
const canvas34 = document.getElementById('canvas34');
const ctx34 = canvas34.getContext('2d');
ctx34.globalAlpha = .5;

ctx34.save();
ctx34.fillStyle='cornflowerblue';ctx34.fillRect(150,150,100,100);
ctx34.rotate(25*(Math.PI/180));
ctx34.fillStyle='coral';ctx34.fillRect(150,150,100,100);
ctx34.restore();

ctx34.fillStyle='cornflowerblue';ctx34.fillRect(350,150,100,100);
ctx34.translate(400,200);
ctx34.rotate(25*(Math.PI/180));
ctx34.translate(-400,-200);
ctx34.fillStyle='coral';ctx34.fillRect(350,150,100,100);

// 35.
const canvas35 = document.getElementById('canvas35');
const ctx35 = canvas35.getContext('2d');
for(let i=0;i<canvas35.height/50;i++){
    for(let j=0;j<canvas35.width/50;j++){
        ctx35.save();
        ctx35.fillStyle = `rgb(${30*j}, ${255-(30*i)}, 255)`;
        ctx35.translate(10+j*50,10+i*50);
        ctx35.fillRect(0,0,30,30);
        ctx35.restore();
    }
}

// 36.
const canvas36 = document.getElementById('canvas36');
const ctx36 = canvas36.getContext('2d');
for(let i=0;i<canvas36.height/50;i++){
    for(let j=0;j<canvas36.width/50;j++){
        ctx36.save();
        ctx36.beginPath();
        ctx36.fillStyle = `rgb(255, ${30*j}, ${255-(30*i)})`;
        ctx36.translate(j*50,i*50);
        ctx36.arc(25,25,15,0,Math.PI*2);
        ctx36.fill();
        ctx36.restore();
    }
}

// 37.
const canvas37 = document.getElementById('canvas37');
const ctx37 = canvas37.getContext('2d');
ctx37.font = 'bold 7em Arial,sans-serif';
ctx37.fillStyle=gra3;
ctx37.fillText('Canvas',100,240);

// 38.
const canvas38 = document.getElementById('canvas38');
const ctx38 = canvas38.getContext('2d');
ctx38.font = 'bold 7em Arial,sans-serif';
ctx38.strokeStyle=gra3;ctx38.lineWidth=5;
ctx38.strokeText('Canvas',100,240);

// 39.
const canvas39 = document.getElementById('canvas39');
const ctx39 = canvas39.getContext('2d');
const x39 = canvas39.width/2;
const y39 = canvas39.height/5-10;
const alignText=['start','end','left','center','right'];

ctx39.strokeStyle = 'red';
ctx39.moveTo(x39,0);ctx39.lineTo(x39,canvas39.height);
ctx39.stroke();
ctx39.font = 'bold 20px Arial,sans-serif';

for(let i=0;i<5;i++){
    ctx39.textAlign = alignText[i];
    ctx39.fillText(alignText[i],x39,y39*(i+1))
}

// ctx39.textAlign='start';
// ctx39.fillText('start',x39,40);
// ctx39.textAlign='end';
// ctx39.fillText('end',x39,120);
// ctx39.textAlign='left';
// ctx39.fillText('left',x39,200);
// ctx39.textAlign='center';
// ctx39.fillText('center',x39,280);
// ctx39.textAlign='right';
// ctx39.fillText('right',x39,360);

// 40.
const canvas40 = document.getElementById('canvas40');
const ctx40 = canvas40.getContext('2d');
const x40 = canvas40.width/5;
const y40 = canvas40.height/2;

ctx40.strokeStyle = 'red';
ctx40.moveTo(0,y40);ctx40.lineTo(canvas40.width,y40);
ctx40.stroke();

ctx40.font='bold 20px Arial,sans-serif';
ctx40.textAlign='center';

const baselineText = ['top','bottom','middle','alphabetic','hanging'];
for(let i=0;i<baselineText.length;i++){
    ctx40.textBaseline = baselineText[i];
    ctx40.fillText(baselineText[i],x40*(i+1)-70,y40);
}

// ctx40.textBaseline='top';
// ctx40.fillText('top',x40-50,y40);
// ctx40.textBaseline='bottom';
// ctx40.fillText('bottom',x40*2-50,y40);
// ctx40.textBaseline='middle';
// ctx40.fillText('middle',x40*3-50,y40);
// ctx40.textBaseline='alphabetic';
// ctx40.fillText('alphabetic',x40*4-50,y40);
// ctx40.textBaseline='hanging';
// ctx40.fillText('hanging',x40*5-50,y40);

// 41.
const canvas41 = document.getElementById('canvas41');
const ctx41 = canvas41.getContext('2d');
const txt41 = 'Canvas';
ctx41.textAlign='center';
ctx41.font='80px Arial,sans-serif';
ctx41.fillText(txt41,canvas41.width/2,150);
//ctx41.font='70px Arial,sans-serif';
ctx41.fillText(`width : ${ctx41.measureText(txt41).width}`, canvas41.width/2,250);

// 42.
const canvas42 = document.getElementById('canvas42');
const ctx42 = canvas42.getContext('2d');
const gra42 = ctx42.createLinearGradient(0,0,canvas42.width,canvas42.height);
const graColor = ['#F25EB0','#B9BF04','#F2B705','#F27405','#F23005','#F25EB0'];
gra42.addColorStop(0.2,graColor[0]);
gra42.addColorStop(0.3,graColor[1]);
gra42.addColorStop(0.4,graColor[2]);
gra42.addColorStop(0.6,graColor[3]);
gra42.addColorStop(0.7,graColor[4]);
gra42.addColorStop(0.8,graColor[5]);

const graBg = ctx42.createLinearGradient(canvas42.width,0,0,canvas42.height);
const graBgColor = ['#494846', '#636057','#858377']
graBg.addColorStop(0,graBgColor[0]);
graBg.addColorStop(.2,graBgColor[1]);
graBg.addColorStop(.4,graBgColor[2]);
graBg.addColorStop(.6,graBgColor[1]);
graBg.addColorStop(1,graBgColor[0]);


ctx42.fillStyle = graBg;
ctx42.fillRect(0,0,canvas42.width,canvas42.height);

ctx42.font = 'bold 6rem Arial,sans-serif';
ctx42.textAlign='center';ctx42.textBaseline='middle';
ctx42.strokeStyle = gra42;
ctx42.strokeText('Messi', canvas42.width/2,canvas42.height/2);

// 43.
const canvas43 = document.getElementById('canvas43');
const ctx43 = canvas43.getContext('2d');
const img1 = document.getElementById('smile1');
ctx43.drawImage(img1,50,50);

// 44.
const canvas44 = document.getElementById('canvas44');
const ctx44 = canvas44.getContext('2d');
const img2 = new Image();
const img3 = new Image();
const img4 = new Image();
img2.src='img/smile1.png';
img3.src='img/smile2.png';
img4.src='img/smile3.png';
img4.onload = function(){
    ctx44.drawImage(img2,100,50);
    ctx44.drawImage(img3,250,150);
    ctx44.drawImage(img4,400,250);
}

// 45.
const canvas45 = document.getElementById('canvas45');
const ctx45 = canvas45.getContext('2d');
const img5 = new Image();
img5.src = 'https://ssl.pstatic.net/tveta/libs/1371/1371025/4883850733f210c59815_20220119103334335.jpg'
const img5w = img5.width;
const img5h = img5.height;
img5.onload= function(){
    ctx45.drawImage(img5,(canvas45.width-img5w/3)/2,(canvas45.height-img5h/3)/2,img5w/3,img5h/3);
}

// 46.
const canvas46 = document.getElementById('canvas46');
const ctx46 = canvas46.getContext('2d');
const w46 = canvas46.width;
const h46 = canvas46.height;
const img6 = new Image();
img6.src="img/flutter_dash.svg";
const img6w = img6.width;
const img6h = img6.height;
img6.onload = function(){
    ctx46.drawImage(img6,(w46-img6w*10)/2,(h46-img6h*10)/2,img6w*10,img6h*10);
}

// 47.
const canvas47 = document.getElementById('canvas47');
const ctx47 = canvas47.getContext('2d');
const img7 = new Image();
img7.src="img/royal-mile-ge3dbc2ed1_640.jpg"
img7.onload = function(){
    ctx47.drawImage(img7,400,200,200,200,200,100,190,190);
}

// 48.
const canvas48 = document.getElementById('canvas48');
const ctx48 = canvas48.getContext('2d');
const imgData1 = ctx48.createImageData(100,100);

imgData1.data[0] = 255;
imgData1.data[1] = 0;
imgData1.data[2] = 0;
imgData1.data[3] = 255;

imgData1.data[4] = 0;
imgData1.data[5] = 0;
imgData1.data[6] = 0;
imgData1.data[7] = 255;

imgData1.data[8] = 0;
imgData1.data[9] = 255;
imgData1.data[10] = 0;
imgData1.data[11] = 255;

ctx48.putImageData(imgData1,50,50);

// 49.
const canvas49 = document.getElementById('canvas49');
const ctx49 = canvas49.getContext('2d');
const imgData2 = ctx49.createImageData(100,100);

for(let i=0;i<imgData2.data.length;i+=4){
    imgData2.data[i+0] = 255;
    imgData2.data[i+1] = 0;
    imgData2.data[i+2] = 0;
    imgData2.data[i+3] = 100;
}

ctx49.putImageData(imgData2,50,50);

// 50.
const canvas50 = document.getElementById('canvas50');
const ctx50 = canvas50.getContext('2d');
const imgData3 = ctx50.createImageData(400,300);
// alert(`imgData 가로 값 : ${imgData3.width}`);

for(let i=0;i<imgData3.data.length;i+=20){
    imgData3.data[i+0] = 255;
    imgData3.data[i+1] = 0;
    imgData3.data[i+2] = 0;
    imgData3.data[i+3] = 100;
}

ctx50.putImageData(imgData3,100,50);

// 51.
const canvas51 = document.getElementById('canvas51');
const ctx51 = canvas51.getContext('2d');
ctx51.fillStyle = 'rgba(255,0,0,.5)';
ctx51.fillRect(200,50,200,100);

const imgData4 = ctx51.getImageData(100,50,200,100);
ctx51.putImageData(imgData4,100,200);

// 52.
const canvas52 = document.getElementById('canvas52');
const ctx52 = canvas52.getContext('2d');
const img8 = document.getElementById('structure');
ctx52.drawImage(img8,0,0);

const imgData5 = ctx52.getImageData(0,0,canvas52.width,canvas52.height);
for(let i=0;i<imgData5.data.length;i+=4){
    imgData5.data[i+0] = 255 - imgData5.data[i+0];
    imgData5.data[i+1] = 255 - imgData5.data[i+1];
    imgData5.data[i+2] = 255 - imgData5.data[i+2];
    imgData5.data[i+3] = 255;
}
ctx52.putImageData(imgData5,0,0);

// 53.
const canvas53 = document.getElementById('canvas53');
const ctx53 = canvas53.getContext('2d');

ctx53.fillStyle = 'coral';
ctx53.fillRect(0,50,200,200);

ctx53.fillStyle = 'cornflowerblue';
ctx53.fillRect(20,70,160,160);

const imgData6 = ctx53.getImageData(0,50,200,200);
ctx53.putImageData(imgData6,250,150,50,50,100,100);

// 54.
const canvas54 = document.getElementById('canvas54');
const ctx54 = canvas54.getContext('2d');
const img9 = document.getElementById('dream');
ctx54.drawImage(img9,0,0);

ctx54.shadowColor = '#fff';
ctx54.shadowBlur = 10;

ctx54.font = 'bold 3rem Supermercado One,cursive';
ctx54.strokeStyle = gra1;
ctx54.strokeText('DREAM COME TRUE',20,380);

// 55.
const canvas55 = document.getElementById('canvas55');
const ctx55 = canvas55.getContext('2d');

const path1 = new Path2D();
path1.rect(50,100,200,200);

const path2 = new Path2D(path1);
path2.moveTo(550,200);
path2.arc(450,200,100,0,2*Math.PI);

ctx55.fillStyle = gra2;
ctx55.strokeStyle = 'rgba(255,255,255,.4)';ctx55.lineWidth = 20;
ctx55.fill(path2);
ctx55.stroke(path2);

// 56.
const canvas56 = document.getElementById('canvas56');
const ctx56 = canvas56.getContext('2d');
const path3 = new Path2D('M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z');
ctx56.fill(path3);

// 57.
const canvas57 = document.getElementById('canvas57');
const ctx57 = canvas57.getContext('2d');
let x57 = 0; let y57 = 0;
ctx57.fillStyle = gra2;

requestAnimationFrame(moveRect);

function moveRect(){
    ctx57.clearRect(0,0,canvas57.width,canvas57.height);
    ctx57.fillRect(x57+80,y57,50+x57,50+x57);
    x57++;y57++;
    if(y57>=canvas57.height){
        x57=0;y57=0;
    }
    requestAnimationFrame(moveRect);
}

// 58.
const canvas58 = document.getElementById('canvas58');
const ctx58 = canvas58.getContext('2d');

let r58 = 0; let x58 = 0; let y58=0;
ctx58.fillStyle = gra21;ctx58.lineWidth = 5;ctx58.strokeStyle = gra42;

requestAnimationFrame(moveArc);

function moveArc(){
    ctx58.clearRect(0,0,canvas58.width,canvas58.height);
    ctx58.beginPath();
    ctx58.arc(x58,y58,r58,0,Math.PI*2);
    x58++;y58++;r58++;
    ctx58.fill();
    ctx58.stroke();

    if(y58 >= canvas58.height){
        x58=0;y58=0;r58=0; 
    }
    requestAnimationFrame(moveArc);
}

// 59.
const canvas59 = document.getElementById('canvas59');
const ctx59 = canvas59.getContext('2d');
let d59 = 1; let s59 = 0;

requestAnimationFrame(rotateRect);
function rotateRect(){
    ctx59.save();
    ctx59.fillStyle= 'rgba(255,255,255,.1)';
    ctx59.fillRect(0,0,canvas59.width,canvas59.height);
    ctx59.fillStyle = gra21;
    ctx59.translate(300,200);
    ctx59.rotate((Math.PI/180)*d59);
    ctx59.fillRect(-((100+s59)/2),-50,100+s59,100);
    ctx59.restore();
    d59++;s59++;
    if(s59 >= 200){
        s59 = 200;
    }

    requestAnimationFrame(rotateRect);
}

// 60.
const canvas60 = document.getElementById('canvas60');
const ctx60 = canvas60.getContext('2d');
let num1=0;

blur();

function blur(){
    ctx60.fillStyle = 'rgba(0,0,0,0.1)';
    ctx60.fillRect(0,0,canvas60.width,canvas60.height);

    ctx60.fillStyle = gra3;
    ctx60.beginPath();
    ctx60.arc(num1+100,num1,40,0,Math.PI*2);
    ctx60.fill();

    ctx60.beginPath();
    ctx60.arc(num1+400,num1,30,0,Math.PI*2);
    ctx60.fill();

    ctx60.beginPath();
    ctx60.arc(num1+50,num1+300,15,0,Math.PI*2);
    ctx60.fill();

    num1++;
    if(num1 >= canvas60.height){
        num1 = 0;
    }
    requestAnimationFrame(blur);
}

// 61.
const canvas61=document.getElementById('canvas61');
const ctx61=canvas61.getContext('2d');

let num61=0;

function blur61(){
    ctx61.fillStyle='rgba(0,0,0)';
    ctx61.fillRect(0,0,canvas61.width,canvas61.height);

    ctx61.fillStyle=gra42;
    ctx61.shadowColor='#fff';
    ctx61.shadowBlur = 30;

    ctx61.fillRect(num61+10,num61,80,80);

    ctx61.fillRect(num61+220,num61+120,40,40);

    ctx61.fillRect(num61+350,num61+60,100,100);

    num61++;
    if(num61>=canvas60.height){
        num61=0;
    }

    requestAnimationFrame(blur61);
}
blur61();

// 62.
const canvas62 = document.getElementById('canvas62');
const ctx62 = canvas62.getContext('webgl');
ctx62.clearColor(1,0.3,0,.5);
ctx62.clear(ctx62.COLOR_BUFFER_BIT);

// Three
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 50, canvas62.width / canvas62.height, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( canvas62.width, canvas62.height );
document.getElementById('three').appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 'coral' } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.05;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();

// 63. jCanvas
$('#canvas63').drawArc({
    fillStyle: 'cornflowerblue',
    x: 150, y: 150,
    radius: 100
  }).drawArc({
    fillStyle: 'coral',
    x: 300, y: 200,
    radius: 150
  }).drawPolygon({
    fillStyle: 'gold',
    strokeStyle: 'black',
    strokeWidth: 15,
    x: 450, y: 250,
    radius: 150,
    sides: 3,
    concavity: 0.5,
    rotate: 90
  });

  // riples
  $('#rip').ripples({
	resolution: 202,
	dropRadius: 50,
	perturbance: 0.5,
});
