//  var data = {
//      name: "petya",
//      age: 28,
//      action: getNameAndAge
//  }

//  var info = {
//      name: "vasya",
//      age: 20, 
//      action: getNameAndAge
//  }

//  console.log(data.action(), info.action())



//  function getNameAndAge(){
//      return this.name + ' ' + this.age;
//  }

// var struct = {
//     x: 10,
//     t: 60,
//     str: 'hello',
//     flag: false,
//     arr: [1,7,8]
//     iterateAll: function(){
         
//     }
// }



// var struct = {
//     z: 11,
//     x: 13,
//     str: 'hi',
//     arr: [1,3,4],
//     renderObject: renderObject
// }
// function renderObject(){
//        for(var key in this){
//            if(this[key] === arguments.callee) continue;
//            document.write(key + '<br>');
//        }
//     }

// struct.renderObject();


// obj = {
//     m1: function(){
//         console.log('x');
//         return (this);
//     },
//     m2: function(){
//         console.log('y');
//         return (this);
//     },
//     m3: function(){
//         console.log('z');
//         return (this);
//     }



// }

// obj.m1().m2().m3()


data = {
    x: 10,
    y: 12,
    str: 'hello',
    p: 600,
    z: 50,
    addRecord: function(){
        flag = false;
         if (typeof arguments[arguments.length-1] === Boolean )
         {
             flag = arguments[arguments.length-1];
         } 

        for(var i= 0; i < arguments.length; i++){

            // console.log(arguments[i]);

            for(var key in arguments[i]){

                
                if(!f) {continue}
                
                else{

                    this[key] = arguments[i][key];

                }

                 

                
            }
        }
        console.log(data);
        
    }
}
data.addRecord({l: 11}, {y:20})