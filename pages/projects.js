import styles from '../styles/Projects.module.css';
import Card from '../comps/Card.js'
const Projects = () => {

    const list = [
        {
            title:"FMC Weekend",
            alt:"FMC",
            img:"/project1.png",
            content:"FMC Weekend is a digital arts festival conducted by the Film and media council of IIT(BHU) ,Varanasi",
            contrib:[
                "Created a website using responsive website using Angular,Express.js for registration of students and campus ambassdors for FMC Weekend 2021",
                "Integrated instamojo (a payment gateway) for colleting payment for registration",
                "The site included profile page for user to participate in events and workshops and also a leaderboard to keep track of competition",
                "Techonologies used :  Angular,Material,Express.js,Instamojo,Vercel"
            ],
            git:"https://github.com/ksnmartin/fmcw",
            link:"http://fmcweekend.in/"
        },
        {
            title:"FMC Weekend Merchandise",
            alt:"FMC",
            img:"/project1.png",
            content:"FMC Weekend conducts a Merchandise sale every year to promote the event",
            contrib:[
                "Created a website using responsive website using Angular,Express.js for the sale of FMC Weekend 2021 merchandise",
                "Integrated instamojo (a payment gateway) for colleting payment",
                "Techonologies used :  Angular,Material,Express.js,Instamojo,Vercel"
            ],
            git:"https://github.com/ksnmartin/fmcmerch",
            link:"https://merchandise.fmcweekend.in/"
        },
        {
            title:"IIT (BHU) Games and Sports Council",
            alt:"GnSC",
            img:"/project2.png",
            content:"The vision of The Games & Sports Council is to encourage a sports culture in the institute so that all individuals enjoy the thrill of whichever game they cherish",
            contrib:[
                  "Created a website using responsive website using Angular,Express.js for the IIT(BHU) Games and Sports Council",
                  "used python and bash scripts to create a continous integration and continous deployment pipeline",
                  "Techonologies used :  Angular,Material,Express.js,Python,BASH,AWS"
            ],
            git:"https://github.com/ksnmartin/sports",
            link:"http://iitbhusports.org/#/"
        },
        {
            title:"Portfolio Website",
            alt:"ME",
            img:"/project5.png",
            content:"A website to showcase my milestones as a developer",
            contrib:[
                "Created using next.js and express.js",
                "Deployed using Vercel",
                "Techonologies used :  Next.js,Express.js,Vercel"
            ],
            git:"https://github.com/ksnmartin/martin",
            link:"https://martin.vercel.app/"
        },
        {
            title:"Bitcoin value predictor",
            alt:"ME",
            img:"/project6.jpg",
            content:"Using Machine learning over a time series data collected over 30 days i try to predict bitcoin value",
            contrib:[
                "The model used for the time series is Autoregressive integrated moving average",
                "Techonologies used :  Python,Pandas,Facebook Prophet"
            ],
            git:"https://github.com/ksnmartin/Price-Forecaster",
            link:"https://github.com/ksnmartin/Price-Forecaster"
        },
        {
            title:"Ambulance Tracker",
            alt:"Priority Pulse",
            img:"/project3.jpg",
            content:"Priority Pulse is a startup working to end the issue of delayed ambulances",
            contrib:[
                "Integrated Google maps API with real time connections using socket.io",
                "Improved UI and UX",
                "Techonologies used :  React,Material,Express.js,Google Maps API,socket.io"
            ],
            git:"",
            link:"https://prioritypulse.co.in/"
        },
        {
            title:"Video Chat Application",
            alt:"Acupace",
            img:"/project4.png",
            content:"'acuMeet' is a smart video conferencing solution developed under Acupace Technologies ",
            contrib:[
                "Created an Video chat application from scratch using Ionic framework",
                "Integrated WebRTC",
                "Techonologies used :  Ionic,Material,PHP,Android,WebRTC"
            ],
            git:"https://github.com/ksnmartin/AcuPaceMobiTeam",
            link:"https://www.startupindia.gov.in/content/sih/en/profile.Startup.5d514632e4b0d334677eeb56.html"
        }
    ]

    return ( 
    <div className={styles.screen}>
        {
            list.map((val,idx)=>{
                return(
                    <Card
                    key={idx}
                    title={val.title}
                    altimg={val.alt}
                    imgref={val.img}
                    cont={val.content}
                    contributions={val.contrib}
                    git={val.git}
                    link={val.link}
                    />
                )
            })
        }
    </div> 
    );
}
 
export default Projects;