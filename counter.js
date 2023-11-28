// function counterFunc(counter) {
//     if (counter > 100) {
//       counter = 0;
//     } else {
//       counter++;
//     }
    
//     return counter;
//   }

  let counterFunc = counter => {
    if (counter > 100) {
            counter = 0;
          } else {
            counter++;
          }
          
          return counter;
  }

 // let counterFunc =  counter => (counter > 100) ? counter = 0 : counter = counter + 1 ;
   

  console.log(counterFunc(5)); // counter will be 6
  console.log(counterFunc(150)); // counter will be 0