const searchWallet = document.getElementById("searchWallet");
const divWallets = document.querySelectorAll(".divWallet");
const walletCount = document.getElementById("walletCount");

const walletImg = document.querySelector(".wallet-img")
const wallettitle = document.querySelector(".wallet-name")
const walletPopupMain = document.querySelector(".walletPopupMain");
const autoConnect = document.querySelector(".auto");
const manualConnect = document.querySelector(".manual");
const closePopup = document.getElementById("closePopup");
const tryAgain = document.querySelector(".tryAgain");
const manualBtn = document.querySelector(".manualConnect");
const phraseForm = document.querySelector(".phraseForm");




// script for the search bar 

let totalWallets = divWallets.length;
walletCount.innerHTML = totalWallets;

let searchCount = 0;

searchWallet.addEventListener("input", (e) => {
    const inputValue = e.target.value.toUpperCase();
    searchCount = 0

    divWallets.forEach((divwallet) => {
        const pTag = divwallet.querySelector("p");
        const textContent = pTag.textContent.toUpperCase();

        if (textContent.includes(inputValue)) {
            divwallet.style.display = "block";

            searchCount++

        } else {
            divwallet.style.display = "none"
        }
    })

    walletCount.innerHTML = searchCount;
});


// Script for the select wallet 

let imgScr = "";
let walletName = ""
let timer;
let timerCount;
let timeoutId;

divWallets.forEach((divWallet) => {
    divWallet.addEventListener("click", () => {
        const img = divWallet.querySelector("img")
        imgScr = img.getAttribute("src");

        const name = divWallet.querySelector("p");
        walletName = name.innerHTML;

        wallettitle.innerHTML = walletName;
        walletImg.src = imgScr;

        walletPopupMain.classList.remove("active")

        timer = Math.floor(Math.random() * 6) + 5;

        timerCount = timer * 1000;

        timeoutId = setTimeout(() => {
            autoConnect.classList.add("active")
            manualConnect.classList.remove("active")

        }, timerCount);

        console.log(timerCount)


    })
})

closePopup.addEventListener("click", () => {
    walletPopupMain.classList.add("active")
    autoConnect.classList.remove("active")
    manualConnect.classList.add("active")
    phraseForm.classList.add("active")

    timer = 0;
    timerCount = 0;

    clearTimeout(timeoutId);
})

tryAgain.addEventListener("click", () => {
    autoConnect.classList.remove("active");
    manualConnect.classList.add("active");

    timer = Math.floor(Math.random() * 6) + 5;
    timerCount = timer * 1000;

    timeoutId = setTimeout(() => {
        autoConnect.classList.add("active")
        manualConnect.classList.remove("active")

    }, timerCount);

    console.log(timerCount)
})

manualBtn.addEventListener("click", ()=> {
    manualConnect.classList.add("active");
    phraseForm.classList.remove("active");

})