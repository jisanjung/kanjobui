const doesUserExist = async email => {
    const response = await fetch(`http://localhost:5000/users/${email}`);
    const data = await response.json();
    if (data === null) {
        return false;
    }
    return true;
}

export { doesUserExist }