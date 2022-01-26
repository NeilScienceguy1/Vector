const checkLogin = () => {
    const user = localStorage.getItem('user');

    if (!user) {
        window.location.href = '/login';
    }
}

export default checkLogin