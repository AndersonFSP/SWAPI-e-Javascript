let icon = window.document.getElementById('icon')
function buscar(){
    let id = document.getElementById('num').value;
    let api = `https://swapi.co/api/people/${id}/?format=json`
    let request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = function(){
        let info = JSON.parse(request.responseText);

        let name = document.getElementById('name')
        name.innerHTML =  `<h3 style='color:yellow;'> NOME:</h3>  ${info.name}` 
        icon.src = `image/${info.name}.jpg`

        let height = document.getElementById('height')
        height.innerHTML = `<h3 style='color:yellow;'> ALTURA:</h3> ${info.height}`

        let mass = document.getElementById('mass')
        mass.innerHTML = `<h3 style='color:yellow;'> MASSA:</h3> ${info.mass}`

        let gender = document.getElementById('gender')
        gender.innerHTML = `<h3 style='color:yellow;'> GÊNERO:</h3> ${info.gender}`

            let api2 = `https://swapi.co/api/planets/${id}/?format=json`
            let request2 = new XMLHttpRequest();
            request2.open('GET', api2);
            request2.onload = function(){
                let planetinfo = JSON.parse(request2.responseText);

                let planet = document.getElementById('planet');
                planet.innerHTML = `<h3 style='color:yellow;'> PLANETA NATAL:</h3> ${planetinfo.name}`

                }
        request2.send()
        }
    request.send()
}