var args = process.argv.slice(2);

var countLetters = function(input){
 var output = {};
 for (var i = 0; i < input.length; i++){
   if(output[input.charAt(i)]){
     output[input.charAt(i)] += 1;
   }
   else {
     output[input.charAt(i)] = 1;
   }
 }
 return output;
};

for (var i = 0; i < args.length; i++){
 console.log(countLetters(args[i]));
}