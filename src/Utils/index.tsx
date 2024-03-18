import { TAppNotification } from "../Context/AppContext";
import { SmileOutlined } from '@ant-design/icons';
import { apiNotification } from "../App";
export const NotificationSuccess = (message: string | undefined) => {
    apiNotification.error({
        message: message ?? "Successful !!",
        icon: <SmileOutlined style={{ color: '#108ee9' }} />
    })
}

export const NotificationError = (message: string | undefined) => {
    apiNotification.error({
        message: message ?? "Something went wrong !!!",
        icon: <SmileOutlined style={{ color: '#108ee9' }} />
    })
}