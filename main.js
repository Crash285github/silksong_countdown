let countdown = document.getElementById("countdown");

let release_window = new Date("Sept 17, 2025 23:59:59");
let start_time = new Date("Apr 2, 2025 15:30:00");
let today = new Date();

function setCountdown(start) {
  let difference;
  let hours_left;
  let subtext = document.getElementById("subtext");
  if (typeof release_window !== "undefined") {
    difference = Math.round(
      release_window.getTime() / (1000 * 60 * 60) -
        start.getTime() / (1000 * 60 * 60)
    );
    hours_left = Math.round(
      release_window.getTime() / (1000 * 60 * 60) -
        today.getTime() / (1000 * 60 * 60)
    );
    if (hours_left < 0) {
      document.getElementById("text").innerText = "Released";
      subtext.innerText = "wake up its out fr fr";
      document.getElementsByClassName("text")[0].innerText = "hours ago.";
    }

    let percentage =
      Math.round(
        ((difference - (hours_left < 0 ? 0 : hours_left)) / difference) * 10000
      ) / 100;

    let progress = document.getElementById("progress");
    progress.innerHTML = percentage + "%";
    progress.style.width = percentage + "%";

    let progress_border = document.querySelector("#progress-border");
    progress_border.setAttribute("data-start", start.toLocaleDateString());
    progress_border.setAttribute(
      "data-end",
      release_window.toLocaleDateString()
    );
  } else hours_left = "???";

  countdown.innerHTML = hours_left < 0 ? hours_left * -1 : hours_left;
}

setCountdown(start_time);
