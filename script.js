function lesser()
{
    var cont = document.getElementsByClassName("image1"); 
    cont[0].remove();
    var cont = document.getElementsByClassName("image2"); 
    cont[0].remove();
}

function greater()
{
    var img = document.createElement("img");
    img.src = "img/isaac.jpg";
    var src = document.getElementsByClassName("container");
    src.appendChild(img);
   
}

