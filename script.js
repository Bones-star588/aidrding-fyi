"use strict";

const SCHOOL_EMAIL = "202300810235@mail.sdu.edu.cn";

function fallbackCopyText(text) {
  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "");
  helper.style.position = "fixed";
  helper.style.inset = "0 auto auto -9999px";
  helper.style.opacity = "0";
  document.body.appendChild(helper);
  helper.select();

  const copied = document.execCommand("copy");
  helper.remove();

  if (!copied) {
    throw new Error("The browser rejected the fallback copy command.");
  }
}

async function copySchoolEmail() {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(SCHOOL_EMAIL);
    return;
  }

  fallbackCopyText(SCHOOL_EMAIL);
}

function setCopyState(button, state) {
  const label = button.querySelector("[data-copy-label]");
  const statusId = button.getAttribute("aria-describedby");
  const status = statusId ? document.getElementById(statusId) : null;

  button.classList.toggle("is-copied", state === "copied");

  if (label) {
    label.textContent =
      state === "copied"
        ? "Copied"
        : state === "error"
          ? "Copy failed"
          : "Copy email";
  }

  if (status) {
    status.textContent =
      state === "copied"
        ? "School email copied to the clipboard."
        : state === "error"
          ? "Copy failed. Select the visible school email address to copy it manually."
          : "";
  }
}

function initializeCopyButtons() {
  const copyButtons = document.querySelectorAll("[data-copy-email]");

  copyButtons.forEach((button) => {
    let resetTimer;
    button.hidden = false;

    button.addEventListener("click", async () => {
      const source = button.dataset.copySource || "unknown";
      console.debug("Copy school email requested", { source });
      window.clearTimeout(resetTimer);

      try {
        await copySchoolEmail();
        setCopyState(button, "copied");
        console.info("School email copied", { source });
      } catch (error) {
        setCopyState(button, "error");
        console.error("Failed to copy school email", { source, error });
      }

      resetTimer = window.setTimeout(() => {
        setCopyState(button, "idle");
      }, 2400);
    });
  });
}

function initializeCurrentYear() {
  const year = new Date().getFullYear();
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(year);
  });
}

initializeCopyButtons();
initializeCurrentYear();
