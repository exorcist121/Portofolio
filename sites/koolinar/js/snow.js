var container;
var timeChoices;

function init() {
container = document.getElementById("flake-container");
window.setInterval(createParticle,200);
timeChoices = [5,6,7,8,9,10,11,12,13,14,15];
}


function destroy(evt) {
  container.removeChild(evt.target);
}

function createParticle() {
  var particle = document.createElement("span");
  var randomSpeed = timeChoices[Math.floor(Math.random()*timeChoices.length)];
  particle.innerHTML = "*";
  particle.className = "flake";
  particle.style.position = "absolute";
  particle.style.color = "white";
  particle.style.backgroundColor = "transparent";
  particle.style.width = "5px";
  particle.style.height = "5px";
  particle.style.pointerEvents = "none";
  particle.style.right = Math.random()*100 + "%";
  particle.style.borderRadius = "50%";
  particle.style.WebkitAnimation = "snow " + randomSpeed + "s linear";
  particle.style.MozAnimation = "snow " + randomSpeed + "s linear";
  container.appendChild(particle);
  particle.addEventListener("webkitAnimationEnd", destroy);
  particle.addEventListener("animationend", destroy);
}
if(document.documentElement.clientWidth > 800)
window.onload = init;