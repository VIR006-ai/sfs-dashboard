setInterval(() => {
  let alt = Math.floor(Math.random() * 300) + " km";
  let speed = Math.floor(Math.random() * 8000) + " m/s";
  let apo = Math.floor(Math.random() * 400) + " km";
  let peri = Math.floor(Math.random() * 300) + " km";
  let fuel = Math.floor(Math.random() * 100) + "%";
  let time = new Date().toLocaleTimeString();

  document.getElementById("altitude").innerText = alt;
  document.getElementById("speed").innerText = speed;
  document.getElementById("apo").innerText = apo;
  document.getElementById("peri").innerText = peri;
  document.getElementById("fuel").innerText = fuel;
  document.getElementById("mission-time").innerText = "T+ " + time;
}, 2000);
