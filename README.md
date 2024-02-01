![logo](icon.png)

# 🤖 Ein Music (Discord Music Bot)

Welcome to Ein Music, a feature-rich Discord Music Bot developed using TypeScript and discord.js, utilizing the Command Handler from [discordjs.guide](https://discordjs.guide).

## Requirements

1. **Discord Bot Token** – Follow this [guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) to obtain your Discord Bot Token. Additionally, enable 'Message Content Intent' in the Discord Developer Portal.
2. **Node.js 16.11.0 or newer**

## 🚀 Getting Started

Clone the repository, navigate to the project directory, and install dependencies by running:

```sh
git clone https://github.com/ehsanghaffar/ein-music.git
cd ein-music
npm install
```

After installation, follow the configuration instructions and execute `npm run start` to launch the bot.

## ⚙️ Configuration

Copy or rename `config.json.example` to `config.json` and fill in the required values:

⚠️ **Note: Never commit or share your token or API keys publicly** ⚠️

```json
{
  "TOKEN": "",
  "MAX_PLAYLIST_SIZE": 10,
  "PRUNING": false,
  "LOCALE": "en",
  "DEFAULT_VOLUME": 100,
  "STAY_TIME": 30
}
```

## 📝 Features & Commands

Ein Music offers a variety of commands to enhance your Discord music experience, including:

- **Play music from YouTube via URL or search query**
- **Search and select music to play**
- **Play YouTube playlists via URL or search query**
- **Now Playing (/np)**
- **Queue system (/queue)**
- **Loop / Repeat (/loop)**
- **Shuffle (/shuffle)**
- **Volume control (/volume)**
- **Lyrics (/lyrics)**
- **Pause (/pause)**
- **Resume (/resume)**
- **Skip (/skip)**
- **Skip to song # in queue (/skipto)**
- **Move a song in the queue (/move)**
- **Remove song # from queue (/remove)**
- **Show ping to Discord API (/ping)**
- **Show bot uptime (/uptime)**
- **Toggle pruning of bot messages (/pruning)**
- **Help (/help)**
- **Command Handler from [discordjs.guide](https://discordjs.guide/)**
- **Media Controls via Reactions**

## 🌎 Locales

Ein Music supports multiple languages, with the following locales available:

- English (en)
- Arabic (ar)
- French (fr)
- German (de)
- Persian (fa)
- Russian (ru)
- Turkish (tr)

Check [Contributing](#-contributing) if you wish to help add more languages! For languages, please use [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) two-letter format.

## 🤝 Contributing

We welcome contributions to Ein Music. To contribute, follow these steps:

1. [Fork the repository](https://github.com/ehsanghaffar/ein-music/fork)
2. Clone your fork: `git clone https://github.com/your-username/ein-music.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Stage changes `git add .`
5. Commit your changes: `cz` OR `npm run commit` (do not use `git commit`)
6. Push to the branch: `git push origin my-new-feature`
7. Submit a pull request

Let's make Ein Music even better together! 🎶
