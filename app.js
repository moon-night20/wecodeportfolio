const input = document.querySelector("input");
const button = document.querySelector("button");
const productList = document.querySelector("ul");

const existingItems = productList.querySelectorAll("li");
for (let i = 0; i < existingItems.length; i++) {
  const li = existingItems[i];

  const textSpan = document.createElement("span");
  textSpan.textContent = li.textContent;
  li.textContent = "";
  li.appendChild(textSpan);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginLeft = "10px";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(deleteBtn);
}

button.addEventListener("click", function () {
  const ProductName = input.value.trim();
  if (ProductName === "") {
    alert("please enter a product name");
    return;
  }

  const newItem = document.createElement("li");

  const textSpan = document.createElement("span");
  textSpan.textContent = ProductName;
  newItem.appendChild(textSpan);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginLeft = "10px";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", function () {
    newItem.remove();
  });

  newItem.appendChild(checkbox);
  newItem.appendChild(deleteBtn);

  productList.appendChild(newItem);
  input.value = "";
});
