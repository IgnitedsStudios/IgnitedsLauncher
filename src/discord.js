const RPC = require("discord-rpc");
const clientId = "1267325685844803646"; // Reemplaza con tu Client ID de Discord

const rpc = new RPC.Client({ transport: "ipc" });

rpc.on("ready", () => {
  rpc.setActivity({
    smallImageText: "Jugando Squid Bedrock 2!",
    state: "Jugando Squid Bedrock 2!",
    startTimestamp: new Date(), // El tiempo actual cuando comienza la actividad
    largeImageKey: "logo", // Nombre de la imagen grande configurada en Discord
    largeImageText: "Jugando Squid Bedrock 2!", // Texto que se muestra cuando se pasa el ratón sobre la imagen grande
    instance: false,
  });
});

rpc.login({ clientId }).catch(console.error);
