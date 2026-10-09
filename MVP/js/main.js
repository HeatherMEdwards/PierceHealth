(function () {
  'use strict';

  var DESKTOP = window.matchMedia('(min-width: 860px)');

  // ---- Mobile menu ----
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('mobile-menu');

  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.hidden = !open;
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Close after choosing a link
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });

    // Reset when crossing into desktop layout
    var onChange = function (mq) { if (mq.matches) setMenu(false); };
    if (DESKTOP.addEventListener) DESKTOP.addEventListener('change', onChange);
    else DESKTOP.addListener(onChange);
  }

  // ---- Free guide signup ----
  // No backend yet: validates and shows a confirmation.
  // To wire up, set the form's action/method (e.g. Mailchimp, ConvertKit, Formspree)
  // and remove the preventDefault below.
  var form = document.getElementById('guide-form');
  if (form) {
    var input = form.querySelector('input[type="email"]');
    var msg = form.querySelector('.form-msg');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var value = input.value.trim();
      var ok = value !== '' && input.checkValidity();

      input.setAttribute('aria-invalid', String(!ok));
      msg.classList.toggle('is-error', !ok);
      msg.classList.toggle('is-ok', ok);

      if (!ok) {
        msg.textContent = 'Please enter a valid email address.';
        input.focus();
        return;
      }

      msg.textContent = 'Thanks! Your starter guide is on its way to ' + value + '.';
      form.reset();
    });

    input.addEventListener('input', function () {
      if (input.getAttribute('aria-invalid') === 'true') {
        input.removeAttribute('aria-invalid');
        msg.textContent = '';
        msg.classList.remove('is-error');
      }
    });
  }

  // ---- Footer year ----
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
