const pigpio = require('pigpio');
const Gpio = pigpio.Gpio;
var dateNow= new Date()
var date = dateNow.getMilliseconds();

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}



//declaro los pines y los activo
const outPin0 = 13;
const output0 = new Gpio(outPin0, {mode: Gpio.OUTPUT});
output0.digitalWrite(1);

const outPin1 = 12;
const output1 = new Gpio(outPin1, {mode: Gpio.OUTPUT}); 
output1.digitalWrite(1);
pigpio.waveClear();
//creo las ondas
let firstWaveForm = [];
let secondWaveForm = [];
let envio = [];

//26bits de pruebas

//let wiegand26bits= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]; //rif 27

//let wiegand26bits= [0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0]; //rif 27

//let wiegand26bits= [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1]; //rif 27exp-1



//let wiegand26bits= [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0];

let wiegand26bits= [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1]

/*
let wiegand26bits=[
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1, 1, 0, 1,
  1, 1
  ]
  */


//let wiegand26bits= [0,1,0,1,0,1];
//let wiegand26bits= [0,0,0,1,0,1]

//let wiegand26bits= [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0]; 

//let wiegand26bits= [1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0]; //funciona con 4 17 a 14 bits con 1000 usDelay
//let wiegand26bits= [0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

console.log(1);
 //sleep(5000);
  console.log(2);
  
  
//wiegand green 0
let x = 0
for (wiegand26bits[x]; x < wiegand26bits.length; x++) {
  if (wiegand26bits[x]=== 0) {
    firstWaveForm.push({ gpioOn: outPin0, gpioOff: 0, usDelay: 1000});
    //firstWaveForm.push({ gpioOn: 0, gpioOff: outPin0, usDelay: 1000 });
  } else {
    firstWaveForm.push({ gpioOn: 0, gpioOff: outPin0, usDelay: 1000 });
    //firstWaveForm.push({ gpioOn: outPin0, gpioOff: 0, usDelay: 5000});
  }
}
 console.log(firstWaveForm);
 //creo las ondas para enviar
pigpio.waveAddGeneric(firstWaveForm);
let firstWaveId = pigpio.waveCreate();
 console.log(firstWaveId);
 


//wiegand white 1
let y = 0
for (wiegand26bits[y]; y < wiegand26bits.length; y++) {
  if (wiegand26bits[y]!== 0) {
    secondWaveForm.push({ gpioOn: outPin1, gpioOff: 0, usDelay: 1000});
    //secondWaveForm.push({ gpioOn: 0, gpioOff: outPin1, usDelay: 1000});
  } else {
    secondWaveForm.push({ gpioOn: 0, gpioOff: outPin1, usDelay: 1000});
    //secondWaveForm.push({ gpioOn: outPin1, gpioOff: 0, usDelay: 1000});
  }
}
 //creo las ondas para enviar
pigpio.waveAddGeneric(secondWaveForm);
console.log(secondWaveForm);
let secondWaveId = pigpio.waveCreate();
 console.log(secondWaveId);

///envio en ondas separadas
/*firstWaveForm.push({ gpioOn: 0, gpioOff: outPin0, usDelay: 1000},
    { gpioOn: outPin0, gpioOff: 0, usDelay: 1000},
    { gpioOn: outPin0, gpioOff: 0, usDelay: 1000},
    { gpioOn: outPin0, gpioOff: 0, usDelay: 1000},
    { gpioOn: outPin0, gpioOff: 0, usDelay: 1000},
    { gpioOn: outPin0, gpioOff: 0, usDelay: 1000},
    { gpioOn: outPin0, gpioOff: 0, usDelay: 1000},
    { gpioOn: outPin0, gpioOff: 0, usDelay: 1000});
    
    console.log(firstWaveForm);
    pigpio.waveAddGeneric(firstWaveForm);
let firstWaveId = pigpio.waveCreate();
 console.log(firstWaveId);

   secondWaveForm.push({ gpioOn: outPin1, gpioOff: 0, usDelay: 1000},
   { gpioOn: outPin1, gpioOff: 0, usDelay: 1000},
   { gpioOn: outPin1, gpioOff: 0, usDelay: 1000},
   { gpioOn: outPin1, gpioOff: 0, usDelay: 1000},
   { gpioOn: outPin1, gpioOff: 0, usDelay: 1000},
   { gpioOn: outPin1, gpioOff: 0, usDelay: 1000},
   { gpioOn: outPin1, gpioOff: 0, usDelay: 1000},
   { gpioOn: 0, gpioOff: outPin1, usDelay: 1000});
   
   pigpio.waveAddGeneric(secondWaveForm);
console.log(secondWaveForm);
let secondWaveId = pigpio.waveCreate();
 console.log(secondWaveId);
*/
   
//armo las cadenas
//armo las cadenas
if (firstWaveId >= 0 && secondWaveId >= 0 && firstWaveForm.length == secondWaveForm.length)  {
  
    //let chain = [firstWaveId, 255, 0, secondWaveId, 255, 0];
    let chain = [firstWaveId, 255, 0,1, secondWaveId, 255, 0,1];

   // let chain1 = [firstWaveId, 255, 0,1];
    //let chain2 = [secondWaveId, 255, 0,1];
    

    //let chain = [firstWaveId,255, 2, 136, 19, secondWaveId,255, 2, 136, 19];
    console.log(chain);
    //pigpio.waveChain(chain1);
   // pigpio.waveChain(chain2);



   pigpio.waveChain(chain);
  
  //console.log(pigpio.waveChain(chain));
  

}


//envio la cadena de onda
//while (pigpio.waveTxBusy()) {console.log(pigpio.waveTxAt())}
 while (pigpio.waveTxBusy()) {}

//console.log(envio);

//////////////////////////
//output1.digitalWrite(1);
//output0.digitalWrite(1);
//////////////////////////

//elimino las ondas
pigpio.waveDelete(firstWaveId);

pigpio.waveDelete(secondWaveId);

pigpio.waveClear();
