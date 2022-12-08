import video from "../assets/mainvideo.mp4";

const Home = () => {
   
    return (
        <section className="box">
                <video src= {video} autoPlay loop muted />
            <div className="home-content">
                <h2>
                Travel Light <br></br>
                Surf Free <br></br>
                Build Community
                </h2>
            </div>
        </section>
    )
};

export default Home;