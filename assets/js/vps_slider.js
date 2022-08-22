
var cpu_arr = new Array('1 vCPU','1 vCPU','2 vCPU','4 vCPU','6 vCPU');
var ram_arr = new Array('1.5 GB','2 GB','4 GB','8 GB','16 GB');
var hdd_arr  = new Array('20 GB','40 GB','80 GB','100 GB','200 GB');
var bandwidth_arr = new Array('Unlimited','Unlimited','Unlimited','Unlimited','Unlimited');
var ip_arr = new Array('1 IPs', '1 IPs','1 IPs','1 IPs','Unlimited')
var price_arr = 	new Array('Rs.1650','Rs.2750','Rs.4850','Rs.5150','Rs.7450');
var link_arr = 		new Array('g1','g2','g3','g4','g5','g6');
var b_url = 'https://manage.greenhost.lk/cart.php?a=add&pid=';

// This is what you want the default position to be
var def_pos = 2;

$(document).ready(function(){

    $( "#slider" ).slider({
        range: 'min',
        animate: true,
        min: 1,
        max: 5,
        paddingMin: 110,
        paddingMax: 90,
        change: function( event, ui ) {
            $('.slider-container #cpu_val span.value').html(cpu_arr[ui.value-1]);
            $('.slider-container #ram_val span.value').html(ram_arr[ui.value-1]);
            $('.slider-container #hdd_val span.value').html(hdd_arr[ui.value-1]);
            $('.slider-container #bandwidth_val span.value').html(bandwidth_arr[ui.value-1]);
            $('.slider-container #ip_val span.value').html(ip_arr[ui.value-1]);
            $('.slider-container #price_val').html(price_arr[ui.value-1]);
            $('.slider-container a.buynow-button').attr('href', b_url + link_arr[ui.value-1]);
            $('.slider-container div.price_rangetxt div#icon-'+(ui.value-1)).addClass("current");
            $('.slider-container #sub-heading-'+(ui.value-1)).addClass("current1");
        }
    });
    $( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
    $('#slider').slider('value', def_pos);
    $('.icon').click(function() {
        ch_value= parseInt(this.id.slice(5)) + 1;
        $(".slider-container div.price_rangetxt div").removeClass("current");
        $(".slider-container .heading div").removeClass("current1");
        $('#slider').slider('value', ch_value);
    });
});