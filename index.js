function getCatFact() {
  const factNum = Math.floor(Math.random() * 289);

  fetch('https://cat-fact.herokuapp.com/facts')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data.all[factNum]);
      const fact = data.all[factNum];
      document.getElementById("factNumber").innerHTML = "#" + factNum;
      document.getElementById("factText").innerHTML = fact.text;
      document.getElementById("factAuthor").innerHTML = "by " + fact.user.name.first + " " + fact.user.name.last;
    })
    .catch(error => console.log("ERROR"));
}