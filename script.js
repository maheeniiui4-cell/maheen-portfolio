// ---- Content: edit this section to change the site ----
var EMAIL = 'Maheenarshad4002@gmail.com';
var LINKS = {
  linkedin: 'https://linkedin.com/in/maheenarshad',
  behance: 'https://www.behance.net/maheenabbasi4',
  fiverr: 'https://www.fiverr.com/s/18DxyK',
  email: 'mailto:' + EMAIL
};
// Optional: paste a Formspree URL (https://formspree.io/f/xxxx) to receive messages in your inbox.
// Left empty, the form opens the visitor's email app instead.
var FORM_ENDPOINT = '';
var NAV = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact'];
var STATS = [['100+', 'Freelance Projects'], ['2', 'Internship Experiences'], ['2023–2027', 'Education']];
var SKILLS = [
  { title: 'UI/UX Design', items: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems', 'Responsive Design'] },
  { title: 'Graphic Design', items: ['Adobe Illustrator', 'Adobe Photoshop', 'Logo Design', 'Branding', 'Visual Identity'] },
  { title: 'Technical Skills', items: ['Visual Studio', 'Android Studio', 'Web Development', '3D Modeling'] }
];
var EXPERIENCE = [
  { role: 'Freelance Graphic Designer', org: 'Freelance', points: ['Completed 100+ logo design and branding projects.', 'Created professional brand identities.'] },
  { role: 'UI/UX Designer', org: 'Freelance', points: ['Designed mobile and web interfaces.', 'Developed interactive prototypes and reusable design systems.'] },
  { role: 'UI/UX Design Intern', org: 'IT Board Azad Kashmir', points: ['Designed mobile and web interfaces.', 'Created wireframes and prototypes.', 'Applied usability and responsive design principles.'] },
  { role: '3D Modeler Intern', org: 'Renegade Furniture · 2 Months', points: ['Created 3D furniture models and renders.', 'Collaborated with the design team.'] }
];
// To show your own image: put it in the "projects" folder and set image: 'projects/name.jpg'
var PROJECTS = [
  { title: 'UI/UX Design', tag: 'Figma', url: 'https://www.figma.com/design/qkQwl0jXPsMKDA6ixTwc63', desc: 'User interface and experience design project, built in Figma.', image: null },
  { title: 'MAHEEN PROJECT', tag: 'Figma', url: 'https://www.figma.com/design/0ILXmo6bBcloz8U0JgpOvn', desc: 'Design project, built in Figma. Open the file to explore the screens.', image: null },
  { title: 'Logo & Brand Identity', tag: 'Fiverr', url: 'https://www.fiverr.com/s/18DxyK', desc: 'Logo design and brand identity work, available on Fiverr.', image: null }
];
var SERVICES = [
  ['◈', 'UI/UX Design'], ['▣', 'Website Design'], ['▤', 'Mobile App Design'], ['✦', 'Logo Design'],
  ['❖', 'Brand Identity'], ['◉', 'Graphic Design'], ['⬡', 'Wireframing & Prototyping'], ['⬢', '3D Modeling']
];

// ---- Helpers ----
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function $(id) { return document.getElementById(id); }
var uid = 0;

// ---- Chrome-style decorative SVG shapes ----
function flower(size, petals, cls) {
  var id = 'f' + (uid++), p = '';
  for (var i = 0; i < petals; i++) {
    p += '<ellipse cx="0" cy="-48" rx="22" ry="48" fill="url(#p' + id + ')" stroke="#eaf5ec" stroke-opacity=".35" stroke-width=".6" transform="rotate(' + (i * 360 / petals) + ')"/>';
  }
  return '<svg viewBox="-100 -100 200 200" width="' + size + '" height="' + size + '" class="chrome ' + cls + '" aria-hidden="true"><defs>' +
    '<linearGradient id="p' + id + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".35" stop-color="#9fb3a4"/><stop offset=".58" stop-color="#14231a"/><stop offset=".82" stop-color="#dcebdf"/><stop offset="1" stop-color="#39F52B" stop-opacity=".8"/></linearGradient>' +
    '<radialGradient id="c' + id + '"><stop offset="0" stop-color="#fff"/><stop offset=".55" stop-color="#7d9082"/><stop offset="1" stop-color="#0d1a11"/></radialGradient></defs>' +
    p + '<circle r="22" fill="url(#c' + id + ')"/><circle r="8" fill="#39F52B"/></svg>';
}
function sphere(size, cls) {
  var id = 's' + (uid++);
  return '<svg viewBox="-50 -50 100 100" width="' + size + '" height="' + size + '" class="chrome ' + cls + '" aria-hidden="true"><defs><radialGradient id="' + id + '" cx=".35" cy=".3"><stop offset="0" stop-color="#fff"/><stop offset=".4" stop-color="#9fb3a4"/><stop offset=".75" stop-color="#102015"/><stop offset="1" stop-color="#39F52B" stop-opacity=".6"/></radialGradient></defs><circle r="46" fill="url(#' + id + ')"/></svg>';
}
function ring(size, cls) {
  var id = 'r' + (uid++);
  return '<svg viewBox="-100 -100 200 200" width="' + size + '" height="' + size + '" class="chrome ' + cls + '" aria-hidden="true"><defs><linearGradient id="' + id + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".4" stop-color="#223228"/><stop offset=".7" stop-color="#cfe0d3"/><stop offset="1" stop-color="#39F52B"/></linearGradient></defs><circle r="70" fill="none" stroke="url(#' + id + ')" stroke-width="26"/></svg>';
}

function social(items) {
  return items.map(function (i) { return '<a href="' + esc(i[1]) + '" target="_blank" rel="noopener noreferrer">' + esc(i[0]) + '</a>'; }).join('');
}

// ---- Render ----
var SOCIALS = [['LinkedIn', LINKS.linkedin], ['Behance', LINKS.behance], ['Fiverr', LINKS.fiverr], ['Email', LINKS.email]];

$('deco').innerHTML = flower(380, 8, 'f1 float') + flower(190, 6, 'f2 float slow') + ring(230, 'm1 float slow') + sphere(110, 'm2 float');
$('links').innerHTML = NAV.map(function (n) { return '<a href="#' + n.toLowerCase() + '" data-id="' + n.toLowerCase() + '">' + n.toUpperCase() + '</a>'; }).join('');
$('hero-social').innerHTML = social([SOCIALS[0], SOCIALS[1], SOCIALS[3]]);
$('footer-social').innerHTML = social(SOCIALS);
$('stats').innerHTML = STATS.map(function (s) { return '<div><b>' + esc(s[0]) + '</b><span>' + esc(s[1]) + '</span></div>'; }).join('');
$('skills-grid').innerHTML = SKILLS.map(function (s) {
  return '<div class="card"><h4>' + esc(s.title) + '</h4><div class="chips">' + s.items.map(function (i) { return '<span>' + esc(i) + '</span>'; }).join('') + '</div></div>';
}).join('');
$('timeline').innerHTML = EXPERIENCE.map(function (e) {
  return '<div class="tl"><i></i><h4>' + esc(e.role) + '</h4><small>' + esc(e.org) + '</small><ul>' + e.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul></div>';
}).join('');
$('projects-grid').innerHTML = PROJECTS.map(function (p) {
  var thumb = p.image ? '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + '"/>' : flower(110, 6, '') + '<em>Add your design image</em>';
  return '<a class="card proj" href="' + esc(p.url) + '" target="_blank" rel="noopener noreferrer"><div class="thumb">' + thumb + '</div><small>' + esc(p.tag) + '</small><h4>' + esc(p.title) + '</h4><p>' + esc(p.desc) + '</p><span class="more">VIEW PROJECT ↗</span></a>';
}).join('');
$('behance-all').href = LINKS.behance;
$('services-grid').innerHTML = SERVICES.map(function (s) { return '<div class="card svc"><span>' + s[0] + '</span><h4>' + esc(s[1]) + '</h4></div>'; }).join('');
$('clist').innerHTML =
  '<li><b>Email</b><a href="' + esc(LINKS.email) + '">' + esc(EMAIL) + '</a></li>' +
  '<li><b>LinkedIn</b><a href="' + esc(LINKS.linkedin) + '" target="_blank" rel="noopener noreferrer">linkedin.com/in/maheenarshad</a></li>' +
  '<li><b>Behance</b><a href="' + esc(LINKS.behance) + '" target="_blank" rel="noopener noreferrer">behance.net/maheenabbasi4</a></li>' +
  '<li><b>Fiverr</b><a href="' + esc(LINKS.fiverr) + '" target="_blank" rel="noopener noreferrer">fiverr.com/s/18DxyK</a></li>';

// ---- Clock ----
function tick() { $('clock').textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }); }
tick(); setInterval(tick, 1000);

// ---- Mobile menu ----
var links = $('links'), burger = $('burger');
burger.addEventListener('click', function () {
  var open = links.classList.toggle('open');
  burger.innerHTML = open ? '&#10005;' : '&#9776;';
});
links.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') { links.classList.remove('open'); burger.innerHTML = '&#9776;'; }
});

// ---- Active nav link on scroll ----
if ('IntersectionObserver' in window) {
  var o = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      [].forEach.call(links.querySelectorAll('a'), function (a) { a.classList.toggle('on', a.dataset.id === e.target.id); });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  NAV.forEach(function (n) { var el = $(n.toLowerCase()); if (el) o.observe(el); });
  links.querySelector('a').classList.add('on');
}

// ---- Contact form ----
var statusEl = $('status');
$('form').addEventListener('submit', function (e) {
  e.preventDefault();
  var form = e.target, f = {};
  new FormData(form).forEach(function (v, k) { f[k] = v; });
  if (FORM_ENDPOINT) {
    statusEl.textContent = 'Sending...';
    fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(f) })
      .then(function (r) { statusEl.textContent = r.ok ? 'Thank you! Your message was sent.' : 'Something went wrong. Please email me directly.'; if (r.ok) form.reset(); })
      .catch(function () { statusEl.textContent = 'Something went wrong. Please email me directly.'; });
  } else {
    statusEl.textContent = 'Opening your email app...';
    window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(f.subject) + '&body=' + encodeURIComponent(f.message + '\n\n' + f.name + ' (' + f.email + ')');
  }
});
