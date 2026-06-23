(function () {
  function normalize(str) {
    return (str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('doc-search');
    var sections = document.querySelectorAll('.doc-section');
    if (!sections.length) return;

    function getActiveCategory(section) {
      var activeBtn = section.querySelector('.doc-filter-btn.is-active');
      return activeBtn ? activeBtn.dataset.category : 'all';
    }

    function applyFilters() {
      var query = normalize(input ? input.value.trim() : '');

      sections.forEach(function (section) {
        var activeCategory = getActiveCategory(section);
        var cards = section.querySelectorAll('.card-link');
        var visibleCount = 0;

        cards.forEach(function (card) {
          var column = card.closest('.column');
          var title = card.querySelector('.title');
          var subtitle = card.querySelector('.subtitle');
          var text = normalize((title ? title.textContent : '') + ' ' + (subtitle ? subtitle.textContent : ''));
          var textMatch = query === '' || text.indexOf(query) !== -1;
          var categoryMatch = activeCategory === 'all' || (column && column.dataset.category === activeCategory);
          var match = textMatch && categoryMatch;
          if (column) column.style.display = match ? '' : 'none';
          if (match) visibleCount++;
        });

        var empty = section.querySelector('.doc-empty');
        if (empty) empty.style.display = visibleCount === 0 ? '' : 'none';
      });
    }

    if (input) input.addEventListener('input', applyFilters);

    document.querySelectorAll('.doc-filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var group = btn.closest('.doc-filter');
        if (group) {
          group.querySelectorAll('.doc-filter-btn').forEach(function (b) {
            b.classList.remove('is-active', 'is-link');
          });
          btn.classList.add('is-active', 'is-link');
        }
        applyFilters();
      });
    });

    applyFilters();
  });
})();
