import { useState, createContext, useContext } from "react"
const Notification = ({msg}) => {
    const NotificationStyle = {
        position: 'absolute',
       top: 100,
       right: 30,
       backgroundColor:'green',
       color: 'white',
       padding: '10px 20px 10px 20px',
       fontSize: 20,
       borderRadius: 10
    }

    return (
        <div style={NotificationStyle}>
            {msg}
        </div>
    )
}
const NotificationContext = createContext ()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState ('')

    const setNotification = (msg) => {
        setMessage(msg)
        setTimeout(() =>{
            setMessage('')
        }, 2500)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            {message && <Notification msg={message}/>}
            {children}
        </NotificationContext.Provider>
    )
}


export const useNotification = () => {
    return useContext(NotificationContext)
}
