import React from 'react'

export default function Drawer() {
  return (
    <div>
      <div className="drawer">
    <h2>Cart</h2>

    <div className="cartItem">
         <img className="remove" width={20} height={20} src="https://icons-for-free.com/iconfiles/png/512/remove+icon-1320166863280113920.png" alt="Remove" />
         <img className="cartSneakers"
       width={70} 
       height={70}
        src="https://i.supersales.be/p/nike-air-penny-2-damesschoenen-wit.jpg?imgid=m2VkNPtzjURlFSQzf_YzqDA2pTqnXlDEvAk33jLGcIY/rs:fit:600:500:1/aHR0cHM6Ly9zdGF0aWMubmlrZS5jb20vYS9pbWFnZXMvY19saW1pdCUyQ2hfMjUwMCUyQ3dfMjUwMCUyQ2ZfcG5nLzZiMDE4NGJmLWQ2NzQtNGU4Yy04M2ExLWVlODUwZGExM2M0Ni9pbWFnZS5wbmc.jpg" 
        alt="Sneakers"
         />
    </div>
    <div className="items">
 <ul>
  <li>

    <span>Summary:</span>
    <div></div>
    <b>12 999 soms</b>
  </li>
  <li>
  <span>Tax 5%</span>
  <div></div>
  <b>1074 soms</b>
  </li>
 </ul>
 <button className="Checkout">Chekcout</button>
   </div>
   {/* <img className="cartSneakers"
       width={70} 
       height={70}
        src="https://i.supersales.be/p/nike-air-penny-2-damesschoenen-wit.jpg?imgid=m2VkNPtzjURlFSQzf_YzqDA2pTqnXlDEvAk33jLGcIY/rs:fit:600:500:1/aHR0cHM6Ly9zdGF0aWMubmlrZS5jb20vYS9pbWFnZXMvY19saW1pdCUyQ2hfMjUwMCUyQ3dfMjUwMCUyQ2ZfcG5nLzZiMDE4NGJmLWQ2NzQtNGU4Yy04M2ExLWVlODUwZGExM2M0Ni9pbWFnZS5wbmc.jpg" 
        alt="Sneakers"
         /> */}
   
  </div>
  </div>
  )
}

