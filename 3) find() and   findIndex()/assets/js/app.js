//  alert("helllo");
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
//  cl(companies);
let categ = "hardware"
 let find = companies.find(function(ele){
      return ele.category === categ;
 })
  cl(find);
 let findcom = "company-eight";
let findIndex = companies.findIndex((ele)=> {
     return ele.name.toLowerCase() === findcom
})
 cl(findIndex)
 companies.splice(findIndex,1);
 cl(companies)
 let Array = [55,66,33,77,88,99,55,44,66,22,11,33];
   let newArray = 0;
  Array.forEach(ele=>{
     newArray += ele
      
  })
 cl(newArray)
let newArray1 = Array.reduce((accum, val)=>{
    // cl(accum, val)
     return accum += val
},5)
 cl(newArray1);
 let comp = "hospitality";
let filter2 = companies.filter((ele)=>{
       return ele.category === "hospitality" && ele.end - ele.start >= 30
}).map(ele=>{
     return {
         name : ele.name,
         category : ele.category,
         duration : ele.end - ele.start
     }
});
 cl(filter2)
 let compa = [];
 companies.forEach((ele)=>{
      compa.push({
         dur : ele.end - ele.start  
      })
 })
  cl(compa);
  // filter
//   let newArray5 = [];
//   companies.forEach((itms)=>{
//        if(itms.category.toLowerCase().trim() === "gold"){
//           newArray5.push(itms)
//        }
//   });
//   cl(newArray5)

 let filter3 = companies.filter(itms=> itms.category.toLowerCase().trim() === "gold")
  cl(filter3);
 // 3) find and findIndx :- 
  let  findobj = [];
  companies.forEach((comp)=>{
      if(comp.category === "hardware"){
           findobj.push(comp);
      }
  })
 cl(findobj);
 let id = "7";
 let find1 = companies.find((comp)=>{
      return comp.id === id
 }) 
 cl(find1)
  cl(companies)
// findexIndex : -
let index;
  companies.forEach((comp,i)=>{
      if(comp.category === "gold"){
           index = i;
           cl(index)       
      }     
  })
  companies.splice(index,1)
cl(companies);
let findIndex2 = companies.findIndex((comp)=>{
      return comp.category === "gold"
})
 companies.splice(findIndex2,3);
 cl(findIndex2)
cl(companies)
 cl(companies);
 let ides = 10; 
 companies.forEach(ele =>{
      if(+ele.id === ides){
           cl(ele);
      }
 });
 let idess = companies.find((ele)=>{
       return +ele.id === ides;
 })
 cl(idess)
id = 5;
let getid = companies.find((ele)=>{
      return +ele.id === id
})
 cl(getid)
 companies=[
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
//  cl(companies)
let getids = companies.find((ele)=>{
      return ele.id === "6"
});
 cl(getids);
let append = [];
 companies.forEach((ele)=>{
      append.push({
          name: ele.name
      })
 })

append = companies.map((comp => comp.name)).reduce((comp, comp1) => comp+=comp1)

cl(append);






































