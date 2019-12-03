//Day 2 - Part 1

let arr = [
    //input goes here
]

let arrCopy = []

let subArr = []

var arraySplice = () => {
  arrCopy = Array.from(arr)
  for(let i = 1; i <= 28; i++) {
    subArr.push(arr.splice(0, 4))
  }
}

arraySplice()

subArr.forEach((set) => {
  if(set[0] == 99) {
    return
  } else if(set[0] == 1) {
    arrCopy[set[3]] = arrCopy[set[1]] + arrCopy[set[2]]
  } else if(set[0] == 2) {
    arrCopy[set[3]] = arrCopy[set[1]] * arrCopy[set[2]]
  }
  arr = Array.from(arrCopy)
  arraySplice()
})

console.log(arrCopy)

//Day 2 - Part 2

let arr = [
    //input goes here
]

let output = 0
let noun = 0
let verb = 0

let answerArray = []

while(output != 19690720) {

  if(verb > 99) {
    verb = 0
    noun++
  }

  arr[1] = noun
  arr[2] = verb

  let originalArray = Array.from(arr)

  let arrCopy = []

  let subArr = []

  var arraySplice = () => {
    arrCopy = Array.from(originalArray)
    for(let i = 1; i <= 28; i++) {
      subArr.push(originalArray.splice(0, 4))
    }
  }

  arraySplice()

  subArr.forEach((set) => {
    if(set[0] == 99) {
      return
    } else if(set[0] == 1) {
      arrCopy[set[3]] = arrCopy[set[1]] + arrCopy[set[2]]
    } else if(set[0] == 2) {
      arrCopy[set[3]] = arrCopy[set[1]] * arrCopy[set[2]]
    }
    originalArray = Array.from(arrCopy)
    arraySplice()
  })

  output = arrCopy[0]
  answerArray = arrCopy
  verb++
}

console.log(output, answerArray)