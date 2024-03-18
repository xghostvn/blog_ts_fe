
import { createContext, useContext } from "react"
import {notification} from "antd"


export type TAppNotification = ReturnType<typeof notification['useNotification']>[0]
interface NotificationContextType {
    api: ReturnType<typeof notification['useNotification']>[0];
}


const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

const useNotificationContext = () => useContext(NotificationContext);

export {
    NotificationContext,
    useNotificationContext,
    NotificationContextType
}