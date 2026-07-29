/* ============================================================
   WEDDING INVITE — CLIENT CONFIG
   Edit ONLY this file to customise the invitation for a client.
   Nothing else needs to change. Save, then open index.html.
   ============================================================ */

window.WEDDING = {

  /* ---- COUPLE ---- */
  brideName:  "Ananya",          // shown on hero (second line)
  groomName:  "Rohan",           // shown on hero (first line)
  coupleShort:"Rohan & Ananya",  // used on intro screen + browser tab

  /* ---- INTRO SCREEN ---- */
  introQuote: "Two souls, one heart — a lifetime begins",
  openButtonLabel: "Open",       // big script word on the round button
  openButtonSub:   "Invitation", // small caps under it

  /* ---- HERO ---- */
  heroEyebrow: "Together with their families",
  heroDate:    "20 · 12 · 2026",   // big date line
  heroDay:     "Sunday",           // shown after the date

  /* ---- COUNTDOWN TARGET (the moment the timer counts to) ----
     Format: "YYYY-MM-DDTHH:MM:SS+05:30"  (+05:30 = India time) */
  countdownTarget: "2026-12-20T06:30:00+05:30",

  /* ---- EVENTS (add / remove cards freely) ----
     icon options already provided: "mehendi", "muhurta", "reception"
     (to add your own icon, drop a PNG in assets/img/ and set icon:"filename-without-.png") */
  events: [
    { icon:"mehendi",   title:"Mehendi",   tagline:"A celebration of colours & joy",
      date:"18 Dec 2026", day:"Friday",   time:"5:00 PM onwards" },
    { icon:"muhurta",   title:"Muhurta",   tagline:"The most auspicious moment",
      date:"20 Dec 2026", day:"Sunday",   time:"6:30 – 7:30 AM" },
    { icon:"reception", title:"Reception", tagline:"An evening of love & memories",
      date:"21 Dec 2026", day:"Monday",   time:"6:00 PM onwards" },
  ],
  eventsFooterTop:    "Two souls, one heart",
  eventsFooterScript: "a lifetime of togetherness",

  /* ---- GALLERY ----
     6 photos: 3 tall (top row) + 3 rounded (bottom row).
     Replace files in assets/img/ keeping the same names, OR change names here. */
  gallery: {
    subtitle: "A collection of moments that made our journey beautiful",
    photos: {
      topLeft:   "g-left",
      topCenter: "g-center",
      topRight:  "g-right",
      botLeft:   "g-b1",
      botCenter: "g-b2",
      botRight:  "g-b3",
    },
    footerTop:    "Every picture holds",
    footerScript: "a piece of our heart",
  },

  /* ---- ADDRESS / VENUE ---- */
  venue: {
    subtitle: "We can't wait to celebrate this special day with you",
    image:    "venue",                 // file in assets/img/ (venue.jpg / venue.webp)
    name:     "Taj Yeshwantpur, Bengaluru",
    addressLines: [
      "No. 2275, Tumkur Main Road,",
      "Yeshwanthpur Industrial Area,",
      "Bengaluru, Karnataka – 560022, India",
    ],
    mapLink:  "https://www.google.com/maps/search/?api=1&query=Taj+Yeshwantpur+Bengaluru+2275+Tumkur+Road",
    mapEmbed: "https://www.google.com/maps?q=Taj+Yeshwantpur+Bengaluru+2275+Tumkur+Road&output=embed",
    features: [
      { icon:"🚗", label:"Valet parking" },
      { icon:"📍", label:"200 m from metro" },
      { icon:"📞", label:"+91 98765 43210" },
    ],
    footerTop:    "Together is our",
    footerScript: "favourite place to be",
  },

  /* ---- MEDIA FILES (change only if you rename files) ---- */
  media: {
    heroVideoWebm: "assets/video/hero.webm",
    heroVideoMp4:  "assets/video/hero.mp4",
    heroPoster:    "assets/video/poster.jpg",   // first frame (intro background)
    heroFrozen:    "assets/video/hero-last.jpg", // last frame (hero background)
    sectionBg:     "assets/img/section-bg",      // bg behind events/gallery/address (.webp/.jpg)
    music:         "assets/music/ambient.mp3",
    musicOnByDefault: false,   // true = try autoplay music when invite opens
  },
};
