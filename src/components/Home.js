// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addamount } from '../features/valueAdd/valueSlice';
function Main() {
  // const dispatch = useDispatch()

  // function clicktoChange (e){

  //   let value = '150000'
  //   dispatch(addamount(value))
  // }

  return (
    <>
      <div className="bg-white h-20 w-99 text-black flex items-center ">
        <div className="mx-36 text-center ">
          <p className="text-xm ">
            Savings starting from ₹22000.00 when you buy iPhone 15 Pro with HDFC
            Bank cashback and trade in iPhone 11 or higher*. Plus spread the
            cost with 6 months No Cost EMI. Shop offer{" "}
          </p>
        </div>
      </div>

      <div className="mx-auto flex-wrap justify-center  bg-gray-200 mt-0">
        <div className="mr-60">
          <p className="text-gray-500 text-5xl font-bold mx-60 ml-20">
            {" "}
            <span className="text-black text-5xl font-bold">Store.</span> The
            best way to buy the products you love.
          </p>
        </div>

        <div className=" mt-20 ml-20">
          <p className="text-gray-500 text-4xl font-bold">
            <span className=" text-black text-4xl font-bold">The latest.</span>
            Take a look at what’s new right now.
          </p>
        </div>

        <div className="flex flex-wrap justify-center space-x-6 mt-12">
          <div className="bg-white h-400 w-500 rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-15-202309?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1692719973220"
              alt=""
              className="w-full h-auto rounded-t-2xl"
            />
            <p className="absolute top-0 left-0 text-gray-500 pt-5 pl-5 text-sm font-semibold">
              IPHONE 15
            </p>
            <p className="absolute top-0 left-0 pt-12 pl-5 font-semibold text-black text-3xl">
              Newphoria
            </p>
            <p className="absolute top-0 left-0 pt-24 pl-5  text-black text-xl">
              From &#8377;79900.00
            </p>
          </div>
          <div className="bg-black h-400 w-500 rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1692910040844"
              alt=""
              className="w-full h-auto rounded-t-2xl"
            />
            <p className="absolute top-0 left-0 text-white pt-5 pl-5 text-sm font-semibold">
              IPHONE 15 PRO
            </p>
            <p className="absolute top-0 left-0 pt-12 pl-5 font-semibold text-white text-3xl">
              Titanium
            </p>
            <p className="absolute top-0 left-0 pt-24 pl-5  text-white text-xl">
              From &#8377;134900.00
            </p>
          </div>
          <div className="bg-white h-400 w-500  rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-macbook-pro-202310?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1696964122967"
              alt=""
              className="w-full h-auto rounded-t-2xl"
            />
            <p className="absolute top-0 left-0 text-gray-500 pt-5 pl-5 text-sm font-semibold">
              MACBOOK PRO 14" AND 16"
            </p>
            <p className="absolute top-0 left-0 pt-12 pl-5 font-semibold text-black text-3xl">
              Mind-blowing.
            </p>
            <p className="absolute top-0 left-0 pt-20 pl-5 font-semibold text-black text-3xl">
              Head-turning.
            </p>
            <p className="absolute top-0 left-0 pt-32 pl-5  text-black text-xl">
              From &#8377;169900.00
            </p>
          </div>
        </div>
        <div className="mt-20 ml-20">
          <p className="text-3xl text-gray-500 font-bold">
            <span className="text-3xl text-black font-bold">(PRODUCT)RED.</span>{" "}
            A collection that makes a world of difference.
          </p>
        </div>

        <div className="flex flex-wrap justify-center space-x-6 mt-12">
          <div className="bg-white h-400 w-500 rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/wad-40-merch-card-productred-202311?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1698942978880"
              alt=""
            />

            <p className="absolute top-0 left-0 pt-12 pl-5 font-semibold text-black text-3xl">
              Choose (RED).
            </p>
            <p className="absolute top-0 left-0 pt-20 pl-5 font-semibold text-black text-3xl">
              Save lives.
            </p>
            <p className="absolute top-0 left-0 pt-32 pl-5  text-gray-500 text-l font-semibold">
              Every apple (PRODUCT)RED purchase
            </p>
            <p className="absolute top-0 left-0 pt-40 pl-5  text-gray-500 text-l font-semibold">
              help fund the fight against AIDS.
            </p>
          </div>
          <div className="bg-white h-400 w-500 rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out flex items-center justify-center">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/wad-40-productred-iphone14-202311?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1698446319581"
              alt=""
              className="mt-7"
            />
            <p className="absolute top-0 left-0 text-red-700 pt-5 pl-5 text-sm font-semibold">
              (PRODUCT)RED
            </p>
            <p className="absolute top-0 left-0 pt-12 pl-5 font-semibold text-black text-3xl">
              iPhone 14 &
            </p>
            <p className="absolute top-0 left-0 pt-20 pl-5 font-semibold text-black text-3xl">
              iPhone 14 Plus
            </p>
            <p className="absolute bottom-0 left-0 text-gray-700 pb-10 pl-5 text-l font-semibold">
              From &#8377;10983.00/mo. with instant
            </p>
            <p className="absolute bottom-0 left-0 text-gray-700 pb-5 pl-5 text-l font-semibold">
              no cost EMI or &#8377;69900.00
            </p>
            <button className="absolute bottom-7 right-6 p-2 bg-blue-600  text-white text-xl   rounded-3xl flex items-center justify-center">
              Buy
            </button>
          </div>
          <div className="bg-white h-400 w-500  rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/wad-40-productred-watch-202311?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1698446319887"
              alt=""
              className="mt-32"
            />
            <p className="absolute top-0 left-0 text-red-700 pt-5 pl-5 text-sm font-semibold">
              (PRODUCT)RED
            </p>
            <p className="absolute top-0 left-0 pt-12 pl-5 font-semibold text-black text-3xl">
              Apple Watch Series 9
            </p>
            <p className="absolute bottom-0 left-0 text-gray-700 pb-10 pl-5 text-l font-semibold">
              From &#8377;41900.00
            </p>
            <button className="absolute bottom-8 right-6 p-2 bg-blue-600  text-white text-xl   rounded-3xl flex items-center justify-center">
              Buy
            </button>
          </div>
        </div>

        <div className="mt-20 ml-20">
          <p className="text-3xl text-gray-500 font-bold">
            <span className="text-3xl text-black font-bold">
              The Apple Store difference.
            </span>{" "}
            Even more reasons to shop with us.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mt-12">
          <div className="bg-white  h-52 w-72  rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <div className="h-10 w-9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="#007AFF"
              >
                <path d="M18 20v-1h1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1h1v1h12zM22 3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h2V4h16v16H3v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1h-2v1zM14 0h1a1 1 0 0 1 1 1v11H14zM7 0h1a1 1 0 0 1 1 1v11H7z" />
              </svg>
            </div>
            <p className="text-xl text-blue-500 font-semibold  m-10">
              Exchange your
            </p>
            <p className="text-xl text-black font-semibold ">
              <span className="text-xl text-blue-500 font-semibold ">
                Smartphone,
              </span>
              get
            </p>
          </div>

          <div className="bg-white h-52 w-72  rounded-2xl  relative overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out ">
            <div className="h-10 w-9 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="#007AFF"
              >
                <path d="M18 20v-1h1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1h1v1h12zM22 3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h2V4h16v16H3v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1h-2v1zM14 0h1a1 1 0 0 1 1 1v11H14zM7 0h1a1 1 0 0 1 1 1v11H7z" />
              </svg>
            </div>
            <p className="text-xl text-blue-500 font-semibold  mt-10 ml-5 m-10 ">
              Exchange your
            </p>
            <p className="text-xl text-black font-semibold ">
              <span className="text-xl text-blue-500 font-semibold ">
                Smartphone,
              </span>
              get
            </p>
          </div>

          <div className="bg-white h-52 w-72 rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <div className="h-10 w-9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="#007AFF"
              >
                <path d="M18 20v-1h1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1h1v1h12zM22 3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h2V4h16v16H3v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1h-2v1zM14 0h1a1 1 0 0 1 1 1v11H14zM7 0h1a1 1 0 0 1 1 1v11H7z" />
              </svg>
            </div>
            <p className="text-xl text-blue-500 font-semibold  m-10">
              Exchange your
            </p>
            <p className="text-xl text-black font-semibold ">
              <span className="text-xl text-blue-500 font-semibold ">
                Smartphone,
              </span>
              get
            </p>
          </div>

          <div className="bg-white  h-52 w-72 rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <div className="h-10 w-9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="#007AFF"
              >
                <path d="M18 20v-1h1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1h1v1h12zM22 3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h2V4h16v16H3v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1h-2v1zM14 0h1a1 1 0 0 1 1 1v11H14zM7 0h1a1 1 0 0 1 1 1v11H7z" />
              </svg>
            </div>
            <p className="text-xl text-blue-500 font-semibold  m-10">
              Exchange your
            </p>
            <p className="text-xl text-black font-semibold ">
              <span className="text-xl text-blue-500 font-semibold ">
                Smartphone,
              </span>
              get
            </p>
          </div>

          

          
        </div>

        <div className="mt-20 ml-20">
          <p className="text-3xl text-black font-bold">Quick Links.</p>
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
  );
}

export default Main;
