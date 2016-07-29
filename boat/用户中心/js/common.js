
function addElementDiv(obj,i) {
    var parent = document.getElementById(obj);
    //添加 div
    var div = document.createElement("div");
    //设置 div 属性，如 id
    div.setAttribute("class", "content");
    div.setAttribute("id", "content"+i);
    parent.appendChild(div);
    addElementImg("content"+i);
    addElementUL("content"+i,i);

}
function addElementUL(obj,i) {
    var parent = document.getElementById(obj);
    //添加 p
    var oUl = document.createElement("ul");
    //设置 div 属性，如 id
    oUl.setAttribute("class", "oUl");
    oUl.setAttribute("id", "oUl"+i);
    parent.appendChild(oUl);


}

/**
 * Created by fish on 2016/7/28.
 */
