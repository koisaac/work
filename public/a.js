import d from "./data.js";
var data = d;

function get_parameter() {
    var url = location.href;
    var idx = url.indexOf("?");
    var data_ = url.substring(idx + 1, url.length);

    data_ = data_.split("=")[1];
    return data_;
}

document.getElementById("title").innerText = data[get_parameter()]["v"];

const a = document.getElementById("t");

var h1Node = document.createElement("h1");
h1Node.className = "h1";
h1Node.innerText = data[get_parameter()]["v"];
a.appendChild(h1Node);

var div_s = document.createElement("div");
div_s.className = "div_s";
a.appendChild(div_s);

var div_1 = document.createElement("div");
div_1.className = "div_1";
div_s.appendChild(div_1);

var h1_2Node = [];
var imgNode = document.createElement("img");
var pNode = [];
var ulNode = [];
var liNode = [];
var divNode = [];
var divimgNode;
var div_mNode;

for (var i = 0; i < data[get_parameter()]["u"].length; i++) {
    h1_2Node.push(document.createElement("h2"));
    pNode.push(document.createElement("p"));
    ulNode.push(document.createElement("ul"));
    liNode.push([]);
    divNode.push(document.createElement("div"));
    divimgNode = document.createElement("div");

    divNode[i].className = "sub_div";

    h1_2Node[i].innerText = data[get_parameter()]["u"][i][0];
    h1_2Node[i].className = "h2";

    if (i == 1) ulNode[i].style = "padding-left:20px";
    else ulNode[i].style = "padding-left:0px";
    for (var j = 0; j < data[get_parameter()]["u"][i][1].length; j++) {
        liNode[i].push(document.createElement("li"));
        liNode[i][j].innerText = data[get_parameter()]["u"][i][1][j];
        if (i == 1) liNode[i][j].className = "li_p";
        else liNode[i][j].className = "p";

        ulNode[i].appendChild(liNode[i][j]);

        console.log(data[get_parameter()]["u"][i][1][j]);
    }

    divNode[i].appendChild(h1_2Node[i]);
    divNode[i].appendChild(ulNode[i]);
    if (i == 0) {
        divimgNode.className = "div_i";
        imgNode.src = data[get_parameter()]["i"];
        imgNode.className = "img";
        divimgNode.appendChild(imgNode);
    }
    divNode[i].appendChild(divimgNode);
    div_1.appendChild(divNode[i]);
}
