import { toast } from "react-toastify";
import PropTypes from "prop-types";

export function ToastManager({ text, type }) {
  if (type == "success") {
    toast.success(text);
  } else if (type == "error") {
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
