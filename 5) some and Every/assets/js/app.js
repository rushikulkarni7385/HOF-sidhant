// alert(new Date);
 let cl = console.log;
// 4) some and Every


let arr = [44,55,66,44,77,88,99,11,22,33,33,66,55,44,1212];
 let newArr = []; 
 arr.forEach(function(ele){
     if(ele >=22){
          console.log(true);
           newArr.push(true);
     }
 })
console.log(newArr);


let newarry = arr.some((itms)=>{
     return  itms >= 55
})
cl(newarry);


let Array = [55,66,77,88,99,44,55,22,33,66,55,44,77,88,456];
 cl(Array);


let newarr = Array.every((arr)=>{
      return arr >= 55
});
 cl(newarr)
let age = Array.some((itms)=>{
      return itms>=88
})
 cl(age);


 Array = Array.fill(0).map((arr, i)=>{
      return arr + i
 });
 
 cl(Array)
  
let newArray = Array.some((ele)=>{
      return ele >=15
})
 cl(newArray);

let arrinarr = [44,55,66,55,44,[55,66,33,99,[55,66,23,44,22,[44,55,66,22,1,[44,55,66,33,22]]]]].fill(0).map(ele =>{
      return ele + 545 / 5 * 12
});
     cl(arrinarr);
    arrinarr = arrinarr.flat(1);
     cl(arrinarr)
  arrinarr = arrinarr.flat(2);
   cl(arrinarr);
       arrinarr = arrinarr.flat(3);
        cl(arrinarr);
      arrinarr = arrinarr.flat(Infinity).every(ele=>{
           return ele >= 10
      });
       cl(arrinarr);

       
let newobj = [44,55,66,88,77,99,66,55,44,66,66];
 cl(Array.isArray(newobj))



















