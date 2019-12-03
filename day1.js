//Day 1 - Part 1

let arr = [ 
  //input goes here
]
    
let fuelRequired = 0

arr.forEach((i) => {

  fuelRequired = fuelRequired + (Math.floor(i/3) - 2)
  
})

console.log(fuelRequired)

//Day 1 - Part 2

let arr = [ 
  //input goes here
]
    
let fuelRequired = 0

arr.forEach((i) => {

  let j = Math.floor(i/3) - 2
  fuelRequired = fuelRequired + j

  while(j > 0) {
    j = Math.floor(j/3) - 2
    if(j > 0)
      fuelRequired = fuelRequired + j
  }
  
})

console.log(fuelRequired)

    