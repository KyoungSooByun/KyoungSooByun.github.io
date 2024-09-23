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
        let lv = 5 - Number($(this).parent().parent().data("index"));
        let val = lv + " " + $(this).text();

        if($(this).hasClass("on")) {
            $(this).removeClass("on");
            $('#datatablesSimple td:contains(' + val + ')').removeClass("on");
        }
        else{
            $(this).addClass("on");
            $('#datatablesSimple td:contains(' + val + ')').addClass("on");
        }
    });

    $("#btnPoketmon1, #btnPoketmon2, #btnPoketmon3, #btnPoketmon4, #btnPoketmon5").click(function(){        
        $("#poketmonSelect tbody tr").css("display", "none");        

        if(!$(this).hasClass("on")) {                        
            $("#poketmonSelect tbody tr:eq(" + $(this).index() + ")").css("display", "table-row");
            $("#btnPoketmon1, #btnPoketmon2, #btnPoketmon3, #btnPoketmon4, #btnPoketmon5").removeClass("on");
            $(this).addClass("on");
        }
        else{
            $(this).removeClass("on");
        }
    });

    $("#btnPoketmon34").click(function(){
        if(!$(this).hasClass("on")) {                        
            $('#datatablesSimple td').css("color", "#FFF");
            $('#datatablesSimple td:contains(3)').addClass("lv3");
            $('#datatablesSimple td:contains(4)').addClass("lv4");
            $('#datatablesSimple td:contains(5)').addClass("lv5");
            $(this).addClass("on");
        }
        else{
            $('#datatablesSimple td').css("color", "#212529");
            $('#datatablesSimple td:contains(3)').addClass("lv3");
            $('#datatablesSimple td:contains(4)').addClass("lv4");
            $('#datatablesSimple td:contains(5)').addClass("lv5");
            $(this).removeClass("on");
        }
    });

    $("#btnReset").click(function(){
        $("#poketmonSelect tbody button").removeClass("on");
        $('#datatablesSimple td').removeClass("on");

        $('#datatablesSimple td').css("color", "#212529");
        $('#datatablesSimple td:contains(3)').addClass("lv3");
        $('#datatablesSimple td:contains(4)').addClass("lv4");
        $('#datatablesSimple td:contains(5)').addClass("lv5");
    });

    $('#datatablesSimple td:contains(3)').addClass("lv3");
    $('#datatablesSimple td:contains(4)').addClass("lv4");
    $('#datatablesSimple td:contains(5)').addClass("lv5");
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

    $(".chkline").click(function(){
        let line    = $(this).data('line');
        let display = $(this).prop('checked') ? "" : "none";
        $('#datatablesSimple thead tr').each(function(){
            $(this).find('th:eq(' + line + ')').css("display", display);
        });

        $('#datatablesSimple tbody tr').each(function(){
            $(this).find('td:eq(' + line + ')').css("display", display);
        });

        let width = Number($(".chkline:checked").length) * 100;
        $("#datatablesSimple").attr('style', "width:" + width + "px !important;");
    });

    $("#btnLineReset").click(function(){        
        $('#datatablesSimple thead tr').each(function(){
            $(this).find('th').css("display", "");
        });

        $('#datatablesSimple tbody tr').each(function(){
            $(this).find('td').css("display", "");
        });

        $(".chkline").prop('checked', true);
        $("#datatablesSimple").attr('style', "max-width:800px !important;  width:800px !important;");
    });

    $("#btnSet").click(function(){
        let display_name = $('#setArea').css("display") == "flex" ? "설정열기" : "설정닫기";
        let display      = $('#setArea').css("display") == "flex" ? "none" : "flex";
        
        $('#setArea').css("display", display);
        $(this).find('button').text(display_name);
    });

    $("#btnRush5Popup").click(function(){
        $("#dialog").fadeIn()
    });

    $("#btnPopupClose").click(function(){
        $("#dialog").fadeOut()
    });

    $("#btnRush5CatalogPopup").click(function(){
        $("#dialog2").fadeIn()
    });

    $("#btnPopupClose2").click(function(){
        $("#dialog2").fadeOut()
    });

    $("#btnViewB").click(function(){
        $("#datatablesSimple").removeClass("wide");
        $("#btnViewW").removeClass("on");
        $(this).addClass("on");
        
        $('#viewtable tr:eq(1)').css("display", "flex"); 
        $("#datatablesSimple").attr('style', "max-width:800px !important; width:800px !important;");
    });

    $("#btnViewW").click(function(){
        $('#datatablesSimple thead tr').each(function(){
            $(this).find('th').css("display", "");
        });

        $('#datatablesSimple tbody tr').each(function(){
            $(this).find('td').css("display", "");
        });

        $(".chkline").prop('checked', true);
        $("#datatablesSimple").addClass("wide");
        $("#btnViewB").removeClass("on");
        $(this).addClass("on");

        $("#datatablesSimple").attr('style', "max-width:100% !important; width:100% !important;");
        $('#viewtable tr:eq(1)').css("display", "none"); 
    });
    
    $("#btnViewW").trigger('click');
});

