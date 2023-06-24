import React, { useContext,   useEffect,   useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import ProductsCard from '../../components/Products/ProductsCard';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
// import { addToDb, getStoredCart } from '../../utilities/fakedb';

const AllProducts = () => {

  
  const {  products=[] } = useContext(AuthContext)
  const [selectedProduct, setSelectedProduct] = useState(products)
  const [selectedBtn, setSelectedBtn] = useState(99)
  const handleProduct = (category, index) => {
      setSelectedBtn(index);
      if (category === "all") {
          setSelectedProduct(products);
          window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
          const sortProducts = products.filter((p) => p.category === category);
          setSelectedProduct(sortProducts);
          window.scrollTo({ top: 0, behavior: "smooth" });
      }
  };

  const allCategory = [...new Set(products?.map((p) => p.category))];

//  add to db

const [ productss, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
   
  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data =>  setProducts(data))
  },[]);

  useEffect( () => {
    const storedCart = getStoredCart()
    const savedCart = []
    // console.log(storedCart);
    for(const id in storedCart){
      const addedProduct = productss.find(product => product.id === id);
       if (addedProduct){
        const quantity = storedCart[id]
        addedProduct.quantity = quantity
        savedCart.push(addedProduct)
       }
    }
    setCart(savedCart)
  },[cart, productss])

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find(product => product.id === selectedProduct.id);
    if (!exists) {
        selectedProduct.quantity = 1;
        newCart = [...cart, selectedProduct]
    }
    else {
        const rest = cart.filter(product => product.id !== selectedProduct.id)
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, exists];
    }
     
    setCart(newCart)
    addToDb(selectedProduct.id)
}

  return (
    <div className='flex lg:flex-row flex-col gap-5 mt-8'>
            <div className='lg:w-[25%]'>
                <aside className='rounded-lg bg-white sticky lg:top-20 top-16 py-4 px-2 lg:mx-0 md:mx-0 -mx-4 shadow-lg' style={{ zIndex: "2" }}>
                    <ul className='flex lg:flex-col flex-row lg:overflow-hidden overflow-scroll gap-1'>
                        <button onClick={() => handleProduct("all", 99)} className={`btn capitalize ${selectedBtn !== 99 ? 'btn-ghost' : 'text-black'}`}>All Products</button>
                        {allCategory.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => handleProduct(category, index)}
                                className={`btn capitalize ${selectedBtn !== index ? "btn-info" : "text-black"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}

                    </ul>
                </aside>
            </div>
            <section className='lg:w-[75%]'>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-5'>
                    {
                        selectedProduct?.map((product, index) => <ProductsCard 
                        key={index} 
                        handleAddToCart={handleAddToCart}
                        product={product} />)
                    }
                </div>
            </section>
        </div>
  );
};

export default AllProducts;