function fetchTwitchToken() {
  $.ajax({
	"url": "https://id.twitch.tv/oauth2/token?client_id=6onacrgnxzevvd6luatv9uem1773r0&client_secret=izy71djfu0t1wt4ittfk1kz238q2up&grant_type=client_credentials",
	"method": "POST",
	"timeout": 0
  }).done(function (response) {
	document.body.innerHTML = '<pre style="word-wrap: break-word; white-space: pre-wrap;">{"access_token": ' + response.access_token + ', "expires_in": ' + response.expires_in + '}"<pre>';
  });
}

setInterval(function() { fetchTwitchToken(); }, 25000);
