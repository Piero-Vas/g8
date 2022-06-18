const optionMode = document.querySelector("#option-mode");

const body = document.querySelector("body");

optionMode.onchange = function (event){
    const {value} = event.target;
    console.log(value);

    body.setAttribute("data-mode",value);
}

if (
    window.matchMedia && window.matchMedia("(prefers-color-scheme:dark").matches
) {
    body.setAttribute("data-mode","dark");
}else{
    body.setAttribute("data-mode","light");
}