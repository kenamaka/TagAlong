import React, { useState } from "react";
import "../Data/Data.css";

const CreatePost = () => {
  const [dropone, setDropone] = useState(false);
  const [droptwo, setDroptwo] = useState(false);
  const [dropdown, setDropdown] = useState();

  const handleDropone = () => {
    setDropone(!dropone);
  };

  const handleDroptwo = () => {
    setDroptwo(!droptwo);
  };
  return (
    <>
      <div className=" layout_padding width pl-3">
        <div className="row pt-4">
          <br />
          <h1 className="main-head">Add new post</h1>
          <div className="col-12  pt-4 ">
            <div className="row pl-0 justify-content-between ">
              <div className=" upload-container">
                <button className="upload-btn btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <path
                      d="M16.2996 5.9V4.1H14.4996V2.3H16.2996V0.5H18.0996V2.3H19.8996V4.1H18.0996V5.9H16.2996ZM9.09961 15.35C10.2246 15.35 11.181 14.9561 11.9688 14.1683C12.7566 13.3805 13.1502 12.4244 13.1496 11.3C13.1496 10.175 12.7557 9.2186 11.9679 8.4308C11.1801 7.643 10.224 7.2494 9.09961 7.25C7.97461 7.25 7.01821 7.6439 6.23041 8.4317C5.44261 9.2195 5.04901 10.1756 5.04961 11.3C5.04961 12.425 5.44351 13.3814 6.23131 14.1692C7.01911 14.957 7.97521 15.3506 9.09961 15.35ZM9.09961 13.55C8.46961 13.55 7.93711 13.3325 7.50211 12.8975C7.06711 12.4625 6.84961 11.93 6.84961 11.3C6.84961 10.67 7.06711 10.1375 7.50211 9.7025C7.93711 9.2675 8.46961 9.05 9.09961 9.05C9.72961 9.05 10.2621 9.2675 10.6971 9.7025C11.1321 10.1375 11.3496 10.67 11.3496 11.3C11.3496 11.93 11.1321 12.4625 10.6971 12.8975C10.2621 13.3325 9.72961 13.55 9.09961 13.55ZM1.89961 18.5C1.40461 18.5 0.980711 18.3236 0.627911 17.9708C0.275111 17.618 0.0990109 17.1944 0.0996109 16.7V5.9C0.0996109 5.405 0.276011 4.9811 0.628811 4.6283C0.981611 4.2755 1.40521 4.0994 1.89961 4.1H4.73461L6.39961 2.3H12.6996V5.9H14.4996V7.7H18.0996V16.7C18.0996 17.195 17.9232 17.6189 17.5704 17.9717C17.2176 18.3245 16.794 18.5006 16.2996 18.5H1.89961Z"
                      fill="black"
                    />
                  </svg>
                  <span className="text">Upload Photo</span>
                </button>
                <button className="upload-btn btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 22 19"
                    fill="none"
                  >
                    <path
                      d="M3.5752 0.5C2.68009 0.5 1.82165 0.855579 1.18871 1.48851C0.555775 2.12145 0.200195 2.97989 0.200195 3.875V15.125C0.200195 16.0201 0.555775 16.8785 1.18871 17.5115C1.82165 18.1444 2.68009 18.5 3.5752 18.5H18.4252C19.3203 18.5 20.1787 18.1444 20.8117 17.5115C21.4446 16.8785 21.8002 16.0201 21.8002 15.125V3.875C21.8002 2.97989 21.4446 2.12145 20.8117 1.48851C20.1787 0.855579 19.3203 0.5 18.4252 0.5H3.5752ZM7.4002 6.1259C7.40029 5.97041 7.44067 5.81759 7.51739 5.68234C7.59412 5.5471 7.70458 5.43404 7.838 5.35419C7.97142 5.27433 8.12326 5.23041 8.2787 5.2267C8.43415 5.22298 8.58791 5.25961 8.725 5.333L15.025 8.708C15.1685 8.78489 15.2885 8.89929 15.3722 9.039C15.4558 9.17871 15.5 9.33851 15.5 9.50135C15.5 9.66419 15.4558 9.82399 15.3722 9.9637C15.2885 10.1034 15.1685 10.2178 15.025 10.2947L8.725 13.6697C8.58778 13.7432 8.43385 13.7798 8.27825 13.776C8.12265 13.7722 7.9707 13.7281 7.83723 13.6481C7.70375 13.568 7.59332 13.4547 7.51673 13.3192C7.44013 13.1837 7.39998 13.0306 7.4002 12.875V6.125V6.1259Z"
                      fill="black"
                    />
                  </svg>
                  <span className="text">Upload Video</span>
                </button>
              </div>
              <div className=" upload-container">
                <button className=" upload-btn upload-btn-2 btn">
                  <span className="text">Save as Draft</span>
                </button>
                <button className="upload-btn upload-btn-2 btn">
                  <span className="text">Preview</span>
                </button>
                <button className="upload-btn upload-btn-2 btn bgblue">
                  <span className="text text-light">Publish post</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12  pt-4 ">
            <div className="row justify-content-between align-items-start upload-container  ">
              <div className=" blog-content ">
                <form action="" className="content-form pt-5 pl-5">
                  <div>
                  <input className="lead-text content-form-input " placeholder="Add Title"/>
                  </div>
                  <div className="pt-4">
                  <textarea name="message" className="content-form-input" rows="20" cols="30" placeholder="Enter blog post..."/>
{/* </textarea> */}
                  </div>
                
                </form>
              </div>
<div className="sidebar-container">
  {/* first side bar  */}

              <div className="blog-sidebar-container" >
                <div className=" blog-sidebar" onClick={handleDropone}>
                  <h2 className="add-input-label font-weight-bold" style={{fontSize:'100%'}}>
                    {" "}
                    Choose category
                  </h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="blog-svg"
                    viewBox="0 0 22 10"
                    fill="none"
                  >
                    <path
                      d="M10.9999 8.85723C10.9155 8.85826 10.832 8.84164 10.7545 8.80842C10.677 8.77521 10.6073 8.72614 10.5499 8.66438L4.76415 2.87866C4.507 2.62152 4.507 2.22295 4.76415 1.96581C5.02129 1.70866 5.41986 1.70866 5.677 1.96581L11.0127 7.30152L16.3356 1.97866C16.5927 1.72152 16.9913 1.72152 17.2484 1.97866C17.5056 2.23581 17.5056 2.63438 17.2484 2.89152L11.4627 8.67724C11.3341 8.80581 11.167 8.87009 11.0127 8.87009L10.9999 8.85723Z"
                      fill="black"
                    />
                  </svg>
                </div>

                <div
                  className={
                    dropone
                      ? "blog-sidebar-content ml-2 drop"
                      : "drop-sidbar-content"
                  }
                  onClick={() => {
                    setDropone(true);
                  }}
                >
                  <div className={dropone ? "drop-content drop  pt-4 ": "drop-content pt-4"}>
                  <div className=" row align-items-center  ">
                    <input type="checkbox" /> <span className="text ">  Education</span>
                  </div>
                  <div className="pt-4 row align-items-center ">
                    <input type="checkbox"/> <span className="text">News</span>
                  </div>
                  <div className="pt-4 row align-items-center ">
                    <input type="checkbox" /> <span className="text">App Update</span>

                  </div>
                  <div className="pt-4 row align-items-center ">
                    <input type="checkbox" /> <span className="text">General</span>

                  </div>
                  </div>
                </div>
              </div>


{/* second sidebard menu */}

              <div className={dropone ? "blog-sidebar-container drop-top" : "blog-sidebar-container"} >
                <div className=" blog-sidebar" onClick={handleDroptwo}>
                  <h2 className="add-input-label font-weight-bold" style={{fontSize:'80%'}} >
                    {" "}
                    Schedule Publishing
                  </h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="blog-svg"
                    viewBox="0 0 22 10"
                    fill="none"
                  >
                    <path
                      d="M10.9999 8.85723C10.9155 8.85826 10.832 8.84164 10.7545 8.80842C10.677 8.77521 10.6073 8.72614 10.5499 8.66438L4.76415 2.87866C4.507 2.62152 4.507 2.22295 4.76415 1.96581C5.02129 1.70866 5.41986 1.70866 5.677 1.96581L11.0127 7.30152L16.3356 1.97866C16.5927 1.72152 16.9913 1.72152 17.2484 1.97866C17.5056 2.23581 17.5056 2.63438 17.2484 2.89152L11.4627 8.67724C11.3341 8.80581 11.167 8.87009 11.0127 8.87009L10.9999 8.85723Z"
                      fill="black"
                    />
                  </svg>
                </div>

                <div
                  className={
                    droptwo
                      ? "blog-sidebar-content ml-2 drop"
                      : "drop-sidbar-content"
                  }
                  onClick={() => {
                    setDropone(true);
                  }}
                >
                  <div className={droptwo ? "drop-content drop  pt-4 ": "drop-content pt-4"}>
                  <div className=" row align-items-center  ">
                    <input type="checkbox" /> <span className="text ">  Immediately</span>
                  </div>
                  <div className="pt-4 row align-items-center ">
                    <input type="checkbox"/> <span className="text">In 1 hour</span>
                  </div>
                  <div className="pt-4 row align-items-center ">
                    <input type="checkbox" /> <span className="text">In 24 hours</span>

                  </div>
                  {/* <div className="pt-4 row align-items-center ">
                    <input type="checkbox" /> <span className="text">Checkbox 2</span>

                  </div> */}
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default CreatePost;
