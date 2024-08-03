document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const loginRoute = 'http://localhost:5000/api/auth/login';

    function handleValidation() {
        const email = emailInput.value;
        const password = passwordInput.value;

        if (!email || !password) {
            alert("Password and email are required");
            return false;
        }
        return true;
    }

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        if (handleValidation()) {
            const email = emailInput.value;
            const password = passwordInput.value;

            try {
                console.log(email);
                const response = await axios.post(loginRoute, {
                    email,
                    password
                });

                const data = response.data;
                console.log(data);
                if (data.status === false) {
                    alert("User does not exist");
                }

                if (data.status === true) {
                    console.log("login");
                    localStorage.setItem("user", JSON.stringify(data.user));
                    window.location.href = "tips.html";
                }
            } catch (error) {
                alert("An error occurred during login");
            }
        }
    });
});
