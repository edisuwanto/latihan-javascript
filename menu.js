let menu = [
    ["index.html", "beranda"],
    ["galeri.html", "galeri"],
    ["produk.html", "produk"],
    ["program.html", "programlayanan"],
    ["hubungikami.html", "hubungikami"],
    ["tentang.html", "tentang"],
]
let tampilMenu = menu.length;
for (i = 0; i < tampilMenu; i++) {
    document.write("<a href =" + "\"" + menu[i][0] + "\"" + "\>" + menu[i][1] + "</a>");
    document.write("<br>");
}
