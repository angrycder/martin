import styles from '../styles/Profile.module.css';
import Head from 'next/head';

const Skills = () => {
    return ( 
    <div className={styles.screen}>
        <Head>
        <title>Skills</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.tit}>
      <h1>Skills</h1>
         <h2>
             <i className="devicon-python-plain colored"></i>
             <i className="devicon-cplusplus-plain colored"></i>
             <i className="devicon-javascript-plain colored"></i>
             <i className="devicon-typescript-plain colored"></i>
             <i className="devicon-java-plain colored"></i>
             <i className="devicon-rstudio-plain colored"></i>
             <i className="devicon-angularjs-plain colored"></i>
             <i className="devicon-react-original colored"></i>
             <i className="devicon-nextjs-original colored"></i>
             <i className="devicon-express-original colored"></i>
             <i className="devicon-xd-plain colored"></i>
             <i className="devicon-figma-plain colored"></i>
             <i className="devicon-amazonwebservices-original colored"></i>
             <i className="devicon-mysql-plain colored"></i>
             <i className="devicon-postgresql-plain colored"></i>
             <i className="devicon-sqlalchemy-plain"></i>
        </h2>
      </div>
        <div className={styles.lists}>
            <h1>Programming Languages</h1>
            <h2>Extensive</h2>
            <ul>
                <li>Python</li>
                <li>C++</li>
                <li>Javascript</li>
                <li>Typescript</li>
            </ul>
            <h2>Comfortable</h2>
            <ul>
                <li>Java </li>
                <li>R</li>
            </ul>
        </div>
        <div className={styles.lists}>
            <h1>Database Management Systems</h1>
            <ul>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MonoDB</li>
            </ul>
        </div>
        <div className={styles.lists}>
            <h1>Javascript Frameworks</h1>
            <ul>
                <li>Angular</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Express.js</li>
            </ul>
        </div>
        <div className={styles.lists}>
            <h1>Python Libraries</h1>
            <ul>
                <li>Requests</li>
                <li>Pandas</li>
                <li>SQLalchemy</li>
                <li>numpy</li>
                <li>openCV</li>
                <li>Keras</li>
                <li>seaborn</li>
                <li>scikit-learn</li>
            </ul>
        </div>
        <div className={styles.lists}>
            <h1>Design Tools</h1>
            <ul>
                <li>Figma</li>
                <li>Adobe XD</li>
            </ul>
        </div>
        <div className={styles.lists}>
            <h1>Amazon Web Services</h1>
            <ul>
                <li>S3 Storage</li>
                <li>EC2</li>
                <li>Elastic Beanstalk</li>
                <li>Lambda</li>
            </ul>
        </div>
        <div className={styles.lists}>
            <h1>payment gateway integrations</h1>
            <ul>
                <li>Paytm</li>
                <li>Instamojo</li>
                <li>Razorpay</li>
            </ul>
        </div>
        <div className={styles.lists}>
            <h1>Machine learning</h1>
            <ul>
                <li>Exploratory Data Analysis</li>
                <li>Linear Discrminant Analysis</li>
                <li>Principal Component Analysis</li>
                <li>Polynomial Regression</li>
                <li>Support Vector Machines</li>
                <li>Lasso Regression</li>
                <li>Ridge Regression</li>
                <li>Decision Trees</li>
                <li>Random Forest</li>
            </ul>
        </div>
    </div> );
}
 
export default Skills;