import React from 'react'
import { useContext, useState,useEffect} from 'react';
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'
import Title from '../components/Title'

const Collection = () => {
     const {products,search,showSearch}=useContext(ShopContext);
     const [showFilter,setShowFilter]=useState(false);
     const[filterProducts,setFilterProducts] = useState([])
     const [category,setCategory]=useState([]);
     const [subCategory,setSubCategory]=useState([]);
    const [sortType,setSortType]=useState('relevant');
     const toggleCategory = (e)=> {
      if(category.includes(e.target.value)){
        setCategory(prev=>prev.filter(item=> item !== e.target.value))
      }
      else{
        setCategory([...category,e.target.value])
      }
     }

     const toggleSubCategory = (e)=> {
      if(category.includes(e.target.value)){
        setSubCategory(prev=>prev.filter(item=> item !== e.target.value))
      }
      else{
        setSubCategory([...subCategory,e.target.value])
      }
     }

     const applyFilter= () => {
      let productsCopy = products.slice();
      if(search && showSearch){
        productsCopy = productsCopy.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
      }

      if(category.length > 0){
        productsCopy = productsCopy.filter((product) => category.includes(product.category))
        }
      if(subCategory.length > 0) {
          productsCopy = productsCopy.filter((product) => subCategory.includes(product.subCategory));
        }
      setFilterProducts(productsCopy);

     }

     const sortProduct = () => {
      let fpCopy=filterProducts.slice();
      switch(sortType){
        case 'low-high':
          setFilterProducts(fpCopy.sort((a,b)=>a.price-b.price));
          break;

        case 'high-low':
          setFilterProducts(fpCopy.sort((a,b)=>b.price-a.price));
          break;

        default:
          setFilterProducts(fpCopy);
          break;


      } }

     useEffect(()=>{
      applyFilter();
     },[category,subCategory,search,showFilter])

     useEffect(()=>{
      sortProduct();
     },[sortType,filterProducts])


  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/*Filter options */}
      <div className="min-w-60">
       
        <p onClick={()=>setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90':''}`} src={assets.dropdown_icon}/>
        </p>
        {/*Category Filter */}
        <div className={`border border-gray-600 pl-5 py-3 my-5 ${showFilter ?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='' type="checkbox"  value={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input className='' type="checkbox"  value={'Women'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input className='' type="checkbox"  value={'Kids'} onChange={toggleCategory} />Kids
            </p>
          </div>
        </div>
        {/*SubCategory Filter */}
        <div className={`border border-gray-600 pl-5 py-3 mt-6 ${showFilter ?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='' type="checkbox"  value={'Topwear'} onChange={toggleSubCategory}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input className='' type="checkbox"  value={'Bottomwear'} onChange={toggleSubCategory}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='' type="checkbox"  value={'Winterwear'} onChange={toggleSubCategory}/>Winterwear
            </p>
          </div>
        </div>
     
      </div>
       {/*Rigth side */}
        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />
             {/*Product sort  */}
             <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
              <option value="relevant">Sort by:Relevant</option>
              <option value="low-high">Sort by:Low  to High</option>
              <option value="high-low">Sort by:High to Low</option>
             </select>
          </div> 
          {/*Map products  */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProducts.map((product,index)=>
            (
            <ProductItem key={index} name={product.name} id={product.id} price={product.price} image={product.image} />

            ))
          }
          </div>
       </div>
    </div>
  )
}

export default Collection
