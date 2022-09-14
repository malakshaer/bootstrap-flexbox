const submit = document.getElementById("submit");
const list1 = [];
const list2 = [];
const list3 = [];
const list4 = [];

let n = 1;
let x = 0;

submit.addEventListener("onclick", (e) => {
  e.preventDefault();

  addRow();
});

function addRow() {
  const addRows = document.getElementById("full-name");
  const newRow = addRows.insertRow(n);

  list1[x] = document.getElementById("full-name").value;
  list2[x] = document.getElementById("email").value;
  list3[x] = document.getElementById("phone").value;
  list4[x] = document.getElementById("textarea").value;

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);

  cell1.innerHTML = list1[x];
  cell2.innerHTML = list2[x];
  cell3.innerHTML = list3[x];
  cell4.innerHTML = list4[x];

  n++;
  x++;
}
