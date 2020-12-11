<script runat=server>
Platform.Load("Core","1.1.1");
​
var dev = 1;
​
var now = new Date();
var start = now.getTime();
var timeOut = 1500000; //25 minutes
//60000 milliseconds in a minute
​
​
if (dev) {
  timeOut = 10000;
}
​
​
​
do {
​

​//Your Code Here
​
} while((new Date().getTime() - start) < timeOut)
​
</script>