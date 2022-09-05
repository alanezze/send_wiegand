 const wiegand = require('wiegand-encoder');


//const encoded = wiegand.encode(27279992727, 1,35,3); /// 40 bits
//const encoded = wiegand.encode(27279992727, 1,36,2); /// 40 bits

//const encoded = wiegand.encode(27279992727765476457, 1,36,4); /// 42 bits

//const encoded = wiegand.encode(27279992727, 1,35,1); /// 38 bits
function patente (plate){
   // var plate = plate;

   if(plate.length>7){
    console.log("patente invalida");
    console.log();
    return
   }
    var split;
    
    var plate_id;
    var number= '';
    if(plate.length <7){
        /*
        //VALIDAR QUE LOS 3 ULTIMOS SEAN NUMEROS CON UN FOR
        let t;
        while(plate.slice(3).length > t){

            if(!(Number(parseInt(plate.slice(3),10)))){
                console.log(parseInt(plate.slice(3),10));
                return;
            }
        }
        */
        split=plate.split("");
        //console.log(split);
        //console.log(plate.length);
        // console.log(split.length);
        number=plate.slice(3);
        
        let id='';
        let c=0;
        while(split.length > c){
            
           // console.log(split[c]);
            switch (split[c]) {
                case 'A':
                    id=id.concat('1');
                    //console.log(id);
                break;
                case 'B':
                    id=id.concat('2');
                    //console.log(id);
                break;
                case 'C':
                id= id.concat('3');
                    //console.log(id);
                break;
                case 'D':
                id= id.concat('4');
                    //console.log(id);
                break;
                case 'E':
                id= id.concat('6');
                    //console.log(id);
                break;
                case 'F':
                id= id.concat('7');
                    //console.log(id);
                break;
                case 'G':
                id= id.concat('8');
                    //console.log(id);
                break;
                case 'H':
                id= id.concat('9');
                    //console.log(id);
                break;
                case 'I':
                id= id.concat('10');
                    //console.log(id);
                break;
                case 'J':
                id= id.concat('11');
                    //console.log(id);
                break;
                case 'K':
                id= id.concat('12');
                    //console.log(id);
                break;
                case 'L':
                id= id.concat('13');
                    //console.log(id);
                break;
                case 'M':
                id= id.concat('14');
                    //console.log(id);
                break;
                case 'N':
                id= id.concat('15');
                    //console.log(id);
                break;
                case 'O':
                id= id.concat('16');
                    //console.log(id);
                break;
                case 'P':
                id= id.concat('17');
                    //console.log(id);
                break;
                case 'Q':
                id= id.concat('18');
                    //console.log(id);
                break;
                case 'R':
                id= id.concat('19');
                    //console.log(id);
                break;
                case 'S':
                id= id.concat('20');
                    //console.log(id);
                break;
                case 'T':
                id= id.concat('21');
                    //console.log(id);
                break;
                case 'U':
                id= id.concat('22');
                    //console.log(id);
                break;
                case 'V':
                id= id.concat('23');
                    //console.log(id);
                break;
                case 'W':
                id= id.concat('24');
                    //console.log(id);
                break;
                case 'X':
                id= id.concat('25');
                    //console.log(id);
                break;
                case 'Y':
                id= id.concat('26');
                    //console.log(id);
                break;
                case 'Z':
                id= id.concat('27');
                    //console.log(id);
                break;
                
            }
        c=c+1;
        }
        plate_id=id+number;

        console.log(parseInt(plate_id,10));
        
        const encoded = wiegand.encode(parseInt(plate_id,10), 1,35,1); /// 38 bits
        console.log(encoded);

    }
    else{

        let prefijo = plate.slice(0,2);
        let sufijo = plate.slice(5);
        
        split1=prefijo.split("");
        split2=sufijo.split("");
        var id_prefijo,id_sufijo;

        ///console.log(prefijo);
        //console.log(sufijo);
       
       // console.log(split);
        //console.log(plate.length);
        //console.log(split.length);

        let d=0;
        let id="";
        while(split1.length > d){

            //console.log(split[c]);
            switch (split1[d]) {
                case 'A':
                    id=id.concat('1');
                    //console.log(id);
                break;
                case 'B':
                    id=id.concat('2');
                    //console.log(id);
                break;
                case 'C':
                id= id.concat('3');
                    //console.log(id);
                break;
                case 'D':
                id= id.concat('4');
                    //console.log(id);
                break;
                case 'E':
                id= id.concat('6');
                    //console.log(id);
                break;
                case 'F':
                id= id.concat('7');
                    //console.log(id);
                break;
                case 'G':
                id= id.concat('8');
                    //console.log(id);
                break;
                case 'H':
                id= id.concat('9');
                    //console.log(id);
                break;
                case 'I':
                id= id.concat('10');
                    //console.log(id);
                break;
                case 'J':
                id= id.concat('11');
                    //console.log(id);
                break;
                case 'K':
                id= id.concat('12');
                    //console.log(id);
                break;
                case 'L':
                id= id.concat('13');
                    //console.log(id);
                break;
                case 'M':
                id= id.concat('14');
                    //console.log(id);
                break;
                case 'N':
                id= id.concat('15');
                    //console.log(id);
                break;
                case 'O':
                id= id.concat('16');
                    //console.log(id);
                break;
                case 'P':
                id= id.concat('17');
                    //console.log(id);
                break;
                case 'Q':
                id= id.concat('18');
                    //console.log(id);
                break;
                case 'R':
                id= id.concat('19');
                    //console.log(id);
                break;
                case 'S':
                id= id.concat('20');
                    //console.log(id);
                break;
                case 'T':
                id= id.concat('21');
                    //console.log(id);
                break;
                case 'U':
                id= id.concat('22');
                    //console.log(id);
                break;
                case 'V':
                id= id.concat('23');
                    //console.log(id);
                break;
                case 'W':
                id= id.concat('24');
                    //console.log(id);
                break;
                case 'X':
                id= id.concat('25');
                    //console.log(id);
                break;
                case 'Y':
                id= id.concat('26');
                    //console.log(id);
                break;
                case 'Z':
                id= id.concat('27');
                    //console.log(id);
                break;
                
            }
       
        d=d+1;
        }
        id_prefijo=id;
        id="";
        ///////////////////////////////////sufijo
        let c=0;
        while(split2.length > c){
            //console.log(split[c]);
            switch (split2[c]) {
                case 'A':
                    id=id.concat('1');
                    //console.log(id);
                break;
                case 'B':
                    id=id.concat('2');
                    //console.log(id);
                break;
                case 'C':
                id= id.concat('3');
                    //console.log(id);
                break;
                case 'D':
                id= id.concat('4');
                    //console.log(id);
                break;
                case 'E':
                id= id.concat('6');
                    //console.log(id);
                break;
                case 'F':
                id= id.concat('7');
                    //console.log(id);
                break;
                case 'G':
                id= id.concat('8');
                    //console.log(id);
                break;
                case 'H':
                id= id.concat('9');
                    //console.log(id);
                break;
                case 'I':
                id= id.concat('10');
                    //console.log(id);
                break;
                case 'J':
                id= id.concat('11');
                    //console.log(id);
                break;
                case 'K':
                id= id.concat('12');
                    //console.log(id);
                break;
                case 'L':
                id= id.concat('13');
                    //console.log(id);
                break;
                case 'M':
                id= id.concat('14');
                    //console.log(id);
                break;
                case 'N':
                id= id.concat('15');
                    //console.log(id);
                break;
                case 'O':
                id= id.concat('16');
                    //console.log(id);
                break;
                case 'P':
                id= id.concat('17');
                    //console.log(id);
                break;
                case 'Q':
                id= id.concat('18');
                    //console.log(id);
                break;
                case 'R':
                id= id.concat('19');
                    //console.log(id);
                break;
                case 'S':
                id= id.concat('20');
                    //console.log(id);
                break;
                case 'T':
                id= id.concat('21');
                    //console.log(id);
                break;
                case 'U':
                id= id.concat('22');
                    //console.log(id);
                break;
                case 'V':
                id= id.concat('23');
                    //console.log(id);
                break;
                case 'W':
                id= id.concat('24');
                    //console.log(id);
                break;
                case 'X':
                id= id.concat('25');
                    //console.log(id);
                break;
                case 'Y':
                id= id.concat('26');
                    //console.log(id);
                break;
                case 'Z':
                id= id.concat('27');
                    //console.log(id);
                break;
                
            }
        c=c+1;
        
        }
        id_sufijo=id;


        number=plate.slice(2,5);
     
        //console.log(id_prefijo);
       // console.log(id_sufijo);

      //  console.log(number);
        

        plate_id=id_prefijo+number+id_sufijo;
        console.log(parseInt(plate_id,10));
        console.log(plate);


        const encoded = wiegand.encode(parseInt(plate_id,10), 1,35,3)
        console.log(encoded);

    }
}

//patente("ZZ999ZZ")

//const encoded = wiegand.encode(27279992727, 1,297,1); /// 38 bits

//const encoded = wiegand.encode(25259992525, 1,35,3);
//36369993636
//z z 999 z z 
//272727999
//z z z 999
//363636999

//z z z 999
//36369993636///
//17179869183
//34359738367
//const encoded = wiegand.encode(659, 90,23,13);

const encoded = wiegand.encode(1, 1);
//00000001011010000000000000000011110111
//00101101000000100010101111
//111101011110101111010111001111001111001
//11110101111010111101011100111100111100111110101111010

//4294967295//32-4
//17179869183//34-2
//27279992727/////////////
//268435455//28-8
/// max con 26 bit (8 - 16 )65535
//max con 38 bit (8 - 28)  268435455

//uno y uno wn 26 bit orig/invert
//10000000100000000000000010
//01000000000000000100000001

console.log(encoded);