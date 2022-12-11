var size = 0;
var placement = 'point';

var style_poly1_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "3.34 acre";
    size = 0;
    var labelFont = "18px sans-serif";
    var labelFill = "#fff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';

    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(228,26,28,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
