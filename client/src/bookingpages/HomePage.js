import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"


const Home=()=>{
    const {rootReducer}=useSelector((state)=>state)
    return(
        <div className='container-fluid h1 text-center p-3'>
            HomePage 
        </div>
    )
}

export default Home