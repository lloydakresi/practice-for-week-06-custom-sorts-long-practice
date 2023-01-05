function ageSort(users) {
  // Your code here
  users.sort((a, b) =>{
    return a.age - b.age
  })
  return users;
}

function oddEvenSort(arr) {
  // Your code here
  arr.sort((a, b) =>{
    if (a % 2 === 0 && b % 2 === 1) return 1;
    if (a % 2 === 1 && b % 2 === 0) return -1;
    return a - b;
  })
  return arr;
}

function validAnagrams(s, t) {
  // Your code here
  if (s.length !== t.length) return false;
  let sSplit = s.split("");
  let tSplit = t.split("");

  sSplit.forEach((ele,i)=> {
    if(ele !== tSplit[i]) return false;
  });
  return true;
}



function reverseBaseSort(arr) {
  // Your code here
  arr.sort((a, b) =>{
    let aStr = a.toString();
    let bStr = b.toString();

    if(aStr.length === bStr.length){
      return a - b
    }else{
      return bStr.length - aStr.length;
    }
  })
  return arr;
}

function frequencySort(arr) {
  // Your code here
  let freq = (target => arr.filter(val => val === target).length);
  arr.sort((a, b) =>{
    let aFreq = freq(a);
    let bFreq = freq(b);
    if (aFreq !== bFreq){
      return aFreq - bFreq;
    }else{
      return b - a;
    }
  })
  return arr;


}



module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
