//Day 4 - Part 1

let count = 0

for(let i = 307237; i <= 769058; i++) {

  let num = i
  num = num.toString()
  let characters = Array.from(num)
  let max = characters[0]
  let maxIndex = 0
  let check = false

  for(let j = 0; j < characters.length; j++) {
    if(characters[j] < max) {
      check = false
      break
    } else if(characters[j] == max && j == maxIndex + 1) {
      check = true
      max = characters[j]
      maxIndex = j
    } else {
      max = characters[j]
      maxIndex = j
    }
  }

  if(check) {
    count++
    console.log(i)
  }

}

console.log(count)

//Day 4 - Part 2