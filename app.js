//EXERCICE MADE ACCORDING TO THE NET NINJA JAVCASCRIPT TUTORIAL.

//    SELECTORS

var liNew = document.createElement("li");
var bookName = document.createElement("span");
var deleteBtn = document.createElement("span");
var list = document.querySelector("#book-list ul");

//    FUNCTIONS

//                    "delete Books"

list.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    var li = e.target.parentElement;
    list.removeChild(li);
  }
});

//                     "add Books"

var addBook = document.forms["add-book"];

addBook.addEventListener("submit", function (e) {
  e.preventDefault();
  var val = addBook.querySelector("input[type = 'text']").value;

  //  create Element

  liNew.appendChild(bookName);
  liNew.appendChild(deleteBtn);

  list.appendChild(liNew);

  //  Content

  bookName.textContent = val;
  deleteBtn.textContent = "delete";

  // Class

  bookName.classList.add("name");
  deleteBtn.classList.add("delete");
  document.forms["add-book"].querySelector("input[type = 'text']").value = "";
});

//                     "Hide Books"

var hideBox = document.querySelector("form #hide");

hideBox.addEventListener("change", function (e) {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

//                     "Search Books"

var search = document.forms["search-books"].querySelector("input");

search.addEventListener("keyup", function (e) {
  var con = search.value.toLowerCase();
  var lis = list.querySelectorAll("li");

  for (let i = 0, length1 = lis.length; i < length1; i++) {
    var title = lis[i].firstElementChild.textContent;
    if (title.toLowerCase().indexOf(con) == -1) {
      lis[i].style.display = "none";
    } else {
      lis[i].style.display = "block";
    }
  }
});
