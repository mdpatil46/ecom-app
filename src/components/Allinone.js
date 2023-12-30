import React from 'react'
import { useDispatch } from 'react-redux';
 import { addamount } from '../features/valueAdd/valueSlice';
function Allinone() {
  const dispatch = useDispatch()

  function clicktoChange (e){

    let value = '150000'
    dispatch(addamount(value))
  }

  return (
    <>
       <div className=" mx-auto p-4 flex flex-wrap justify-center space-x-2 bg-gray-200 mt-0" >

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
  <label>Quantity : </label><select>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
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
  <label>Quantity : </label><select>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
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
  <label>Quantity : </label><select>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
  <div className="flex justify-between items-center">
    <span className="text-xl font-bold">&#8377;1,50,000</span>
    <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold" onClick={clicktoChange}>
    Add to Cart
    </button>
  </div>
</div>

<div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
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
    <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold" onClick={clicktoChange}>
    Add to Cart
    </button>
  </div>
</div>

<div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
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
    <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold" onClick={clicktoChange}>
    Add to Cart
    </button>
  </div>
</div>

<div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
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
    <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold" onClick={clicktoChange}>
    Add to Cart
    </button>
  </div>
</div>

<div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
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
    <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold">
    Add to Cart
    </button>
  </div>
</div>

<div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
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
    <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold">
    Add to Cart
    </button>
  </div>
</div>

<div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
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
    <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold">
    Add to Cart
    </button>
  </div>
</div>

<div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
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
    <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold">
    Add to Cart
    </button>
  </div>
</div>

<div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
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
    <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold">
    Add to Cart
    </button>
  </div>
</div>

<div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
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
    <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold">
    Add to Cart
    </button>
  </div>
</div>

<div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
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
    <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold">
    Add to Cart
    </button>
  </div>
</div>

<div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
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
    <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold">
    Add to Cart
    </button>
  </div>
</div>

<div className="bg-white  border border-gray-300 rounded-2xl box-content h-90 w-60 p-4 mt-2 ">
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
    <button className="bg-yellow-400 text-black px-3 py-1 rounded-2xl hover:bg-yellow-500 font-bold">
    Add to Cart
    </button>
  </div>
</div>
</div>
    </>
  )
}

export default Allinone
