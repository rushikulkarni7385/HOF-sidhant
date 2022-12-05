let cl = console.log;
var companies=[
    {name:"company-one", id:"1",category:"finance",start:1982,end:2011},
    {name:"company-two", id:"2",category:"software",start:1983,end:2010},
    {name:"company-three", id:"3",category:"hardware",start:1984,end:2013},
    {name:"company-four", id:"4",category:"steel",start:1995,end:2051},
    {name:"company-five", id:"5",category:"consultancy",start:1996,end:2020},
    {name:"company-six", id:"6",category:"gold",start:1987,end:2012},
    {name:"company-seven", id:"7",category:"sports",start:1998,end:2013},
    {name:"company-eight", id:"8",category:"agreeculture",start:1999,end:2017},
    {name:"company-nine", id:"9",category:"hospitality",start:1982,end:2018},
	{name:"company-ten", id:"10",category:"finance",start:1972,end:2018},
];

let company = companies.map((ele)=> ele.end - ele.start)
.reduce((accum, val)=> accum += val)
 cl(company)

  let arr = [55,66,33,22,11,4,55,66,88,77,44,11,55,66,99,55,44];
    let length = "";
   arr.forEach((arrele)=>{
          length +=  arrele;
   });
    cl(length)

 let reduce = arr.reduce((vaccum, value)=>{
           return vaccum += value; 
 });
 cl(reduce)



  let convert = companies.map((ele)=>{
    
    return  ele.name
   
  }) 
  .reduce((comp, value)=>{
     return comp += value
  })
 cl(convert)






// 1) map       let map = arr.map((ele)=>{})
   
// 2) filter  let filter = arr.filter((ele)=>{})
   
// 2) find and findIndexlet     let find = arr.find((ele)=>{})
   
// 3) reduce  :-   let map = arr.reduce((ele)=>{})

// 4)  arr.forEach((arrele)=>{}   
 


