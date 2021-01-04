const local = (key, value) => {
    return value ? localStorage.setItem(key, value) : localStorage.getItem(key)
}