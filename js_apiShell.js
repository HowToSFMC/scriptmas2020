<script runat='server'>
Platform.Load("core", "1.1.1");
var accessToken = getAccessToken();//get accessToken

var getJourneyConfig = {
	endpoint: "interaction/v1/interactions/"
	method: "GET"
}


function scriptUtil(config, accessToken) {

 var method = config.method;
 var url = "restBase" + config.endpoint;

 try {
  var req = new Script.Util.HttpRequest(url);
  req.emptyContentHandling = 0;
  req.retries = 2;
  req.continueOnError = true;
  req.contentType = "application/json"
  req.method = method;
  req.setHeader("Authorization", "Bearer " + accessToken);

  if (config.payload) {
   req.postData = Stringify(config.payload);
  }

  var resp = req.send();

  var resultStr = String(resp.content);
  var resultJSON = Platform.Function.ParseJSON(String(resp.content));

  return resultJSON;

 } catch (e) {

  Write("API (e)" + Stringify(e));
  return
 };
}
</script>