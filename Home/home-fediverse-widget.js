const ACCOUNTS = [
  { instance: "gotosocial.lavender.spl.tech", username: "lavender" },
  { instance: "mastodon.social",              username: "Lavender_Daydream" },
  { instance: "gamerstavern.online",          username: "Lavender_Daydream" },
  { instance: "donphan.social",               username: "Lavender_Daydream" },
  { instance: "blorbo.social",                username: "Lavender_Daydream" },
  { instance: "urusai.social",                username: "Lavender_Daydream" },
];
 
async function fetchLatest(inst, user) {
  const acct = inst === "gotosocial.lavender.spl.tech" ? `${user}@${inst}` : user;
  const { id } = await fetch(`https://${inst}/api/v1/accounts/lookup?acct=${acct}`).then(r => r.json());
  const posts = await fetch(`https://${inst}/api/v1/accounts/${id}/statuses?limit=1&exclude_replies=true&exclude_reblogs=true`).then(r => r.json());
  if (!posts.length) throw new Error("no posts");
  return { post: posts[0], instance: inst, username: user };
}
 
async function loadStatus() {
  const results = await Promise.allSettled(ACCOUNTS.map(a => fetchLatest(a.instance, a.username)));
  let newest = null;
  results.forEach(r => {
    if (r.status !== 'fulfilled') return;
    if (!newest || new Date(r.value.post.created_at) > new Date(newest.post.created_at)) newest = r.value;
  });
  if (!newest) {
    document.getElementById('fedi-status').textContent = "couldn't load latest post.";
    return;
  }
  const tmp = document.createElement('div');
  tmp.innerHTML = newest.post.content;
  document.getElementById('fedi-status').textContent = tmp.textContent;
  const date = new Date(newest.post.created_at).toLocaleString();
  const profileUrl = `https://${newest.instance}/@${newest.username}`;
  const link = document.createElement('a');
  link.href = profileUrl;
  link.textContent = `@${newest.username}@${newest.instance}`;
  link.target = '_blank';
  const meta = document.getElementById('fedi-meta');
  meta.textContent = '';
  meta.appendChild(link);
  meta.append(` · ${date}`);
}
 
loadStatus();
