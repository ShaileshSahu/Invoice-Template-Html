
function print_today() {
  // ***********************************************
  // AUTHOR: WWW.CGISCRIPT.NET, LLC
  // URL: http://www.cgiscript.net
  // Use the script, just leave this message intact.
  // Download your FREE CGI/Perl Scripts today!
  // ( http://www.cgiscript.net/scripts.htm )
  // ***********************************************
  var now = new Date();
  var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
  var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
  function fourdigits(number) {
    return (number < 1000) ? number + 1900 : number;
  }
  var today =  months[now.getMonth()] + " " + date + ", " + (fourdigits(now.getYear()));
  return today;
}

// from http://www.mediacollege.com/internet/javascript/number/round.html
function roundNumber(number,decimals) {
  var newString;// The new rounded number
  decimals = Number(decimals);
  if (decimals < 1) {
    newString = (Math.round(number)).toString();
  } else {
    var numString = number.toString();
    if (numString.lastIndexOf(".") == -1) {// If there is no decimal point
      numString += ".";// give it one at the end
    }
    var cutoff = numString.lastIndexOf(".") + decimals;// The point at which to truncate the number
    var d1 = Number(numString.substring(cutoff,cutoff+1));// The value of the last decimal place that we'll end up with
    var d2 = Number(numString.substring(cutoff+1,cutoff+2));// The next decimal, after the last one we want
    if (d2 >= 5) {// Do we need to round up at all? If not, the string will just be truncated
      if (d1 == 9 && cutoff > 0) {// If the last digit is 9, find a new cutoff point
        while (cutoff > 0 && (d1 == 9 || isNaN(d1))) {
          if (d1 != ".") {
            cutoff -= 1;
            d1 = Number(numString.substring(cutoff,cutoff+1));
          } else {
            cutoff -= 1;
          }
        }
      }
      d1 += 1;
    } 
    if (d1 == 10) {
      numString = numString.substring(0, numString.lastIndexOf("."));
      var roundedNum = Number(numString) + 1;
      newString = roundedNum.toString() + '.';
    } else {
      newString = numString.substring(0,cutoff) + d1.toString();
    }
  }
  if (newString.lastIndexOf(".") == -1) {// Do this again, to the new string
    newString += ".";
  }
  var decs = (newString.substring(newString.lastIndexOf(".")+1)).length;
  for(var i=0;i<decimals-decs;i++) newString += "0";
  //var newNumber = Number(newString);// make it a number if you like
  return newString; // Output the result to the form field (change for your purposes)
}

function update_total() {
  var total = 0;
  $('.price').each(function(i){
    price = $(this).html().replace("$","");
    if (!isNaN(price)) total += Number(price);
  });

  total = roundNumber(total,2);
  
 
    
  $('#subtotal').html(""+total);
   
       update_balance();
  update_Cgst();
  update_Sgst();
  update_Igst();
    final_update();
}

function update_balance() {
  var discount,t;
 var sum = $("#subtotal").html().replace("$",""); 
 
var per =    $("#paid").val().replace("%","");

   
    discount = (per/100)*sum;
    var t =sum-discount;
   discount = -roundNumber(discount,2);
         
   t = roundNumber(t,2);
    $('.dis').html(""+discount);
    $('#total').html(""+t);
  

    //$('#total').html("$"+t);
          
}

function update_Cgst()
{
    
     var cgst,n;
 var sum = $("#subtotal").html().replace("$","") 
 var s = $("#total").html().replace("$",""); 
 
var per =    $("#cgst").val().replace("%","");

  cgst = (per/100)*sum;
    n= parseFloat(s)+parseFloat(cgst);
    
    cgst = roundNumber(cgst,2);
             // n =roundNumber(n,2);
  
  $('.cgst').html(""+cgst);
  $('#total').html(""+n);
    
    
}



function update_Sgst()
{
    
     var sgst,n;
 var sum = $("#subtotal").html().replace("$","") 
 var s = $("#total").html().replace("$",""); 
    
var per =    $("#sgst").val().replace("%","");
  sgst = (per/100)*sum;
    n= parseFloat(s)+parseFloat(sgst);
    sgst = roundNumber(sgst,2);
  
  $('.sgst').html(""+sgst);
    $('#total').html(""+n);
    
}

function update_Igst()
{
    
     var igst,n;
 var sum = $("#subtotal").html().replace("$","") 
 var s = $("#total").html().replace("$",""); 
    
var per =    $("#igst").val().replace("%","");
  igst = (per/100)*sum;
    igst = (per/100)*sum;
    n= parseFloat(s)+parseFloat(igst);
    igst = roundNumber(igst,2);
  
  $('.igst').html(""+igst);
    
     $('#total').html(""+n);
    
}






function update_price() {
  var row = $(this).parents('.item-row');
  var price = row.find('.cost').val().replace("s","") * row.find('.qty').val();
  price = roundNumber(price,2);
  isNaN(price) ? row.find('.price').html("N/A") : row.find('.price').html(""+price);
  
  update_total();
}

function bind() {
  $(".cost").blur(update_price);
  $(".qty").blur(update_price);
}

$(document).ready(function() {

  $('input').click(function(){
    $(this).select();
  });

  $("#paid").blur(update_balance);
    $("#cgst").blur(update_Cgst);
    $("#sgst").blur(update_Sgst);
     $("#igst").blur(update_Igst);
     
    
   var a =$(".item-row:last>td:first").html();
    
  $("#addrow").click(function(){
      
      
    ++a;
      
      $(".item-row:last").after('<tr class="item-row"><td>'+a+'</td><td class="item-name" contentEditable><b><div class="delete-wpr"><br><a class="delete" href="javascript:;" title="Remove row">-</a></div></b></td><td class="description" contentEditable></td><td><textarea class="cost">0</textarea></td><td><textarea class="qty">0</textarea></td><td><span class="price">0</span></td></tr>');
    if ($(".delete").length > 0) $(".delete").show();
    bind();
  });
  
  bind();
  
  $(".delete").live('click',function(){
    $(this).parents('.item-row').remove();
    update_total();
    if ($(".delete").length < 2) $(".delete").hide();
  });
  
  
  $("#date").val(print_today());
  
});