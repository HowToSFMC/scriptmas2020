<script runat='server'>
Platform.Load("core", "1.1.1");
/*
 @param { string } identify what you're writing
 @param { response } function/api response
 @param { debug } toggle if function should run or not


 debug = 1 will have output
 debug = 0 will hide output
*/
var debug = 1;

function deBug(string, response, debug) {
  if (response) {
    debug ? Write("<br><b>" + string + ":</b><br> " + Stringify(response) + "<br><br>") : null;
  } else {
    debug ? Write("<br><b>" + string + "</b><br> ") : null;
  }
} //End deBug

</script>