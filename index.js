var cont = document.getElementById("output")
var imgc = document.getElementById("imgcont")
var namec = document.getElementById("namecont")
var emailc = document.getElementById("emailcont")
var idn = document.getElementById("IDname")
var idv = document.getElementById("IDvalue")
var acont = document.getElementById("addresscont")
// var end
start()

function start() {
    fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then((list => {
            var data = list.results[0]
            console.log(data);
            data.picture.large;

            var img = document.createElement("img")
            var city = document.createElement("div")
            var country = document.createElement("div")
            var postcode = document.createElement("div")
            var state = document.createElement("div")
            var street = document.createElement("div")

            img.setAttribute("src", data.picture.large)
            namec.innerText = data.name.first + " " + data.name.last
            emailc.innerText = data.email
            idn.innerText = data.id.name
            idv.innerText = data.id.value
            city.innerText = data.location.city
            country.innerText = data.location.country
            postcode.innerText = data.location.postcode
            state.innerText = data.location.state
            street.innerText = data.location.street.name + " " + data.location.street.number

            imgc.appendChild(img)
            acont.appendChild(country)
            acont.appendChild(state)
            acont.appendChild(city)
            acont.appendChild(street)
            acont.appendChild(postcode)

        }
        ))
}