/* ======================================================
   LISTA DE REGALOS — edita solo este archivo
   Cada línea es un regalo:
     n   = nombre que se muestra
     e   = emoji
     max = cuántas personas pueden elegirlo (1 = uno solo, 5 = contador 0/5)
     url = link de ejemplo (Falabella, Infanti, etc.)
   Para agregar uno: copia una línea y cámbiale los datos.
   Para quitar uno: borra su línea.
   El orden de aquí es el orden en la página.
   Si cambias un nombre, las reservas ya guardadas con el nombre
   anterior dejan de contarse.
====================================================== */
const GIFTS = [
  { n:"Cuna para bebé", e:"🛏️", max:1, url:"https://infanti.com.pe/collections/cunas" },
  { n:"Coche para bebé", e:"🛒", max:1, url:"https://www.falabella.com.pe/falabella-pe/category/cat800474/Coches?f.product.brandName=infanti" },
  { n:"Monitor para bebé", e:"📹", max:1, url:"https://www.falabella.com.pe/falabella-pe/shop/monitor-para-bebe" },
  { n:"Nido colecho", e:"🪺", max:1, url:"https://infanti.com.pe/products/nido-colecho-bebe?variant=51254244180268" },
  { n:"Canguro para bebé 0-36 meses", e:"🎒", max:1, url:"https://www.falabella.com.pe/falabella-pe/product/151493649/portabebes-ergonomico-3-en-1-con-asiento-desmontable-canguro-para-bebe-0-36-meses/151493650" },
  { n:"Bañera para bebé", e:"🛁", max:1, url:"https://infanti.com.pe/products/banera-plegable-con-termometro?variant=52841125249324" },
  { n:"Cambiador portátil", e:"👜", max:1, url:"https://infanti.com.pe/collections/bolsos-panalero-1" },
  { n:"Cojín de lactancia", e:"🤱", max:1, url:"https://www.falabella.com.pe/falabella-pe/category/CATG34941/Almohada-de-lactancia" },
  { n:"Organizador multiusos de 3 niveles para pañales", e:"🗄️", max:1, url:"https://www.falabella.com.pe/falabella-pe/product/159797247/organizador-multiusos-de-3-niveles-con-puertas-transparentes-y-ruedas/159797248" },
  { n:"Basurero para pañales de bebé", e:"🗑️", max:1, url:"https://www.falabella.com.pe/falabella-pe/product/20449128/sistema-para-desechar-panales-twist-click-blanco/20449128" },
  { n:"Luz nocturna", e:"✨", max:1, url:"https://www.falabella.com.pe/falabella-pe/product/15757664/luz-nocturna-de-pared-babymoov/15757664" },
  { n:"Aspirador nasal", e:"👃", max:1, url:"https://www.falabella.com.pe/falabella-pe/category/CATG14316/Aspiradores-nasales" },
  { n:"Biberones anticólicos", e:"🍼", max:3, url:"https://infanti.com.pe/collections/philips-avent" },
  { n:"Pañales talla M", e:"🧷", max:5, url:"https://www.falabella.com.pe/falabella-pe/shop/pa%C3%B1ales-talla-m?facetSelected=true&f.product.brandName=baby%3A%3Ababysec%3A%3Ahuggies" },
  { n:"Conjuntos de dos piezas para bebé", e:"🧦", max:5, url:"https://www.falabella.com.pe/falabella-pe/category/cat7350561/Ropa-de-bebe?f.product.attribute.Tipo=conjuntos" },
  { n:"Bodies de algodón", e:"👕", max:5, url:"https://www.falabella.com.pe/falabella-pe/category/CATG15775/Bodies-Ninos-Bebe" },
  { n:"Sonajeros suaves", e:"🎵", max:3, url:"https://www.falabella.com.pe/falabella-pe/search?Ntt=set+de+sonajeros" },
   { n:"Crema Corporal", e:"🧴", max:3, url:"https://www.mifarma.com.pe/producto/crema-corporal-eucerin-baby-para-piel-sensible/010664" },
  { n:"Shampoo para bebé", e:"🧴", max:1, url:"https://www.falabella.com.pe/falabella-pe/product/17586239/eucerin-baby-bano-y-shampoo-240ml/17586239" }
];
