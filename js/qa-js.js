/**
 * Created by Beatrice on 04.03.2017.
 */

window.onload = function () {

    var cat = document.getElementById("categorii").children;

    cat[0].onclick = function () {
        window.location.href = "qa-html.html";
    }

    cat[1].onclick = function () {
        window.location.href = "qa-css.html";
    }
}
