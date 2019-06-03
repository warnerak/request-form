
$(function () {


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

    $("#priority-link").on("click", function (event) {
        event.preventDefault();
        console.log("i am in active function")
        $.ajax("/sheet", {
            type: "GET",
        }).then(
            function () {
                window.location.replace("sheet");
            }

        );
    });


    $("#archived-link").on("click", function (event) {
        event.preventDefault();
        console.log("i am in active function")
        $.ajax("/archived", {
            type: "GET",
        }).then(
            function () {
                window.location.replace("archived");
            }

        );

    });

    $(".change-status").on("click", function (event) {
        console.log("change-status function clicked")
        var id = $(this).data("id");
        var newStatus = $(this).data("newStatus");

        var newStatusState = {
            active_archive: false
        };
        console.log(newStatusState);

        // Send the PUT request.
        $.ajax("/api/requests/" + id, {
            type: "PUT",
            data: newStatusState
        }).then(
            function () {
                console.log("changed status to", newStatus);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-request").on("click", function (event) {
        console.log("delete-request function clicked")
        var id = $(this).data("id");
        console.log(id);

        // Send the DELETE request.
        $.ajax("/api/requests/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted request", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


});