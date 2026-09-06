const createClassForm =
    document.getElementById(
        "createClassForm"
    );

const createClassMessage =
    document.getElementById(
        "createClassMessage"
    );


createClassForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const price =
            Number(
                document.getElementById(
                    "monthlyPrice"
                ).value
            );


        const maxStudents =
            Number(
                document.getElementById(
                    "maxStudents"
                ).value
            );


        if (price < 0) {

            createClassMessage.textContent =
                "Please enter a valid class price.";

            return;
        }


        if (maxStudents < 1) {

            createClassMessage.textContent =
                "Your class must allow at least one student.";

            return;
        }


        createClassMessage.textContent =
            "Class information validated successfully. Database publishing will be connected next.";

    }
);
