import {useSelector} from 'react-redux' 
import classes from './Notification.module.css'


const Notification =()=>{
    const notification = useSelector(state=>state.ui.notification)
    let classesNot = classes.notification
    console.log(notification.status)
    if(notification.status === 'success'){
      classesNot = `${classes.notification} ${classes.success}`
    }
    if(notification.status === 'error'){
        classesNot = `${classes.notification} ${classes.error}`
    }
    return(
      <section className={classesNot}>
          <h3>{notification.title}</h3>
          <p>{notification.message}</p>
      </section>
    )
}


export default Notification