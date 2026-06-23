(function () {
  var canvas = document.getElementById('hero-scroll-canvas');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var frameCount = parseInt(canvas.dataset.frameCount, 10);
  var basePath = canvas.dataset.framePath;
  var frames = [];
  var currentFrame = -1;
  var lastDrawnIndex = frameCount - 1;

  // Crop window (in source-frame pixel coordinates) covering the
  // non-transparent content across all frames, so the visible subject
  // fills the canvas instead of the mostly-empty padded frame.
  var box = {
    x: parseFloat(canvas.dataset.contentX) || 0,
    y: parseFloat(canvas.dataset.contentY) || 0,
    w: parseFloat(canvas.dataset.contentW) || parseFloat(canvas.dataset.frameWidth) || 0,
    h: parseFloat(canvas.dataset.contentH) || parseFloat(canvas.dataset.frameHeight) || 0
  };

  function frameUrl(i) {
    return basePath + String(i + 1).padStart(4, '0') + '.webp';
  }

  function pad(canvasEl) {
    var rect = canvasEl.getBoundingClientRect();
    canvasEl.width = rect.width * window.devicePixelRatio;
    canvasEl.height = rect.height * window.devicePixelRatio;
  }

  function draw(index) {
    var img = frames[index];
    if (!img || !img.complete || currentFrame === index) return;
    currentFrame = index;
    lastDrawnIndex = index;
    var cw = canvas.width, ch = canvas.height;
    // "Contain" the content box (not "cover" it): covering would scale to
    // fill the canvas on whichever axis is tightest, cropping the other
    // axis — since the box's aspect ratio doesn't match the canvas's,
    // that crops the top/bottom of the subject. Containing keeps the
    // full subject visible, with a transparent margin on the loose axis.
    var scale = box.w && box.h
      ? Math.min(cw / box.w, ch / box.h)
      : Math.max(cw / img.width, ch / img.height);
    var dw = img.width * scale, dh = img.height * scale;
    var dx = cw / 2 - (box.x + box.w / 2) * scale;
    var dy = ch / 2 - (box.y + box.h / 2) * scale;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  pad(canvas);
  window.addEventListener('resize', function () {
    pad(canvas);
    currentFrame = -1;
    draw(lastDrawnIndex);
  });

  var scrollKeys = { Space: 1, PageUp: 1, PageDown: 1, End: 1, Home: 1, ArrowUp: 1, ArrowDown: 1 };
  function preventScroll(e) { e.preventDefault(); }
  function preventScrollKeys(e) { if (scrollKeys[e.code]) e.preventDefault(); }

  function playIntro() {
    var index = frameCount - 1;
    draw(index);
    var timer = setInterval(function () {
      index--;
      if (index < 0) {
        clearInterval(timer);
        return;
      }
      draw(index);
    }, 41);
  }

  var loadedCount = 0;
  for (var i = 0; i < frameCount; i++) {
    var img = new Image();
    img.src = frameUrl(i);
    img.onload = function () {
      loadedCount++;
      if (loadedCount === frameCount) {
        playIntro();
      }
    };
    frames.push(img);
  }
})();
