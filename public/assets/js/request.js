$(function () {
    //     $(".change-active").on("click", function (event) {
    //         var id = $(this).data("id");
    //         var activeState = $(this).data("activearchive");

    //         var newActiveState = {
    //             active_archive: activeState
    //         };
    //         $.ajax("/api/requests/" + id, {
    //             type: "PUT",
    //             data: newActiveState
    //         }).then(
    //             function () {
    //                 console.log("changed active state to: ", activeState);
    //                 location.reload();
    //             }
    //         );
    //     });

    $("#submit-request").on("click", function (event) {
        event.preventDefault();
        console.log("i have hit the submit button");
        var mapRequest = $("input[name='map']:checked").val();
        var newRequest = {
            gis_analyst: $("#analyst").val().trim(),
            project_manager: $("#project-manager").val().trim(),
            project_priority: parseInt($("#priority").val()),
            date_submitted: $("#date-submitted").val().trim(),
            due_date: $("#due-date").val().trim(),
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

    // $(".delete-cat").on("click", function(event) {
    //   var id = $(this).data("id");

    //   // Send the DELETE request.
    //   $.ajax("/api/cats/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted cat", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });

});