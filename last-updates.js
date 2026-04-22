const el = document.getElementById("last-updated");

fetch("https://git.lavender-daydream.com/api/v1/repos/berlyn/lavender-daydream.com/commits?limit=1")
  .then(response => response.json())
  .then(data => {
    const rawDate = data[0].commit.committer.date;
    const formatted = new Date(rawDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    el.textContent = formatted;
  })
  .catch(() => {
    el.textContent = "recently";
  });