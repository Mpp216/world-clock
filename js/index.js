function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDate = losAngelesElement.querySelector(".date");
  let losAngelesTime = losAngelesElement.querySelector(".time");
  let currentTime = moment();

  losAngelesDate.innerHTML = currentTime.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = moment
    .tz("America/Los_Angeles")
    .format(`h:mm:ss [<small>]A[</small>]`);

  let barcelonaElement = document.querySelector("#barcelona");
  let barcelonaDate = barcelonaElement.querySelector(".date");
  let barcelonaTime = barcelonaElement.querySelector(".time");
  let currentTimeBarcelona = moment();

  barcelonaDate.innerHTML = currentTimeBarcelona.format("MMMM Do YYYY");
  barcelonaTime.innerHTML = moment
    .tz("Europe/Madrid")
    .format(`h:mm:ss [<small>]A[</small>]`);
}

updateTime();
setInterval(updateTime, 1000);
