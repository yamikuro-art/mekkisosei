<!DOCTYPE html>
<html>
  <head>
    <title>組成を入力するアプリ</title>
  </head>
  <body>
    <h1>組成を入力してください</h1>
    <input type="text" id="composition" />
    <button onclick="addComposition()">追加</button>
    <ul id="compositionList"></ul>
  </body>
  <script src="app.js"></script>
</html>

let compositionArray = [];

function addComposition() {
  const compositionInput = document.getElementById("composition");
  const compositionList = document.getElementById("compositionList");
  const composition = compositionInput.value;
  compositionArray.push(composition);
  compositionList.innerHTML += `<li>${composition}</li>`;
  compositionInput.value = "";
}
