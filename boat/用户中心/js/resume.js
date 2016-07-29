/**
 * Created by fish on 2016/7/1.
 */
var oChange=document.getElementById("change");
var oBtn=oChange.getElementsByTagName("button");
var oDiv=oChange.getElementsByTagName("div");
function change(){
for(var i=0;i<oBtn.length;i++)
{   oBtn[i].index=i;
    oBtn[i].onclick=function()
    {
        for(i=0;i<oBtn.length;i++)
        {
            oBtn[i].className='an';
            oDiv[i].style.display="none"
        }
        this.className="chuan";
        oDiv[this.index].style.display="block"
    }
}
}
change();
var aLi=oChange.getElementsByTagName("li");
var oEdit=document.getElementById("edit");
var oSubmit=document.getElementById("submit");
var oSpan2=document.getElementsByClassName("span2");
var flag=0;
oEdit.onclick=function(){
   if(flag==0){
       for(var i=0;i<oSpan2.length;i++) {
           var oInput=document.createElement("input");
           oInput.setAttribute("type","text");
           oInput.setAttribute("class","editInput");
           oInput.value=oSpan2[i].innerHTML;
           aLi[i].appendChild(oInput);
           oSpan2[i].style.display="none";
       }
       flag=1
   }
    else{}

};
/*保存时传输json格式信息数据*/

oSubmit.onclick=function(){
   if(flag==1){

        for(var i=0;i<oSpan2.length;i++) {
            oSpan2[i].innerHTML=aLi[i].lastChild.value;
            aLi[i].removeChild( aLi[i].lastChild);
            oSpan2[i].style.display="block";
        }
        flag=0
    }
    else{}

};