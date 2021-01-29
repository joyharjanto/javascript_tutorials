let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
// console.log(storyWords)
console.log(storyWords.length);

let betterWords = storyWords.filter(n => !['I','a','to','an','is','are','in','it','the','','-','my','the','my','The','9W','Nyack"','and','It\'s','48','at','It','most','GW','4,760','op','from','of','by','An','"The','weas'].includes(n));

// console.log(betterWords)
console.log(betterWords.length); // word count
// console.log(betterWords[7]);
// console.log(betterWords[7].length-1);
// console.log(betterWords[7][betterWords[7].length-1]);

var i = 0;
var j = 0;
for(; i < betterWords.length;){
  if(betterWords[i][betterWords[i].length-1] === '.' || betterWords[i][betterWords[i].length-1] === '!'){
    j++;
  }
  i++;
}

console.log(j); //sentence count

var k = 0;
var l = 0;
// for(; k < betterWords.length;){
//   if(betterWords[k]){
//     l++;
//   }
//   k++;
// }

let betterWords = storyWords.filter(n => !['extremely', 'literally', 'actually'].includes(n));
//console.log(betterWords[10])
