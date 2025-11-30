# 🎥 Live Streaming Web App with Agora SDK

> Real-time video & audio streaming right from your browser — powered by Agora SDK.

![Status](https://img.shields.io/badge/Live-Working-brightgreen?style=flat-square)
![Tech](https://img.shields.io/badge/Built%20with-JS%20%7C%20Agora%20SDK%20%7C%20HTML%2FCSS-orange?style=flat-square)

---

## 🌐 Live Demo

🚀 Click here to try it out: [Live Preview](#) *(Deployment link)*  
📸 See it in action:

![Live Preview Gif](https://media.giphy.com/media/3o7abldj0b3rxrZUxW/giphy.gif)  
*(To be added soon)

---

## 🧰 Tech Stack

| Technology   | Description                         |
|--------------|-------------------------------------|
| 💡 HTML/CSS  | Markup & Styling                    |
| 🧠 JavaScript| Logic and interaction handling      |
| 📡 Agora SDK | WebRTC-based real-time communication|

---

## ✨ Features

✅ Join/Leave video stream  
✅ Toggle Camera / Mic  
✅ Display User UID  
✅ Modern responsive UI  
✅ Real-time user management  
✅ Uses aspect-ratio-based video container  

---

## 🧑‍🏫 How to Use

### 🔧 Setup

1. **Clone the Repo**

```bash
git clone https://github.com/your-username/live-streaming-app.git
cd live-streaming-app
```
2. **Get Agora Credentials**  
- Sign up on Agora.io  
- Create a project & copy:  
  - App ID  
  - Temporary Token  
3. **Configure main.js**
```js
    let config = {
    appid: "YOUR_APP_ID",
    token: "YOUR_TEMP_TOKEN",
    uid: null,
    channel: "liveStream",
};
```
4. **Run the App**    
Open index.html in your browser!
 ## 🖼️ UI Overview
+------------------------------+
|         Live Stream          |
|------------------------------|
|  [Camera] [Mic] [Leave]      |
|------------------------------|
|    User Video Grid           |
+------------------------------+

- 🟣 add-user-account-icon.svg — Join button

- 🎙️ microphone-solid.svg — Mic toggle

- 🎥 camera-solid.svg — Camera toggle

- 📞 hang-up.svg — Leave stream

  ## ⚠️ Common Gotchas
- 🔒 Browser permissions needed (Mic/Camera).

- 🕑 Tokens expire after a time. Use temp tokens only for dev.

- 🔁 Rejoining after leave requires refreshing Agora client state.

## 🌍 Let's Connect
If you found this useful or want to collaborate:  

⭐ Star the repo  
🐛 Report issues  
🚀 Contribute features  

Made with ❤️ and Agora 🎥  

## 🧑‍💻 Developer  
*Akash Sahani*  
📫 [GitHub](https://github.com/Akash-Sahani18) | [LinkedIn](https://www.linkedin.com/in/akash-sahani-440147243)
