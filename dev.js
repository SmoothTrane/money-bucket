/* global $ gapi YT OAuth  config */

/// when user gets on site, automatically  upload a random video on finance, in order to help the user get a good glimpse of what to do in order t proerly handle money
var youtubeLink = "https://www.youtube.com/embed/";
var apiKey = config.MY_KEY;
function init(){
    gapi.client.setApiKey(apiKey);
    gapi.client.load("youtube", "v3", function(){
        searchFinance();
        

    });
}
    
    function searchFinance(){
        var req = gapi.client.youtube.search.list({
           q: "finance money tip quick learn",
           part: "snippet",
           type: "video",
           maxResults: 50
        });
        
        req.execute(function(response) {
           var str = response.result;
           //console.log(str.items.length);
           var vidIndex = Math.floor(Math.random() * (str.items.length - 0)) + 0;
           console.log(vidIndex);
           var vidId = str.items[vidIndex].id.videoId;
           console.log(str);
           $("#player").attr("src", youtubeLink + vidId );
        });
        
        
    }
    
    
$(function(){
    
    $(".card-btn").click(function(){
        searchFinance();
        
    });
    
});  
    
    
    
    
//  var tag = document.createElement('script');
//   tag.src = "https://www.youtube.com/player_api";
//   var firstScriptTag = document.getElementsByTagName('script')[0];
//   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
//   var player;
  
  
  

