/**
 * Created by Beatrice on 04.03.2017.
 */

window.onload = function () {

    document.getElementsByTagName("button")[0].onclick = function () {
        window.location.href = "question.html";
    }

    var cat = document.getElementById("categorii").children;
    cat[0].onmouseover = function () {
        cat[1].style.border = "0px none transparent";
    }
    cat[0].onmouseout = function () {
        cat[1].style.borderTop = "2px solid dodgerblue";
        cat[1].style.borderLeft = "2px solid dodgerblue";
        cat[1].style.borderRight = "2px solid dodgerblue";
    }

    cat[2].onmouseover = function () {
        cat[1].style.border = "0px none transparent";
    }
    cat[2].onmouseout = function () {
        cat[1].style.borderTop = "2px solid dodgerblue";
        cat[1].style.borderLeft = "2px solid dodgerblue";
        cat[1].style.borderRight = "2px solid dodgerblue";
    }

    cat[0].onclick = function () {
        window.location.href = "qa-html.html";
    }

    cat[2].onclick = function () {
        window.location.href = "qa-js.html";
    }
}
