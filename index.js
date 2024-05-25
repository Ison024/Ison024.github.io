const btnLike1 = document.getElementById("btnLike1")
const countLikes1 = document.getElementById("countLikes1")

function clickLike1(){
let totalLikes1 = parseInt(clickLike1.value) + 1
countLike1.textContent = totalLikes1.toString()
  
}
btnLike1.addEventListener("click",clickLike1)
