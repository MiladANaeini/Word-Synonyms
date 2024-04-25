import { toast } from "react-toastify";

export function ToastManager({ text, type }) {
  if (type == "success") {
    toast.success(text);
  } else if (type == "error") {
    toast.error(text);
  }

  return null;
}
