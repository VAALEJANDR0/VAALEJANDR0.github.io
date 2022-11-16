let svjson = {
    "DEPARTAMENTOS":
        [
            {
                "DEPARTAMENTO": "CABAÑAS",
                "CABECERA DEPARTAMENTAL": "SENSUTEPEQUE",
                "EXTENSIÓN TERRITORIAL": "1103.51 km²",
                "FIESTAS PATRONALES": "25 DE NOVIEMBRE A 5 DE DICIEMBRE",
                "HABITANTES": "164,945"
            },

            {
                "DEPARTAMENTO": "CHALATENANGO",
                "CABECERA DEPARTAMENTAL": "CHALATENANGO",
                "EXTENSIÓN TERRITORIAL": "2017 km²",
                "FIESTAS PATRONALES": "15 A 24 DE JUNIO",
                "HABITANTES": "204, 808",
            },

            {
                "DEPARTAMENTO": "CUSCATLÁN",
                "CABECERA DEPARTAMENTAL": "COJUTEPEQUE",
                "EXTENSIÓN TERRITORIAL": "756 km²",
                "FIESTAS PATRONALES": "26-28 DE DICIEMBRE",
                "HABITANTES": "252,528"
            },

            {
                "DEPARTAMENTO": "LA LIBERTAD",
                "CABECERA DEPARTAMENTAL": "NUEVA SAN SALVADOR",
                "EXTENSIÓN TERRITORIAL": "1653 km²",
                "FIESTAS PATRONALES": "10 DE MAYO",
                "HABITANTES": "747,662"
            },

            {
                "DEPARTAMENTO": "MORAZÁN",
                "CABECERA DEPARTAMENTAL": "SAN FRANCISCO",
                "EXTENSIÓN TERRITORIAL": "1447 km²",
                "FIESTAS PATRONALES": "1 A 4 DE OCTUBRE",
                "HABITANTES": "199,519"
            },

            {
                "DEPARTAMENTO": "LA PAZ",
                "CABECERA DEPARTAMENTAL": "ZACATECOLUCA",
                "EXTENSIÓN TERRITORIAL": "1223.61 km²",
                "FIESTAS PATRONALES": "12 A 24 DE OCTUBRE",
                "HABITANTES": "328,221"
            },
            {
                "DEPARTAMENTO": "SANTA ANA",
                "CABECERA DEPARTAMENTAL": "SANTA ANA",
                "EXTENSIÓN TERRITORIAL": "2023 km²",
                "FIESTAS PATRONALES": "17 A 26 DE JULIO",
                "HABITANTES": "572,081"
            },
            {
                "DEPARTAMENTO": "SAN MIGUEL",
                "CABECERA DEPARTAMENTAL": "SAN MIGUEL",
                "EXTENSIÓN TERRITORIAL": "2077 km²",
                "FIESTAS PATRONALES": "8 DE MAYO",
                "HABITANTES": "478,792"
            },
            {
                "DEPARTAMENTO": "SONSONATE",
                "CABECERA DEPARTAMENTAL": "SONSONATE",
                "EXTENSIÓN TERRITORIAL": "1226 km²",
                "FIESTAS PATRONALES": "25 DE ENERO A 2 DE FEBRERO",
                "HABITANTES": "463,732"
            },
            {
                "DEPARTAMENTO": "SAN SALVADOR",
                "CABECERA DEPARTAMENTAL": "SAN SALVADOR",
                "EXTENSIÓN TERRITORIAL": "886.15 km²",
                "FIESTAS PATRONALES": "1 A 6 DE AGOSTO",
                "HABITANTES": "2,232,139"
            },
            {
                "DEPARTAMENTO": "SAN VICENTE",
                "CABECERA DEPARTAMENTAL": "SAN VICENTE",
                "EXTENSIÓN TERRITORIAL": "1184 km²",
                "FIESTAS PATRONALES": "12 A 31 DE DICIEMBRE",
                "HABITANTES": "174,561"
            },
            {
                "DEPARTAMENTO": "LA UNIÓN",
                "CABECERA DEPARTAMENTAL": "LA UNIÓN",
                "EXTENSIÓN TERRITORIAL": "2074 km²",
                "FIESTAS PATRONALES": "PRIMEROS 15 DÍAS DE OCTUBRE",
                "HABITANTES": "263,271"
            },
            {
                "DEPARTAMENTO": "USULUTÁN",
                "CABECERA DEPARTAMENTAL": "USULUTÁN",
                "EXTENSIÓN TERRITORIAL": "2130 km²",
                "FIESTAS PATRONALES": "25 DE NOVIEMBRE",
                "HABITANTES": "366,040"
            }
        ]
}


let dep = document.getElementById("mpsv");

function volcarDatos(datos) {
    var total = datos.length;
    data = "<ul class=\"grid\">\n";
    for (var i = 0; i < total; i++) {
        data += "<li class=\"box\">\n";
        data += "<div class=\"box-shadow\"></div>\n";
        data += "<div class=\"box-gradient\">\n";
    }
    data += "</ul>\n";
    return data;
}