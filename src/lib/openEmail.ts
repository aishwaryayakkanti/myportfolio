export const CONTACT_EMAIL = "yakkantiaishwarya7@gmail.com";

const MAILTO_URL = `mailto:${CONTACT_EMAIL}`;
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}`;

export function openEmailClient(
  event?: React.MouseEvent<HTMLElement> | MouseEvent,
): void {
  if (event) {
    event.preventDefault();
  }

  // Attempt default mail client first.
  const fallbackTimer = window.setTimeout(() => {
    window.open(GMAIL_COMPOSE_URL, "_blank", "noopener,noreferrer");
  }, 1200);

  const clearFallback = () => {
    window.clearTimeout(fallbackTimer);
    document.removeEventListener("visibilitychange", clearFallback);
  };

  document.addEventListener("visibilitychange", clearFallback);
  window.location.href = MAILTO_URL;

  // Cleanup in case visibility doesn't change.
  window.setTimeout(clearFallback, 2500);
}
