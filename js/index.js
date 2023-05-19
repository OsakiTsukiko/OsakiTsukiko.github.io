window.onload = function () {
    var annex_text = ""
    var content_text = ""

    console.log("IDK")
    for (cat of page_content.en.categories) {
        annex_text += `<a href="#${cat.id}"><h2>${cat.title}</h2></a>`
        content_text += cat.content
    }

    document.getElementById("annex").innerHTML = annex_text
    document.getElementById("content").innerHTML = content_text
}