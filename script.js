function loadContent(){
  for(i=0; i<contobj["content-list"].length;i++){
    var object = contobj["content"][(contobj["content-list"][i])];

    var crelmA = document.createElement("a");crelmA.className="panel-a";crelmA.href=object["link"];
    var crelmPnl = document.createElement("div");crelmPnl.className="panel";
    var crelmImg = document.createElement("img");crelmImg.className="panel-img";crelmImg.src=object["img"];
    var crelmText = document.createElement("div");crelmText.className="panel-text"
    var crelmHea = document.createElement("div");crelmHea.className="panel-text-header";crelmHea.innerHTML=object["title"];
    var crelmDisc = document.createElement("div");crelmDisc.className="panel-text-para";crelmDisc.innerHTML=object["discript"];

    crelmText.appendChild(crelmHea);crelmText.appendChild(crelmDisc);
    crelmPnl.appendChild(crelmImg);crelmPnl.appendChild(crelmText);
    crelmA.appendChild(crelmPnl);
    document.getElementById("panel-container").appendChild(crelmA);
  }
}
