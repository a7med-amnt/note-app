export function isTokenExist() {
    let bool = false;
    let token = localStorage.getItem("token");
    if (token) bool = true;
    return bool;
}

export function deleteToken() {
     localStorage.removeItem("token");
  
}