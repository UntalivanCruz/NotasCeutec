var http_request = false;

function makeRequest(url) {

    http_request = false;

    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/xml');
            // Ver nota sobre esta linea al final
        }
    } else if (window.ActiveXObject) { // IE
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }

    if (!http_request) {
        alert('Falla :( No es posible crear una instancia XMLHTTP');
        return false;
    }
    http_request.onreadystatechange = GETContents;
    http_request.open('GET', url, true);
    http_request.send();
}

function GETContents() {
    let parrafo = document.getElementById("respuesta")
    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            let tabla = document.getElementById("contenedorTabla")
            let html = '<table><thead><tr><th>Codigo</th><th>Nombre</th></tr></thead><tbody>'

            let datos = JSON.parse(http_request.response)

            for (valor of datos) {
                html += `<tr><td>${valor.id}</td><td>${valor.nombre}</td></tr>`
            }

            html += '</tbody></table>'
            tabla.innerHTML = html
        } else {
            alert('Hubo problemas con la petición.');
        }
    }

}

document.addEventListener("DOMContentLoaded", () => {
    makeRequest('http://localhost:3000/alumnos')
})