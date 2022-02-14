const solarsystem = document.querySelector(".solar");

function openoptions() {
  document.querySelector(".options_container").classList.toggle("open");
}
function toggle() {
  solarsystem.classList.toggle("flat");
  let text = document.querySelector("#tog");
  if (text.innerText == "3D") {
    text.innerText = "2D";
  } else {
    text.innerText = "3D";
  }
}
function flat() {
  solarsystem.classList.toggle("static");
  let text = document.querySelector("#togl");
  if (text.innerText == "＋") {
    text.innerText = "－";
  } else {
    text.innerText = "＋";
  }
}
function opennav() {
  document.querySelector(".planets_container").classList.toggle("open");
}

window.onload = () => {
  let current = "earth";
  const active = document.querySelectorAll(".info");
  active.forEach((planet) => {
    planet.addEventListener("click", () => {
      active.forEach((y) => y.classList.remove("active"));
      planet.classList.add("active");
      let replace = planet.title;
      solarsystem.className = solarsystem.className.replace(current, replace);
      current = replace;
    });
  });

  let curr = "speed";
  document.querySelectorAll(".scale").forEach((type) =>
    type.addEventListener("click", () => {
      let replace = type.attributes.for.nodeValue;
      solarsystem.className = solarsystem.className.replace(curr, replace);
      curr = replace;
    })
  );

  let canvas = document.querySelector(".canvas"),
    context = canvas.getContext("2d"),
    stars = 700;

  for (var i = 0; i < stars; i++) {
    x = Math.random() * canvas.offsetWidth;
    y = Math.random() * canvas.offsetHeight;
    context.fillStyle = "white";
    context.fillRect(x, y, 1, 1);
  }

  function open() {
    solarsystem.classList.add("earth");
    solarsystem.classList.remove("flat");
    document.querySelector(".data").classList.remove("load");
    document.querySelector(".options").classList.remove("load");
  }
  setTimeout(() => {
    open();
  }, 2000);
};