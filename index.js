/*Reactor JS
*Version: 2.3.4 Stable
*Description: Reactor JS is a highly modular and powerful framework designed to help * you create custom web designs with much less code.
*Author: Uriel Bitton (Developed by Scorpion Edge). All rights reserved. MIT License 2019
*/
 
$(document).ready(function() {

//reactor functions
propsDesign();
liveWrite();
beam();     
 
function propsDesign() {    
//remove reactor models    
$('head').append('<style>.reactor,reactor-vars, reactor-imgs, reactor-container{display:none!important}</style>'); 
var appid = {};      
var reactorapp = $('.reactorapp');
var appnum = reactorapp.length;       
$('.reactor-special').fadeOut(0);          
      
//big appnum for loop     
for(k=0;k<appnum;k++) {    
$('.app').eq(k).addClass('app'+k);
var featflex = {};    
var rcont = $('reactor-container');    
rcont = rcont.html(); 
rcont = rcont.replace(/\s/g, '');
rcont = rcont.replace(new RegExp('{|}', 'g'),"");     
var featflexsize = $('.app'+k+' '+rcont).length;     
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
    featflex[i] = $('.app'+k+' '+rcont+':nth-of-type('+(i+1)+')');
    featflex[i].html(reactor);
    for(j=0;j<propsarray.length;j++) {
        reactarray[j] = featflex[i].data(propsarray[j]);
    } 
    if($('.app'+k+' reactor-imgs').length > 0) { 
        for(j=0;j<imgpropsarray.length;j++) {
            reactimgarray[j] = featflex[i].data(imgpropsarray[j]);
            $('.app'+k+' '+rcont+':nth-of-type('+(i+1)+')').find('img:eq('+j+')').filter(function() {
                return this.innerHTML = '{'+imgpropsarray[j]+'}';  
            }).attr('src', reactimgarray[j]);   
        }    
    }     
    for(j=0;j<propsarray.length;j++) {
        $('.app'+k+' '+rcont+':nth-of-type('+(i+1)+')').find('*').filter(function() {
            return this.innerHTML == '{'+propsarray[j]+'}';     
        }).html(reactarray[j]); 
    }
    if($('[reactor-special]').length) {
        $('[reactor-special]').find('.reactor-special').fadeIn(0); 
    }
     
}  
}  
//end of big appnum for loop  
}//end of propsDesign function
     
    
function liveWrite() { 
var name; 
var read = $('[re-read]');
var write = $('[re-write]');    
read.on('input', function() {
    name = $(this).val();         
    write.html(name);    
});
}
   
    
function beam() {
    var beam = $('[re-beam]');
    var page = [];
    var i = 0;
    beam.each(function() {
        page[i] = $(this).attr('re-beam');
        $(this).load(page[i]+' [re-app]'); 
        ++i;
    }); 
      
}
   
   
   
    
    
    
}); 