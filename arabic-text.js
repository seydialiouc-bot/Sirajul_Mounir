/**
 * Normalisation Unicode NFC sur les nœuds texte arabes pour un rendu cohérent
 * (caractères précomposés / ligatures attendues par les polices).
 */
(function () {
  function normalizeTextNodes(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var node;
    while ((node = walker.nextNode())) {
      if (!node.nodeValue || !/[\u0600-\u06FF]/.test(node.nodeValue)) continue;
      var next;
      try {
        next = node.nodeValue.normalize("NFC");
      } catch (e) {
        continue;
      }
      if (next !== node.nodeValue) node.nodeValue = next;
    }
  }

  document.querySelectorAll('[lang="ar"]').forEach(function (el) {
    normalizeTextNodes(el);
  });
})();
