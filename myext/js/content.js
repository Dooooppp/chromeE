window.onload = function () {
  let listall = document.querySelectorAll("#mainsrp-itemlist div.items>div");
  let names = [];
  let hrefs = [];
  for (let i = 0; i < listall.length; i++) {
    let tmp = listall[i].querySelector("div.J_IconMoreNew>div.title>a");
    let nametmp = tmp.innerText.trim();
    let hreftmp = tmp.getAttribute("href");
    if (nametmp) {
      names.push(nametmp);
    }
    if (!/$http[|s]/.test(hreftmp)) {
      hrefs.push(`https:${hreftmp}`);
    } else {
      hrefs.push(hreftmp);
    }
  }
  let div = document.createElement("div");
  div.className = "zztest-div";
  let ul = document.createElement("ul");
  ul.className = "zztest-ul";
  for (let i = 0; i < names.length; i++) {
    let li = document.createElement("li");
    li.classList = ["zztest-li"];
    let a = document.createElement("a");
    a.href = hrefs[i];
    a.text = names[i];
    a.title = names[i];
    a.target = "_blank";
    li.append(a);
    ul.append(li);
  }
  div.append(ul);
  document.getElementsByTagName("body")[0].append(div);
};
// test