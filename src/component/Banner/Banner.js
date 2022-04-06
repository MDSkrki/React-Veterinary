import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../../images/icons8-close-48.png";

const Banner = ({bannerState}) => {
 // const bannerState = useSelector((state) => state.banner);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="Banner">
      {bannerState && (
        <div>
          <img
            onClick={() =>{ 
              dispatch({
                type: "CLOSE_BANNER",
              })
              navigate('/login')
            }}
            src={CloseIcon}
          ></img>
          <h2>Pet registered successfully</h2>
        </div>
      )}
    </div>
  );
};

export default Banner;
