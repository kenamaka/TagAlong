import React, { useState } from "react";
import "./Dashboard.css";
import search from "../../assets/svg/search.svg";
import profile from "../../assets/img/clare.jpg";
import Overview from "../Overview/Overview";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Bookings from "../Bookings/Bookings";
import Rider from "../Rider/Rider";
import Drivers from "../Drivers/Drivers";
import Finance from "../Finance/Finance";
import CreatePost from "../BlogPost/CreatePost";
import AddDriver from "../Drivers/AddDriver";
import DriverDoc from "../Drivers/DriverDoc";
import Rides from "../Rider/Rides";
import DriverDetails from "../Drivers/DriverDetails";
import RidersDetail from "../Rider/RidersDetail";
const Dashboard = () => {


  const [overview,setOverview] = useState(true)
  const [booking,setBooking] = useState(false)
  const [finance,setFinance] = useState(false)
  const [drivers,setDrivers] = useState(false)
  const [riders,setRiders] = useState(false)
  const [blogpost,setBlogpost] = useState(false)
  const [settings,setSettings] = useState(false)
  // const [active,setActive] = useState(false)



  const handleOverview = () =>{
setOverview(true)
setBooking(false)
setBlogpost(false)
setDrivers(false)
setFinance(false)
setRiders(false)
setSettings(false)
  }

const handleBooking = () =>{
    setOverview(false)
    setBooking(true)
    setBlogpost(false)
    setDrivers(false)
    setFinance(false)
    setRiders(false)
    setSettings(false)

      }


  
      const handleFinance = () =>{
        setOverview(false)
        setBooking(false)
        setBlogpost(false)
        setDrivers(false)
        setFinance(true)
        setRiders(false)
        setSettings(false)

          }

          const handleDrivers = () =>{
            setOverview(false)
            setBooking(false)
            setBlogpost(false)
            setDrivers(true)
            setFinance(false)
            setRiders(false)
            setSettings(false)

              }


              const handleRiders = () =>{
                setOverview(false)
                setBooking(false)
                setBlogpost(false)
                setDrivers(false)
                setFinance(false)
                setRiders(true)

                setSettings(false)
                  }

                  const handleBlogPost = () =>{
                    setOverview(false)
                    setBooking(false)
                    setBlogpost(true)
                    setDrivers(false)
                    setFinance(false)
                    setRiders(false)
                    setSettings(false)

                      }
  return (
    <>
      {" "}
      <div className="body">
        <Nav />

        <div className="site-section">
          <div className="container">
            <div className="row justify-content-between ">
              <div class="sidebar col-md-3 ">

                <Sidebar   handleBlogPost = {handleBlogPost}   handleBooking = {handleBooking} handleDrivers = {handleDrivers} handleFinance={handleFinance}   handleRiders={handleRiders} handleOverview={handleOverview} />
              </div>

              <div class="main-content col-md-9">
                {overview && <Overview />}
                {booking && <Bookings/>}
                {riders && <Rider/>}
                {drivers && <Drivers/>}
                {finance && <Finance/> }
                {blogpost && <CreatePost/> }
                {/* <AddDriver/> */}
                {/* <DriverDoc/> */}
                {/* <Rides/> */}
                {/* <DriverDetails/> */}
                {/* <RidersDetail/> */}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
