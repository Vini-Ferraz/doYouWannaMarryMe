const noBtn = document.getElementById("noBtn");

function deny() {
  const screenWidth = window.innerWidth - 100;
  const screenHeight = window.innerHeight - 100;
  let postionX = Math.floor(Math.random() * screenWidth - 0);
  let postionY = Math.floor(Math.random() * screenHeight - 0);

  noBtn.style.position = "absolute";
  noBtn.style.left = postionX + "px";
  noBtn.style.top = postionY + "px";
}

noBtn.addEventListener("mouseover", deny);
