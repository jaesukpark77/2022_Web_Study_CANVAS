const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
ctx1.fillStyle = 'chocolate'
ctx1.fillRect(150,100,300,200);

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
ctx2.moveTo(0,0);ctx2.lineTo(600,400);
ctx2.strokeStyle = 'cornflowerblue'
ctx2.stroke();

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
ctx3.moveTo(300,50); ctx3.lineTo(50,350); ctx3.lineTo(550,350); ctx3.lineTo(300,50);
// ctx3.stroke(); -> 확인하기 위해서
ctx3.fillStyle = 'coral';
ctx3.fill()