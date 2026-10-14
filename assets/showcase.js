document.querySelectorAll("[data-demo-showcase]").forEach((showcase) => {
  const player = showcase.querySelector("[data-demo-player]");
  const title = showcase.querySelector("[data-demo-title]");
  const description = showcase.querySelector("[data-demo-description]");
  const badge = showcase.querySelector("[data-demo-badge]");
  const plot = showcase.querySelector("[data-demo-plot]");
  const plotLink = showcase.querySelector("[data-demo-plot-link]");
  const plotCaption = showcase.querySelector("[data-demo-plot-caption]");
  const plotStatus = showcase.querySelector("[data-demo-plot-status]");
  const extra = showcase.querySelector("[data-demo-extra]");
  const finding = showcase.querySelector("[data-demo-finding]");
  const findingTitle = showcase.querySelector("[data-demo-finding-title]");
  const findingText = showcase.querySelector("[data-demo-finding-text]");
  const choices = [...showcase.querySelectorAll("[data-video]")];

  function selectTask(choice, play = true) {
    const task = choice.dataset;
    choices.forEach((item) => {
      const active = item === choice;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    // Update all evidence from the same task, including on initial page load.
    title.textContent = task.title;
    description.textContent = task.description;
    badge.textContent = task.badge;
    finding.hidden = !task.findingText;
    findingTitle.textContent = task.findingTitle || "";
    findingText.textContent = task.findingText || "";
    plotCaption.textContent = task.plotCaption;
    plotLink.href = task.plot;
    plot.alt = task.plotAlt;
    extra.hidden = !task.extraHref;
    extra.textContent = task.extraLabel || "";
    if (task.extraHref) extra.href = task.extraHref;
    else extra.removeAttribute("href");

    // Do not leave the previous task's plot visible while the next one loads.
    plot.hidden = true;
    plotStatus.hidden = false;
    plotStatus.textContent = `Loading ${task.title} results…`;
    const showPlot = () => {
      plot.hidden = false;
      plotStatus.hidden = true;
    };
    plot.onload = showPlot;
    plot.onerror = () => {
      plotStatus.textContent = `${task.title} plot could not load. Click to open the image.`;
    };
    plot.src = task.plot;
    if (plot.complete && plot.naturalWidth) showPlot();

    const videoUrl = new URL(task.video, document.baseURI).href;
    if (player.currentSrc !== videoUrl) {
      player.pause();
      player.poster = task.poster;
      player.setAttribute("aria-label", `${task.title} policy rollout`);
      player.src = task.video;
      player.load();
    }
    if (play) {
      const playRequest = player.play();
      if (playRequest) playRequest.catch(() => {});
    }
  }

  choices.forEach((choice) => {
    choice.addEventListener("click", () => selectTask(choice));
  });
  selectTask(choices.find((choice) => choice.classList.contains("is-active")) || choices[0], false);
});
