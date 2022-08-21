import { Store } from "react-notifications-component";


class Notifications {
    addSuccessNotification(title, subtitle) {
      Store.addNotification({
        title: title,
        message: subtitle,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
        },
      });
    }
  
    addErrorNotification(title, subtitle) {
      Store.addNotification({
        title: title,
        message: subtitle,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
        },
      });
    }
  }
  
  const notifications = new Notifications();
  
  export default notifications;
  