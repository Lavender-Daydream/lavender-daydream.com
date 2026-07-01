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
3. Enter in the terminal window:

```bash
git subtree split --prefix=public -b github-sync
git push github github-sync:main --force
git branch -D github-sync
```

4. Wait for it to finish uploading
5. Copy/Paste ssh github key from Bitwarden if prompted
6. All done! Check Github!

### Why three commands instead of one?

The short version (`git subtree push --prefix public github main`) sometimes hits a bug with the message `fatal: can't copy commit ...`. The three-command version works around that bug every time:

- `git subtree split` — creates a temporary branch containing only the `public/` folder's history
- `git push ... --force` — pushes that branch to GitHub (force is safe here since GitHub is a one-way mirror)
- `git branch -D github-sync` — deletes the temporary branch to clean up

### git subtree not installed?

If you get `git: 'subtree' is not a git command`, run this once to install it:

```bash
curl -fsSL "https://raw.githubusercontent.com/git/git/v2.54.0/contrib/subtree/git-subtree.sh" -o ~/.local/bin/git-subtree && chmod +x ~/.local/bin/git-subtree
```

Then make sure `~/.local/bin` is in your PATH (`export PATH="$HOME/.local/bin:$PATH"`) before running the push commands.
