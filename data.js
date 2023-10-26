document.addEventListener("onload",data())
function data() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const showData = document.getElementById('tabledata');
            const dataHTML = data.map(person => `<tr>
        <td>${person.first_name}</td>
        <td>${person.last_name}</td>
        <td>${person.gender}</td>
        <td>${person.email}</td>
        <td>${person.ip_address}</td>
    </tr>`).join('');
            showData.innerHTML = dataHTML;
        });

}

function maledata() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            const maleData = data.filter(person => person.gender.toLowerCase() === "male");
            const showData = document.getElementById('tabledata');
            const maleDataHTML = maleData.map(person => `<tr>
        <td>${person.first_name}</td>
        <td>${person.last_name}</td>
        <td>${person.gender}</td>
        <td>${person.email}</td>
        <td>${person.ip_address}</td>
    </tr>`).join('');
            showData.innerHTML = maleDataHTML;
        });

}

function femaledata() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const maleData = data.filter(person => person.gender.toLowerCase() === "female");
            const showData = document.getElementById('tabledata');
            const maleDataHTML = maleData.map(person => ` <tr>
            <td>${person.first_name}</td>
            <td>${person.last_name_name}</td>
            <td>${person.gender}</td> 
            <td>${person.email}</td>
            <td>${person.ip_address}</td>
        </tr>`).join('');
            showData.innerHTML = maleDataHTML;
        });
}