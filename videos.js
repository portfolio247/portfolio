/* =====================================================
   EDIT THIS FILE TO CHANGE YOUR WEBSITE'S CONTENT
   ===================================================== */

const SITE = {
  tagline: "Video editor",
  email: "teddyeditz.ae@gmail.com",
  instagram: "https://www.instagram.com/teddy.a3p/",
  whatsapp: "https://wa.me/8801405420637",
  // The three items on the right side of the top section
  skills: [
    { title: "Premiere Pro",  label: "Cutting & pacing" },
    { title: "After Effects", label: "Motion & captions" },
    { title: "Color Grading", label: "Clean, cinematic looks" }
  ]
};

/* -----------------------------------------------------
   YOUR VIDEOS
   To add a video: copy one block { ... }, paste it
   at the TOP of the list, and change the details.
   Newest video first.

   file     = path to your video inside the "videos" folder
   orientation = "landscape" (ONLY for horizontal videos; leave out for vertical)
   youtube  = (optional) use instead of file: just the video ID
   poster   = (optional) cover image, e.g. "images/cover1.jpg"
   category = any word you like (Podcast, Talking Head...). Filter
              buttons are created automatically.
   ----------------------------------------------------- */
const VIDEOS = [
  { title: "Landscape Showreel", category: "Promotional", file: "videos/landscape-portfolio.mp4", poster: "images/landscape-portfolio.jpg", orientation: "landscape" },
  { title: "Sell Anything", category: "Talking Head", file: "videos/siham-portfolio.mp4", poster: "images/siham-portfolio.jpg" },
  { title: "Podcast Clip", category: "Podcast", file: "videos/comp-1.mp4", poster: "images/comp-1.jpg" },
  { title: "Talking Head Edit", category: "Talking Head", file: "videos/talking-tom.mp4", poster: "images/talking-tom.jpg" },
];
