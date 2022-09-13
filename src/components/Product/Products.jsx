import React from 'react'
import './product.css'
import IMG1 from '../../assets/hemp.jpg'



const design = [
  {
    id: 1,
    image: IMG1,
    title: 'Hemp 1',
   
  },
  {
    id: 2,
    image: IMG1,
    title: 'Hemp 2',
 
  },
  {
    id: 3,
    image: IMG1,
    title: 'Hemp 3',
    
  },
  {
    id: 4,
    image: IMG1,
    title: 'Hemp 4',
    
  },
  {
    id: 5,
    image: IMG1,
    title: 'Hemp 5',
    
  }
]

const Products = () => {
  return (
    <section className="product section" id='product'>
        <h2 className="section__title">Products</h2>
        <span className="section__subtitle"></span>

      <div className="product__container grid">
      {
          design.map(({id,image,title}) => {
            return (
              <article key={id} className='product__item'>
                <div className="product__item-image">
                  <img src={image} alt={title} />
                  
                </div>
                <h3>{title}</h3>
                <div className="product__item-cta">
                  <a href="" className='btn'>Buy Now</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Products