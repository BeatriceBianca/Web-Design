/**
 * Created by Beatrice on 04.03.2017.
 */

window.onload = function () {

    document.getElementsByTagName("button")[0].onclick = function () {
        window.location.href = "question.html";
    }

    var cat = document.getElementById("categorii").children;
    cat[1].onmouseover = function () {
        cat[2].style.border = "0px none transparent";
    }
    cat[1].onmouseout = function () {
        cat[2].style.borderTop = "2px solid dodgerblue";
        cat[2].style.borderLeft = "2px solid dodgerblue";
        cat[2].style.borderRight = "2px solid dodgerblue";
    }

    cat[0].onmouseover = function () {
        cat[2].style.border = "0px none transparent";
    }
    cat[0].onmouseout = function () {
        cat[2].style.borderTop = "2px solid dodgerblue";
        cat[2].style.borderLeft = "2px solid dodgerblue";
        cat[2].style.borderRight = "2px solid dodgerblue";
    }

    cat[0].onclick = function () {
        window.location.href = "qa-html.html";
    }

    cat[1].onclick = function () {
        window.location.href = "qa-css.html";
    }
}
