import VideoBg from './VideoBg.mp4'
import './bg.scss';




function Bg() {

    return (
        <>
            <video
                src={VideoBg}
                // autoPlay loop muted
            ></video>
            <div className="overley"></div>
        </>
    );
}

export default Bg;