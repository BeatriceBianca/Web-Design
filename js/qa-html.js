/**
 * Created by Beatrice on 04.03.2017.
 */

window.onload = function () {

    document.getElementsByTagName("button")[0].onclick = function () {
        window.location.href = "question.html";
    }

    var cat = document.getElementById("categorii").children;
    cat[1].onmouseover = function () {
        cat[0].style.border = "0px none transparent";
    }
    cat[1].onmouseout = function () {
        cat[0].style.borderTop = "2px solid dodgerblue";
        cat[0].style.borderLeft = "2px solid dodgerblue";
        cat[0].style.borderRight = "2px solid dodgerblue";
    }

    cat[2].onmouseover = function () {
        cat[0].style.border = "0px none transparent";
    }
    cat[2].onmouseout = function () {
        cat[0].style.borderTop = "2px solid dodgerblue";
        cat[0].style.borderLeft = "2px solid dodgerblue";
        cat[0].style.borderRight = "2px solid dodgerblue";
    }

    cat[1].onclick = function () {
        window.location.href = "qa-css.html";
    }

    cat[2].onclick = function () {
        window.location.href = "qa-js.html";
    }
}
