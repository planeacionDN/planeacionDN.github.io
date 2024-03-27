var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BaseMYSTERYSHOPPERSVVF2Abril1Hoja1_1 = new ol.format.GeoJSON();
var features_BaseMYSTERYSHOPPERSVVF2Abril1Hoja1_1 = format_BaseMYSTERYSHOPPERSVVF2Abril1Hoja1_1.readFeatures(json_BaseMYSTERYSHOPPERSVVF2Abril1Hoja1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaseMYSTERYSHOPPERSVVF2Abril1Hoja1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaseMYSTERYSHOPPERSVVF2Abril1Hoja1_1.addFeatures(features_BaseMYSTERYSHOPPERSVVF2Abril1Hoja1_1);
var lyr_BaseMYSTERYSHOPPERSVVF2Abril1Hoja1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BaseMYSTERYSHOPPERSVVF2Abril1Hoja1_1, 
                style: style_BaseMYSTERYSHOPPERSVVF2Abril1Hoja1_1,
                popuplayertitle: "Base MYSTERY SHOPPER SV VF2 Abril 1-Hoja1",
                interactive: true,
    title: 'Base MYSTERY SHOPPER SV VF2 Abril 1-Hoja1<br />\
    <img src="styles/legend/BaseMYSTERYSHOPPERSVVF2Abril1Hoja1_1_0.png" /> SV-GTE Centro<br />\
    <img src="styles/legend/BaseMYSTERYSHOPPERSVVF2Abril1Hoja1_1_1.png" /> SV3-GTE Oriente<br />\
    <img src="styles/legend/BaseMYSTERYSHOPPERSVVF2Abril1Hoja1_1_2.png" /> SV4-GTE Occidente<br />\
    <img src="styles/legend/BaseMYSTERYSHOPPERSVVF2Abril1Hoja1_1_3.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_BaseMYSTERYSHOPPERSVVF2Abril1Hoja1_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BaseMYSTERYSHOPPERSVVF2Abril1Hoja1_1];
lyr_BaseMYSTERYSHOPPERSVVF2Abril1Hoja1_1.set('fieldAliases', {'VolumenES': 'VolumenES', 'Nomb_Clie': 'Nomb_Clie', 'Departamento': 'Departamento', 'MUNICIPIO': 'MUNICIPIO', 'DIRECCION': 'DIRECCION', 'Canal': 'Canal', 'SubCanal': 'SubCanal', 'RutaVenta': 'RutaVenta', 'LCM': 'LCM', 'ABCIndBeer': 'ABCIndBeer', 'ListaPrecio': 'ListaPrecio', 'Mystery': 'Mystery', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'GPS BASE': 'GPS BASE', 'STATUS MARZO': 'STATUS MARZO', 'CLUSTER_ID': 'CLUSTER_ID', 'CLUSTER_SIZE': 'CLUSTER_SIZE', 'ORD': 'ORD', 'SLECCIÓN': 'SLECCIÓN', });
lyr_BaseMYSTERYSHOPPERSVVF2Abril1Hoja1_1.set('fieldImages', {'VolumenES': '', 'Nomb_Clie': '', 'Departamento': '', 'MUNICIPIO': '', 'DIRECCION': '', 'Canal': '', 'SubCanal': '', 'RutaVenta': '', 'LCM': '', 'ABCIndBeer': '', 'ListaPrecio': '', 'Mystery': '', 'Latitud': '', 'Longitud': '', 'GPS BASE': '', 'STATUS MARZO': '', 'CLUSTER_ID': '', 'CLUSTER_SIZE': '', 'ORD': '', 'SLECCIÓN': '', });
lyr_BaseMYSTERYSHOPPERSVVF2Abril1Hoja1_1.set('fieldLabels', {'VolumenES': 'no label', 'Nomb_Clie': 'no label', 'Departamento': 'no label', 'MUNICIPIO': 'no label', 'DIRECCION': 'no label', 'Canal': 'no label', 'SubCanal': 'no label', 'RutaVenta': 'no label', 'LCM': 'no label', 'ABCIndBeer': 'no label', 'ListaPrecio': 'no label', 'Mystery': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'GPS BASE': 'no label', 'STATUS MARZO': 'no label', 'CLUSTER_ID': 'no label', 'CLUSTER_SIZE': 'no label', 'ORD': 'no label', 'SLECCIÓN': 'no label', });
lyr_BaseMYSTERYSHOPPERSVVF2Abril1Hoja1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});