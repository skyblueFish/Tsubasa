﻿/**
 * Created by fish on 2016/7/28.
 */
function addElementLI(i) {
    var parent = document.getElementById("oUl"+i);
    //添加 p

    var oLi1 = document.createElement("li");
    parent.appendChild(oLi1);
    oLi1.innerHTML="职位:" + "船员" ;
    var oLi2 = document.createElement("li");
    parent.appendChild(oLi2);
    oLi2.innerHTML="公司:" + "武汉航运交易所";
    var oLi3 = document.createElement("li");
    parent.appendChild(oLi3);
    oLi3.innerHTML="薪资:" + "4k~6k" ;
    var oLi4 = document.createElement("li");
    parent.appendChild(oLi4);
    oLi4.innerHTML="状态:" + "已邀请";

}
function addElementImg(obj) {
    var oContent = document.getElementById(obj);
    //添加 img
    var img = document.createElement("img");
    //设置 img 属性，如 id
    img.setAttribute("class", "two");
    //设置 img 图片地址
    img.src = "image/company2.jpg";
    oContent.appendChild(img);
}
window.onload=function(){
    for(var i=0;i<13;i++){
        addElementDiv("mainContent",i);
        addElementLI(i);
    }
    var aContent=document.getElementsByClassName("content");
    {
        for(var j=0;j<aContent.length;j++)
        {
            aContent[j].onclick=function(){
                window.location.href=("jobDetails.html")
            }
        }
    }
};