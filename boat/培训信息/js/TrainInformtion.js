/**
 * Created by fish on 2016/5/19.
 */

window.onload=function(){

    tableIframe()

};
function tableIframe(){
    var tablePage=document.getElementById("tablePage");
    tablePage.height=tablePage.contentWindow.document.clientHeight;
}
