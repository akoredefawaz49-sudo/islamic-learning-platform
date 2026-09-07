const registerForm =
    document.getElementById("registerForm");

const authMessage =
    document.getElementById("authMessage");


registerForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        const fullName =
            document.getElementById("fullName").value;

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        const role =
            document.getElementById("accountRole").value;


        authMessage.textContent =
            "Creating your account...";


        const {
            data,
            error
        } =
        await supabaseClient.auth.signUp({

            email: email,

            password: password,

            options: {

                data: {

                    full_name: fullName,

                    role: role

                }

            }

        });


        if (error) {

            authMessage.textContent =
                error.message;

            return;

        }


        authMessage.textContent =
            "Account created successfully! Check your email if confirmation is required.";


        registerForm.reset();

    }
);
