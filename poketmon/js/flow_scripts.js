window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

$(document).ready(function(){
    $("#poketmonSelect tbody button").click(function(){

        let chk = $("#check_line").val();
        let html = $(this)[0].outerHTML;

        $("#checkTable tr:eq("+chk+") td:eq(1)").append("<div>" + html + " <button onclick='$(this).parent().remove();'>X</button></div>");       

        checkPoketmon();       
    });

    $("#btnPoketmon3, #btnPoketmon4, #btnPoketmon5").click(function(){        
        $("#poketmonSelect tbody tr").css("display", "none");        

        if(!$(this).hasClass("on")) {                        
            $("#poketmonSelect tbody tr:eq(" + ($(this).index()-1) + ")").css("display", "table-row");
            $("#btnPoketmon3, #btnPoketmon4, #btnPoketmon5").removeClass("on");
            $(this).addClass("on");
        }
        else{
            $(this).removeClass("on");
        }
    });

    $("#btnReset").click(function(){
        $("#checkTable tr > td:nth-child(2)").html('');
        $("#checkPoketmonLine, #checkPoketmon3, #checkPoketmon4").html('');         
        $("#line1, #line2").val("");
    });

    $("#poketmonSelect tbody tr").css("display", "none");

    $("#datatablesSimple tbody td").click(function(){
        let val     = $(this).text();
        let valArr  = $(this).text().split(" ");
        let tr      = Number(-1  * (Number(valArr[0])-5));

        if($(this).hasClass("on")) {
            $(this).removeClass("on");
            $('#datatablesSimple td:contains(' + val + ')').removeClass("on");
            $("#poketmonSelect tbody tr:eq("+tr+") button:contains("+valArr[1]+")").removeClass("on");
        }
        else{
            $(this).addClass("on");            
            $('#datatablesSimple td:contains(' + val + ')').addClass("on");
            $("#poketmonSelect tbody tr:eq("+tr+") button:contains("+valArr[1]+")").addClass("on");
        }
    });

    $(".popup").click(function(){        
        $("#dialog").fadeIn();
    })

    $("#btnPopupClose").click(function(){
        $("#dialog").fadeOut()
    });

    $(document).mouseup(function (e){
        var LayerPopup = $(".tb");
        if(LayerPopup.has(e.target).length === 0){
            $(".dialog").hide();
        }
    });
    
    function checkPoketmon(){
        var arr3 = [];
        var arr4 = [];

        $(".checkButton3 button").each(function(){
            let cnt = $("#checkTable button:contains(" + $(this).text() + ")").length;
            if(cnt > 1){
                var arr = {'name': $(this).text(), 'cnt' : cnt};
                arr3.push(arr);
            }
        });

        let checkPoketmon3 = "";
        $.each(arr3, function(idx, item){
            checkPoketmon3 += checkPoketmon3 != "" ? ", " + item.name + "(" + item.cnt + ")" : item.name + "(" + item.cnt + ")";
        });

        $(".checkButton4 button").each(function(){
            let cnt = $("#checkTable button:contains(" + $(this).text() + ")").length;
            if(cnt > 1){
                var arr = {'name': $(this).text(), 'cnt' : cnt};
                arr4.push(arr);
            }
        });

        $("#checkPoketmon3").html(checkPoketmon3);

        let checkPoketmon4 = "";
        $.each(arr4, function(idx, item){
            checkPoketmon4 += checkPoketmon4 != "" ? ", " + item.name + "(" + item.cnt + ")" : item.name + "(" + item.cnt + ")";
        });

        $("#checkPoketmon4").html(checkPoketmon4);
    }
    
    $("#line1, #line2").change(function(){
        if($("#line1").val() != "" && $("#line2").val() != ""){
            
            let checkPoketmonLine = "";
            let arr1 = [];
            let arr2 = [];
            let rush5 = rush5Data.data;

            $.each(rush5, function(idx, item){
                let cnt = idx + 1;

                if(item[$("#line1").val()].indexOf("4 ") > -1 || item[$("#line1").val()].indexOf("3 ") > -1)
                    arr1.push(item[$("#line1").val()]);

                if(item[$("#line2").val()].indexOf("4 ") > -1 || item[$("#line2").val()].indexOf("3 ") > -1)
                    arr2.push(item[$("#line2").val()]);
            });

            $.each(arr1, function(idx, item){
                if(arr2.indexOf(item) > -1)  {
                    checkPoketmonLine += checkPoketmonLine!="" ? ", " + item : item;
                }
            });

            $("#checkPoketmonLine").html(checkPoketmonLine);
        }        
    });
});

