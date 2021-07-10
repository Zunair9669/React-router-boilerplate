import { Link } from "react-router-dom"
const Home = () => {
     return (
          <div>
               <h1>
                    HOME!!!!!!!
                    
               </h1>
               <Link to='/about'>
          <button>
               ABOUT
          </button>
               </Link>
          </div>
     )
}

export default Home
