<script runat=server>
var json = ["one","two","three"]
consoleLog(json);
function consoleLog(value) {
   Write('<script>console.log(' + value + ');</script>');
}
</script>
