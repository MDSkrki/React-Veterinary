import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../../images/icons8-close-48.png";
import { actionCreator } from "../../store/actionTypes";
import { CLOSE_BANNER } from "../../store/types";

const Banner = ({bannerState}) => {

  // Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="Banner">
      {bannerState && (
        <div>
          <img
            onClick={() =>{ 
              dispatch(actionCreator(CLOSE_BANNER));
              navigate('/login');
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
