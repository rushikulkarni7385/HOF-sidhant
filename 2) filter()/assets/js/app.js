// alert(new Date);
let cl = console.log;

//  let Array = [{
//     "id": 9,
//     "name": "Glenna Reichert",
//     "username": "Delphine",
//     "email": "Chaim_McDermott@dana.io",
//     "address": {
//       "street": "Dayna Park",
//       "suite": "Suite 449",
//       "city": "Bartholomebury",
//       "zipcode": "76495-3109",
//       "geo": {
//         "lat": "24.6463",
//         "lng": "-168.8889"
//       }
//     },
//     "phone": "(775)976-6794 x41206",
//     "website": "conrad.com",
//     "company": {
//       "name": "Yost and Sons",
//       "catchPhrase": "Switchable contextually-based project",
//       "bs": "aggregate real-time technologies"
//     }
//   }];

//  let array = [55,66,88,2,77,99,55,11,22,33,66,55,44,77,55,88,99,66,33,22,456];
//   console.log(array);

//   let Arr = [];
// array.forEach(function(arrEl){
//      if(arrEl / 5){
//         Arr.push(arrEl)
//      } 
// }) ;

// cl(Arr);

// let arrr = array.filter(function(arrEle){
//      return arrEle / 5 === 11;
// })
// cl(arrr);

// let arrr1 = array.filter(fil => fil >= 60);
//  cl(arrr1)

//  array.forEach(fil =>{
//      if(fil >= 70){
//          cl(fil)
//      }
//  });
//  companies = [
//     { name: "Company One", category: "Finance", start: 1981, end: 2003 },
//     { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//     { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//     { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//     { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//     { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//     { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//     { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//     { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
//   ];
//   let input = document.getElementById("input")
// let array1 = [];
//  companies.forEach(ele=>{
//    if(ele.name){
         
//            array1.push(ele.name)
//    }
   
//  });

//  cl(array1)
// const onkeyup = function(ele){
//     let input = ele.target.value;
//     //  cl(input) 
//   if(ele.keyCode === 13){
//        array1.forEach((arr) =>{
//            if(arr.toLowerCase() === input.toLowerCase()){
//               cl(arr);
//            }
//        })
//     }
// }

//  input.addEventListener("keyup",onkeyup);

// let Arrow = companies.filter(com => 
//      com.name === "Company Six"
// );
//  cl(Arrow)

//  companies.forEach(comp =>{
// //    cl(comp.name === "Company Six" );     
//       if(comp.name === "Company Six"){
//          cl(comp.name)
//       }
//  });

// //  companies.forEach(comp =>{
// //     cl(comp.start)
// //  })

// let company = companies.map(function(comp){
//     return comp.start
//  }).filter(function(comp){
//       return comp >= 1990
    
// })
// cl(company)

// let arr = [55,66,22,323,44,55,7,88,99,66,55,44,55,22,11,22,33,66,55,4,445,666];
//  let arr1 = [];
//  arr.forEach(arrs =>{
//     //  cl(arrs);
//       if(arrs >= 60){
//          cl(arrs);
//          arr1.push(arrs)
//       }
//  })
//  cl(arr1)   

// let arr2 = arr.filter(arrs => arrs>= 55).map(arrs => Math.random(arrs) * 10000).map(arr => Math.ceil(arr))
//   cl(arr2);






 cl("-------------------------------------------------------------------------");

   //map : -
     
   let age = [55,66,77,66,44,55,88,77,99,66,33,55,445,44,55,66,33];
        //  cl(age);
            //  let age3 = [];
          
            //  age.forEach(item => {
              // cl(item)
                // age3.push(item * 2)
        //        if(item > 66){
        //          cl(item)
        //        }         
        //  })     
//  cl(age3);

//  map : it give a array;

//  let age3 = age.map((item)=>{
//      let result = item;
//       return (result);     
//  }).filter(function(item){
//      return item > 66
//  })
//  cl(age3)

age = [55,66,77,66,44,55,88,77,99,66,33,55,445,44,55,66,33];

   let age2 = [];

   age.forEach(function(ele){
    //  cl(ele * 2)
    age2.push(ele * 2);
   })
cl(age2);

age2 = age.map(function(ele){
   return Math.random(ele) * 1000
})

cl(age2)

age2 = age.map(ele =>{

})

companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];
 let companey2 = [];
 companies.forEach((comp)=>{
     cl(comp.name)
     companey2.push(comp);
  });

 cl(companey2);
//  companey2 = []
// companies.forEach(comp =>{
//    if(comp.name.toLowerCase() === "company six" ){
//      cl(comp)
//      companey2.push(comp);
//    }
// })
// cl(companey2);

cl("------------------------------------------------------------------")


 cl(companies)
// let map = companies.map((ele)=>{
//       return {
//         cat : ele.category,
//       };  
// });
//  cl(map)

 let filter = companies.filter((ele)=>{
         if(ele.category === "Technology"){
           cl(ele);
   
         }
        
 })
 cl(filter)
 let filter1 = companies.filter((ele)=>{
      return ele.category.toLowerCase().trim() === "technology"
 })
 cl(filter1);

// 3) index: - 

companies = [
  { name: "Company One", id : 1, category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two",id : 2, category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", id : 3, category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", id : 4,category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "TecHnology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: " TechnoloGy", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
 
companies.forEach((ele, i)=>{
    if(ele.name === "Company Four"){
       cl(ele)
       let index = i;
        cl(index)
      }
 })
 let Array5 = [55,66,999,77,888,44,55]; 
 let reduce = Array5.reduce((vaccum, accum)=>{
       vaccum += accum;
 })
 cl(Array5)




// let index = companies.indexOf((ele)=>{
//   if(ele.name === 'Company Eight'){
//        return true;
//   };
// })
//  cl(index)

//filter : - 
// 1) Array.forEach(function()));     
// 2) Array.map(function())
// 3) Array.filter(function())
// 4) Array.index()
// 5) Array.indexOf();
// 6) Array.reduce();



























  // filter : - 












































































