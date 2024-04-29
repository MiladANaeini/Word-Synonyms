import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { TOAST_ERROR, TOAST_SUCCESS } from "../../constants/Constants";

export function ToastManager({ text, type }) {
  if (type == TOAST_SUCCESS) {
    toast.success(text);
  } else if (type == TOAST_ERROR) {
    toast.error(text);
  }

  ToastManager.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
  };

  ToastManager.defaultProps = {
    text: "",
    type: "",
  };
  return null;
}
