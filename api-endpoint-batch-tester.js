<!DOCTYPE html>
<html>
<body>

<script>
console.log("=========================================");
console.log("API Endpoint Batch Tester");
console.log("=========================================");
</script>

<h3>Enter URLs (one per line)</h3>
<textarea id="urls" rows="5" cols="40">
/api/user
/api/profile
/api/settings
</textarea>
<br><br>

<button onclick="run()">Run</button>

<script>
async function run() {
  let input = document.getElementById("urls").value;
  let urls = input.split("\n");

  for (let url of urls) {
    try {
      let res = await fetch(url.trim());
      let data = await res.json();
      console.log(url.trim(), data);
    } catch (e) {
      console.log(url.trim(), "FAILED");
    }
  }

  console.log("=========================================");
  console.log("Developed by sudo_0xksh");
  console.log("=========================================");
}
</script>

</body>
</html>
