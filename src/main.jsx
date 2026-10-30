import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const properties = [
  { id: 1, name: 'Kumbh Riverside Residency', location: 'Nashik City', category: 'Premium hotels', price: 3890, rating: 4.8, reviews: 124, desc: 'A calm, light-filled base near the Godavari with generous common spaces and easy city access.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1100&q=85', amenities: ['Wi-Fi', 'AC', 'Breakfast'], capacity: 3, room: 'River View King Room' },
  { id: 2, name: 'Trimbak Valley Retreat', location: 'Trimbakeshwar', category: 'Premium hotels', price: 5290, rating: 4.9, reviews: 87, desc: 'A considered retreat framed by green hills, designed for slower mornings and longer conversations.', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1100&q=85', amenities: ['Wi-Fi', 'Parking', 'Family friendly'], capacity: 4, room: 'Valley Cottage' },
  { id: 3, name: 'Panchavati Comfort Inn', location: 'Panchavati / Ramkund', category: 'Budget hotels', price: 1790, rating: 4.5, reviews: 208, desc: 'Simple, welcoming rooms close to the old city, with everything you need for a restful stay.', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1100&q=85', amenities: ['Wi-Fi', 'Hot water', 'Attached bath'], capacity: 2, room: 'Comfort Double' },
  { id: 4, name: 'Godavari Heritage Homestay', location: 'Ramkund area', category: 'Homestays', price: 2490, rating: 4.7, reviews: 61, desc: 'A warm family-run home with a terrace, local breakfast and the feeling of being expected.', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1100&q=85', amenities: ['Breakfast', 'Family friendly', 'Parking'], capacity: 3, room: 'Garden Suite' },
  { id: 5, name: 'Nashik Road Budget Lodge', location: 'Nashik Road', category: 'Budget hotels', price: 990, rating: 4.2, reviews: 159, desc: 'A practical, well-connected stop for value-minded travellers.', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1100&q=85', amenities: ['Wi-Fi', 'Hot water', '24h desk'], capacity: 2, room: 'Standard Room' },
  { id: 6, name: 'Sacred Valley Tent Stay', location: 'Trimbakeshwar', category: 'Tent stays', price: 2990, rating: 4.6, reviews: 45, desc: 'Airy canvas tents, shared fireside spaces and open skies.', image: 'https://images.unsplash.com/photo-1478827536114-da961b7f86d2?auto=format&fit=crop&w=1100&q=85', amenities: ['Parking', 'Breakfast', 'Family friendly'], capacity: 3, room: 'Deluxe Canvas Tent' },
  { id: 7, name: 'Gangapur Premium Suites', location: 'Gangapur Road', category: 'Premium hotels', price: 6490, rating: 4.8, reviews: 73, desc: 'Polished suites and wide balconies near the vineyards.', image: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1100&q=85', amenities: ['Wi-Fi', 'AC', 'Restaurant'], capacity: 4, room: 'Terrace Suite' },
  { id: 8, name: 'Pilgrim Family Dharamshala', location: 'Nashik City', category: 'Dharamshalas', price: 799, rating: 4.4, reviews: 92, desc: 'Clean, community-minded accommodation for groups.', image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1100&q=85', amenities: ['Attached bath', 'Family friendly', 'Hot water'], capacity: 6, room: 'Family Room' },
  { id: 9, name: 'Green Hills Resort', location: 'Surrounding Nashik', category: 'Premium hotels', price: 4490, rating: 4.7, reviews: 66, desc: 'A spacious countryside stay with gardens and room to reset.', image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1100&q=85', amenities: ['Parking', 'Restaurant', 'Family friendly'], capacity: 4, room: 'Garden Villa' },
  { id: 10, name: 'Kumbh Family Homestay', location: 'Trimbakeshwar', category: 'Homestays', price: 1590, rating: 4.6, reviews: 39, desc: 'A bright, easygoing home close to the town.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85', amenities: ['Wi-Fi', 'Breakfast', 'Parking'], capacity: 5, room: 'Family Loft' }
];

const categories = [
  ['Budget hotels', 'Simple comfort, thoughtfully priced', properties[7].image],
  ['Premium hotels', 'A little more room to exhale', properties[0].image],
  ['Homestays', 'Warm spaces with a local welcome', properties[3].image],
  ['Dharamshalas', 'Community-minded stays for every group', properties[2].image],
  ['Tent stays', 'Closer to the quiet of the outdoors', properties[5].image]
];

const locations = [
  ['Nashik City', 'The city, made easy', 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80'],
  ['Trimbakeshwar', 'Green, still and close to the source', 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80'],
  ['Panchavati / Ramkund', 'Old lanes, river light', 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80'],
  ['Nashik Road', 'Connected for easy arrivals', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'],
  ['Gangapur Road', 'A slower edge of the city', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80']
];

const money = (value) => `₹${value.toLocaleString('en-IN')}`;

function navigate(to) {
  if (to.startsWith('/kumbh')) {
    window.location.assign(to);
    return;
  }
  window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function usePath() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const update = () => setPath(window.location.pathname);
    window.addEventListener('popstate', update);
    return () => window.removeEventListener('popstate', update);
  }, []);
  return path;
}

function Link({ to, children, className = '', onClick }) {
  return <a className={className} href={to} onClick={(event) => { event.preventDefault(); onClick?.(); navigate(to); }}>{children}</a>;
}

function Brand() {
  return <Link to="/" className="brand"><span className="brand-mark">M</span><span className="brand-name">MahakumbhStays<small>Your stay for every sacred journey</small></span></Link>;
}

function Header({ announcement = 'Illustrative marketplace preview · Demo prices only' }) {
  return <OtaHeader />;
  const [open, setOpen] = useState(false);
  return <>
    <div className="announcement"><div className="shell"><span>◈</span> {announcement}</div></div>
    <header><div className="shell nav"><Brand />
      <nav className="nav-links"><Link to="/">Home</Link><Link to="/explore">Explore stays</Link><Link to="/kumbh">Kumbh 2027</Link><Link to="/partners">List your property</Link><Link to="/support">Support</Link></nav>
      <button className="menu" aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>☰</button>
      {open && <nav className="mobile-nav"><Link to="/" onClick={() => setOpen(false)}>Home</Link><Link to="/explore" onClick={() => setOpen(false)}>Explore stays</Link><Link to="/kumbh" onClick={() => setOpen(false)}>Kumbh 2027</Link><Link to="/partners" onClick={() => setOpen(false)}>List your property</Link><Link to="/support" onClick={() => setOpen(false)}>Support</Link></nav>}
    </div></header>
  </>;
}

function Footer() {
  return <footer><div className="shell"><div className="footer-row"><div><Brand /><p>A considered accommodation marketplace for the Nashik–Trimbakeshwar Kumbh 2027 journey.</p></div><div className="footer-links"><Link to="/explore">Explore stays</Link><Link to="/kumbh">Kumbh 2027</Link><Link to="/partners">For hosts</Link><Link to="/support">Support</Link></div></div><div className="legal"><span>© 2026 MahakumbhStays. Concept prototype.</span><span>Demo experience · No real bookings or payments</span></div></div></footer>;
}

function Toast({ message }) {
  return <div className={`toast ${message ? 'show' : ''}`}>{message}</div>;
}

function PropertyCard({ property }) {
  const [saved, setSaved] = useState(false);
  return <article className="property-card"><div className="property-photo"><img src={property.image} alt={property.name} loading="lazy" /><span className="demo-badge">Demo listing</span><span className="type-badge">{property.category}</span><button className={`heart-btn ${saved ? 'active' : ''}`} aria-label={`Save ${property.name}`} onClick={() => setSaved((value) => !value)}>{saved ? '♥' : '♡'}</button></div><div className="property-body"><div className="property-location">⌖ {property.location}</div><h3 className="property-name">{property.name}</h3><div className="rating"><b>★ {property.rating}</b> <span>Illustrative rating · {property.reviews} sample reviews</span></div><div className="amenities">{property.amenities.map((amenity) => <span key={amenity}>{amenity}</span>)}</div><div className="property-foot"><div className="price"><small>from</small><strong>{money(property.price)}</strong><small>per night · demo amount</small></div><Link to={`/property?id=${property.id}`} className="card-btn">View details →</Link></div></div></article>;
}

function Home() {
  const [destination, setDestination] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [toast, setToast] = useState('');
  const [groupSent, setGroupSent] = useState(false);
  const [savedEmail, setSavedEmail] = useState('');
  const today = new Date().toISOString().slice(0, 10);
  const submitSearch = (event) => {
    event.preventDefault();
    if (checkin && checkout && checkout <= checkin) { setToast('Please choose a check-out date after check-in'); return; }
    navigate(`/explore?destination=${encodeURIComponent(destination || 'Nashik')}`);
  };
  useEffect(() => { if (toast) { const timer = setTimeout(() => setToast(''), 3200); return () => clearTimeout(timer); } }, [toast]);
  return <><Header announcement="◈ A calmer way to plan your sacred journey · 2027 preview" /><main>
    <section className="home-hero"><div className="shell hero-grid"><div><div className="eyebrow">Nashik · Trimbakeshwar · Kumbh 2027</div><h1>Stay close to what brings you here.</h1><p>Thoughtful stays for a meaningful journey. Find a calm base, make room for your people, and let the days unfold with a little more ease.</p><form className="home-search" onSubmit={submitSearch}><div><label>Where are you going?</label><input value={destination} onChange={(event) => setDestination(event.target.value)} placeholder="Nashik, Trimbakeshwar…" /></div><div><label>Check in</label><input type="date" min={today} value={checkin} onChange={(event) => setCheckin(event.target.value)} /></div><div><label>Check out</label><input type="date" min={checkin || today} value={checkout} onChange={(event) => setCheckout(event.target.value)} /></div><div><label>Guests</label><select><option>2 guests · 1 room</option><option>4 guests · 2 rooms</option><option>6 guests · 3 rooms</option></select></div><button className="solid-btn" type="submit">Find a stay</button></form><div className="hero-note"><span>◈</span> Every listing is clearly marked as demo content.</div></div><div className="hero-card"><span>Made for the journey</span><strong>Room to pause.<br />Space to arrive.</strong><p>Browse a curated preview of stays around Nashik and Trimbakeshwar.</p><Link to="/kumbh" className="text-link light">Plan for Kumbh 2027 →</Link></div></div></section>
    <section className="section" id="explore"><div className="shell"><div className="section-head"><div><div className="eyebrow">Find your fit</div><h2>Stay your way</h2><p>From quiet homestays to group-friendly spaces, find the kind of comfort your journey calls for.</p></div><Link to="/explore" className="text-link">View all stays →</Link></div><div className="category-grid">{categories.map(([name, copy, image]) => <button className="category-card" key={name} onClick={() => navigate(`/explore?category=${encodeURIComponent(name)}`)}><img src={image} alt={name} loading="lazy" /><div className="category-copy"><h3>{name}</h3><p>{copy}</p></div></button>)}</div></div></section>
    <section className="section tinted"><div className="shell"><div className="section-head"><div><div className="eyebrow">A considered beginning</div><h2>Handpicked for your journey</h2><p>A small selection of illustrative stays to help you picture what MahakumbhStays can become.</p></div><Link to="/explore" className="text-link">Explore all demo stays →</Link></div><div className="property-grid">{properties.slice(0, 4).map((property) => <PropertyCard key={property.id} property={property} />)}</div></div></section>
    <section className="section"><div className="shell"><div className="section-head"><div><div className="eyebrow">Choose your base</div><h2>Places with a different pace</h2><p>Start with a location that fits the way you want to move through the day.</p></div></div><div className="location-grid">{locations.map(([name, copy, image]) => <button className="location-card" key={name} onClick={() => navigate(`/explore?destination=${encodeURIComponent(name)}`)}><img src={image} alt={name} loading="lazy" /><div className="location-copy"><h3>{name}</h3><p>{copy}</p></div></button>)}</div></div></section>
    <section className="section partner"><div className="shell partner-layout"><div className="partner-copy"><div className="eyebrow">For thoughtful hosts</div><h2>Welcome more guests to your place.</h2><p>Bring your property to a marketplace built around the people making the journey. Start with a conversation, not a complicated setup.</p><Link to="/partners" className="solid-btn">List your property</Link></div><div className="partner-art"><img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=700&q=80" alt="Warmly lit boutique room" /></div></div></section>
    <section className="section group-section"><div className="shell group-layout"><div><div className="eyebrow">Travelling together?</div><h2>Tell us what your group needs.</h2><p>Families, pilgrimage groups and organised tours often need a little more context. Share a few details and preview the kind of support the full marketplace could offer.</p></div><form className="group-form" onSubmit={(event) => { event.preventDefault(); setGroupSent(true); }}><input required placeholder="Your email address" type="email" value={savedEmail} onChange={(event) => setSavedEmail(event.target.value)} /><button className="solid-btn" type="submit">Start a group enquiry</button>{groupSent && <div className="success show">Thanks — your demo enquiry is ready for the next step.</div>}</form></div></section>
  </main><Footer /><Toast message={toast} /></>;
}

function Explore() {
  const query = new URLSearchParams(window.location.search);
  const [text, setText] = useState(query.get('destination') || '');
  const [category, setCategory] = useState(query.get('category') || 'all');
  const [sort, setSort] = useState('recommended');
  const [filters, setFilters] = useState([]);
  const [under, setUnder] = useState(false);
  const filtered = useMemo(() => {
    const q = text.toLowerCase().trim();
    const list = properties.filter((property) => (category === 'all' || property.category === category) && (!q || `${property.name} ${property.location} ${property.category}`.toLowerCase().includes(q)) && filters.every((filter) => property.amenities.includes(filter)) && (!under || property.price < 3000));
    return [...list].sort((a, b) => sort === 'low' ? a.price - b.price : sort === 'high' ? b.price - a.price : sort === 'rating' ? b.rating - a.rating : a.id - b.id);
  }, [text, category, sort, filters, under]);
  const toggleFilter = (value) => setFilters((items) => items.includes(value) ? items.filter((item) => item !== value) : [...items, value]);
  return <><Header /><main><section className="page-hero"><div className="shell"><div className="eyebrow">Explore the collection</div><h1>Find your place to pause.</h1><p>Browse illustrative stays across Nashik, Trimbakeshwar and the places in between. Every listing is marked as demo content.</p><form className="explore-search" onSubmit={(event) => event.preventDefault()}><input value={text} onChange={(event) => setText(event.target.value)} placeholder="Search destination or stay" /><select value={category} onChange={(event) => setCategory(event.target.value)}><option value="all">All stay types</option>{['Budget hotels', 'Premium hotels', 'Homestays', 'Dharamshalas', 'Tent stays'].map((type) => <option key={type}>{type}</option>)}</select><button className="solid-btn" type="submit">Search stays</button></form></div></section><section className="section"><div className="shell"><div className="toolbar"><div><div className="eyebrow">Curated demo stays</div><h2>{text ? `Stays near “${text}”` : category === 'all' ? 'All stays' : category}</h2><p>{filtered.length} sample {filtered.length === 1 ? 'property' : 'properties'} · demo prices only</p></div><select className="sort" value={sort} onChange={(event) => setSort(event.target.value)}><option value="recommended">Recommended</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="rating">Guest rating</option></select></div><div className="explore-layout"><aside className="filters"><h3>Refine your search</h3>{['AC', 'Wi-Fi', 'Parking', 'Family friendly'].map((filter) => <label className="filter" key={filter}>{filter}<input type="checkbox" checked={filters.includes(filter)} onChange={() => toggleFilter(filter)} /></label>)}<label className="filter">Under ₹3,000<input type="checkbox" checked={under} onChange={(event) => setUnder(event.target.checked)} /></label></aside><div className="result-grid">{filtered.length ? filtered.map((property) => <PropertyCard key={property.id} property={property} />) : <div className="empty-state"><h3>A quieter search</h3><p>No sample stays match those filters yet. Try another combination.</p></div>}</div></div></div></section></main><Footer /></>;
}

function Property() {
  const id = Number(new URLSearchParams(window.location.search).get('id')) || 1;
  const property = properties.find((item) => item.id === id) || properties[0];
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [toast, setToast] = useState('');
  const [step, setStep] = useState(0);
  const [confirmation, setConfirmation] = useState('');
  const submit = (event) => {
    event.preventDefault();
    if (!checkin || !checkout || checkout <= checkin) { setToast('Choose a check-out date after check-in'); return; }
    setStep(1);
  };
  useEffect(() => { document.title = `${property.name} — MahakumbhStays`; }, [property.name]);
  return <><Header announcement="◈ Demo property · Not available for real booking" /><main><section className="property-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(13,24,45,.88), rgba(13,24,45,.28)), url(${property.image})` }}><div className="shell"><div className="eyebrow">{property.category} · {property.location}</div><h1>{property.name}</h1></div></section><section className="section"><div className="shell property-layout"><article className="property-content"><span className="demo-badge static">Demo property · Not available for real booking</span><h2>Stay details</h2><p>{property.desc}</p><div className="details"><div><small>Illustrative rating</small><strong>★ {property.rating} · sample rating</strong></div><div><small>Room shown</small><strong>{property.room}</strong></div><div><small>Guest capacity</small><strong>Up to {property.capacity} people</strong></div></div><h2>What this stay includes</h2><div className="amenities">{property.amenities.map((amenity) => <span key={amenity}>{amenity}</span>)}</div><h2>A note about this preview</h2><p>This page demonstrates the intended property journey for MahakumbhStays. Images, rates, ratings and availability are illustrative sample content and are not bookable.</p></article><aside className="booking-card">{step === 0 ? <><h3>Plan this stay</h3><p>Preview the booking flow with an illustrative quote.</p><form onSubmit={submit}><label>Check in<input type="date" value={checkin} onChange={(event) => setCheckin(event.target.value)} /></label><label>Check out<input type="date" value={checkout} onChange={(event) => setCheckout(event.target.value)} /></label><label>Guests<select><option>2 guests · 1 room</option><option>4 guests · 2 rooms</option></select></label><div className="booking-price"><small>Illustrative from</small><strong>{money(property.price)} <small>/ night</small></strong></div><button className="solid-btn" type="submit">Continue to demo booking</button></form><div className="note">No real reservation or payment will be made.</div></> : !confirmation ? <><div className="eyebrow">Demo checkout · step 2 of 2</div><h3>Choose how to preview payment</h3><div className="demo-badge static">Demo payment — no real money will be charged</div><div className="booking-summary"><span>Stay<strong>{property.name}</strong></span><span>Dates<strong>2 nights · flexible demo</strong></span><span>Total<strong>{money(property.price * 2)}</strong></span></div><button className="outline-btn" onClick={() => setConfirmation(`MKS-DEMO-${Math.floor(100000 + Math.random() * 899999)}`)}>Simulate successful payment</button><button className="outline-btn" onClick={() => { setStep(0); setToast('Demo payment failed — booking remains unconfirmed'); }}>Simulate failed payment</button><button className="outline-btn" onClick={() => setStep(0)}>Cancel payment</button></> : <div className="confirmation"><div className="check">✓</div><div className="eyebrow">Demo confirmation</div><h3>Your journey is taking shape.</h3><p>Sample booking reference</p><strong>{confirmation}</strong><span className="demo-badge static">SAMPLE BOOKING · NOT VALID FOR CHECK-IN</span><p>{property.name}<br />Demo amount: {money(property.price * 2)}</p><button className="solid-btn" onClick={() => { setStep(0); setConfirmation(''); }}>Back to stay</button></div>}</aside></div></section></main><Footer /><Toast message={toast} /></>;
}

function Kumbh() {
  return <><Header announcement="◈ Kumbh 2027 planning guide · Start with the essentials" /><main><section className="kumbh-hero"><div className="shell"><div className="eyebrow">A clearer way to begin</div><h1>Make space for the journey.</h1><p>A thoughtful planning guide for families, groups and independent travellers heading to Nashik and Trimbakeshwar.</p><Link to="/explore" className="solid-btn">Explore demo stays</Link></div></section><section className="section"><div className="shell two-column"><div><div className="eyebrow">Plan with your people</div><h2>Plan around your people and your pace.</h2><p>Whether you are travelling with family, elders, friends or a larger group, the right base can make a long day feel lighter. Explore sample stays by location, style and budget, then use the planning journey below as a guide.</p><div className="timeline">{[['01', 'Choose your base', 'Nashik city for connections, Trimbakeshwar for a slower edge, or somewhere between.'], ['02', 'Think about your group', 'Make space for room preferences, accessibility needs and the way your group rests.'], ['03', 'Compare the details', 'Look at location, amenities, illustrative pricing and what matters most to you.']].map(([number, title, copy]) => <div className="timeline-step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div><aside className="aside-stack"><div className="callout"><h3>Start with a place to stay.</h3><p>Browse the illustrative collection and imagine what your arrival could feel like.</p><Link to="/explore" className="solid-btn">Explore demo stays</Link></div><div className="aside-note"><span>Planning note</span><strong>Keep the essentials close.</strong><p>Search by location, then compare rooms, accessibility and group fit before choosing.</p></div></aside></div></section></main><Footer /></>;
}

function Partners() {
  const [sent, setSent] = useState(false);
  return <><Header announcement="◈ Partner onboarding preview · Demo form only" /><main><section className="page-hero"><div className="shell"><div className="eyebrow">For thoughtful hosts</div><h1>Let your place become part of someone’s journey.</h1><p>Share your property with travellers looking for a considered base around Nashik and Trimbakeshwar.</p></div></section><section className="section"><div className="shell partner-page"><div><div className="eyebrow">A better partner beginning</div><h2>Bring your hospitality to a marketplace with context.</h2><p>MahakumbhStays is being designed to help hosts present what makes their place work for real travellers: the rooms, the rhythm, the location and the details that matter.</p><ul className="benefits"><li>Reach families, groups and independent travellers</li><li>Present your rooms with clarity and warmth</li><li>Keep onboarding, verification and publishing separate</li><li>Build toward a partner dashboard over time</li></ul></div><form className="form-card" onSubmit={(event) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); }}><h2>Tell us about your property</h2><div className="form-fields"><label>Your name<input required placeholder="Full name" /></label><label>Property name<input required placeholder="Property or home name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>Mobile number<input required placeholder="10-digit mobile" /></label><label>Property type<select><option>Hotel</option><option>Homestay</option><option>Dharamshala</option><option>Resort</option><option>Tent stay</option></select></label><label>Location<select><option>Nashik City</option><option>Trimbakeshwar</option><option>Panchavati / Ramkund</option><option>Nearby area</option></select></label><label className="full">Tell us a little about the place<textarea placeholder="Rooms, amenities, group capacity, what makes it special…" /></label></div><button className="solid-btn" type="submit">Send partner enquiry</button><p className="note">Demo form only. Nothing is sent to an external service.</p>{sent && <div className="success show">Thanks — your partner enquiry is saved in this demo flow.</div>}</form></div></section></main><Footer /></>;
}

function Support() {
  const [open, setOpen] = useState(0);
  const [sent, setSent] = useState(false);
  const faqs = [['Are the current listings real?', 'This website is an illustrative product prototype. Property names, photos, ratings, prices and availability are sample content and are not available for real booking.'], ['Can I complete a real booking?', 'No. The checkout and payment steps are simulated and do not collect payment details or create a real reservation.'], ['How do I find a stay?', 'Open Explore stays, search by location or category, refine the results, and open any property for a details page.'], ['How can property owners join?', 'Use the List your property page to submit a demo enquiry. In the full product, onboarding, verification and publishing would be separate steps.'], ['Can I plan for a large group?', 'The homepage includes a group enquiry form, and the future marketplace would support families, pilgrimage groups and organised tours.']];
  return <><Header announcement="◈ Support preview · Here to make planning feel lighter" /><main><section className="page-hero"><div className="shell"><div className="eyebrow">Questions, answered</div><h1>Support for the journey ahead.</h1><p>Find the basics about this product preview, demo listings and the path from search to stay.</p></div></section><section className="section"><div className="shell support-wrap"><div className="eyebrow">Good to know</div><h2>Frequently asked questions</h2><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${open === index ? 'open' : ''}`} key={question}><button onClick={() => setOpen(open === index ? -1 : index)}>{question}<span>+</span></button>{open === index && <p>{answer}</p>}</div>)}</div><div className="contact-card"><div><div className="eyebrow">Still need a hand?</div><h2>Tell us what you’re planning.</h2><p>This form is a demo of the support and group-enquiry experience. Nothing is sent outside this browser.</p></div><form onSubmit={(event) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); }}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>How can we help?<textarea required placeholder="Tell us about your question or group…" /></label><button className="solid-btn" type="submit">Send demo enquiry</button>{sent && <div className="success show">Thanks — your demo enquiry is ready for the next step.</div>}</form></div><div className="legal-copy"><div><h3>Privacy preview</h3><p>This prototype does not send form data to an external service or collect real account information.</p></div><div><h3>Terms preview</h3><p>All content is illustrative. Demo properties, prices, ratings and booking references are not valid for check-in.</p></div><div><h3>Cancellation preview</h3><p>Because demo bookings are not real reservations, there is no real cancellation or refund process in this prototype.</p></div></div></div></section></main><Footer /></>;
}

function OtaHeader() {
  const [open, setOpen] = useState(false);
  const path = usePath();
  const [search, setSearch] = useState(window.location.search);
  useEffect(() => {
    const updateSearch = () => setSearch(window.location.search);
    window.addEventListener('popstate', updateSearch);
    return () => window.removeEventListener('popstate', updateSearch);
  }, []);
  useEffect(() => {
    const isDealsPage = path === '/explore' && new URLSearchParams(search).get('deal') === '1';
    document.querySelectorAll('.ota-links a').forEach((link) => {
      const target = link.getAttribute('href');
      const active = target === '/explore'
        ? path === '/' || (path === '/explore' && !isDealsPage)
        : target === '/explore?deal=1'
          ? isDealsPage
          : target === path;
      link.classList.toggle('active', active);
    });
    const help = document.querySelector('.ota-actions .header-link');
    help?.classList.toggle('active', path === '/support');
  }, [path, search]);
  return <>
    <div className="ota-topbar"><div className="shell"><span>Free cancellation on selected stays</span><span>100% demo marketplace · No real payments</span></div></div>
    <header className="ota-header"><div className="shell ota-nav"><Brand /><nav className="ota-links"><Link to="/explore">Stays</Link><Link to="/explore?deal=1">Deals</Link><Link to="/kumbh">Kumbh 2027</Link><Link to="/partners">List your property</Link></nav><div className="ota-actions"><Link to="/support" className="header-link">Help</Link><button className="login-btn" onClick={() => alert('Login is part of the future product phase.')}>Login / Signup</button></div><button className="menu ota-menu" aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>☰</button>{open && <nav className="mobile-nav ota-mobile"><Link to="/explore" onClick={() => setOpen(false)}>Stays</Link><Link to="/explore?deal=1" onClick={() => setOpen(false)}>Deals</Link><Link to="/kumbh" onClick={() => setOpen(false)}>Kumbh 2027</Link><Link to="/partners" onClick={() => setOpen(false)}>List your property</Link><Link to="/support" onClick={() => setOpen(false)}>Help</Link></nav>}</div></header>
  </>;
}

function StayResultCard({ property }) {
  const [saved, setSaved] = useState(false);
  return <article className="stay-result-card"><div className="result-image"><img src={property.image} alt={property.name} loading="lazy" /><span className="result-badge">Demo stay</span><button className={`heart-btn ${saved ? 'active' : ''}`} onClick={() => setSaved((value) => !value)} aria-label={`Save ${property.name}`}>{saved ? '♥' : '♡'}</button></div><div className="result-main"><div className="result-location">{property.location} · {property.category}</div><h3>{property.name}</h3><div className="result-rating"><b>★ {property.rating}</b> <span>{property.reviews} sample reviews</span></div><p>{property.desc}</p><div className="amenities">{property.amenities.map((amenity) => <span key={amenity}>{amenity}</span>)}</div></div><div className="result-price"><span className="deal-label">Limited demo rate</span><small>per night</small><strong>{money(property.price)}</strong><small>+ taxes & fees · demo amount</small><Link to={`/property?id=${property.id}`} className="solid-btn">View stay</Link></div></article>;
}

function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return undefined;
    }
    let frame;
    const startedAt = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);
  return value;
}

function OtaHome() {
  const [destination, setDestination] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [toast, setToast] = useState('');
  const [searchMode, setSearchMode] = useState('stays');
  const sampleStayCount = useCountUp(10);
  const stayTypeCount = useCountUp(5);
  const popularAreaCount = useCountUp(6);
  const demoExperience = useCountUp(100);
  const today = new Date().toISOString().slice(0, 10);
  const submitSearch = (event) => {
    event.preventDefault();
    if (checkin && checkout && checkout <= checkin) { setToast('Please choose a check-out date after check-in'); return; }
    navigate(`/explore?destination=${encodeURIComponent(destination || 'Nashik')}`);
  };
  useEffect(() => { if (toast) { const timer = setTimeout(() => setToast(''), 3200); return () => clearTimeout(timer); } }, [toast]);
  useEffect(() => {
    const tabs = [...document.querySelectorAll('.ota-home .search-tabs button')];
    if (tabs.length < 2) return undefined;
    const handleStays = (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      setSearchMode('stays');
      setDestination('');
    };
    const handleKumbh = (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      setSearchMode('kumbh');
      setDestination('Trimbakeshwar');
    };
    tabs[0].addEventListener('click', handleStays, true);
    tabs[1].addEventListener('click', handleKumbh, true);
    return () => {
      tabs[0].removeEventListener('click', handleStays, true);
      tabs[1].removeEventListener('click', handleKumbh, true);
    };
  }, []);
  useEffect(() => {
    const tabs = document.querySelectorAll('.ota-home .search-tabs button');
    tabs.forEach((tab, index) => tab.classList.toggle('active', searchMode === 'stays' ? index === 0 : index === 1));
  }, [searchMode]);
  const featuredStays = properties.slice(0, 4);
  const carouselStays = [...featuredStays, ...featuredStays];
  return <><OtaHeader /><main className="ota-home"><section className="ota-hero"><div className="shell"><div className="ota-heading"><div className="eyebrow">Nashik · Trimbakeshwar · Kumbh 2027</div><h1>Find a stay you’ll love.</h1><p>Search hotels, homestays, resorts and group-friendly stays for your next Nashik journey.</p></div><div className="ota-search-card"><div className="search-tabs"><button className="active">Hotels & stays</button><button onClick={() => navigate('/kumbh')}>Kumbh planning</button></div><form onSubmit={submitSearch}><label className="search-field destination-field"><span>Where do you want to stay?</span><strong>⌖</strong><input value={destination} onChange={(event) => setDestination(event.target.value)} placeholder="Nashik, Trimbakeshwar or hotel name" /></label><label className="search-field"><span>Check-in</span><strong>▣</strong><input type="date" min={today} value={checkin} onChange={(event) => setCheckin(event.target.value)} /></label><label className="search-field"><span>Check-out</span><strong>▣</strong><input type="date" min={checkin || today} value={checkout} onChange={(event) => setCheckout(event.target.value)} /></label><label className="search-field"><span>Rooms & guests</span><strong>♙</strong><select><option>1 room, 2 guests</option><option>2 rooms, 4 guests</option><option>3 rooms, 6 guests</option></select></label><button className="search-submit" type="submit">Search stays</button></form><div className="search-perks"><span>✓ Demo prices shown clearly</span><span>✓ No payment details collected</span><span>✓ Easy date and location filters</span></div></div></div></section><section className="trust-strip"><div className="shell"><span><b>{sampleStayCount}</b> sample stays</span><span><b>{stayTypeCount}</b> stay types</span><span><b>{popularAreaCount}</b> popular areas</span><span><b>{demoExperience}%</b> demo experience</span></div></section><section className="section ota-section"><div className="shell"><div className="section-head"><div><div className="eyebrow">Browse by stay type</div><h2>What kind of stay are you looking for?</h2></div><Link to="/explore" className="text-link">View all stays →</Link></div><div className="stay-type-row">{categories.map(([name, copy, image]) => <button className="stay-type-card" key={name} onClick={() => navigate(`/explore?category=${encodeURIComponent(name)}`)}><img src={image} alt={name} /><div><strong>{name}</strong><span>{copy}</span></div></button>)}</div></div></section><section className="section ota-section muted-section"><div className="shell"><div className="section-head"><div><div className="eyebrow">Popular around you</div><h2>Stays guests are exploring</h2><p>Handpicked illustrative properties with clear demo pricing.</p></div><Link to="/explore" className="text-link">See all properties →</Link></div><div className="property-carousel"><div className="property-track">{carouselStays.map((property, index) => <PropertyCard key={`${property.id}-${index}`} property={property} />)}</div></div></div></section><section className="section ota-section"><div className="shell destination-panel"><div><div className="eyebrow">Explore the region</div><h2>Start with a place that fits your pace.</h2><p>From city access in Nashik to a slower edge in Trimbakeshwar, compare stays by the kind of arrival you want.</p><Link to="/explore" className="solid-btn">Explore destinations</Link></div><div className="destination-mini-grid">{locations.slice(0, 4).map(([name, copy, image]) => <button key={name} onClick={() => navigate(`/explore?destination=${encodeURIComponent(name)}`)}><img src={image} alt={name} /><span>{name}</span><small>{copy}</small></button>)}</div></div></section><section className="host-strip"><div className="shell"><div><div className="eyebrow">For property owners</div><h2>Make your place easier to find.</h2><p>List your hotel, homestay, resort or group accommodation in the next phase of MahakumbhStays.</p></div><Link to="/partners" className="outline-light">List your property</Link></div></section></main><Footer /><Toast message={toast} /></>;
}

function OtaExplore() {
  const query = new URLSearchParams(window.location.search);
  const [text, setText] = useState(query.get('destination') || '');
  const [category, setCategory] = useState(query.get('category') || 'all');
  const [sort, setSort] = useState('recommended');
  const [filters, setFilters] = useState([]);
  const [under, setUnder] = useState(false);
  const filtered = useMemo(() => {
    const q = text.toLowerCase().trim();
    const list = properties.filter((property) => (category === 'all' || property.category === category) && (!q || `${property.name} ${property.location} ${property.category}`.toLowerCase().includes(q)) && filters.every((filter) => property.amenities.includes(filter)) && (!under || property.price < 3000));
    return [...list].sort((a, b) => sort === 'low' ? a.price - b.price : sort === 'high' ? b.price - a.price : sort === 'rating' ? b.rating - a.rating : a.id - b.id);
  }, [text, category, sort, filters, under]);
  const toggleFilter = (value) => setFilters((items) => items.includes(value) ? items.filter((item) => item !== value) : [...items, value]);
  return <><OtaHeader /><main className="results-page"><section className="results-search-bar"><div className="shell"><div className="mini-search-tabs"><button className="active">Hotels & stays</button><span>Search stays</span></div><form onSubmit={(event) => event.preventDefault()}><label><span>Destination or property</span><input value={text} onChange={(event) => setText(event.target.value)} placeholder="Nashik or Trimbakeshwar" /></label><label><span>Check-in</span><input type="date" /></label><label><span>Check-out</span><input type="date" /></label><label><span>Guests</span><select><option>2 guests · 1 room</option><option>4 guests · 2 rooms</option></select></label><button className="search-submit" type="submit">Search</button></form></div></section><section className="section results-section"><div className="shell"><div className="breadcrumbs">Home / Stays {text && ` / ${text}`}</div><div className="results-heading"><div><div className="eyebrow">Curated demo stays</div><h1>{text ? `Stays in ${text}` : category === 'all' ? 'All stays in Nashik region' : category}</h1><p>{filtered.length} sample {filtered.length === 1 ? 'property' : 'properties'} · demo prices only</p></div><select className="sort" value={sort} onChange={(event) => setSort(event.target.value)}><option value="recommended">Recommended</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="rating">Guest rating</option></select></div><div className="results-layout"><aside className="results-filters"><div className="filter-heading"><h3>Filter your stay</h3><button onClick={() => { setFilters([]); setUnder(false); setCategory('all'); }}>Clear all</button></div><div className="filter-group"><strong>Stay type</strong>{['Budget hotels', 'Premium hotels', 'Homestays', 'Dharamshalas', 'Tent stays'].map((type) => <label key={type}><input type="radio" name="stay-type" checked={category === type} onChange={() => setCategory(type)} />{type}</label>)}<label><input type="radio" name="stay-type" checked={category === 'all'} onChange={() => setCategory('all')} />All stay types</label></div><div className="filter-group"><strong>Popular amenities</strong>{['AC', 'Wi-Fi', 'Parking', 'Family friendly'].map((filter) => <label key={filter}><input type="checkbox" checked={filters.includes(filter)} onChange={() => toggleFilter(filter)} />{filter}</label>)}</div><div className="filter-group"><strong>Budget</strong><label><input type="checkbox" checked={under} onChange={(event) => setUnder(event.target.checked)} />Under ₹3,000 per night</label></div></aside><div className="results-list">{filtered.length ? filtered.map((property) => <StayResultCard key={property.id} property={property} />) : <div className="empty-state"><h3>No stays match those filters</h3><p>Try another destination, stay type or price range.</p></div>}</div></div></div></section></main><Footer /></>;
}

function App() {
  const path = usePath();
  if (path === '/explore' || path === '/explore.html') return <OtaExplore />;
  if (path === '/property' || path === '/property.html') return <Property />;
  if (path === '/kumbh' || path === '/kumbh.html') return <Kumbh />;
  if (path === '/partners' || path === '/partners.html') return <Partners />;
  if (path === '/support' || path === '/support.html') return <Support />;
  return <OtaHome />;
}

createRoot(document.getElementById('root')).render(<App />);
