var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_batukawa_png1_modified_1 = new ol.layer.Tile({
                            title: 'Latest Photo',
                            // opacity: 0.7,
                                imageExtent: [12274680.703110, 167944.167648, 12274991.798273, 168370.848888],
                            source: new ol.source.XYZ({
                                attributions: '',
                                minZoom: 15,
                                maxZoom: 20,
                                url: './tile/{z}/{x}/{-y}.png',
                                tileSize: [256, 256]
                            })
                        });
var format_poly1_2 = new ol.format.GeoJSON();
var features_poly1_2 = format_poly1_2.readFeatures(json_poly1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poly1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poly1_2.addFeatures(features_poly1_2);
var lyr_poly1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poly1_2, 
                style: style_poly1_2,
                interactive: true,
                title: '<img src="styles/legend/poly1_2.png" /> Lot'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_batukawa_png1_modified_1.setVisible(true);lyr_poly1_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_batukawa_png1_modified_1,lyr_poly1_2];
lyr_poly1_2.set('fieldAliases', {'id': 'id', 'area': 'area', });
lyr_poly1_2.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', });
lyr_poly1_2.set('fieldLabels', {'id': 'no label', 'area': 'no label', });
lyr_poly1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});