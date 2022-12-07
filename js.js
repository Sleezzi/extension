var settings = {
  "url": "https://id.twitch.tv/oauth2/token?client_id=6onacrgnxzevvd6luatv9uem1773r0&client_secret=izy71djfu0t1wt4ittfk1kz238q2up&grant_type=client_credentials",
  "method": "POST",
  "timeout": 0
};

$.ajax(settings).done(function (response) {
  console.log(response);
  document.body.innerHTML = "<pre>" + response.access_token + "<pre>";
});
