/*Reactor JS
*Version: 2.3.4 Stable
*Description: Reactor JS is a highly modular and powerful framework designed to help * you create custom web designs with much less code.
*Author: Uriel Bitton (Developed by Scorpion Edge). All rights reserved. MIT License 2019
*/
 
$(document).ready(function() {

//functions
propsDesign();

function propsDesign() {    
//remove reactor models    
$('head').append('<style>.reactor,reactor-vars, reactor-imgs{display:none!important}</style>'); 
var appid = {};      
var reactorapp = $('.reactorapp');
var appnum = reactorapp.length;       
          
//big appnum for loop     
for(k=0;k<appnum;k++) {    
$('.app').eq(k).addClass('app'+k);
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
        
for(i=0;i<featflexsize;i++) {
    featflex[i] = $('.app'+k+' reactor-x:nth-child('+(i+1)+')');
    featflex[i].html(reactor);
    for(j=0;j<propsarray.length;j++) {
        reactarray[j] = featflex[i].data(propsarray[j]);
    } 
    if($('.app'+k+' reactor-imgs').length > 0) { 
        for(j=0;j<imgpropsarray.length;j++) {
            reactimgarray[j] = featflex[i].data(imgpropsarray[j]);
            $('.app'+k+' reactor-x:nth-child('+(i+1)+')').find('img:eq('+j+')').filter(function() {
                return this.innerHTML = '{'+imgpropsarray[j]+'}';  
            }).attr('src', reactimgarray[j]);   
        }    
    }     
    for(j=0;j<propsarray.length;j++) {
        $('.app'+k+' reactor-x:nth-child('+(i+1)+')').find('*').filter(function() {
            return this.innerHTML == '{'+propsarray[j]+'}';     
        }).html(reactarray[j]); 
    }    
}  
}
//end of big appnum for loop  
}//end of propsDesign function
     
    
   
    
}); 
