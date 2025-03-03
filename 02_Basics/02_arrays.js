const marvel_heros=["Thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

   //marvel_heros.push(dc_heros)
   //console.log(marvel_heros)
   
  // console.log(marvel_heros[3][1])

   const all_heros=marvel_heros.concat(dc_heros)
   //console.log(all_heros)


   const all_new_heros=[...marvel_heros,...dc_heros]
   console.log(all_new_heros)

   const another_array=[1,2,3,[1,3,5],5,7,[1,2,[8,7,9]]]
   const real_another_array=another_array.flat(Infinity)

   console.log(real_another_array)      //             [  1, 2, 3, 1, 3, 5,
                                          //               5, 7, 1, 2, 8, 7,
                                            //                  9]


     console.log(Array.isArray("khatri"))     //false

 console.log(Array.from("khatri"))        //[ 'k', 'h', 'a', 't', 'r', 'i' ]

 console.log(Array.from({name: "khatri"}))         //[]




 let score1=100
 let score2=200
 let score3=300

 console.log(Array.of(score1,score2,score3))     // [ 100, 200, 300 ]

 




   
  


