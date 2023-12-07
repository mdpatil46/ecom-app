import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addamount } from '../features/valueAdd/valueSlice';
function Main() {

  const dispatch = useDispatch()
  
  function clicktoChange (e){

    let value = '150000'
    dispatch(addamount(value))
  }
  

  return (
    <>
    <div className='bg-white h-20 w-99 text-black flex items-center '>
      <div className='mx-36 text-center '>
        <p className='text-xm '>Savings starting from ₹22000.00 when you buy iPhone 15 Pro with HDFC Bank cashback and trade in iPhone 11 or higher*. Plus spread the cost with 6 months No Cost EMI. Shop offer </p>
      </div>
     </div>
    
     <div className='mx-auto flex-wrap justify-center  bg-gray-200 mt-0'>
      <div className='mr-60'>
        <p className='text-gray-500 text-5xl font-bold mx-60 ml-20'> <span className= 'text-black text-5xl font-bold'>Store.</span> The best way to buy the products you love.</p>
      </div>


      <div className=' mt-20 ml-20'>
        <p className='text-gray-500 text-4xl font-bold'><span className=' text-black text-4xl font-bold'>The latest.</span> Take a look at what’s new right now.</p>
      </div>
      <div className='flex flex-wrap justify-center space-x-4 mt-12'>
      <div className='bg-white h-400 w-500 rounded-2xl'>
        <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-15-202309?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1692719973220" alt="" />
      </div>
      <div className='bg-black h-400 w-500 rounded-2xl'>
        <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1692910040844" alt="" />
      </div>
      <div className='bg-white h-400 w-500  rounded-2xl'>
        <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-macbook-pro-202310?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1696964122967" alt="" />
      </div>
      </div>
     </div>


      {/* <div className=" mx-auto p-4 flex flex-wrap justify-center space-x-2 bg-gray-200 mt-0" >

        <div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2">
          <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg" alt="Product" className="w-half mb-2" />
          <h3 className="text-xl font-bold mb-2">Iphone 15 Pro Max</h3>
          <p className="text-gray-700 mb-4">"The iPhone 15 boasts a stunning display, powerful performance, and advanced camera technology for an exceptional mobile experience."</p>
          <label>Quantity : </label><select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">&#8377;1,50,000</span>
            <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold" onClick={clicktoChange} >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
          <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg" alt="Product" className="w-half mb-2" />
          <h3 className="text-xl font-bold mb-2">Iphone 15 Pro Max</h3>
          <p className="text-gray-700 mb-4">"The iPhone 15 boasts a stunning display, powerful performance, and advanced camera technology for an exceptional mobile experience."</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">&#8377;1,50,000</span>
            <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold"  onClick={clicktoChange}>
             Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2">
          <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg" alt="Product" className="w-half mb-2" />
          <h3 className="text-xl font-bold mb-2">Iphone 15 Pro Max</h3>
          <p className="text-gray-700 mb-4">"The iPhone 15 boasts a stunning display, powerful performance, and advanced camera technology for an exceptional mobile experience."</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">&#8377;1,50,000</span>
            <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold" onClick={clicktoChange}>
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2">
          <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg" alt="Product" className="w-half mb-2" />
          <h3 className="text-xl font-bold mb-2">Iphone 15 Pro Max</h3>
          <p className="text-gray-700 mb-4">"The iPhone 15 boasts a stunning display, powerful performance, and advanced camera technology for an exceptional mobile experience."</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">&#8377;1,50,000</span>
            <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold" onClick={clicktoChange}>
              <Link to="/Addcart">Add to Cart</Link>
            </button>
          </div>
        </div>

        <div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
          <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg" alt="Product" className="w-half mb-2" />
          <h3 className="text-xl font-bold mb-2">Iphone 15 Pro Max</h3>
          <p className="text-gray-700 mb-4">"The iPhone 15 boasts a stunning display, powerful performance, and advanced camera technology for an exceptional mobile experience."</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">&#8377;1,50,000</span>
            <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold" onClick={clicktoChange}>
              <Link to="/Addcart">Add to Cart</Link>
            </button>
          </div>
        </div>

        <div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
          <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg" alt="Product" className="w-half mb-2" />
          <h3 className="text-xl font-bold mb-2">Iphone 15 Pro Max</h3>
          <p className="text-gray-700 mb-4">"The iPhone 15 boasts a stunning display, powerful performance, and advanced camera technology for an exceptional mobile experience."</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">&#8377;1,50,000</span>
            <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold" onClick={clicktoChange}>
              <Link to="/Addcart">Add to Cart</Link>
            </button>
          </div>
        </div>

        <div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
          <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg" alt="Product" className="w-half mb-2" />
          <h3 className="text-xl font-bold mb-2">Iphone 15 Pro Max</h3>
          <p className="text-gray-700 mb-4">"The iPhone 15 boasts a stunning display, powerful performance, and advanced camera technology for an exceptional mobile experience."</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">&#8377;1,50,000</span>
            <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold" onClick={clicktoChange}>
              <Link to="/Addcart">Add to Cart</Link>
            </button>
          </div>
        </div>

        <div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
          <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg" alt="Product" className="w-half mb-2" />
          <h3 className="text-xl font-bold mb-2">Iphone 15 Pro Max</h3>
          <p className="text-gray-700 mb-4">"The iPhone 15 boasts a stunning display, powerful performance, and advanced camera technology for an exceptional mobile experience."</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">&#8377;1,50,000</span>
            <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold">
              <Link to="/Addcart">Add to Cart</Link>
            </button>
          </div>
        </div>

        <div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
          <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg" alt="Product" className="w-half mb-2" />
          <h3 className="text-xl font-bold mb-2">Iphone 15 Pro Max</h3>
          <p className="text-gray-700 mb-4">"The iPhone 15 boasts a stunning display, powerful performance, and advanced camera technology for an exceptional mobile experience."</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">&#8377;1,50,000</span>
            <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold">
              <Link to="/Addcart">Add to Cart</Link>
            </button>
          </div>
        </div>

        <div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
          <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg" alt="Product" className="w-half mb-2" />
          <h3 className="text-xl font-bold mb-2">Iphone 15 Pro Max</h3>
          <p className="text-gray-700 mb-4">"The iPhone 15 boasts a stunning display, powerful performance, and advanced camera technology for an exceptional mobile experience."</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">&#8377;1,50,000</span>
            <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold">
              <Link to="/Addcart">Add to Cart</Link>
            </button>
          </div>
        </div>

        <div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
          <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg" alt="Product" className="w-half mb-2" />
          <h3 className="text-xl font-bold mb-2">Iphone 15 Pro Max</h3>
          <p className="text-gray-700 mb-4">"The iPhone 15 boasts a stunning display, powerful performance, and advanced camera technology for an exceptional mobile experience."</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">&#8377;1,50,000</span>
            <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold">
              <Link to="/Addcart">Add to Cart</Link>
            </button>
          </div>
        </div>

        <div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
          <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg" alt="Product" className="w-half mb-2" />
          <h3 className="text-xl font-bold mb-2">Iphone 15 Pro Max</h3>
          <p className="text-gray-700 mb-4">"The iPhone 15 boasts a stunning display, powerful performance, and advanced camera technology for an exceptional mobile experience."</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">&#8377;1,50,000</span>
            <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold">
              <Link to="/Addcart">Add to Cart</Link>
            </button>
          </div>
        </div>

        <div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
          <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg" alt="Product" className="w-half mb-2" />
          <h3 className="text-xl font-bold mb-2">Iphone 15 Pro Max</h3>
          <p className="text-gray-700 mb-4">"The iPhone 15 boasts a stunning display, powerful performance, and advanced camera technology for an exceptional mobile experience."</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">&#8377;1,50,000</span>
            <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold">
              <Link to="/Addcart">Add to Cart</Link>
            </button>
          </div>
        </div>

        <div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
          <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg" alt="Product" className="w-half mb-2" />
          <h3 className="text-xl font-bold mb-2">Iphone 15 Pro Max</h3>
          <p className="text-gray-700 mb-4">"The iPhone 15 boasts a stunning display, powerful performance, and advanced camera technology for an exceptional mobile experience."</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">&#8377;1,50,000</span>
            <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold">
              <Link to="/Addcart">Add to Cart</Link>
            </button>
          </div>
        </div>

        <div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
          <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg" alt="Product" className="w-half mb-2" />
          <h3 className="text-xl font-bold mb-2">Iphone 15 Pro Max</h3>
          <p className="text-gray-700 mb-4">"The iPhone 15 boasts a stunning display, powerful performance, and advanced camera technology for an exceptional mobile experience."</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">&#8377;1,50,000</span>
            <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold">
              <Link to="/Addcart">Add to Cart</Link>
            </button>
          </div>
        </div>

        <div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
          <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg" alt="Product" className="w-half mb-2" />
          <h3 className="text-xl font-bold mb-2">Iphone 15 Pro Max</h3>
          <p className="text-gray-700 mb-4">"The iPhone 15 boasts a stunning display, powerful performance, and advanced camera technology for an exceptional mobile experience."</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">&#8377;1,50,000</span>
            <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold">
              <Link to="/Addcart">Add to Cart</Link>
            </button>
          </div>
        </div>
      </div> */}

    </>
  )
}

export default Main;
