let compositionArray = [];

function addComposition() {
  const compositionInput = document.getElementById("composition");
  const compositionList = document.getElementById("compositionList");
  const composition = compositionInput.value;
  compositionArray.push(composition);
  compositionList.innerHTML += `<li>${composition}</li>`;
  compositionInput.value = "";
}
