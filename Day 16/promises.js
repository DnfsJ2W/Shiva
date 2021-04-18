/* -------------------------------------------------------------------------------------- */
function add_positivenos_async(n1, n2) {
    let p = new Promise(function (resolve, reject) {
       if (n1 >= 0 && n2 >= 0) {
          //do some complex time consuming work
          resolve(n1 + n2)
       }
       else
          reject('NOT_Postive_Number_Passed') 
       })
       return p;
 }

 add_positivenos_async(10, 20)
    .then(successHandler) // if promise resolved
    .catch(errorHandler);// if promise rejected

 add_positivenos_async(-10, -20)
    .then(successHandler) // if promise resolved
    .catch(errorHandler);// if promise rejected

 function errorHandler(err) {
    console.log('Handling error', err)
 }
 function successHandler(result) {
    console.log('Handling success', result)
 }

 console.log('end')
/* -------------------------------------------------------------------------------------- */

function add_positivenos_async(n1, n2) {
    let p = new Promise(function (resolve, reject) {
       if (n1 >= 0 && n2 >= 0) {
          //do some complex time consuming work
          resolve(n1 + n2)
       }
       else
          reject('NOT_Postive_Number_Passed')
    })
    return p;
 }

 add_positivenos_async(10,20)
 .then(function(result){
    console.log("first result",result)
    return add_positivenos_async(result,result)
 }).then(function(result){
 console.log("second result",result)
    return add_positivenos_async(result,result)
 }).then(function(result){
    console.log("third result",result)
 })
 console.log('end')
 /* -------------------------------------------------------------------------------------- */
 
 function add_positivenos_async(n1, n2) {
    let p = new Promise(function (resolve, reject) {
       if (n1 >= 0 && n2 >= 0) {
          //do some complex time consuming work
          resolve(n1 + n2)
       }
       else
          reject('NOT_Postive_Number_Passed')
    })

    return p;
 }
 //Promise.all(iterable)

Promise.all([add_positivenos_async(10,20),add_positivenos_async(30,40),add_positivenos_async(50,60)])
 .then(function(resolveValue){
    console.log(resolveValue[0])
    console.log(resolveValue[1])
    console.log(resolveValue[2])
    console.log('all add operations done')
 })
 .catch(function(err){
    console.log('Error',err)
 })
 console.log('end')

 /* -------------------------------------------------------------------------------------- */
 function add_positivenos_async(n1, n2) {
    let p = new Promise(function (resolve, reject) {
       if (n1 >= 0 && n2 >= 0) {
          //do some complex time consuming work
          resolve(n1 + n2)
       } else
          reject('NOT_Postive_Number_Passed')
    })

    return p;
 }

 //Promise.race(iterable)
 Promise.race([add_positivenos_async(10,20),add_positivenos_async(30,40)])
 .then(function(resolveValue){
    console.log('one of them is done')
    console.log(resolveValue)
 }).catch(function(err){
    console.log("Error",err)
 })

 console.log('end')
 /* --------------------------------------------------------------------------------------- */
 function notifyAll(fnSms, fnEmail) {   
    console.log('starting notification process');   
    fnSms();   
    fnEmail();   
 }   
 notifyAll(function() {   
    console.log("Sms send ..");   
 }, 
 function() {   
    console.log("email send ..");   
 });   
 console.log("End of script"); 
 //executes last or blocked by other methods   
 /* ---------------------------------------------------------------------------------- */

 function notifyAll(fnSms, fnEmail) {   
    setTimeout(function() {   
       console.log('starting notification process');   
       fnEmail();
       fnSms();   
          
    }, 2000);   
 }   
 notifyAll(function() {   
    console.log("Sms send ..");   
 },  
 function() {   
    console.log("email send ..");   
 });   
 console.log("End of script"); //executes first or not blocked by others 