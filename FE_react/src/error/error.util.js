export const errorHandle = (message, toast) => {
    if(Array.isArray(message)){
        for (let index = 0; index < message.length; index++) {
            toast.error(message[index]);          
        }
    }
    toast.error(message)
}