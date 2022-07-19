const links = document.querySelector("#header-link");
const templ = links.getElementsByClassName("templ");
const contents = document.querySelector('#general-link');
const general = contents.getElementsByClassName("general");
console.log(links);

for (let i = 0; i < templ.length; i++) {
    for (let j = 0; j < general.length; j++) {
        templ[i].addEventListener("click", function () {
            const active = document.getElementsByClassName("active");
            const active2 = document.getElementsByClassName("active2");
            active[0].className = active[0].className.replace(" active", "");
            templ[i].className += " active";
            active2[0].className = active2[0].className.replace(" active2", "");
            general[i].className += " active2";
        });
    }    
}