(function () {
    var me = document.currentScript;
    var libSrc = me.src.replace("lucide-icon.js", "lucide.min.js");
    var script = document.createElement("script");
    script.src = libSrc;
    script.onload = function () { lucide.createIcons(); };
    document.head.appendChild(script);
})();
