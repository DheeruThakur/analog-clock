setInterval(() => {

 let d = new Date();
 let hTime = d.getHours();
 let mTime = d.getMinutes();
 let sTime = d.getSeconds();

 let hRotation = 30*hTime + mTime/2;
 let mRotation = 6*mTime;
 let sRotation = 6*sTime;

 document.getElementById('hours').style.transform = `rotate(${hRotation}deg)`;
 document.getElementById('minutes').style.transform = `rotate(${mRotation}deg)`;
 document.getElementById('seconds').style.transform = `rotate(${sRotation}deg)`;

} , 1000);