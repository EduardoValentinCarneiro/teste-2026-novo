const clock = document.querySelector("#clock");
const today = document.querySelector("#today");
const viewerCount = document.querySelector("#viewer-count");

const locale = "pt-BR";

function updateDateTime() {
  const now = new Date();

  if (clock) {
    clock.textContent = now.toLocaleTimeString(locale, {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  if (today) {
    today.textContent = now.toLocaleDateString(locale, {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }
}

function pulseViewerCount() {
  if (!viewerCount) {
    return;
  }

  const current = Number(viewerCount.textContent.replace(/\D/g, "")) || 12408;
  const next = current + Math.floor(Math.random() * 9) + 1;
  viewerCount.textContent = next.toLocaleString(locale);
}

updateDateTime();
pulseViewerCount();
setInterval(updateDateTime, 30000);
setInterval(pulseViewerCount, 4500);
