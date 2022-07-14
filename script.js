/* Fill your code*/
document.getElementById('addBlog').addEventListener('click',function(){
    document.getElementById('popupContact').style.display="block";
})
class Blog{
    constuctor(title,detail){
        this.title = title;
        this.detail = detail;
    }
    addTitle(){
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
    }
    addDescription(){
        var desc = document.createElement("p");
        desc.setAttribute("id", "blog-description");
        document.getElementById('card-text').appendChild(desc);
        desc.innerHTML += detail;
    }
}

var post=document.getElementById('post');
post.addEventListener('click',function(){
 
    var image=document.createElement('img');
    image.src='./assets/javascript.png';
    document.getElementById('flashcard').appendChild(image);

    var title=document.getElementById('title').value;
    var detail=document.getElementById('detail').value;

    var add_blog = new Blog(title,detail);
    add_blog.addTitle();
    add_blog.addDescription();

})