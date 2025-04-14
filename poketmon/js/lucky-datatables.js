window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    let options1 = {
        searchable: false,
        sortable: false,
        perPageSelect: false,
        footer : false,
        labels : {
            info: ""
        },
        paging: false
    };

    let options2 = {
        data: luckyStarsData,
        searchable: false,
        sortable: false,
        perPageSelect: false,
        footer : false,
        labels : {
            info: ""
        },
        paging: false
    };

    
    const poketmonSelect = document.getElementById('poketmonSelect');
    if (poketmonSelect) {
        new simpleDatatables.DataTable(poketmonSelect, options1);
    }

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple, options2);
    }

});
