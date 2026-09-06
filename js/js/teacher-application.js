const form =
    document.getElementById(
        "teacherApplicationForm"
    );

const message =
    document.getElementById(
        "formMessage"
    );


form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const subjects =
            document.querySelectorAll(
                'input[name="subjects"]:checked'
            );

        if (subjects.length === 0) {

            message.textContent =
                "Please select at least one subject.";

            message.style.color = "#a33a2b";

            return;
        }


        message.textContent =
            "Application form validated. Backend submission will be connected next.";

        message.style.color =
            "var(--green-700)";

    }
);
