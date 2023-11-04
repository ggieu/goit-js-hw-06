const result = {};

addEventListener("submit", (a) => {
    a.preventDefault();
    for (const i of document.querySelectorAll("input")) {
        if(i.value === "") {
            alert("всі поля повинні бути заповнені");
            result = {};
            break;
        }
        else {
            result[i.getAttribute("name")] = i.value;
        }
    }
    result();
    console.log(result)
});

function reset() {
    for (const i of document.querySelectorAll("input"))
    i.value = "";
};