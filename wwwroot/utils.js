//--------------------------------------------------------------------
var clientY = document.documentElement.clientHeight.toString();
window.addEventListener("scroll", ()=>{
    DotNet.invokeMethod('blazorApp','ScrollY',window.scrollY.toString(), clientY);
});
//--------------------------------------------------------------------
