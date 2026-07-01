'use client'

import { useCart, FREE_SHIP_THRESHOLD } from './CartContext'

export default function CartDrawer() {
  const { items, isOpen, setOpen, updateQty, removeItem, subtotal } = useCart()

  const remaining = Math.max(0, FREE_SHIP_THRESHOLD - subtotal)
  const pct = Math.min(100, (subtotal / FREE_SHIP_THRESHOLD) * 100)

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-head">
          <h3>Your bag</h3>
          <button className="cart-close" onClick={() => setOpen(false)}>&times;</button>
        </div>

        {subtotal > 0 && (
          <div className="ship-bar">
            {remaining > 0 ? (
              <p>You are <strong>${remaining.toFixed(0)}</strong> away from free shipping</p>
            ) : (
              <p>You have <strong>free shipping</strong> — nice.</p>
            )}
            <div className="ship-track"><div className="ship-fill" style={{ width: `${pct}%` }} /></div>
          </div>
        )}

        <div className="cart-items">
          {items.length === 0 ? (
            <p className="cart-empty">Your bag is empty.</p>
          ) : (
            items.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="ci-img"><img src={item.image} alt={item.name} /></div>
                <div className="ci-info">
                  <p className="ci-name">{item.name}</p>
                  <p className="ci-price">${item.price}</p>
                  <div className="ci-qty">
                    <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    <button className="ci-remove" onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-foot">
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button className="btn-checkout" onClick={() => alert('Checkout — Stripe integration goes here.')}>
              Checkout
            </button>
            <p className="cart-note">Shipping &amp; taxes calculated at checkout.</p>
          </div>
        )}
      </aside>
    </>
  )
}
