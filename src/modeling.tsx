import * as images from "./assets";
function Modeling() {
  return (
    <div>
      <br></br>
      <h1 className="center home-title">3D Models</h1>
      <h3 className="center home-text">
        These are some 3D models I have made in Blender.
      </h3>
      <br />
      <div className="row" style={{ margin: "10px" }}>
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src={images.model1}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src={images.model2}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />

          <img
            src={images.model3}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />

          <img
            src={images.model11}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src={images.model5}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />

          <img
            src={images.model6}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src={images.model7}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />

          <img
            src={images.model12}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src={images.model9}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <img
            src={images.model10}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />

          <img
            src={images.model4}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />

          <img
            src={images.model8}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>
      </div>
    </div>
  );
}
export default Modeling;
