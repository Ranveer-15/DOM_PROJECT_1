const div = document.getElementById("parent")

div.style.backgroundColor = "yellow"

div.style.margin = "20px"

div.style.padding = "10px"

let element = document.querySelector("#parent p");
element.style.fontSize = "18px"
element.style.fontWeight = "bold"
element.style.color = "blue"

div.style.height = "200px";
div.style.width = "300px";

div.style.cssText = "background:yellow; height:200px; width:300px; margin:200px auto; display:flex; justify-content:center; align-items:center"