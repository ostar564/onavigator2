$(document).ready(function ()
{
    govmap.createMap('map', 
        {
            token: 'a9f54b55-9f32-45e7-a5cf-0339d8767a1b',
            layers: ["GASSTATIONS","PARCEL_HOKS", "KSHTANN_ASSETS", "bus_stops", "PARCEL_ALL"],
            showXY: true,
            identifyOnClick: true,
            isEmbeddedToggle: false,
            background: 3,
            layersMode: 1,
            zoomButtons:false
       });
});  
function showExample(){
    govmap.geocode({keyword: 'הרצל', type: govmap.geocodeType.FullResult}
    ).then(function(response){
        console.log(response)
    });  
}

