import video from "../assets/mainvideo.mp4"
const Header = () => {
    return (
      <div className="Header">
        <h1>Surf-free::</h1>
        <h3>Enrich Your Surf Trip</h3>
        <video src= {video} autoPlay loop comuted />

      </div>
    )
  }

export default Header 