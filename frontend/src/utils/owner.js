import { isTokenExist } from "#utils/token";
import store from "#store/store";
import userApi from "#api/user";
export async function isOwner() {
    let bool = false;
    if (isTokenExist()) {
        try {
            await store.dispatch(userApi.endpoints.getUser.initiate()).unwrap();
            bool = true;
        } catch (e) {
            console.log(e);
            bool = false;
        }
    } else bool = false;
    return bool;
}
