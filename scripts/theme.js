(function () {
  'use strict';

  var storageKey = 'stolgaer-theme';
  var root = document.documentElement;
  var theme = 'light';

  try {
    if (window.localStorage.getItem(storageKey) === 'dark') theme = 'dark';
  } catch (error) {
    // The switch still works when browser storage is unavailable.
  }

  // Run before the stylesheet so saved dark mode is applied before first paint.
  root.dataset.theme = theme;

  function syncButtons() {
    document.querySelectorAll('[data-theme-choice]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.themeChoice === theme));
    });
  }

  function applyTheme(value, persist) {
    theme = value === 'dark' ? 'dark' : 'light';
    root.dataset.theme = theme;
    syncButtons();
    if (persist) {
      try {
        window.localStorage.setItem(storageKey, theme);
      } catch (error) {
        // Keep the current page usable even if the preference cannot be saved.
      }
    }
  }

  function initialize() {
    document.querySelectorAll('[data-theme-choice]').forEach(function (button) {
      button.addEventListener('click', function () {
        applyTheme(button.dataset.themeChoice, true);
      });
    });
    syncButtons();
    document.querySelectorAll('.theme-switch').forEach(function (control) {
      control.hidden = false;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }

  window.addEventListener('storage', function (event) {
    if (event.key === storageKey || event.key === null) {
      applyTheme(event.newValue, false);
    }
  });
}());
