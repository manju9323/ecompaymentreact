import "./FeaturedProduct.scss"
import Card from '../card/Card';
import useFetch from '../../hooks/usefetch';

function FeaturedProduct({type}) {

const {data,loading,error}=useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
  

   
  return (
    <div className='featuredproduct'>
      <div className='top'>
        <h1>{type}</h1>
        <p>
          Significant Improvement in payment of GENCO dues with the...Ministry of Tourism organises regional workshop on Development...Manthan Platform Wins the Best Tech Initiative Award atSignificant Decline in the Maternal Mortality Ratio (MMR) from...Sumangalam Panchmahabhoot Conference Series VAYU- The vital...PM applauds those who are displaying their products on GeM... 
        </p>
      </div>
      <div className='bottom'>
        {error ? "something went wrong":
               loading
               ?
               "loading"
               :data?.map((item,i)=><Card item={item} key={item.id}/>)
               }
             
      </div>
    </div>
  )
}

export default FeaturedProduct