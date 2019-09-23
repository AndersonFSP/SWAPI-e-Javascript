let icon = window.document.getElementById('icon')
function buscar(){
    name.innerHTML = ''
    height.innerHTML = ''
    mass.innerHTML = ''
    gender.innerHTML = ''
    planet.innerHTML = ''
    let sel = document.getElementById('selopt').value
    let id = document.getElementById('num').value;
    let api = `https://swapi.co/api/${sel}/${id}/?format=json`
    let request = new XMLHttpRequest();
    request.open('GET', api);

    if (sel=='people'){
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
    }else{
        request.onload = function(){
            let info = JSON.parse(request.responseText);
            
            let name = document.getElementById('name')
            name.innerHTML = `<h3 style='color:yellow;'> NOME:</h3>  ${info.name}`
            icon.src = `image/${info.name}.jpg`

            let height = document.getElementById('height')
            height.innerHTML = `<h3 style='color:yellow;'> Periodo de Rotação:</h3> ${info.rotation_period}`

            let mass = document.getElementById('mass')
            mass.innerHTML = `<h3 style='color:yellow;'> Periodo Orbital:</h3> ${info.orbital_period}`

            let gender = document.getElementById('gender')
            gender.innerHTML = `<h3 style='color:yellow;'> Diametro:</h3> ${info.diameter}`
        }
        request.send()
    }
}