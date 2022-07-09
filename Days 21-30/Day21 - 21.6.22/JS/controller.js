import * as Model from "./model.js";
import * as View from "./view.js";

export async function init() {
    View.init()
    var arr = await Model.getInfo();
    View.displayInfo(arr);

    
}


window.addEventListener("hashchange", function(e){
    e.preventDefault()
    var hash = e.newURL.split("#")[1]
    View.toggleMenu
})