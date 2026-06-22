(function () {
  var canvas = document.getElementById('hero-scroll-canvas');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var frameCount = parseInt(canvas.dataset.frameCount, 10);
  var basePath = canvas.dataset.framePath;
  var frames = [];
  var currentFrame = -1;

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
    var cw = canvas.width, ch = canvas.height;
    var scale = box.w && box.h
      ? Math.max(cw / box.w, ch / box.h)
      : Math.max(cw / img.width, ch / img.height);
    var dw = img.width * scale, dh = img.height * scale;
    var dx = cw / 2 - (box.x + box.w / 2) * scale;
    var dy = ch / 2 - (box.y + box.h / 2) * scale;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  function progress() {
    var p = window.scrollY / window.innerHeight;
    return Math.min(Math.max(p, 0), 1);
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var index = Math.round(progress() * (frameCount - 1));
      draw(index);
      ticking = false;
    });
  }

  pad(canvas);
  window.addEventListener('resize', function () {
    pad(canvas);
    currentFrame = -1;
    draw(Math.round(progress() * (frameCount - 1)));
  });

  for (var i = 0; i < frameCount; i++) {
    var img = new Image();
    img.src = frameUrl(i);
    img.onload = function () {
      draw(Math.round(progress() * (frameCount - 1)));
    };
    frames.push(img);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();
