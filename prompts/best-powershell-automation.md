# Scaffold static documentation pages for Broker Follow-Up Machine GPT
# Run from the repository root.

cd path\to\broker-followup-machine

$site = "site"

$pages = @{
  "agents.html" = "Agent"
  "knowledge.html" = "Knowledge Stack"
  "actions.html" = "Actions"
  "workflows.html" = "Workflows"
  "templates.html" = "Templates"
  "safety.html" = "Safety"
  "assets.html" = "Assets"
}

foreach ($page in $pages.Keys) {
  $title = $pages[$page]
  $path = Join-Path $site $page

  if (!(Test-Path $path)) {
@"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>$title | Broker Follow-Up Machine</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header>
    <a href="index.html">Broker Follow-Up Machine</a>
    <nav>
      <a href="index.html">Home</a>
      <a href="agents.html">Agent</a>
      <a href="knowledge.html">Knowledge</a>
      <a href="actions.html">Actions</a>
      <a href="workflows.html">Workflows</a>
      <a href="templates.html">Templates</a>
      <a href="safety.html">Safety</a>
      <a href="assets.html">Assets</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <h1>$title</h1>
      <p>Placeholder page for Broker Follow-Up Machine GPT.</p>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
"@ | Set-Content $path
  }
}

git status
