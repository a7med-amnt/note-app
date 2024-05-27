import { redirect } from "#rrd";
import { isOwner } from "#utils/owner";
export async function baseLoader() {
    if (await isOwner()) return null;
    return redirect("/auth");
}
