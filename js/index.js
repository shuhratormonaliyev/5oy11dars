document.querySelector('.btn').addEventListener('click', () => {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    
    if (email === "" || password === "") {
        alert("Please fill out all fields.");
    } else {
        alert(`Email: ${email}Password: ${password}`);
    }
});
