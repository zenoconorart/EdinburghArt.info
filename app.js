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
    priceBand: 'free',
    description: 'Sculpture, drawing and photography connecting human experience with geological time.',
    sourceName: 'Fruitmarket',
    sourceUrl: 'https://www.fruitmarket.co.uk/event/ilana-halperin/',
    tags: ['free', 'visual art', 'sculpture', 'quiet']
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
    priceBand: 'free',
    description: 'A self-guided audio and film walk through Edinburgh’s closes and backstreets.',
    sourceName: 'Fruitmarket',
    sourceUrl: 'https://www.fruitmarket.co.uk/event/night-walk-for-edinburgh-2/',
    tags: ['free', 'audio walk', 'evening', 'outdoors']
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
    priceBand: 'free',
    description: 'Sculpture and installation work shown in Collective’s City Dome Gallery on Calton Hill.',
    sourceName: 'Collective',
    sourceUrl: 'https://www.collective-edinburgh.art/programme/paloma-proudfoot',
    tags: ['free', 'installation', 'sculpture', 'quiet']
  },
  {
    id: 'national-galleries-andy-warhol',
    title: 'Andy Warhol: Pop Power',
    kind: 'exhibitions',
    type: 'Exhibition',
    venue: 'Modern Two',
    area: 'West End',
    start: '2026-01-31T10:00:00',
    end: '2026-05-31T17:00:00',
    price: 'Paid, see source',
    priceBand: 'paid',
    description: 'Pop art, celebrity imagery and culture at National Galleries of Scotland.',
    sourceName: 'National Galleries of Scotland',
    sourceUrl: 'https://www.nationalgalleries.org/',
    tags: ['paid', 'modern art', 'pop art', 'quiet']
  },
  {
    id: 'royal-scottish-academy-annual-exhibition-2026',
    title: 'RSA Annual Exhibition 2026',
    kind: 'exhibitions',
    type: 'Exhibition',
    venue: 'Royal Scottish Academy',
    area: 'New Town',
    start: '2026-04-05T10:00:00',
    end: '2026-04-26T17:00:00',
    price: 'Free, donations welcome',
    priceBand: 'free',
    description: 'The RSA’s annual showcase of contemporary art and architecture from Scotland.',
    sourceName: 'Royal Scottish Academy',
    sourceUrl: 'https://www.royalscottishacademy.org/',
    tags: ['free', 'painting', 'architecture', 'visual art']
  },
  {
    id: 'summerhall-born-again-2026',
    title: 'Rachael House: Born Again Bambi',
    kind: 'exhibitions',
    type: 'Exhibition',
    venue: 'Summerhall',
    area: 'Southside',
    start: '2026-04-18T10:00:00',
    end: '2026-05-24T18:00:00',
    price: 'Free',
    priceBand: 'free',
    description: 'A lively visual art exhibition at Summerhall.',
    sourceName: 'Summerhall',
    sourceUrl: 'https://www.summerhall.co.uk/',
    tags: ['free', 'visual art', 'queer art', 'gallery']
  },
  {
    id: 'dovecot-belongings-modern-alchemy-2026',
    title: 'Belongings & Modern Alchemy',
    kind: 'exhibitions',
    type: 'Exhibition',
    venue: 'Dovecot Studios',
    area: 'Old Town',
    start: '2026-04-03T10:00:00',
    end: '2026-06-28T17:00:00',
    price: 'See source',
    priceBand: 'varies',
    description: 'Craft, identity, textile practice and contemporary making at Dovecot Studios.',
    sourceName: 'Dovecot Studios',
    sourceUrl: 'https://dovecotstudios.com/',
    tags: ['textiles', 'design', 'craft', 'quiet']
  },
  {
    id: 'ingleby-callum-innes-2026',
    title: 'Callum Innes: New Paintings',
    kind: 'exhibitions',
    type: 'Exhibition',
    venue: 'Ingleby Gallery',
    area: 'New Town',
    start: '2026-03-21T10:00:00',
    end: '2026-06-06T17:00:00',
    price: 'Free',
    priceBand: 'free',
    description: 'A focused contemporary painting exhibition at Ingleby Gallery.',
    sourceName: 'Ingleby Gallery',
    sourceUrl: 'https://www.inglebygallery.com/',
    tags: ['free', 'painting', 'contemporary art', 'quiet']
  },
  {
    id: 'jupiter-artland-vanessa-2026',
    title: 'Vanessa Billy: we become a changing light',
    kind: 'exhibitions',
    type: 'Exhibition',
    venue: 'Jupiter Artland',
    area: 'West Edinburgh',
    start: '2026-04-11T10:00:00',
    end: '2026-07-26T17:00:00',
    price: 'Paid, see source',
    priceBand: 'paid',
    description: 'A seasonal exhibition alongside Jupiter Artland’s sculpture park programme.',
    sourceName: 'Jupiter Artland',
    sourceUrl: 'https://www.jupiterartland.org/',
    tags: ['paid', 'sculpture', 'outdoors', 'family']
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
    priceBand: 'free',
    description: 'A free family making session with clay and puppetry.',
    sourceName: 'Collective',
    sourceUrl: 'https://www.collective-edinburgh.art/programme/play-sunday-paloma',
    tags: ['free', 'family', 'workshop', 'afternoon']
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
    priceBand: 'free',
    description: 'Photography gallery and production centre on Cockburn Street.',
    sourceName: 'Stills',
    sourceUrl: 'https://www.stills.org/',
    tags: ['free', 'photography', 'gallery', 'courses']
  },
  {
    id: 'edinburgh-printmakers',
    title: 'Edinburgh Printmakers',
    kind: 'galleries',
    type: 'Print studio',
    venue: 'Edinburgh Printmakers',
    area: 'Fountainbridge',
    start: '2026-01-01T10:00:00',
    end: '2026-12-31T18:00:00',
    price: 'Free',
    priceBand: 'free',
    description: 'Printmaking studio, gallery, shop and cafe in Fountainbridge.',
    sourceName: 'Edinburgh Printmakers',
    sourceUrl: 'https://edinburghprintmakers.co.uk/',
    tags: ['free', 'printmaking', 'gallery', 'shop']
  }
];

const state = { view: 'exhibitions', time: 'now', price: 'all', area: 'all', venue: 'all', tag: 'all', search: '' };

const viewFilter = document.querySelector('#viewFilter');
const timeFilter = document.querySelector('#timeFilter');
const priceFilter = document.querySelector('#priceFilter');
const areaFilter = document.querySelector('#areaFilter');
const venueFilter = document.querySelector('#venueFilter');
const tagFilter = document.querySelector('#tagFilter');
const searchFilter = document.querySelector('#searchFilter');
const listingsGrid = document.querySelector('#listingsGrid');
const listingCount = document.querySelector('#listingCount');
const venueCount = document.querySelector('#venueCount');
const areaCount = document.querySelector('#areaCount');
const todayCount = document.querySelector('#todayCount');
const listingTemplate = document.querySelector('#listingTemplate');
const visualTiles = [...document.querySelectorAll('[data-view-tab], [data-price-tab], [data-tag-tab]')];

function isHappeningNow(item) {
  const now = new Date();
  return new Date(item.start) <= now && now <= new Date(item.end);
}

function activeListings() {
  return listings.filter((item) => new Date(item.end) >= new Date()).sort((a, b) => new Date(a.start) - new Date(b.start));
}

function timeMatches(item) {
  if (state.time === 'now') return isHappeningNow(item);
  if (state.time === 'upcoming') return new Date(item.start) > new Date();
  return new Date(item.end) >= new Date();
}

function priceMatches(item) {
  if (state.price === 'all') return true;
  if (state.price === 'under10') return item.priceBand === 'free' || item.priceBand === 'under10';
  return item.priceBand === state.price;
}

function visibleListings() {
  const query = state.search.trim().toLowerCase();
  return activeListings().filter((item) => {
    if (state.view !== 'all' && item.kind !== state.view) return false;
    if (!timeMatches(item)) return false;
    if (!priceMatches(item)) return false;
    if (state.area !== 'all' && item.area !== state.area) return false;
    if (state.venue !== 'all' && item.venue !== state.venue) return false;
    if (state.tag !== 'all' && !item.tags.includes(state.tag)) return false;
    const haystack = [item.title, item.type, item.venue, item.area, item.price, item.description, ...item.tags].join(' ').toLowerCase();
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
  return {
    day: ongoing ? day.format(end) : day.format(start),
    month: ongoing ? month.format(end) : month.format(start),
    meta: ongoing ? `Until ${longDate.format(end)}` : `From ${longDate.format(start)}`
  };
}

function listingVisual(item) {
  if (item.kind === 'galleries') return { emoji: '🏛️' };
  if (item.kind === 'opening') return { emoji: item.tags.includes('family') ? '🧸' : '🥂' };
  if (item.tags.includes('audio walk')) return { emoji: '🎧' };
  if (item.tags.includes('photography')) return { emoji: '📷' };
  if (item.tags.includes('sculpture')) return { emoji: '🗿' };
  if (item.tags.includes('painting')) return { emoji: '🎨' };
  return { emoji: '🖼️' };
}

function calendarDate(value) {
  const [date, time = '00:00:00'] = value.split('T');
  return `${date.replaceAll('-', '')}T${time.replaceAll(':', '')}`;
}

function calendarUrl(item) {
  const visual = listingVisual(item);
  const title = `${visual.emoji} ${item.title} at ${item.venue}`;
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${calendarDate(item.start)}/${calendarDate(item.end)}`,
    details: `${item.description}\n\nSaved from Edinburgh Arts Info.\nOfficial source: ${item.sourceUrl}`,
    location: `${item.venue}, Edinburgh`,
    ctz: 'Europe/London',
    sf: 'true',
    output: 'xml'
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function fillSelect(select, values, firstLabel) {
  const current = select.value || 'all';
  select.innerHTML = `<option value="all">${firstLabel}</option>`;
  values.forEach((value) => select.append(new Option(value, value)));
  select.value = values.includes(current) ? current : 'all';
}

function populateDynamicFilters() {
  const current = activeListings().filter((item) => state.view === 'all' || item.kind === state.view);
  const areas = [...new Set(current.map((item) => item.area))].sort();
  const venues = [...new Set(current.map((item) => item.venue))].sort();
  fillSelect(areaFilter, areas, 'All areas');
  fillSelect(venueFilter, venues, 'All venues');
  state.area = areaFilter.value;
  state.venue = venueFilter.value;
}

function setTileActive(activeTile = null) {
  visualTiles.forEach((tile) => tile.classList.toggle('is-active', tile === activeTile));
}

function renderListings() {
  const items = visibleListings();
  const nowItems = activeListings().filter((item) => item.kind === 'exhibitions' && isHappeningNow(item));
  listingsGrid.innerHTML = '';
  listingCount.textContent = String(items.length);
  venueCount.textContent = String(new Set(items.map((item) => item.venue)).size);
  areaCount.textContent = String(new Set(items.map((item) => item.area)).size);
  todayCount.textContent = String(nowItems.length);

  if (!items.length) {
    listingsGrid.innerHTML = '<section class="empty-state"><h2>No results</h2><p>Try clearing search, changing price, or setting When to now and upcoming.</p></section>';
    return;
  }

  items.forEach((item) => {
    const node = listingTemplate.content.cloneNode(true);
    const date = formatDate(item);
    const visual = listingVisual(item);
    node.querySelector('.event-day').textContent = date.day;
    node.querySelector('.event-month').textContent = date.month;
    node.querySelector('.event-emoji').textContent = visual.emoji;
    node.querySelector('.event-title').textContent = item.title;
    node.querySelector('.event-meta').textContent = `${date.meta} • ${item.venue} • ${item.area}`;
    node.querySelector('.event-description').textContent = item.description;
    node.querySelector('.event-price').textContent = item.price;
    const source = node.querySelector('.source-link');
    source.href = item.sourceUrl;
    source.textContent = item.sourceName;
    node.querySelector('.calendar-link').href = calendarUrl(item);
    listingsGrid.append(node);
  });
}

function renderPage() {
  populateDynamicFilters();
  renderListings();
}

function bindEvents() {
  viewFilter.addEventListener('change', (event) => { state.view = event.target.value; setTileActive(); renderPage(); });
  timeFilter.addEventListener('change', (event) => { state.time = event.target.value; renderListings(); });
  priceFilter.addEventListener('change', (event) => { state.price = event.target.value; setTileActive(); renderListings(); });
  areaFilter.addEventListener('change', (event) => { state.area = event.target.value; renderListings(); });
  venueFilter.addEventListener('change', (event) => { state.venue = event.target.value; renderListings(); });
  tagFilter.addEventListener('change', (event) => { state.tag = event.target.value; setTileActive(); renderListings(); });
  searchFilter.addEventListener('input', (event) => { state.search = event.target.value; renderListings(); });
  visualTiles.forEach((tile) => tile.addEventListener('click', () => {
    state.view = tile.dataset.viewTab || 'all';
    state.price = tile.dataset.priceTab || 'all';
    state.tag = tile.dataset.tagTab || 'all';
    viewFilter.value = state.view;
    priceFilter.value = state.price;
    tagFilter.value = state.tag;
    setTileActive(tile);
    renderPage();
  }));
}

renderPage();
bindEvents();
