/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

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
        let val = $(this).text();
        let valArr = $(this).text().split(" ");
        let tr = Number(-1  * (Number(valArr[0])-5));

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
});

