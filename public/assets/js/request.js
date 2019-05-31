var isToday = require('date-fns/is_today')

$(function () {

    $("#priority-link").on("click", function (event) {
        event.preventDefault();
        console.log("i am in function")
        $.ajax("/sheet", {
            type: "POST",
            data: newRequest
        }).then(
            function () {
                console.log("everything is okay")
                window.location.replace("sheets");
            }

        );

    });



    $("#submit-request").on("click", function (event) {
        event.preventDefault();
        console.log("i have hit the submit button");
        var mapRequest = $("input[name='map']:checked").val();


        // var dateSubmittedRequest = $('input[id$=date-submitted]').datepicker({
        //     dateFormat: 'yyyy-mm-dd'
        // });
        var date = dateFns.format(new Date(2014, 1, 11), 'MM/DD/YYYY')
        console.log(date)


        // var dueDateRequest = $('input[type="due-date"]').val();
        // console.log($("#due-date"));


        var analystRequest = $(".analyst").children("option:selected").text();
        console.log(analystRequest);
        var priorityRequest = $(".priority").children("option:selected").text();
        console.log(priorityRequest);
        var newRequest = {
            gis_analyst: analystRequest,
            project_manager: $("#project-manager").val().trim(),
            project_priority: priorityRequest,
            date_submitted: dateSubmittedRequest,
            due_date: dueDateRequest,
            project_name: $("#project-name").val().trim(),
            project_number: parseFloat($("#project-number").val()).toFixed(2),
            latitude: parseFloat($("#lat").val()).toFixed(6),
            longitude: parseFloat($("#long").val()).toFixed(6),
            notes_comments: $("#notes_comments").val().trim(),
            map_requested: mapRequest,
            active_archive: 1
        };

        $.ajax("/api/requests", {
            type: "POST",
            data: newRequest
        }).then(
            function () {
                console.log("created new request");
                // location.reload();
            }
        );
    });


});