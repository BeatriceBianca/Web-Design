/**
 * Created by Beatrice on 02.03.2017.
 */

window.onload = function () {
    document.getElementById("renunta").onclick = function () {
        document.getElementById("intrebare").value = "";
        var opt = document.getElementsByTagName("form")[0].children;
        for ( var i = 0; i < opt.length; i++ ) {
            opt[i].checked = false;
        }
    }

    document.getElementById("trimite").onclick = function () {
        var intrebare = document.getElementById("intrebare").value;
        var opt = document.getElementsByTagName("form")[0].children;
        if( opt[0].checked == true )
            document.getElementsByTagName("form")[1].action = "qa-html.html";
        if( opt[1].checked == true )
            document.getElementsByTagName("form")[1].action = "qa-css.html";
        if( opt[2].checked == true )
            document.getElementsByTagName("form")[1].action = "qa-js.html";
    }
}