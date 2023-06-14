"use strict";

// Selecting HTML elememts
const generateBtn = document.getElementById("generate-btn");
const titleText = document.getElementById("title");
const subTitle = document.getElementById("sub-title");
const memeImg = document.getElementById("meme-img");
const errorText = document.getElementById("error-text");
const mainContent = document.querySelector("main");

const memeGenerator = function () {
  fetch("https://meme-api.com/gimme")
    .then((response) => {
      mainContent.classList.remove("hidden");
      errorText.innerHTML = "";
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      titleText.innerHTML = `${data.title}`;
      memeImg.src = data.url;
      subTitle.innerHTML = `Meme by ${data.author}`;
    })
    .catch((err) => {
      if (err) {
        errorText.innerHTML = `Something went wrong error (${err.message}) Try again!`;
        mainContent.classList.add("hidden");
      }
    });
};

memeGenerator();
generateBtn.addEventListener("click", memeGenerator);
