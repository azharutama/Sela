'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowDown, ArrowUpRight, ChevronRight, Coffee, Menu, X } from 'lucide-react'

const categories = ['All menu', 'Coffee', 'Non-coffee', 'Bites']

const items = [
  { name: 'Sora Latte', description: 'Espresso, oat milk, gula aren, sea salt', price: '32K', category: 'Coffee', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=85', tag: 'Most loved' },
  { name: 'Black Sesame Cloud', description: 'Cold brew, wijen hitam, vanilla cream', price: '38K', category: 'Coffee', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85', tag: 'New' },
  { name: 'Citrus Tonic', description: 'Yuzu, sparkling tea, rosemary', price: '34K', category: 'Non-coffee', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85', tag: 'Refreshing' },
  { name: 'Matcha Senja', description: 'Ceremonial matcha, coconut, pandan', price: '36K', category: 'Non-coffee', image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=900&q=85', tag: 'Plant based' },
  { name: 'Burnt Butter Toast', description: 'Sourdough, cultured butter, honeycomb', price: '29K', category: 'Bites', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=85', tag: 'Warm' },
  { name: 'Miso Caramel Cake', description: 'Brown butter, miso caramel, sesame', price: '31K', category: 'Bites', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85', tag: 'Baked today' },
]

export default function Page() {
  const [active, setActive] = useState('All menu')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const visibleItems = useMemo(() => active === 'All menu' ? items : items.filter((item) => item.category === active), [active])

  return (
    <main className="site-shell">
      <header className={`nav-wrap ${scrolled ? 'nav-scrolled' : ''}`}>
        <a className="wordmark" href="#top" aria-label="Sela home"><span className="wordmark-mark"><Coffee /></span>SELA<span className="wordmark-dot">.</span></a>
        <nav className={open ? 'mobile-open' : ''} aria-label="Main navigation">
          <a href="#menu" onClick={() => setOpen(false)}>Menu</a>
          <a href="#story" onClick={() => setOpen(false)}>Our story</a>
          <a href="#visit" onClick={() => setOpen(false)}>Visit us</a>
        </nav>
        <a className="nav-note" href="#menu">Open daily <span>07—22</span></a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" role="img" aria-label="A warm cup of coffee on a wooden table" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light"><span /> Coffee, slowly made</p>
          <h1>A little<br /><em>pause</em> in<br />your day.</h1>
          <div className="hero-bottom"><p>Small-batch coffee, bright plates<br />& good things in between.</p><a href="#menu" className="circle-link" aria-label="Explore menu"><ArrowDown /></a></div>
        </div>
        <div className="hero-stamp">JAKARTA<br /><span>EST. 2024</span></div>
      </section>

      <section className="intro" id="story">
        <p className="eyebrow"><span /> The Sela way</p>
        <div className="intro-grid"><h2>Made for the<br /><em>in-between.</em></h2><div><p className="lead">A neighborhood coffee bar for unhurried mornings, late afternoon resets, and everything that happens between.</p><a className="text-link" href="#visit">Come say hello <ArrowUpRight /></a></div></div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-top"><div><p className="eyebrow"><span /> What we&apos;re pouring</p><h2>The menu</h2></div><p className="section-aside">Seasonal ingredients.<br />Familiar comforts.</p></div>
        <div className="filter-row" role="tablist" aria-label="Menu categories">{categories.map((category) => <button key={category} className={active === category ? 'active' : ''} onClick={() => setActive(category)} role="tab" aria-selected={active === category}>{category}</button>)}</div>
        <div className="menu-grid">{visibleItems.map((item, index) => <article className={`menu-card ${index === 0 ? 'featured-card' : ''}`} key={item.name}><div className="card-image"><img src={item.image} alt={item.name} loading={index > 1 ? 'lazy' : 'eager'} /><span>{item.tag}</span></div><div className="card-info"><div><h3>{item.name}</h3><p>{item.description}</p></div><strong>{item.price}</strong></div></article>)}</div>
      </section>

      <section className="visit" id="visit"><div className="visit-copy"><p className="eyebrow light"><span /> Find your way here</p><h2>See you<br /><em>at Sela.</em></h2><p className="visit-detail">Jl. Kemang Raya No. 18<br />Jakarta Selatan 12730</p><a href="#top" className="text-link light-link">Get directions <ChevronRight /></a></div><div className="visit-image" role="img" aria-label="Coffee shop interior with warm sunlight" /></section>
      <footer><a className="wordmark" href="#top"><span className="wordmark-mark"><Coffee /></span>SELA<span className="wordmark-dot">.</span></a><p>Good coffee, no rush.</p><span>© 2024 Sela Coffee Bar</span></footer>
    </main>
  )
}
