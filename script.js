document.getElementById("addBlog").addEventListener("click", function () {
    document.getElementById("popupContact").style.display = "block";
  });
  class Blog {
    constructor(title, detail) {
      this.title = title;
      this.detail = detail;
    }
    addTitle() {
      var title_card = document.createElement("h1");
      title_card.setAttribute("id", "blog-title");
      console.log(title_card);
      document.getElementById("card-text").appendChild(title_card);
      title_card.innerHTML += this.title;
    }
    addDescription() {
      var display = document.createElement("p");
      display.setAttribute("id", "blog-description");
      console.log(display);
      document.getElementById("card-text").appendChild(display);
      display.innerHTML += this.detail;
    }
  }
  document.getElementById("close").addEventListener('click',()=>{
    document.getElementById("title").value="";
    document.getElementById("detail").value="";
    document.getElementById("popupContact").style.display="none";    
  });
  document.getElementById("post").addEventListener("click", () => {
    if (
      document.getElementById("title").value != "" &&
      document.getElementById("detail").value != ""
    ) {
      document.getElementById("popupContact").style.display = "none";
      var title = document.getElementById("title").value;
      var description = document.getElementById("detail").value;
      var image = document.createElement("img");
      image.src = "./assets/javascript.png";
      image.alt = "image";
      document.getElementById("card-text").append(image);
      var obj = new Blog(title, description);
      obj.addTitle();
      obj.addDescription();
    }
  });