function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDate = losAngelesElement.querySelector(".date");
    let losAngelesTime = losAngelesElement.querySelector(".time");
    let currentTime = moment();

    losAngelesDate.innerHTML = currentTime.format("MMMM Do YYYY");
    losAngelesTime.innerHTML = moment
      .tz("America/Los_Angeles")
      .format(`h:mm:ss [<small>]A[</small>]`);
  }

  let barcelonaElement = document.querySelector("#barcelona");
  if (barcelonaElement) {
    let barcelonaDate = barcelonaElement.querySelector(".date");
    let barcelonaTime = barcelonaElement.querySelector(".time");
    let currentTimeBarcelona = moment();

    barcelonaDate.innerHTML = currentTimeBarcelona.format("MMMM Do YYYY");
    barcelonaTime.innerHTML = moment
      .tz("Europe/Madrid")
      .format(`h:mm:ss [<small>]A[</small>]`);
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            `h:mm:ss [<small>]A[</small>]`
          )}</div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
