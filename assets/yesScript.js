const yesBtn = document.getElementById("yesBtn");
const changeGif = document.getElementById("gif");
const text = document.getElementById("text");
function handleYesClick() {
  changeGif.src =
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXVicTI2a2xteWZzMXc0ZGExeGV1MHBhMWhtOG04b2V0b3NxeTdodCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRv0ThflsHCqDrG/giphy.gif";
  text.innerText = "AWWW! You own me ayran :)";
}
yesBtn.addEventListener("click", handleYesClick);
