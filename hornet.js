var toggle = false;
let hornet = document.getElementById("hornet");

let sounds = [
  new Audio("audio/Hornet_Fight_Death_01.wav"),
  new Audio("audio/Hornet_Fight_Flourish_02.wav"),
  new Audio("audio/Hornet_Fight_Laugh_01.wav"),
  new Audio("audio/Hornet_Fight_Laugh_02.wav"),
  new Audio("audio/Hornet_Fight_Yell_04.wav"),
  new Audio("audio/Hornet_Fight_Yell_05.wav"),
  new Audio("audio/Hornet_Fight_Yell_06.wav"),
  new Audio("audio/Hornet_Fight_Yell_07.wav"),
  new Audio("audio/Hornet_Fight_Yell_08.wav"),
  new Audio("audio/Hornet_Fight_Yell_09.wav"),
  new Audio("audio/Hornet_Final_Boss_yell_02.wav"),
];

function pressHornet() {
  let random = Math.round(Math.random() * 10);
  let sound = sounds[random];
  sound.volume = 0.5;
  sound.play();

  time_precision = Math.floor(Math.random() * 3);

  if (!toggle) start_time = new Date("Feb 14, 2019 19:00:00");
  else start_time = new Date("Aug 21, 2025 15:30:00");

  setCountdown(start_time);

  toggle = !toggle;
}
