import { Client, GatewayIntentBits } from "discord.js";
import { Bot  } from "./structs/Bot";

export const bot = new Bot(
  new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.DirectMessages,
    ]
  })
);


// static void UpdatePresence()
// {
//     DiscordRichPresence discordPresence;
//     memset(&discordPresence, 0, sizeof(discordPresence));
//     discordPresence.state = "Playing Code";
//     discordPresence.details = "Competitive";
//     discordPresence.startTimestamp = 1507665886;
//     discordPresence.endTimestamp = 1507665886;
//     discordPresence.largeImageKey = "130blueberry";
//     discordPresence.largeImageText = "PlayOn";
//     discordPresence.smallImageText = "Rogue - Level 100";
//     discordPresence.partyId = "ae488379-351d-4a4f-ad32-2b9b01c91657";
//     discordPresence.partySize = 1;
//     discordPresence.partyMax = 5;
//     discordPresence.joinSecret = "MTI4NzM0OjFpMmhuZToxMjMxMjM= ";
//     Discord_UpdatePresence(&discordPresence);
// }