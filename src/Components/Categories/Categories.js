import React from 'react'
import { Link } from 'react-router-dom'
import "./Categories.scss"

const Categories = () => {
  return (
    <div className='categories'>
      <div className='col'>
           <div className='row'>
            <img src="https://cdn.pixabay.com/photo/2022/11/25/16/30/brown-hairstreak-7616422__340.jpg" alt=""/>
            <button>
              <Link className='link' to="/products/1">sale</Link>
            </button>
           </div>
           <div className='row'>
            <img src="https://cdn.pixabay.com/photo/2021/12/14/15/37/christmas-tree-6870755__340.jpg" alt=""/>  <button>
              <Link className='link' to="/products/1">sale</Link>
            </button>
           </div>
      </div>
      <div className='col'>
            <div className='row'>
            <img src="https://cdn.pixabay.com/photo/2022/11/27/13/00/swan-7619753__340.jpg" alt=""/>  <button>
              <Link className='link' to="/products/1">sale</Link>
            </button>
            </div>
      </div>
      <div className='col col-l'>
           <div className='row'>
               <div className='col'>
                  <div className='row'>
                  <img src="https://cdn.pixabay.com/photo/2022/11/14/07/53/leaves-7590923__340.jpg" alt=""/>  <button>
              <Link className='link' to="/products/1">sale</Link>
            </button>
                  </div>
               </div>
               <div className='col'><div className='row'><img src="https://cdn.pixabay.com/photo/2022/10/10/19/02/feather-7512484__340.jpg" alt=""/>  <button>
              <Link className='link' to="/products/1">sale</Link>
            </button></div></div>
           </div>
           <div className='row'><img src="https://cdn.pixabay.com/photo/2022/11/19/15/50/holly-7602422__340.jpg" alt=""/>  <button>
              <Link className='link' to="/products/1">sale</Link>
            </button></div>
      </div>
    </div>
  )
}

export default Categories