"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  ariaLabel: string;
  options: string[];
  value: number;
  onChange: (index: number) => void;
};

// Native <select> whose open list is replaced by a lookalike list (opens on hover, click, tap or keyboard)
// that can be narrower, capped in height and scrollable — on desktop and touch devices alike.
export default function OptionSelect({ ariaLabel, options, value, onChange }: Props) {
  const select = useRef<HTMLSelectElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(value);
  const [position, setPosition] = useState<React.CSSProperties>({});
  const toggle = useRef(() => {});
  const touched = useRef(false);
  const isOpen = useRef(false);
  const closeTimer = useRef<number | undefined>(undefined);

  const show = () => {
    const box = select.current?.getBoundingClientRect();
    if (!box) return;
    const maxHeight = 180;
    const below = window.innerHeight - box.bottom;
    const flip = below < Math.min(maxHeight, options.length * 34 + 4) && box.top > below;
    setPosition({ right: document.documentElement.clientWidth - box.right, maxWidth: box.width,...(flip ? { bottom: window.innerHeight - box.top + 6 } : { top: box.bottom + 6 }) });
    setActive(value);
    setOpen(true);
  };

  // Mouse hover opens the list; leaving both the select and the list closes it after a short grace period.
  const hoverOpen = (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    window.clearTimeout(closeTimer.current);
    if (!isOpen.current) { touched.current = false; show(); }
  };
  const hoverClose = (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    closeTimer.current = window.setTimeout(() => setOpen(false), 150);
  };
  useEffect(() => { isOpen.current = open; }, [open]);
  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const choose = (index: number) => {
    if (index !== value) onChange(index);
    setOpen(false);
    if (!touched.current) select.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const outside = (event: PointerEvent) => {
      if (!list.current?.contains(event.target as Node) && event.target !== select.current) close();
    };
    const onScroll = (event: Event) => { if (!list.current?.contains(event.target as Node)) close(); };
    document.addEventListener("pointerdown", outside);
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", close);
    return () => {
      document.removeEventListener("pointerdown", outside);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", close);
    };
  }, [open]);

  useEffect(() => {
    if (open) list.current?.children[active]?.scrollIntoView({ block: "nearest" });
  }, [open, active]);

  useEffect(() => { toggle.current = () => (open ? setOpen(false) : show()); });

  // A tap would open the phone's own picker; cancel it at touchend and open the card list instead (a drag still scrolls).
  useEffect(() => {
    const element = select.current;
    if (!element) return;
    let start: { x: number; y: number } | null = null;
    const onTouchStart = (event: TouchEvent) => { start = { x: event.touches[0].clientX, y: event.touches[0].clientY }; };
    const onTouchEnd = (event: TouchEvent) => {
      const touch = event.changedTouches[0];
      const tapped = start && Math.hypot(touch.clientX - start.x, touch.clientY - start.y) < 10;
      start = null;
      if (!tapped) return;
      event.preventDefault();
      touched.current = true;
      toggle.current();
    };
    element.addEventListener("touchstart", onTouchStart, { passive: true });
    element.addEventListener("touchend", onTouchEnd, { passive: false });
    return () => {
      element.removeEventListener("touchstart", onTouchStart);
      element.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const onMouseDown = (event: React.MouseEvent<HTMLSelectElement>) => {
    if (event.button !== 0) return;
    event.preventDefault();
    touched.current = false;
    select.current?.focus();
    if (!isOpen.current) show();
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLSelectElement>) => {
    if (!open) {
      if (event.key === " " || event.key === "Enter" || event.key === "F4" || (event.altKey && event.key === "ArrowDown")) { event.preventDefault(); show(); }
      return;
    }
    if (event.key === "Tab") { setOpen(false); return; }
    event.preventDefault();
    if (event.key === "Escape") setOpen(false);
    else if (event.key === "ArrowDown") setActive(i => Math.min(options.length - 1, i + 1));
    else if (event.key === "ArrowUp") setActive(i => Math.max(0, i - 1));
    else if (event.key === "Home") setActive(0);
    else if (event.key === "End") setActive(options.length - 1);
    else if (event.key === "Enter" || event.key === " ") choose(active);
  };

  return <>
    <select ref={select} aria-label={ariaLabel} value={value} onChange={event => onChange(Number(event.target.value))} onMouseDown={onMouseDown} onPointerEnter={hoverOpen} onPointerLeave={hoverClose} onKeyDown={onKeyDown} aria-expanded={open}>
      {options.map((option, index) => <option key={option} value={index}>{option}</option>)}
    </select>
    {open && createPortal(<ul ref={list} className="option-popup" role="listbox" aria-label={ariaLabel} style={position} onPointerEnter={hoverOpen} onPointerLeave={hoverClose} data-lenis-prevent>
      {options.map((option, index) => <li key={option} role="option" aria-selected={index === value} className={index === active ? "active" : undefined} onMouseEnter={() => setActive(index)} onMouseDown={event => event.preventDefault()} onClick={() => choose(index)}>{option}</li>)}
    </ul>, document.body)}
  </>;
}
