// // alert(new Date);
 let cl = console.log;

// flat : 

// let Array = [10,55,22,33,66,4,55,77,[55,44,66,33,22,11]];
// cl(Array)

//  Array = Array.flat().reduce((accum, val)=> accum += val);
//   cl(Array)

// let arr = [10,20,30,40,50,60,70,[50,60,75,[5,6,2,3,]]];

//  arr = arr.flat(2).reduce((itms,val) => itms+=val);
//   cl(arr);

//   let newarr = [55,33,[66,88],77,[[44,99,66],[33,22,11,44],55,66,33]];
//   cl(newarr);
//   newarr = newarr.flat(2);
//    cl(newarr)

//   let newarr1 = [[55],[66,33,22,11,[22,33,55],44,55],[66,88],[77,9]].fill(0);

//  cl(newarr1)
// newarr1 = newarr1.flat(Infinity).fill(0);
//  cl(newarr1)


//  let arr1 = [10,20,30,[10,20,[10,20[30,40,[50,60[70,50,[40,[60,40]]]]]]]];
//     cl(arr1)
// arr1 = arr1.flat(Infinity).fill(0).map((n,i)=> n+i + 1);
//  cl(arr1);

//  let arrr = [
//     [10,20,30],
//     [20,30,40]
//  ];

//  cl(Array.isArray(arrr))


var companies=[
    {name:"company-one",category:"finance",start:1982,end:2011},
    {name:"company-two",category:"software",start:1983,end:2010},
    {name:"company-three",category:"hardware",start:1984,end:2013},
    {name:"company-four",category:"steel",start:1995,end:2051},
    {name:"company-five",category:"consultancy",start:1996,end:2020},
    {name:"company-six",category:"gold",start:1987,end:2012},
    {name:"company-seven",category:"sports",start:1998,end:2013},
    {name:"company-eight",category:"agreeculture",start:1999,end:2017},
    {name:"company-nine",category:"hospitality",start:1982,end:2018},
	];
 arr = [444,555,666,333,{
   name: 44
}];
let obj = {
      name: "sid"
}

   //  console.log(Array.isArray(obj));
let  findYearisabove2000 = companies.filter(comp =>{
    return comp.start >= 1900
}).map((e)=>{
    return e.start
}).every((comp)=>{
    return comp => 1980
});
 cl(findYearisabove2000)

let newarrrr = [44,55,22,66,323,66,[44,55,22,66,[44,55,66,22,[44,55,66,22]]]];
 cl(newarrrr);

newarrrr.forEach((ele)=>{
    if(Array.isArray(ele)){
       ele.forEach(e =>{
          cl(e)
       })
     }else if(Array.isArray(ele)){
       ele.forEach(e => cl(e))
     }

    else{
       cl(ele)
    }
  
})

newarrrr.flat(Infinity);
 cl(newarrrr)

 






