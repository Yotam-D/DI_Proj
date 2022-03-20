function getData() {
    let user = fetch('http://localhost:3000/getuser')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log("catch Error:", err))
};