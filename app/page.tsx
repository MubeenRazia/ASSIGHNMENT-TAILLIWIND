
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Herosection from "./components/Herosection/Herosection"
import Link from "next/link"


const Homepage = () => {
  return (
    <div className="" >
      <div style={{  backgroundImage:"url('/i4.jpeg')", width:"100%" ,height: "700px" ,backgroundPosition:"cover",backgroundSize:"center"}}>
      
      <ul>
      <Header></Header>
      <Herosection></Herosection>
      <li><Link href="/"></Link></li>
      
    <li><Link href="/about" className="bg-yellow-600 text-center  mx-96 mt-30 mb-80 border-double border-8 rounded-1 border-cyan-950 font-serif font-semibold  text-slate-800 italic text-3xl text-emerald-95 rounded-lg">THIS IS ABOUT PAGE</Link></li>
      <li><Link href="/"></Link></li>
    -
      </ul>
  

      <h1 className="bg-yellow-600 text-center mx-80 my-3 border-double border-cyan-950 border-8 font-serif font-semibold text-3xl  "> HOME PAGE</h1>
      <ul>
        <li><Link href="/assighnments" className="bg-yellow-600 text-slate-800 mx-96 my-48 font-serifn font-serif text-3xl text-center italic font-bold border-double rounded-lg border-slate-800 border-8">ASSIGHNMENT PAGE</Link>
      </li>
      </ul>
      <Footer></Footer>


      </div>
    
  
    </div>
  )
}

export default Homepage



