'use strict';

const galleries = document.querySelectorAll('.photo-gallery, .gallery-grid');
if (galleries.length && typeof HTMLDialogElement !== 'undefined' &&
    typeof HTMLDialogElement.prototype.showModal === 'function') {
  const dialog = document.createElement('dialog');
  dialog.className = 'gallery-dialog';
  dialog.setAttribute('aria-label', 'Image viewer');
  dialog.innerHTML =
    '<div class="gallery-dialog-toolbar">' +
    '<button type="button" data-step="-1">Previous</button>' +
    '<button type="button" data-step="1">Next</button>' +
    '<button type="button" data-close autofocus>Close</button></div>' +
    '<img alt=""><p aria-live="polite"></p>';
  document.body.append(dialog);

  const image = dialog.querySelector('img');
  const description = dialog.querySelector('p');
  const steps = [...dialog.querySelectorAll('[data-step]')];
  const close = dialog.querySelector('[data-close]');
  let links = [];
  let index = 0;
  let trigger;

  function showImage() {
    const link = links[index];
    const thumbnail = link.querySelector('img');
    image.alt = thumbnail.alt;
    image.src = link.href;
    const caption = link.closest('figure')?.querySelector('figcaption')?.textContent.trim();
    const count = `Image ${index + 1} of ${links.length}`;
    description.textContent = caption ? `${count} · ${caption}` : count;
  }

  function move(step) {
    index = (index + step + links.length) % links.length;
    showImage();
  }

  galleries.forEach((gallery) => {
    const items = [...gallery.querySelectorAll('.gallery-photo')];
    items.forEach((link, position) => {
      link.addEventListener('click', (event) => {
        if (event.defaultPrevented || event.button !== 0 || event.ctrlKey ||
            event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        links = items;
        index = position;
        trigger = link;
        steps.forEach((button) => { button.hidden = items.length < 2; });
        showImage();
        dialog.showModal();
        close.focus();
      });
    });
  });

  steps.forEach((button) => {
    button.addEventListener('click', () => move(Number(button.dataset.step)));
  });
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', (event) => {
    if (links.length < 2 || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    move(event.key === 'ArrowLeft' ? -1 : 1);
  });
  dialog.addEventListener('close', () => {
    image.removeAttribute('src');
    trigger?.focus();
  });
}
