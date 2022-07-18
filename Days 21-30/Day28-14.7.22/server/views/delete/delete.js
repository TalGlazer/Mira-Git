const form = document.getElementById("f");

form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const delJson = {};
  for (const [key, value] of data) {
    delJson[key] = value;
  }
  console.log(`delJson`, delJson);
  fetch(`http://localhost:4200/api/students`, {
    method: "DELETE",
    // בתוך הבודי, תמיד לשים ג'יסון סטרינגיפיי
    body: JSON.stringify(delJson),
  });
  //   console.log(`not sending anything`);
});
