var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_chicoloapan_1 = new ol.format.GeoJSON();
var features_chicoloapan_1 = format_chicoloapan_1.readFeatures(json_chicoloapan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chicoloapan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chicoloapan_1.addFeatures(features_chicoloapan_1);
var lyr_chicoloapan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_chicoloapan_1, 
                style: style_chicoloapan_1,
                popuplayertitle: 'chicoloapan',
                interactive: false,
                title: '<img src="styles/legend/chicoloapan_1.png" /> chicoloapan'
            });
var format_Incidencias_2 = new ol.format.GeoJSON();
var features_Incidencias_2 = format_Incidencias_2.readFeatures(json_Incidencias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incidencias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incidencias_2.addFeatures(features_Incidencias_2);
var lyr_Incidencias_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incidencias_2, 
                style: style_Incidencias_2,
                popuplayertitle: 'Incidencias',
                interactive: true,
    title: 'Incidencias<br />\
    <img src="styles/legend/Incidencias_2_0.png" /> Coladera sin tapa<br />\
    <img src="styles/legend/Incidencias_2_1.png" /> Drenaje tapado / Coladrera tapada / Tuberia tapada<br />\
    <img src="styles/legend/Incidencias_2_2.png" /> Falta de agua<br />\
    <img src="styles/legend/Incidencias_2_3.png" /> Fuga de agua<br />\
    <img src="styles/legend/Incidencias_2_4.png" /> Socavon / Hundimiento<br />\
    <img src="styles/legend/Incidencias_2_5.png" /> Solicitud de pipa<br />'
        });

lyr_Positron_0.setVisible(true);lyr_chicoloapan_1.setVisible(true);lyr_Incidencias_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_chicoloapan_1,lyr_Incidencias_2];
lyr_chicoloapan_1.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'cveigecem': 'cveigecem', 'cveinegi': 'cveinegi', 'nom_mun': 'nom_mun', 'iddeleg': 'iddeleg', 'area_km2_o': 'area_km2_o', 'area_km2': 'area_km2', 'PobTotal': 'PobTotal', });
lyr_Incidencias_2.set('fieldAliases', {'Marca temp': 'Marca temp', 'Tipo de pr': 'Tipo de pr', 'Nombre(s)': 'Nombre(s)', 'Apellido(s': 'Apellido(s', 'Telefono a': 'Telefono a', 'Municipio': 'Municipio', 'Colonia/Ba': 'Colonia/Ba', 'Avenida/Bo': 'Avenida/Bo', 'Numero ext': 'Numero ext', 'Numero Int': 'Numero Int', 'Codigo Pos': 'Codigo Pos', 'Manzana/Lo': 'Manzana/Lo', 'Lugar de r': 'Lugar de r', 'Lat': 'Lat', 'Long': 'Long', 'layer': 'layer', 'path': 'path', });
lyr_chicoloapan_1.set('fieldImages', {'qc_id': 'TextEdit', 'id': 'TextEdit', 'cveigecem': 'TextEdit', 'cveinegi': 'TextEdit', 'nom_mun': 'TextEdit', 'iddeleg': 'TextEdit', 'area_km2_o': 'TextEdit', 'area_km2': 'TextEdit', 'PobTotal': 'TextEdit', });
lyr_Incidencias_2.set('fieldImages', {'Marca temp': 'TextEdit', 'Tipo de pr': 'TextEdit', 'Nombre(s)': 'TextEdit', 'Apellido(s': 'TextEdit', 'Telefono a': 'TextEdit', 'Municipio': 'TextEdit', 'Colonia/Ba': 'TextEdit', 'Avenida/Bo': 'TextEdit', 'Numero ext': 'TextEdit', 'Numero Int': 'TextEdit', 'Codigo Pos': 'TextEdit', 'Manzana/Lo': 'TextEdit', 'Lugar de r': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_chicoloapan_1.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'cveigecem': 'hidden field', 'cveinegi': 'hidden field', 'nom_mun': 'hidden field', 'iddeleg': 'hidden field', 'area_km2_o': 'hidden field', 'area_km2': 'no label', 'PobTotal': 'no label', });
lyr_Incidencias_2.set('fieldLabels', {'Marca temp': 'inline label - always visible', 'Tipo de pr': 'inline label - always visible', 'Nombre(s)': 'hidden field', 'Apellido(s': 'hidden field', 'Telefono a': 'hidden field', 'Municipio': 'hidden field', 'Colonia/Ba': 'hidden field', 'Avenida/Bo': 'hidden field', 'Numero ext': 'hidden field', 'Numero Int': 'hidden field', 'Codigo Pos': 'hidden field', 'Manzana/Lo': 'hidden field', 'Lugar de r': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Incidencias_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});