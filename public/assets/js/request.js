
$(function () {

    $("#priority-link").on("click", function (event) {
        event.preventDefault();
        console.log("i am in active function")
        $.ajax("/sheet", {
            type: "GET",
        }).then(
            function () {
                window.open("sheet", "_blank");
            }

        );

    });


    $("#submit-request").on("click", function (event) {
        event.preventDefault();
        console.log("i have hit the submit button");
        var dateSubmittedRequest = document.getElementById("date-submitted").value;
        var dueDateRequest = document.getElementById("due-date").value;
        var mapRequest = $("input[name='map']:checked").val();
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

    $("#archived-link").on("click", function (event) {
        event.preventDefault();
        console.log("i am in archived function")
        window.open.replace("archived")
        // window.location.replace("archived");
        $.ajax("/archived", {
            type: "POST",
            data: newRequest
        }).then(
            function () {
                console.log("everything is okay")
                window.location.replace("archived");
            }

        );

    });


});