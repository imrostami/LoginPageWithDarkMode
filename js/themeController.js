var changeThemeBtn = $("#dmodeBtn");
var style =  $("#appStyle");
var darkMode = false;
var container = $(".container");
changeThemeBtn.click(()=>
{
 if(darkMode!=true)
 {
   style.attr("href" , "css/dark.css").after(()=>
   {
     darkMode = true;
    changeThemeBtn.attr("value" , "");
   });
 }
 else if(darkMode)
 {
   style.attr("href" , "css/style.css").after(()=>
   {
     darkMode = false;
     changeThemeBtn.attr("value" , "");
    
   });
 }
 
});