# 🪻 lavender-daydream.com - Public Repository
 Welcome to my public Github Repository for my personal website! This is where you can see the code and files of my website!

🔗 Live site: www.lavender-daydream.com Currently hosted on mew, a personal VPS with Caddy and Docker. Was previously hosted on Neocities, then A2 Hosting, then mew with Coolify.

## 🔓 Public Repository

This is the public repository containing what gets served as the actual website and other files I share. all of this is contained in the "/lavender-daydream/public/" folder.

There is a separate, private, self hosted Gitea mirror that contains all the files — website content, documentation, helper scripts, and personal notes.

## 📂 File Structure

| Folder | Description |
|--------|-------------|
| 📁`About` | The page files about me! |
| 📁`Albums` | Contains page files for pages that mainly showcase images |
| 📁`Characters` |  |
| 📁`Hoard` | Folder containing files of collectable images, like 88x31 buttons, blinkies, and stamps! |
| 📁`Home` | The Home Page! |
| 📁`Images` | Images that aren't in the other folders |
| 📁`Links to Reference` | Contains links for me and possibly others to reference, open with File Explorer |
| 📁`Public Archived Files` | Archived/Retired files for everyone to view |
| 📁`Resources` | The page files for the resources page |
| 📄`Shrines` | Pages dedicated to a specific thing! |
| 📄`contact.html`||
| 📄`global.css`| CSS or Styling file that all pages can reference|
| 📄`sitemap.html` | |



## ⬆️ Upload/Push to Github Instructions (For Lavender)

1. Open the lavender-daydream.com folder in "C:\Users\ (YOUR NAME) \ .src" with VS Code
2. Press Ctrl+Shift+` to open a terminal window in VS Code
3. enter in the terminal window:
```bash 
git subtree push --prefix public github main
```
4. Wait for it to finish uploading
5. Copy/Paste ssh github key from Bitwarden
6. All done! Check Github!
