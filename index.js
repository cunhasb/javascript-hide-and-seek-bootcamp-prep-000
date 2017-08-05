function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function increaseRankBy(n){
  var elements = document.querySelectorAll(".ranked-list li ")
  for (let i=0; i<elements.length;i++){
    elements[i].innerHTML= parseInt(elements[i].innerHTML) + n
  }
}

function deepestChild(){
  var current=document.querySelectorAll("#grand-node")[0].lastElementChild
  var last=[]
  while (current){
    last= current
    current = current.lastElementChild
  }
  return last
}
