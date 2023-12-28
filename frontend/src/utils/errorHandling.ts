import { toast } from "react-toastify";

export const errorHandler = (message: string) => {
  toast.error(message, {
    position: "bottom-right",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  });
};
