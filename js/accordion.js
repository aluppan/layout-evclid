$(function () {
    $("#accordion").accordion({
        active: true,
        collapsible: true,

        beforeActivate: function (event, ui) {
            ui.newPanel.css("height", "auto");
        }
    });
});