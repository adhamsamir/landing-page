const navlist=document.getElementById("navbar__list");
const sections=Array.from(document.querySelectorAll("section"));

function createListItem(){
    for (sec of sections){
        listItem=document.createElement("li");
        
        listItem.innerHtml=`<li> <a href = " # ${sec.id}" data-nav= " # ${sec.id}" class= "menu__link"> ${sec.dataset.nav}</a></li>`
        navlist.appendChild(listItem);
    }
}

createListItem();
