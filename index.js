//Reactor JS
//Used the concrete-abstract method to design ReactorJS
$(document).ready(function() {
var appid = {};    
var reactorapp = $('.reactorapp');
var appnum = reactorapp.length;  
for(i=0;i<appnum;i++) {    
    appid[i] = $("[data-appid='"+i+"']");        
}    
    
//big appnum for loop     
for(k=0;k<appnum;k++) {    
var featflex = {};      
var featflexsize = $('.app'+k+' reactor-x').length;     
var reactor = $('.app'+k+' .reactor').html();  
var reactorvars = $('.app'+k+' reactor-vars');   
if($('.app'+k+' reactor-imgs').length > 0) {      
var reactorimgs = $('.app'+k+' reactor-imgs');    
var imgprops = reactorimgs.html(); 
imgprops = imgprops.replace(/\s/g, '');
imgprops = imgprops.replace(new RegExp('{|}', 'g'),"");  
var imgpropsarray = imgprops.split(',');
} 
var props = reactorvars.html();    
props = props.replace(new RegExp('{|}', 'g'),"");     
props = props.replace(/\s/g, '');  
var propsarray = props.split(','); 
var reactarray = {}; 
var reactimgarray = {};   
var replacer = {};      
       
for(i=1;i<=featflexsize;i++) {
    featflex[i] = $('.app'+k+' reactor-x:nth-child('+i+')');
    featflex[i].html(reactor);
    for(j=0;j<propsarray.length;j++) {
        reactarray[j] = featflex[i].data(propsarray[j]);
    }
    if($('reactor-imgs').length > 0) { 
        for(j=0;j<imgpropsarray.length;j++) {
            reactimgarray[j] = featflex[i].data(imgpropsarray[j]);
        }
        for(j=0;j<imgpropsarray.length;j++) {
            $('.app'+k+' reactor-x:nth-child('+i+') img:nth-child('+(j+1)+')').attr('src', '{'+imgpropsarray[j]+'}').attr('src', reactimgarray[j]);
            //featflex[i].find('.reactorimg-'+imgpropsarray[j]).attr("src",reactimgarray[j]);
        }  
    }
    for(j=0;j<propsarray.length;j++) {
        $('.app'+k+' reactor-x:nth-child('+i+') :contains('+propsarray[j]+')').html(reactarray[j]);  
    }  
} 
}
//end of big appnum for loop  
  
$('head').append('<style>.reactor,reactor-vars, reactor-imgs{display:none!important}</style>'); 
    
}); 
