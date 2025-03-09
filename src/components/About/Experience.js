const Experience = () =>{
    return(
       <div className="experience-wrapper mb-5">
             <div className="experience">
            <h1>Working<span className="purple"> Experience</span></h1>
            <div className="experience-card w-100">
               <div className="experience-details">
                <h2>Policy Bazaar</h2>
                <h4>Front End Developer</h4>
                <p className="para">At Policy Bazaar i am responsible for creating and implementing the visual and interactive elements of a website or application that users interact with directly. This includes developing user interface (UI) designs, layouts, and features using various programming languages, such as HTML, CSS, and JavaScript. </p>
                <p>Here i used React and Angular for building the Web Application and Mongo Db for storing Data.</p>
               </div>
                <div className="experience-timeline">
                    <p className="small-text">16/05/2022-Till Now</p>
                </div>
            </div>
            <div className="experience-card w-100">
               <div className="experience-details">
                <h2>Adaan Digital Solutions</h2>
                <h4>Sr.Web Developer</h4>
                <p className="para">Here i am responsible for creating and implementing the visual and interactive elements of a website or application that users interact with directly. This includes developing user interface (UI) designs, layouts, and features using various programming languages, such as HTML, CSS, and JavaScript. </p>
                <p>Here i used React and Angular for building the Web Application and Mongo Db for storing Data.</p>
               </div>
                <div className="experience-timeline">
                    <p className="small-text">01/05/2017-15/05/2022</p>
                </div>
            </div>
        </div>
       </div>
    )
}
export default Experience;