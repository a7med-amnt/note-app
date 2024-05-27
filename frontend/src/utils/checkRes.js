import { notifications } from "#mn";

export default function (cb, data, cbS = () => {}, cbF = () => {}) {
    cb(data)
        .unwrap()
        .then(data => {
            notifications.show({
                color: "cyan",
                title: "successfully",
                message: data?.message
            });
            cbS(data);
        })
        .catch(error => {
            console.log(error);
            notifications.show({
                color: "red",
                title: "Wrong",
                message: error?.data?.message
            });
            cbF(error);
        });
}
