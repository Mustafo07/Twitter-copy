import { useEffect, useState } from "react"

const getUserInfo = () => {
    const name =  JSON.parse(localStorage.getItem("user_info")).name
    const email = JSON.parse(localStorage.getItem("user_info")).email
    const postList = JSON.parse(localStorage.getItem("postsList"))

    return {name, email, postList}
}

export default getUserInfo