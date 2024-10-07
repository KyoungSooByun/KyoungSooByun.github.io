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

        $("#checkTable tr:eq("+chk+") td:eq(1)").append("<div>" + html + "<button onclick='$(this).parent().remove();'>X</button></div>");       
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

    $("#btnReset").click(function(){
        $("#checkTable tr td:eq(1)").html('');
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


    $(document).mouseup(function (e){
        var LayerPopup = $(".tb");
        if(LayerPopup.has(e.target).length === 0){
            $(".dialog").hide();
        }
    });
    
});

