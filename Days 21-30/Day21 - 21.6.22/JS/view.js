export function displayInfo(res) {
    $("main").html(
        res.reduce((toAppend, thePost) => {
            return (
                toAppend + `<div><h1>${thePost.title}</h1><p>${thePost.body}`
            );
        }, "")
    );
}

export function init() {
    $("section").hide(),
    $("#welcome").show();
    $("#welcome > h1").css({
        color: "pink",
        "background-color": "green"});
}

export function toggleMenu(hash) {
    $("section").hide();
    $(`#${hash}`).show();
}