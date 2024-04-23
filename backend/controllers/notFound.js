import error from "#utils/error.js";

export function notFoundRoute(rq, rs, nx) {
    throw error("not found route",404);
}
