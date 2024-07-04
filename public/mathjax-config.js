// public/mathjax-config.js

window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true,
        processEnvironments: true,
    },
    options: {
        renderActions: {
            addMenu: [0, '', ''],
        },
    },
};
