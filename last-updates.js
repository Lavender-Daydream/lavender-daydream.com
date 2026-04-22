const el = document.getElementById("last-updated");

fetch("https://api.github.com/repos/Lavender-daydream/Website-lavender-daydream.com/commits?per_page=1")
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