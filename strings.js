1.  Count Characters

const countCharacters = (S) => 
{
    let B=[0,0];
       for(let i=0;i < S.length;i++){
         
         if(S.charAt(i)=="A")
         {
         B[0]+=1;
         }
       else if(S.charAt(i)=="D")
         {
         B[1]+=1;
         }
       }
       
       return B;   
};
 

2. Count the Heads
var Count_Occ = (s) => 
{
      let Arr = s.split("").sort();
    var p;
    let map1 = new Map();
    for(let i =0; i<Arr.length;i++)
    {
      p=0;
      Arr.reduce((acc,val)=>
      {
        if(val == Arr[i])
        {
          p=acc+1;
        }
        return p;
      }, 0);
      map1.set(`${Arr[i]}` , p);
    }
    let z = [];
    map1.forEach((value,key)=>
    {
    if(value>1)
    {
      z.push(key + "" + value);
    }
    
    });
    return (z.join(""));
}; 

3. Count the Vowels

var Count_Vowels= (S) => 
{
    let str=S;
 let counter = 0;
 let vowels = ['a','e','i','o','u']
 for(ch of str)
 {
   if(vowels.includes(ch))
   {
     counter++;
   }
 }
 return counter;   
};
 

4. Concatenate the Strings

var Concatenate_Strings = (S1, S2) => 
{
    return (S1+S2)  
};
 
5. Find Length
const findLength = (S) => 
{
    return(S.length)
};

6. Find the Winner

 
var Game_Winner = (S) => 
{
  let countA = 0;
  let countD = 0;
  for(let value of S){
    if(value === "A"){
      countA++;
    }else{
      countD++;
    }
  }
  if(countA === countD){
    return "Draw";
  }else if(countA > countD){
    return "Aditya";
  }else{
    return "Danish";
  } 
}
 
7. Join Strings
const joinStrings = (S, P) => 
{
    return(S+P);
};
 

8. Plaindrome Check

var Palin_Check = (str) =>
{
	 let i=0 , j=(str.length-1);
	 let palindrome = true;
	 while (i<j){
	   if(str[i] != str[j]){
	     palindrome=false;
	     break;
	   }
	   i++,j--
	 }
	 if(palindrome == true){
	   return("True");
	 }
	 else{
	   return("False");
	 }
}

9. Reverse the String

var Reverse_String = (str) => 
{
  let rev="";
  for(i=str.length-1 ; i>=0 ; i--)
  {
    rev=rev+str[i];
  }
  return(rev);
};
 

10. Match the Strings
var String_Match = (S1,S2) => 
{
      if(S1==S2){
        return("YES");
      }
      else{
       return("NO"); 
      }
};

11. String Replace

var Replace = (S, pattern , text) => 
{
 let a=S.replace(pattern,text);
 return a;
};

12. Split the String
var Split_the_string = (S) => 
{
 S1=S.split(" ");
   return(S1);
};
 

13. Count the Vowels and Consonants

var Count_Vowels= (S) => 
{
       let count = 0;
   const vowel = "aeiouAEIOU";
   for(let letters of S){
      for(let vow of vowel){
        if(letters === vow){
          count++;
        }
      } 
   }
   return count;     
};
var Count_Consonants= (S) => 
{
  let count2 = 0;
   const vowel2 = "aeiouAEIOU";
   for(let letters of S){
      for(let vow of vowel2){
        if(letters === vow){
          count2++;
        }
      }
   }
   return (S.length - count2);    
};
 