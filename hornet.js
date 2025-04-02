var toggle = false;
let hornet = document.getElementById("hornet");

function pressHornet() {
  let random = Math.round(Math.random() * 10);

  switch (random) {
    case 0:
      var sound = new Audio("audio/Hornet_Fight_Death_01.wav");
      break;
    case 1:
      var sound = new Audio("audio/Hornet_Fight_Flourish_02.wav");
      break;
    case 2:
      var sound = new Audio("audio/Hornet_Fight_Laugh_01.wav");
      break;
    case 3:
      var sound = new Audio("audio/Hornet_Fight_Laugh_02.wav");
      break;
    case 4:
      var sound = new Audio("audio/Hornet_Fight_Yell_04.wav");
      break;
    case 5:
      var sound = new Audio("audio/Hornet_Fight_Yell_05.wav");
      break;
    case 6:
      var sound = new Audio("audio/Hornet_Fight_Yell_06.wav");
      break;
    case 7:
      var sound = new Audio("audio/Hornet_Fight_Yell_07.wav");
      break;
    case 8:
      var sound = new Audio("audio/Hornet_Fight_Yell_08.wav");
      break;
    case 9:
      var sound = new Audio("audio/Hornet_Fight_Yell_09.wav");
      break;
    case 10:
      var sound = new Audio("audio/Hornet_Final_Boss_yell_02.wav");
      break;
    default:
      var sound = new Audio();
      break;
  }

  sound.volume = 0.5;

  sound.play();

  if (!toggle) setCountdown(new Date("Feb 14, 2019 19:00:00"));
  else setCountdown(new Date("Apr 2, 2025 15:30:00"));

  toggle = !toggle;
}
