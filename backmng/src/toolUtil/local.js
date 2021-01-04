export default   (key, value) => {
    return value ? localStorage.setItem(key, value) : localStorage.getItem(key)
}
// export local