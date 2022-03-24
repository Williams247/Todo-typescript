const input = document.querySelector("#input")! as HTMLInputElement;
const button = document.querySelector("#button")! as HTMLButtonElement;
const listContainer = document.querySelector("#list-container")! as HTMLUListElement;
const errorIndicator = document.querySelector("#error-indicator")! as HTMLParagraphElement;

input.addEventListener("keydown", strikeEnterKey);
button.addEventListener("click", addList);

function strikeEnterKey(event: any) {
    //   console.log(event)
    if (event.key === "Enter") addList()
}

let isError: boolean = false;

function addList() {
    
    if (!input.value) {
       isError = true;
       errorIndicator.classList.remove("hide");
       return
    }

    listContainer.innerHTML += `
       <li
          class="w-full bg-slate-700 text-white py-4 px-4 mb-3 rounded-lg flex justify-between"
        >
        <div>${input.value}</div>
          <button title="Remove" class="close">&times;</button>
        </li>
    `;

    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(i => {
      i.addEventListener("click", function() {
        this.parentElement.remove();
      })
    });

    if (isError) {
        isError = false;
        errorIndicator.classList.add("hide");
    }

    input.value = "";
};
