/* global $ OAuth */

const consumeKey  = "";
const consumerSecret = "HwEoCIxaMd1xIY5rYg69cztdX1A";
const accessToken = "DhDKCA7ufhWNgx7Wt1ANScM2b0ZJPDcU";
const accessSecret = "DhDKCA7ufhWNgx7Wt1ANScM2b0ZJPDcU";


$(function(){
    
    //yelp API get request
    var location = "New + York";
    var type = "food";
    
    
    
                var auth = {
                    //
                    // Update with your auth tokens.
                    //
                    consumerKey : consumeKey,
                    consumerSecret : consumerSecret,
                    accessToken : accessToken,
                    // This example is a proof of concept, for how to use the Yelp v2 API with javascript.
                    // You wouldn't actually want to expose your access token secret like this in a real application.
                    accessTokenSecret : accessSecret,
                    serviceProvider : {
                        signatureMethod : "HMAC-SHA1"
                    }
                };
        
               
               var location = "New + York";
               var type = "food";
        
                var accessor = {
                    consumerSecret : auth.consumerSecret,
                    tokenSecret : auth.accessTokenSecret
                };

                var parameters = [];
                parameters.push(['term', type]);
                parameters.push(['location', location]);
                parameters.push(['callback', 'cb']);
                parameters.push(['oauth_consumer_key', auth.consumerKey]);
                parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
                parameters.push(['oauth_token', auth.accessToken]);
                parameters.push(['oauth_signature_method', 'HMAC-SHA1']);
        
                var message = {
                    'action' : 'https://api.yelp.com/v2/search',
                    'method' : 'GET',
                    'parameters' : parameters
                };
        
        
                OAuth.setTimestampAndNonce(message);
                OAuth.SignatureMethod.sign(message, accessor);
        
                var parameterMap = OAuth.getParameterMap(message.parameters);
                console.log(parameters);
                
                
    // $.ajax({
    //     url:,
    //     type:"GET",
    //     datatype: "jsonp"
    // });
    
});