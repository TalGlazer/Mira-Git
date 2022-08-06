const body = document.querySelector(`body`);
const showStudentsBtn = document.getElementById(`show-students-btn`);
// creating a list for students
function createTable(arr) {
  const table = document.createElement(`table`);
  const thead = document.createElement(`thead`);
  const tbody = document.createElement(`tbody`);
  const trHead = document.createElement(`tr`);
  // grabbing keys inside -first object[0]- in the array
  for (const key in arr[0]) {
    const th = document.createElement(`th`);
    th.innerText = key;
    trHead.append(th);
  }
  thead.append(trHead);
  table.append(thead);
  arr.forEach(createRow);
  function createRow(s) {
    const tr = document.createElement(`tr`);
    for (const key in s) {
      const td = document.createElement(`td`);
      td.innerText = s[key];
      tr.append(td);
    }
    tbody.append(tr);
  }
  table.append(tbody);
  body.append(table);
}

showStudentsBtn.addEventListener(`click`, () => {
  // fetching the students.json file
  fetch(`http://localhost:4321/api/getStudents`)
    .then((res) => res.json())
    .then((res) => createTable(res));
});
