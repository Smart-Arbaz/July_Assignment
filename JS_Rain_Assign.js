
function Reverse_Value()
{

var a = prompt(" Enter A Value ");

for ( var i=a.length; i>=0; i-- ){
    document.write(a.charAt(i));
   }
}



function Cheeck_Palindrome()
{
var a = prompt(" Enter A Value ");
    a = a.toLocaleLowerCase();
    arr = a.split('');
    arr = arr.reverse();
    str = arr.join('')

 if ( a === str ){
      document.write(a + " Is a Palindrome")
  }

 else{
       document.write(a + " & " + str + " Is Not a Palindrome ");
  }
}

function Sort_In_Order()
{
var a = prompt(" Enter A String ");
    a = a.toLocaleLowerCase();
    arr = a.split('');
    arr = arr.sort();
    str = arr.join('')

document.write(str);

}



function First_Letter_Capital(arg)
{
  var a = arg.split(' ');
  var arr = [];
    
  for(var i = 0; i < a.length; i++){
      arr.push(a[i].charAt(0).toUpperCase() + a[i].slice(1));
  }
  var str = arr.join(' ');

  document.write(str);
}

// First_Letter_Capital(" i am a little tea pot ");


function Longest_String()
{
var a = "Web Development Will Be More Effeciect By Practice"
    a = a.toLocaleLowerCase();
var arr = a.split(' ');
var len = 0;
var temp = 0;

for( var i =0; i<arr.length ; i++){

    if ( len < arr[i].length){
        len = arr[i].length;
        temp = i;        
    }
}
document.write(arr[temp]);

}


function Second_Low_High_Value()
{
var arr = [23 , 37 , 18 , 500 , 62 , 44 , 91]
    arr = arr.sort();
    
    document.write(arr);
    document.write("Second Lowest Number Is = " + arr[1] + " & Second Largest Number Is = " + arr[arr.length-2]);

}


function VowelsCount(arg)
{
  var a = arg.toLocaleLowerCase();
  var a = a.split(' ');
  var vowel = 0;

  for(var i = 0; i < a.length; i++){
   
    if(a[i] === 'a'||'e'||'i'||'o'||'u'){
        vowel++;
    }
}

document.write(vowel);
}

//VowelsCount(" The Sun Rise From The East ");

function Prime_Numbers(){

    var a = parseInt(prompt(" Enter Any Number "));
    var prime = true;

     if ( a === 0 || a === 1 ){
         document.write( a + "  Is Not Include In Prime Number");
        }

      else if( a > 1){
        
        for (var i = 2; i < a ; i++) {

            if(a % i === 0){
                prime = false;
                break;     
            }
        }    
    }
        
        if(prime)
           
        document.write( a + "  Is A Prime Number *** ");
    
        else            
        document.write( a + "  Is Not A Prime Number *** ");
        
    }
            

function  Data_Type(arg){
 
    document.write(typeof(arg));
    console.log(typeof(arg));

}
