//your JS code here. If required.
document.getElementById("ageForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  if (!name || !age) {
    alert("Please fill in all fields.");
  }
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000);
  });
  promise
    .then((name) => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch((err) => {
      alert(`Oh sorry, ${name}. You aren't old enough.`);
    });
});
