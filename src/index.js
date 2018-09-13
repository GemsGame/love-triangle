/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    

  for(var i = 0; i < preferences.length; i++) preferences[i]--;
  var count = 0;
   for(var i = 0; i < preferences.length; i++)
  {
      var s1= preferences[i];
      var s2 = preferences[s1];
      var s3 = preferences[s2];
      
      if(s3 == i && s1 != s2 && s2 != s3) 
         {
        count++;
         }
  }
 return (count/ 3);
    
};

                 