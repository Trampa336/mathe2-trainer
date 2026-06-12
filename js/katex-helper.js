/* Rendert Text mit eingebetteter LaTeX-Mathematik.
   Unterstützt: $$...$$ (abgesetzt), $...$ (inline), **fett**, Zeilenumbrüche. */
(function () {
  "use strict";

  function escapeHtml(s) {
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderTextPart(s) {
    let html = escapeHtml(s);
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\n/g, "<br>");
    return html;
  }

  function renderMath(tex, displayMode) {
    try {
      return katex.renderToString(tex, {
        displayMode: displayMode,
        throwOnError: false,
        strict: false,
      });
    } catch (e) {
      return '<code class="math-error">' + escapeHtml(tex) + "</code>";
    }
  }

  // Teilt den Text an Mathe-Blöcken und rendert jeden Teil passend.
  window.md = function (text) {
    if (!text) return "";
    const parts = text.split(/(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g);
    let out = "";
    for (const part of parts) {
      if (part.startsWith("$$") && part.endsWith("$$")) {
        out += renderMath(part.slice(2, -2), true);
      } else if (part.startsWith("$") && part.endsWith("$") && part.length > 2) {
        out += renderMath(part.slice(1, -1), false);
      } else {
        out += renderTextPart(part);
      }
    }
    return out;
  };
})();
