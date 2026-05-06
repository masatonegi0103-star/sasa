<script src="https://unpkg.com/textalive-app-api/dist/index.js"></script>
<script>
  const player = new TextAliveApp.Player({
    app: { token: "lvh8O7GhfpbIUR0v" }
  });

  player.addListener({
    onAppReady: (app) => {
      console.log("App Ready");

      if (!app.managed) {
        player.createFromSongUrl("https://piapro.jp/t/9xg_");
      }
    },

    onVideoReady: () => {
      console.log("Video Ready");
      player.requestPlay();
    },

    onError: (e) => {
      console.error("エラー:", e);
    }
  });
</script>
