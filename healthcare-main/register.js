document.addEventListener("DOMContentLoaded", () => {
    const registerRoute = "http://localhost:5000/api/auth/register";

    document.getElementById("registerForm").addEventListener("submit", async (event) => {
        event.preventDefault();

        const values = {
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            confirmPassword: document.getElementById("confirmPassword").value,
        };

        if (handleValidation(values)) {
            try {
                const response = await axios.post(registerRoute, {
                    username: values.username,
                    email: values.email,
                    password: values.password,
                });
                const data = response.data;
                if (data.status === false) {
                    console.log(data);
                    alert("error registering");
                }
                if (data.status === true) {
                    console.log("registered user");
                    alert("successfully registered");
                    localStorage.setItem("user", JSON.stringify(data.user));
                    window.location.href = "login.html";
                   
                }
            } catch (error) {
                alert("registration failed");
                console.log("Registration failed", error);
            }
        }
    });

    function handleValidation(values) {
        const { password, confirmPassword, username, email } = values;

        if (password !== confirmPassword) {
            alert("password and confirm password must be same ");
            return false;
        } else if (password.length < 6) {
            alert("password must be greater than 5 characters");
            return false;
        } else if (!email) {
            alert("Email is required");
            return false;
        } else if (username.length < 3) {
            alert("Username should be greater than 3 characters");
            return false;
        }

        return true;
    }
});
