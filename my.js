//********************************************************************
//********************************************************************
//
// This is just a collection of useful functions I use, as I write them,
// so I won't have to write them again.
//
//********************************************************************
//********************************************************************


var my = (function(){
   //**********************************
   // STRINGS
   //**********************************
   var 
   camel = function camel(str){
      var camelStr = [],
          strSplit = str.split(' '),
          i =0, j = strSplit.length;
      for (; i < j; i++){
        var splitWord = strSplit[i].split('');
        for(var m = 0, n = splitWord.length; m<n; m++){
          var letter = splitWord[0],
              upperLetter = letter.toUpperCase();
          splitWord.shift();
          splitWord.unshift(upperLetter);
        }
        camelStr.push(splitWord.join(''));
      }
      
      return camelStr.join(' ');
   }

   ;
}());