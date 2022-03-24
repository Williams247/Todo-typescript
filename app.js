var input = document.querySelector("#input");
var button = document.querySelector("#button");
var listContainer = document.querySelector("#list-container");
var errorIndicator = document.querySelector("#error-indicator");
input.addEventListener("keydown", strikeEnterKey);
button.addEventListener("click", addList);
function strikeEnterKey(event) {
    //   console.log(event)
    if (event.key === "Enter")
        addList();
}
var isError = false;
function addList() {
    if (!input.value) {
        isError = true;
        errorIndicator.classList.remove("hide");
        return;
    }
    listContainer.innerHTML += "\n       <li\n          class=\"w-full bg-slate-700 text-white py-4 px-4 mb-3 rounded-lg flex justify-between\"\n        >\n        <div>".concat(input.value, "</div>\n          <button title=\"Remove\" class=\"close\">&times;</button>\n        </li>\n    ");
    var closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(function (i) {
        i.addEventListener("click", function () {
            this.parentElement.remove();
            alert("Removed");
        });
    });
    if (isError) {
        isError = false;
        errorIndicator.classList.add("hide");
    }
    input.value = "";
}
;
