
function Mymodel({Lmodal}){
    return(
    <>
    <div className="bg-white border-black border-2 rounded-xl h-48 w-72">
    <h3 className=" text-2xl font-bold">Stay Tune</h3>
    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolores officiis ad, commodi recusandae consequatur aperiam deserunt consectetur error sunt qui !</p>
    <button type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-7 ml-4" onClick={()=>Lmodal(false)}>Remove</button>
    </div>
    </>
    )
  }

  export default Mymodel;
 