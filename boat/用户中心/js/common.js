
function addElementDiv(obj,i) {
    var parent = document.getElementById(obj);
    //��� div
    var div = document.createElement("div");
    //���� div ���ԣ��� id
    div.setAttribute("class", "content");
    div.setAttribute("id", "content"+i);
    parent.appendChild(div);
    addElementImg("content"+i);
    addElementUL("content"+i,i);

}
function addElementUL(obj,i) {
    var parent = document.getElementById(obj);
    //��� p
    var oUl = document.createElement("ul");
    //���� div ���ԣ��� id
    oUl.setAttribute("class", "oUl");
    oUl.setAttribute("id", "oUl"+i);
    parent.appendChild(oUl);


}

/**
 * Created by fish on 2016/7/28.
 */
