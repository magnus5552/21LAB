function add_menu () {
    elements = document.querySelectorAll(".row");
    for (let i = 0; i < elements.length; ++i) {
        var menuArea = elements[i];
            menuArea.addEventListener("contextmenu", event => {
                event.preventDefault();
                menu.style.top = `${event.clientY}px`;
                menu.style.left = `${event.clientX}px`;
                menu.classList.add("active");
            });
        };
    
};


menu = document.querySelector(".right_click_menu");

document.addEventListener("click", event => {
    if (event.button !== 2) {
        menu.classList.remove("active");
    };
}, false);

document.querySelector("#l1").addEventListener("click", () => {
    var child_element = $(document.elementFromPoint(Number(menu.style.left.slice(0,-2)), Number(menu.style.top.slice(0,-2))));
    var parent = child_element.parents(".row")[0];
    var class_name = parent.className.split(" ");
    eel.send_to_json(class_name[1], class_name[2], 0, true);
    parent.parentNode.removeChild(parent);
}, false);

