// function getFirstSelector(selector){
//   return document.querySelector(selector)
// }
//
// function nestedTarget(){
//   return document.querySelector("#nested .target")
// }
//
// function increaseRankBy(n){
//   var elements = document.querySelectorAll(".ranked-list li ")
//   for (let i=0; i<elements.length;i++){
//     elements[i].innerHTML= parseInt(elements[i].innerHTML) + n
//   }
// }
//
// function deepestChild(){
//   var current=document.querySelectorAll("#grand-node")[0].lastElementChild
//   var last=[]
//   while (current){
//     last= current
//     current = current.lastElementChild
//   }
//   return last
// }

function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  let current = document.querySelectorAll('#grand-node div')[0].lastElementChild;
  let last = "";
  while (current){
    last = current;
    current = current.lastElementChild;
  }
  return last;
}

function increaseRankBy(n){
  let current = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < current.length; i++){
    current[i].innerHTML= parseInt(current[i].innerHTML)  + n;
  }
}
