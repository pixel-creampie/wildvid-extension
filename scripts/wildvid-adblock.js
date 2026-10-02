(function() {
  'use strict';
  if (window.__wildvid_adblocker) return;
  window.__wildvid_adblocker = true;
  const skipAd = () => {
    const skipBtns = document.querySelectorAll(
      '.ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytp-skip-ad-button, [class*="skip-button"]'
    );
    skipBtns.forEach(btn => {
      if (btn.offsetParent !== null) btn.click();
    });
    const video = document.querySelector('video');
    const adShowing = document.querySelector('.ad-showing');
    if (video && adShowing) {
      video.playbackRate = 16;
      video.currentTime = video.duration || 999;
    }
    const overlayClose = document.querySelectorAll(
      '.ytp-ad-overlay-close-button, .ytp-ad-overlay-close-container button'
    );
    overlayClose.forEach(btn => btn.click());
  };
  setInterval(skipAd, 500);
  const observer = new MutationObserver(skipAd);
  observer.observe(document.body, { childList: true, subtree: true });
})();
