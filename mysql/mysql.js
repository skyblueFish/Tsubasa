/**
 * Created by fish on 2016/7/30.
 */
/**********获取非行间样式值*********/
function getStyle(obj,attr){
    if(obj.currentStyle)
    {
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,false)[attr];
    }
}
/*************动态创建元素****************/
   function addElementDiv(obj) {
        var parent = document.getElementById(obj);
        //添加 div
        var div = document.createElement("div");
        //设置 div 属性，如 id
        div.setAttribute("id", "newDiv");
        div.innerHTML = "js 动态添加div";
        parent.appendChild(div);
    }
function addElementLi(obj) {
    var ul = document.getElementById(obj);
    //添加 li
    var li = document.createElement("li");
    //设置 li 属性，如 id
    li.setAttribute("id", "newli");
    li.innerHTML = "js 动态添加li";
    ul.appendChild(li);
}
    function addElementImg(obj,address) {
        var ul = document.getElementById(obj);
        //添加 li
        var li = document.createElement("li");
        //添加 img
        var img = document.createElement("img");
        //设置 img 属性，如 id
        img.setAttribute("id", "newImg");
        //设置 img 图片地址
        img.src = "/images/"+address+".jpg";
        li.appendChild(img);
        ul.appendChild(li);
    }
/**************缓冲运动*******************/
function startMove(obj,json,endFn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var bBtn = true;
        for(var attr in json){
            var iCur = 0;
            if(attr == 'opacity'){
                if(Math.round(parseFloat(getStyle(obj,attr))*100)==0){
                    iCur = Math.round(parseFloat(getStyle(obj,attr))*100);
                }
                else{
                    iCur = Math.round(parseFloat(getStyle(obj,attr))*100) || 100;
                }
            }
            else{
                iCur = parseInt(getStyle(obj,attr)) || 0;
            }

            var iSpeed = (parseInt(json[attr]) - iCur)/8;
            iSpeed = iSpeed >0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if(iCur!=parseInt(json[attr])){
                bBtn = false;
            }
            if(attr == 'opacity'){
                obj.style.filter = 'alpha(opacity=' +(iCur + iSpeed)+ ')';
                obj.style.opacity = (iCur + iSpeed)/100;
            }
            else{
                obj.style[attr] = iCur + iSpeed + 'px';
            }
        }
        if(bBtn){
            clearInterval(obj.timer);
            if(endFn){
                endFn.call(obj);
            }
        }
    },30);

}