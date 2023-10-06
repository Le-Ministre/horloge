clock();

function clock() {
  const date = new Date();
  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  
  document.querySelector('#hr').style.transform = `rotate(${hour}deg)`;

  document.querySelector('#mn').style.transform = `rotate(${minute}deg)`;

  document.querySelector('#sec').style.transform = `rotate(${second}deg)`;
}

setInterval(clock, 1000)