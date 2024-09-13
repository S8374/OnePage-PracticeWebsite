import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";




const Home = () => {

      const handelSubmitFrom = e => {
        e.preventDefault();
        const formData = new FormData(e.target);  // Using FormData to get all the form inputs
        const values = Object.fromEntries(formData.entries());  // Convert the FormData to an object
      
        console.log('Form data:', values);  // Now you'll get all the form inputs and their values
      };

    return (
        <div className="">


                        <Header></Header>
                    <Outlet context={ handelSubmitFrom }/>
                    <Footer></Footer>
  
                
 
        
        </div>
    );
};

export default Home;