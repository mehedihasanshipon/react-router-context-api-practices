import React, { useContext, useEffect, useState } from 'react';
import { createCategory } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [{name:'HP',category:'laptop'},{name:'Asus',category:'laptop'},{name:'Dell',category:'laptop'},
{name:'Nokia',category:'mobile'},{name:'Samsung',category:'mobile'},{name:'Redmi',category:'mobile'},
{name:'Canon',category:'camera'},{name:'Sony',category:'camera'},{name:'Nikkon',category:'camera'}]

const Category = () => {
    const [category,setCategory] = useContext(createCategory);
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const matchProduct = allProducts.filter(pd => pd.category.toLowerCase()===category.toLowerCase());
        setProducts(matchProduct)
    },[category])
    return (
        <div className="container">
            <h2>This is category</h2>
            <h4>Count: {category} </h4>
            <div className="d-flex m-3">
                <button className=" nav-link m-2" onClick={()=>setCategory('Laptop')}>Laptop</button>
                <button className=" nav-link m-2" onClick={()=>setCategory('Mobile')}>Mobile</button>
                <button className=" nav-link m-2" onClick={()=>setCategory('Camera')}>Camera</button>
            </div>
            {
                products.map(product => <CategoryDetail product={product} />)
            }
        </div>
    );
};

export default Category;