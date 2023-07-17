import d from "./data.js";
var data = d;
function a() {
    const ulNode = document.getElementById("ul_1");
    var buNode = [];
    var liNode = [];
    for (var i = 0; i < data.length; i++) {
        buNode.push(document.createElement("button"));
        liNode.push(document.createElement("li"));

        buNode[i].addEventListener("click", b.bind(null, i));
        buNode[i].textContent = data[i]["v"];
        buNode[i].className = "bu";

        liNode[i].appendChild(buNode[i]);
        liNode[i].className = "li";

        ulNode.appendChild(liNode[i]);
    }
}
function b(c) {
    location.href = "/a" + "?number=" + c;
}
a();
