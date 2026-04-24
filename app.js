const listings = [
  {
    id: 'fruitmarket-ilana-halperin-2026',
    title: 'Ilana Halperin: What is Us and What is Earth',
    kind: 'exhibitions',
    type: 'Exhibition',
    venue: 'Fruitmarket',
    area: 'Old Town',
    start: '2026-02-27T11:00:00',
    end: '2026-05-17T18:00:00',
    price: 'Free',
    description: 'A major exhibition of sculpture, drawing and photography connecting human experience with geological time.',
    sourceName: 'Fruitmarket',
    sourceUrl: 'https://www.fruitmarket.co.uk/event/ilana-halperin/',
    tags: ['free', 'visual art', 'sculpture', 'quiet']
  },
  {
    id: 'collective-paloma-proudfoot-2026',
    title: 'Paloma Proudfoot: Glass Delusion',
    kind: 'exhibitions',
    type: 'Exhibition',
    venue: 'Collective',
    area: 'Calton Hill',
    start: '2026-03-06T10:00:00',
    end: '2026-05-24T17:00:00',
    price: 'Free',
    description: 'New sculpture and installation work shown in Collective’s City Dome Gallery on Calton Hill.',
    sourceName: 'Collective',
    sourceUrl: 'https://www.collective-edinburgh.art/programme/paloma-proudfoot',
    tags: ['free', 'installation', 'sculpture', 'quiet']
  },
  {
    id: 'fruitmarket-night-walk-edinburgh',
    title: 'Night Walk for Edinburgh',
    kind: 'exhibitions',
    type: 'Audio walk',
    venue: 'Fruitmarket',
    area: 'Old Town',
    start: '2026-01-05T18:00:00',
    end: '2029-01-04T23:00:00',
    price: 'Free',
    description: 'A self-guided audio and film walk through Edinburgh’s closes and backstreets.',
    sourceName: 'Fruitmarket',
    sourceUrl: 'https://www.fruitmarket.co.uk/event/night-walk-for-edinburgh-2/',
    tags: ['free', 'audio walk', 'evening', 'outdoors']
  },
  {
    id: 'collective-play-sunday',
    title: 'Play Sunday',
    kind: 'opening',
    type: 'Family event',
    venue: 'Collective',
    area: 'Calton Hill',
    start: '2026-05-03T13:00:00',
    end: '2026-05-03T16:00:00',
    price: 'Free',
    description: 'A free family making session with clay and puppetry in response to the current exhibition.',
    sourceName: 'Collective',
    sourceUrl: 'https://www.collective-edinburgh.art/programme/play-sunday-paloma',
    tags: ['free', 'family', 'workshop', 'afternoon']
  },
  {
    id: 'dovecot-studios',
    title: 'Dovecot Studios',
    kind: 'galleries',
    type: 'Gallery',
    venue: 'Dovecot Studios',
    area: 'Old Town',
    start: '2026-01-01T10:00:00',
    end: '2026-12-31T17:00:00',
    price: 'Varies',
    description: 'A tapestry studio and gallery space with exhibitions, textiles, design-led shows and a city-centre cafe.',
    sourceName: 'Dovecot Studios',
    sourceUrl: 'https://dovecotstudios.com/',
    tags: ['gallery', 'textiles', 'design', 'cafe']
  },
  {
    id: 'stills-centre',
    title: 'Stills Centre for Photography',
    kind: 'galleries',
    type: 'Gallery',
    venue: 'Stills',
    area: 'Old Town',
    start: '2026-01-01T11:00:00',
    end: '2026-12-31T18:00:00',
    price: 'Free',
    description: 'A photography gallery and production centre on Cockburn Street with exhibitions, courses and facilities.',
    sourceName: 'Stills',
    sourceUrl: 'https://www.stills.org/',
    tags: ['free', 'photography', 'gallery', 'courses']
  },
  {
    id: 'summerhall-gallery',
    title: 'Summerhall',
    kind: 'galleries',
    type: 'Arts venue',
    venue: 'Summerhall',
    area: 'Southside',
    start: '2026-01-01T10:00:00',
    end: '2026-12-31T22:00:00',
    price: 'Varies',
    description: 'A major multi-arts venue with exhibitions, studios, performance, festivals and a busy evening programme.',
    sourceName: 'Summerhall',
    sourceUrl: 'https://www.summerhall.co.uk/',
    tags: ['gallery', 'evening', 'festival', 'bar']
  },
  {
    id: 'edinburgh-printmakers',
    title: 'Edinburgh Printmakers',
    kind: 'galleries',
    type: 'Print studio',
    venue: 'Edinburgh Printmakers',
    area: 'Leith',
    start: '2026-01-01T10:00:00',
    end: '2026-12-31T18:00:00',
    price: 'Free',
    description: 'A printmaking studio, gallery, shop and cafe in Fountainbridge with exhibitions and artist editions.',
    sourceName: 'Edinburgh Printmakers',
    sourceUrl: 'https://edinburghprintmakers.co.uk/',
    tags: ['free', 'printmaking', 'gallery', 'shop']
  }
];

const routes = [
  { title: 'Old Town art hour', time: '60 to 90 minutes', emoji: '🖼️', description: 'A compact route for visitors who want a strong art hit without crossing the city.', stops: ['Fruitmarket', 'Stills', 'Dovecot Studios'], tags: ['central', 'walking', 'tourist friendly'] },
  { title: 'Calton Hill slow route', time: 'Half day', emoji: '🌿', description: 'A quieter route built around views, galleries and enough breathing room to actually look properly.', stops: ['Collective', 'Calton Hill', 'Old Town cafe stop'], tags: ['quiet', 'views', 'free'] },
  { title: 'Festival survival route', time: 'Flexible', emoji: '✨', description: 'Designed for August: fewer tabs, clearer choices, and a walkable route instead of an overwhelming list.', stops: ['Start near Waverley', 'Choose two major venues', 'Add one artist-run space'], tags: ['festival', 'easy plan', 'low stress'] }
];

const state = { view: 'all', area: 'all', search: '', chip: 'all' };

const viewFilter = document.querySelector('#viewFilter');
const areaFilter = document.querySelector('#areaFilter');
const searchFilter = document.querySelector('#searchFilter');
const listingsGrid = document.querySelector('#listingsGrid');
const listingCount = document.querySelector('#listingCount');
const venueCount = document.querySelector('#venueCount');
const venueCountHero = document.querySelector('#venueCountHero');
const areaCount = document.querySelector('#areaCount');
const todayCount = document.querySelector('#todayCount');
const listingTemplate = document.querySelector('#listingTemplate');
const routeTemplate = document.querySelector('#routeTemplate');
const routeGrid = document.querySelector('#routeGrid');
const chipButtons = [...document.querySelectorAll('[data-chip]')];
const jumpLinks = [...document.querySelectorAll('[data-jump-view], [data-jump-chip]')];

function activeListings() {
  const now = new Date();
  return listings.filter((item) => new Date(item.end) >= now).sort((a, b) => new Date(a.start) - new Date(b.start));
}

function visibleListings() {
  const query = state.search.trim().toLowerCase();
  return activeListings().filter((item) => {
    if (state.view !== 'all' && item.kind !== state.view) return false;
    if (state.area !== 'all' && item.area !== state.area) return false;
    if (state.chip !== 'all' && !item.tags.includes(state.chip)) return false;
    const haystack = [item.title, item.type, item.venue, item.area, item.description, ...item.tags].join(' ').toLowerCase();
    return !query || haystack.includes(query);
  });
}

function formatDate(item) {
  const now = new Date();
  const start = new Date(item.start);
  const end = new Date(item.end);
  const day = new Intl.DateTimeFormat('en-GB', { day: '2-digit' });
  const month = new Intl.DateTimeFormat('en-GB', { month: 'short' });
  const longDate = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long' });
  const ongoing = start <= now && now <= end;
  return { day: ongoing ? day.format(end) : day.format(start), month: ongoing ? month.format(end) : month.format(start), meta: ongoing ? `Ongoing until ${longDate.format(end)}` : `From ${longDate.format(start)}` };
}

function listingVisual(item) {
  if (item.kind === 'galleries') return { emoji: '🏛️', label: 'Gallery' };
  if (item.kind === 'opening') return { emoji: item.tags.includes('family') ? '🧸' : '🥂', label: 'Event' };
  if (item.tags.includes('audio walk')) return { emoji: '🎧', label: 'Explore' };
  if (item.tags.includes('photography')) return { emoji: '📷', label: 'Photo' };
  if (item.tags.includes('sculpture')) return { emoji: '🗿', label: 'Show' };
  return { emoji: '🖼️', label: 'See it' };
}

function calendarDate(value) {
  const [date, time = '00:00:00'] = value.split('T');
  return `${date.replaceAll('-', '')}T${time.replaceAll(':', '')}`;
}

function calendarUrl(item) {
  const params = new URLSearchParams({ action: 'TEMPLATE', text: `${item.title} at ${item.venue}`, dates: `${calendarDate(item.start)}/${calendarDate(item.end)}`, details: `${item.description}\n\nSource: ${item.sourceUrl}`, location: `${item.venue}, Edinburgh`, ctz: 'Europe/London', sf: 'true', output: 'xml' });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function populateAreas() {
  const areas = [...new Set(activeListings().map((item) => item.area))].sort();
  areaFilter.innerHTML = '<option value="all">All areas</option>';
  areas.forEach((area) => areaFilter.append(new Option(area, area)));
}

function setChip(chipValue) {
  state.chip = chipValue;
  chipButtons.forEach((chip) => chip.classList.toggle('is-active', chip.dataset.chip === chipValue));
}

function renderListings() {
  const items = visibleListings();
  const active = activeListings();
  listingsGrid.innerHTML = '';
  listingCount.textContent = String(items.length);
  venueCount.textContent = String(new Set(items.map((item) => item.venue)).size);
  venueCountHero.textContent = String(new Set(active.map((item) => item.venue)).size);
  areaCount.textContent = String(new Set(items.map((item) => item.area)).size);
  todayCount.textContent = String(active.length);

  if (!items.length) {
    listingsGrid.innerHTML = '<section class="empty-state"><h3>No listings match this view.</h3><p>Try clearing the search, changing area, or switching back to all listings.</p></section>';
    return;
  }

  items.forEach((item) => {
    const node = listingTemplate.content.cloneNode(true);
    const date = formatDate(item);
    const visual = listingVisual(item);
    node.querySelector('.listing-day').textContent = date.day;
    node.querySelector('.listing-month').textContent = date.month;
    node.querySelector('.listing-emoji').textContent = visual.emoji;
    node.querySelector('.listing-label').textContent = visual.label;
    node.querySelector('.listing-type').textContent = item.type;
    node.querySelector('.listing-price').textContent = item.price;
    node.querySelector('.listing-title').textContent = item.title;
    node.querySelector('.listing-meta').textContent = `${date.meta} / ${item.venue} / ${item.area}`;
    node.querySelector('.listing-description').textContent = item.description;
    const tags = node.querySelector('.listing-tags');
    item.tags.slice(0, 4).forEach((tag) => { const pill = document.createElement('span'); pill.textContent = tag; tags.append(pill); });
    const source = node.querySelector('.source-link');
    source.href = item.sourceUrl;
    source.textContent = `Open ${item.sourceName}`;
    node.querySelector('.calendar-link').href = calendarUrl(item);
    listingsGrid.append(node);
  });
}

function renderRoutes() {
  routeGrid.innerHTML = '';
  routes.forEach((route) => {
    const node = routeTemplate.content.cloneNode(true);
    node.querySelector('.route-emoji').textContent = route.emoji;
    node.querySelector('.route-time').textContent = route.time;
    node.querySelector('h3').textContent = route.title;
    node.querySelector('p').textContent = route.description;
    const list = node.querySelector('ol');
    route.stops.forEach((stop) => { const li = document.createElement('li'); li.textContent = stop; list.append(li); });
    const tags = node.querySelector('.route-tags');
    route.tags.forEach((tag) => { const pill = document.createElement('span'); pill.textContent = tag; tags.append(pill); });
    routeGrid.append(node);
  });
}

function bindEvents() {
  viewFilter.addEventListener('change', (event) => { state.view = event.target.value; renderListings(); });
  areaFilter.addEventListener('change', (event) => { state.area = event.target.value; renderListings(); });
  searchFilter.addEventListener('input', (event) => { state.search = event.target.value; renderListings(); });
  chipButtons.forEach((button) => button.addEventListener('click', () => { setChip(button.dataset.chip); renderListings(); }));
  jumpLinks.forEach((link) => link.addEventListener('click', () => {
    if (link.dataset.jumpView) viewFilter.value = state.view = link.dataset.jumpView;
    if (link.dataset.jumpChip) setChip(link.dataset.jumpChip);
    renderListings();
  }));
}

populateAreas();
renderListings();
renderRoutes();
bindEvents();
