let countdown = document.getElementById("countdown");

let release_window = new Date("Sept 4, 2025 23:59:59");
let start_time = new Date("Apr 2, 2025 15:30:00");

let time_precision = Math.floor(Math.random() * 3);

function setCountdown() {
  let today = new Date();
  let difference_ms;
  let time_left_ms;
  let subtext = document.getElementById("subtext");

  if (typeof release_window !== "undefined") {
    difference_ms = Math.round(release_window.getTime() - start_time.getTime());
    time_left_ms = Math.round(release_window.getTime() - today.getTime());

    let percentage =
      Math.round(
        ((difference_ms - (time_left_ms < 0 ? 0 : time_left_ms)) /
          difference_ms) *
          10000
      ) / 100;

    let progress = document.getElementById("progress");
    progress.innerHTML = percentage + "%";
    progress.style.width = percentage + "%";

    let progress_border = document.querySelector("#progress-border");
    progress_border.setAttribute("data-start", start_time.toLocaleDateString());
    progress_border.setAttribute(
      "data-end",
      release_window.toLocaleDateString()
    );
  } else time_left_ms = "???";

  let time_left_seconds = Math.round(time_left_ms / 1000);
  let time_left_minutes = Math.round(time_left_seconds / 60);
  let time_left_hours = Math.round(time_left_minutes / 60);

  if (time_precision === 0) {
    countdown.innerHTML = Math.abs(time_left_hours).toLocaleString();
    document.getElementsByClassName("text")[0].innerText = "hours";
  }

  if (time_precision === 1) {
    countdown.innerHTML = Math.abs(time_left_minutes).toLocaleString();
    document.getElementsByClassName("text")[0].innerText = "minutes";
  }

  if (time_precision === 2) {
    countdown.innerHTML = Math.abs(time_left_seconds).toLocaleString();
    document.getElementsByClassName("text")[0].innerText = "seconds";
  }

  if (time_left_ms < 0) {
    document.getElementById("text").innerText = "Released";
    subtext.innerText = "wake up its out fr fr";
    document.getElementsByClassName("text")[0].innerText += " ago.";
  }
}

setCountdown();

setInterval(setCountdown, 1000);
