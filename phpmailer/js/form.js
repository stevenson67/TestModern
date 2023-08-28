
const checkbox = document.getElementById("check");
const btn_submit = document.querySelector(".request__btn");

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        btn_submit.removeAttribute("disabled");
    } else {
        btn_submit.setAttribute("disabled", true);
    }
});

const check = document.getElementById("check");
const btn_su = document.querySelector(".popup__btn");

check.addEventListener("change", () => {
    if (check.checked) {
        btn_su.removeAttribute("disabled");
    } else {
        btn_su.setAttribute("disabled", true);
    }
});

