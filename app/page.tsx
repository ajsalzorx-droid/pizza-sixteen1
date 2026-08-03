"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Camera, ChevronRight, MapPin, Menu, Minus, Phone, Pizza, Plus, ShoppingBag, Star, Trash2, X } from "lucide-react";

const products = [
  ["Sixteen Special", "Pepperoni, mozzarella, olives, green peppers and signature sauce.", "AED 49", "Signature"],
  ["Classic Pepperoni", "Loaded pepperoni, mozzarella and rich tomato sauce.", "AED 42", "Classic"],
  ["Margherita", "Fresh mozzarella, tomato sauce and basil.", "AED 36", "Veggie"],
  ["Spicy Chicken", "Spiced chicken, jalapeños, onions and mozzarella.", "AED 46", "Hot"],
  ["Veggie Supreme", "Olives, peppers, mushrooms, onions and fresh herbs.", "AED 41", "Veggie"],
  ["Four Cheese", "Mozzarella, cheddar, parmesan and creamy cheese sauce.", "AED 44", "Cheesy"],
];

const reviews = [
  ["Maya", "Dubai", "The crust was perfectly crispy and the toppings were incredibly fresh."],
  ["Omar", "Jumeirah", "Pizza Sixteen is now our weekend favourite."],
  ["Sara", "Business Bay", "Hot, cheesy and delivered quickly. Exactly what pizza should be."],
];

const reveal = { initial: { opacity: 0, y: 36 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: .65 } };

function Marquee({ children, reverse = false }: { children: React.ReactNode; reverse?: boolean }) {
  return <div className={`marquee ${reverse ? "reverse" : ""}`}><div>{children}<span aria-hidden="true">{children}</span></div></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<Record<string, number>>({});

  const cartItems = products.filter(p => cart[p[0]]).map(p => ({ product: p, quantity: cart[p[0]] }));
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + Number(item.product[2].replace("AED ", "")) * item.quantity, 0);
  const updateCart = (name: string, change: number) => setCart(current => {
    const quantity = Math.max(0, (current[name] || 0) + change);
    const next = { ...current, [name]: quantity };
    if (!quantity) delete next[name];
    return next;
  });
  const whatsAppOrder = `https://wa.me/971543962660?text=${encodeURIComponent(`Hello Pizza Sixteen! I'd like to order:\n${cartItems.map(({product, quantity}) => `${quantity}x ${product[0]} — ${product[2]}`).join("\n")}\n\nTotal: AED ${cartTotal}`)}`;

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1500);
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { clearTimeout(timer); window.removeEventListener("scroll", onScroll); };
  }, []);

  return <main>
    <AnimatePresence>{!loaded && <motion.div className="loader" exit={{ y: "-100%" }} transition={{ duration: .7, ease: [0.76,0,0.24,1] }}>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="loader-pizza"><Pizza /></motion.div>
      <Image src="/images/pizza-sixteen-logo.png" alt="Pizza Sixteen" width={240} height={240} priority />
      <strong>HEATING THE OVEN...</strong><div className="loadbar"><i /></div>
    </motion.div>}</AnimatePresence>

    <header className={scrolled ? "scrolled" : ""}>
      <a href="#home" aria-label="Pizza Sixteen home"><Image src="/images/pizza-sixteen-logo.png" alt="Pizza Sixteen" width={150} height={80} priority /></a>
      <nav aria-label="Primary navigation"><a href="#menu">Menu</a><a href="#story">Our story</a><a href="#offers">Offers</a><a href="#locations">Locations</a></nav>
      <div className="nav-actions"><a className="icon-link" href="tel:+971543962660" aria-label="Call Pizza Sixteen"><Phone size={18}/></a><button className="cart-trigger" aria-label={`Open cart with ${cartCount} items`} onClick={() => setCartOpen(true)}><ShoppingBag size={19}/>{cartCount > 0 && <span>{cartCount}</span>}</button><button className="button small" onClick={() => setCartOpen(true)}>Order now <ArrowUpRight size={17}/></button><button className="menu-button" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu /></button></div>
    </header>

    <AnimatePresence>{cartOpen && <><motion.button className="cart-backdrop" aria-label="Close cart" onClick={() => setCartOpen(false)} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}/><motion.aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title" initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} transition={{type:"spring",damping:28,stiffness:260}}>
      <div className="cart-head"><div><p className="eyebrow">YOUR ORDER</p><h2 id="cart-title">CART <span>({cartCount})</span></h2></div><button aria-label="Close cart" onClick={() => setCartOpen(false)}><X/></button></div>
      {cartItems.length === 0 ? <div className="empty-cart"><Pizza size={64}/><h3>YOUR CART IS HUNGRY.</h3><p>Add a pizza and we’ll get the oven ready.</p><button className="button" onClick={() => {setCartOpen(false);document.querySelector("#menu")?.scrollIntoView()}}>Explore menu</button></div> : <>
        <div className="cart-items">{cartItems.map(({product,quantity}) => <article key={product[0]}><Image src="/images/pizza-full.png" alt="" width={76} height={76}/><div><h3>{product[0]}</h3><p>{product[2]}</p><div className="quantity"><button aria-label={`Remove one ${product[0]}`} onClick={() => updateCart(product[0],-1)}><Minus size={15}/></button><b>{quantity}</b><button aria-label={`Add one ${product[0]}`} onClick={() => updateCart(product[0],1)}><Plus size={15}/></button></div></div><button className="remove-item" aria-label={`Remove ${product[0]} from cart`} onClick={() => setCart(current => {const next={...current};delete next[product[0]];return next})}><Trash2 size={18}/></button></article>)}</div>
        <div className="cart-summary"><div><span>Subtotal</span><strong>AED {cartTotal}</strong></div><small>Delivery fee confirmed on WhatsApp.</small><a className="button whatsapp" href={whatsAppOrder} target="_blank" rel="noopener noreferrer">Checkout on WhatsApp <ArrowUpRight size={18}/></a><a className="call-order" href="tel:+971543962660"><Phone size={17}/> Or call +971 54 396 2660</a></div>
      </>}
    </motion.aside></>}</AnimatePresence>

    <AnimatePresence>{menuOpen && <motion.aside className="mobile-menu" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}>
      <button aria-label="Close menu" onClick={() => setMenuOpen(false)}><X size={30}/></button>
      <Image src="/images/pizza-sixteen-logo.png" alt="Pizza Sixteen" width={180} height={140}/>
      {["Home","Menu","Our story","Offers","Locations"].map(x => <a key={x} href={`#${x.toLowerCase().replace(" ","")}`} onClick={() => setMenuOpen(false)}>{x}</a>)}
      <Image className="menu-pizza" src="/images/pizza-floating.png" alt="Floating pizza" width={320} height={420}/>
    </motion.aside>}</AnimatePresence>

    <section className="hero" id="home">
      <div className="hero-copy">
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.6}} className="eyebrow">HOT • FRESH • CHEESY</motion.p>
        <motion.h1 initial="hidden" animate={loaded ? "show" : "hidden"} variants={{hidden:{},show:{transition:{staggerChildren:.12}}}}>{["PIZZA MADE","FOR BIG","CRAVINGS."].map(line => <motion.span key={line} variants={{hidden:{y:80,opacity:0},show:{y:0,opacity:1}}}>{line}</motion.span>)}</motion.h1>
        <motion.p {...reveal} className="intro">Freshly baked pizzas, bold flavours and seriously cheesy moments—made to share, or not.</motion.p>
        <div className="hero-buttons"><a className="button" href="#order">Order now <ArrowUpRight/></a><a className="button outline" href="#menu">Explore menu <ChevronRight/></a></div>
        <small>Fresh from the oven. Delivered to your door.</small>
      </div>
      <div className="hero-art"><i className="blob"/><motion.div animate={{ y:[0,-12,0], rotate:[-3,1,-3] }} transition={{duration:5,repeat:Infinity,ease:"easeInOut"}}><Image src="/images/pizza-full.png" alt="Fresh Pizza Sixteen pizza" width={900} height={900} priority /></motion.div><b className="badge">BAKED<br/>FRESH</b></div>
    </section>

    <div className="ticker"><Marquee>HOT ✦ FRESH ✦ CHEESY ✦ MADE FOR EVERYONE ✦ PIZZA SIXTEEN ✦ </Marquee><Marquee reverse>BAKED FRESH • BIG FLAVOUR • FAST DELIVERY • GOOD TIMES • </Marquee></div>

    <section className="section menu-section" id="menu">
      <motion.div {...reveal} className="section-head"><p className="eyebrow">CHOOSE YOUR SLICE</p><h2>WHAT ARE YOU<br/><em>CRAVING?</em></h2><p>Choose your favourite and make it yours.</p></motion.div>
      <div className="tabs" role="tablist">{["Signature Pizzas","Classic Pizzas","Veggie","Sides","Drinks","Desserts"].map((x,i)=><button role="tab" aria-selected={i===0} key={x}>{x}</button>)}</div>
      <div className="product-grid">{products.map((p,i)=><motion.article {...reveal} className="product" key={p[0]}>
        <span className="tag">{p[3]}</span><div className="pizza-frame"><Image src="/images/pizza-full.png" alt={p[0]} width={420} height={420}/></div><h3>{p[0]}</h3><p>{p[1]}</p><div><strong>{p[2]}</strong><button aria-label={`Add ${p[0]} to cart`} onClick={() => {updateCart(p[0],1);setCartOpen(true)}}>Add <ShoppingBag size={17}/></button></div><button className="customise" onClick={() => {updateCart(p[0],1);setCartOpen(true)}}>Customise →</button>
      </motion.article>)}</div>
    </section>

    <section className="assembly">
      <motion.div {...reveal}><p className="eyebrow">THE SIXTEEN WAY</p><h2>BUILT LAYER<br/><em>BY LAYER.</em></h2><p>Great pizza starts with good ingredients.</p></motion.div>
      <motion.div className="assembly-pizza" whileInView={{rotate:360,scale:1}} initial={{rotate:-40,scale:.7}} transition={{duration:1.5}} viewport={{once:true}}><Image src="/images/pizza-full.png" alt="Pizza made layer by layer" width={700} height={700}/></motion.div>
      <div className="ingredient-list">{["01 Fresh Dough","02 Signature Sauce","03 Melted Cheese","04 Premium Toppings","05 Oven Baked"].map(x=><span key={x}>{x}</span>)}</div>
    </section>

    <section className="section split" id="story"><motion.div {...reveal}><p className="eyebrow">OUR STORY</p><h2>MORE THAN<br/><em>JUST PIZZA.</em></h2><p>Pizza Sixteen is built around simple things done properly: fresh ingredients, bold flavour, warm service and pizza that brings people together.</p><div className="values"><b>Fresh Every Day</b><b>Made With Care</b><b>Always Cheesy</b></div><span className="scribble">Open. Share. Enjoy.</span></motion.div><motion.div {...reveal} className="box-photo"><Image src="/images/pizza-box.png" alt="Pizza Sixteen branded pizza boxes" width={900} height={900}/></motion.div></section>

    <div className="benefits"><Marquee>FRESH INGREDIENTS ✦ FRESH INGREDIENTS ✦ </Marquee><Marquee reverse>HOT FROM THE OVEN ✦ HOT FROM THE OVEN ✦ </Marquee><Marquee>DELIVERED FAST ✦ DELIVERED FAST ✦ </Marquee></div>

    <section className="favorites section"><motion.div {...reveal} className="section-head"><p className="eyebrow">THE BESTSELLERS</p><h2>THE SIXTEEN<br/><em>FAVOURITES.</em></h2></motion.div><div className="favorite-row">{products.slice(0,5).map((p,i)=><article key={p[0]}><span>0{i+1}/05</span><Image src="/images/pizza-full.png" alt={p[0]} width={500} height={500}/><h3>{p[0]}</h3><p>{p[1]}</p><a className="button small" href="#order">Order {p[2]}</a></article>)}</div></section>

    <section className="offer" id="offers"><motion.div {...reveal}><p className="eyebrow">THIS WEEK’S BIG DEAL</p><h2>BUY 1 LARGE,<br/>GET THE SECOND<br/><em>50% OFF.</em></h2><p>Double the pizza. Double the good times.</p><a className="button light" href="#order">Get the offer <ArrowUpRight/></a><small>Equal or lower-priced pizza only. Terms apply.</small></motion.div><motion.div className="offer-image" whileInView={{y:-30,rotate:4}} transition={{duration:1}}><Image src="/images/pizza-floating.png" alt="Pizza Sixteen offer" width={750} height={900}/><b>50%<br/>OFF</b></motion.div></section>

    <section className="section split packaging"><div className="box-photo"><Image src="/images/pizza-box.png" alt="Pizza Sixteen packaging" width={800} height={800}/></div><motion.div {...reveal}><p className="eyebrow">THE FULL EXPERIENCE</p><h2>GOOD PIZZA.<br/><em>GOOD PACKAGING.</em></h2><p>Our pizza arrives hot, fresh and packed in bold Pizza Sixteen style.</p><div className="values"><b>Keeps Pizza Hot</b><b>Easy to Carry</b><b>Branded With Love</b></div></motion.div></section>

    <section className="order section" id="order"><motion.div {...reveal} className="section-head"><p className="eyebrow">EASY AS ONE, TWO, THREE</p><h2>FROM OUR OVEN<br/><em>TO YOUR DOOR.</em></h2></motion.div><div className="steps">{[[Pizza,"Pick Your Pizza"],[ShoppingBag,"Place Your Order"],[MapPin,"Enjoy It Hot"]].map(([Icon,label],i)=><article key={String(label)}><span>{i+1}</span><Icon size={42}/><h3>{String(label)}</h3></article>)}</div><div className="order-actions"><button className="button" onClick={() => setCartOpen(true)}>View cart <ShoppingBag/></button><a className="button whatsapp" href="https://wa.me/971543962660" target="_blank" rel="noopener noreferrer">Order on WhatsApp</a></div><p className="contact-line">Open daily 11:00 AM – 1:00 AM · <a href="tel:+971543962660">+971 54 396 2660</a></p></section>

    <section className="reviews section"><motion.div {...reveal} className="section-head"><p className="eyebrow">PEOPLE ARE TALKING</p><h2>LOVE AT<br/><em>FIRST SLICE.</em></h2></motion.div><div className="review-grid">{reviews.map(r=><article key={r[0]}><div className="stars">{[1,2,3,4,5].map(x=><Star key={x} fill="currentColor" size={18}/>)}</div><blockquote>“{r[2]}”</blockquote><div><b>{r[0]}</b><span>{r[1]}</span></div></article>)}</div></section>

    <section className="social section"><motion.div {...reveal} className="section-head"><p className="eyebrow">@PIZZASIXTEEN</p><h2>FOLLOW THE<br/><em>CHEESY MOMENTS.</em></h2></motion.div><div className="gallery">{["pizza-full.png","pizza-box.png","pizza-floating.png","pizza-full.png","pizza-box.png"].map((src,i)=><div key={i}><Image src={`/images/${src}`} alt="Pizza Sixteen social moment" fill sizes="(max-width: 700px) 50vw, 25vw"/><Camera/></div>)}</div><a className="button outline" href="#">Follow on Instagram <Camera size={18}/></a></section>

    <section className="locations section" id="locations"><motion.div {...reveal}><p className="eyebrow">DUBAI, UAE</p><h2>FIND YOUR<br/><em>NEAREST SLICE.</em></h2><p>Sunday–Thursday: 11:00 AM–1:00 AM<br/>Friday–Saturday: 11:00 AM–2:00 AM</p><div className="hero-buttons"><a className="button" href="https://maps.google.com" target="_blank" rel="noreferrer">Get directions</a><a className="button outline" href="tel:+971543962660">Call store</a></div></motion.div><div className="map"><MapPin size={70}/><b>PIZZA<br/>SIXTEEN</b><i/><i/><i/></div></section>

    <section className="newsletter"><div><h2>GET THE<br/><em>GOOD STUFF.</em></h2><p>Offers, new flavours and cheesy updates—straight to your inbox.</p></div><form onSubmit={e=>{e.preventDefault();if(email.includes("@"))setJoined(true)}}><label htmlFor="email">Email address</label><div><input id="email" type="email" required placeholder="Enter your email" value={email} onChange={e=>setEmail(e.target.value)}/><button>Join the Sixteen Club <ArrowUpRight/></button></div>{joined&&<p role="status">You’re officially part of the Pizza Sixteen family.</p>}</form></section>

    <footer><Image src="/images/pizza-sixteen-logo.png" alt="Pizza Sixteen" width={210} height={150}/><div><b>HOT • FRESH • CHEESY</b><p>Bold flavours, fresh ingredients and good times—one slice at a time.</p></div><div><a href="#menu">Menu</a><a href="#story">Our story</a><a href="#offers">Offers</a><a href="#locations">Locations</a></div><div><p>Dubai, UAE<br/><a href="tel:+971543962660">+971 54 396 2660</a><br/>11:00 AM – 1:00 AM</p></div><small>© 2026 Pizza Sixteen. All rights reserved. · Terms · Privacy</small></footer>
    {scrolled&&<div className="floating-order"><button onClick={() => setCartOpen(true)}><ShoppingBag/> <span>Cart {cartCount > 0 ? `(${cartCount})` : ""}</span></button><a href="https://wa.me/971543962660" target="_blank" rel="noopener noreferrer" aria-label="Order on WhatsApp"><b>W</b><span>WhatsApp</span></a></div>}
  </main>;
}
