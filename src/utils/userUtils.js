const { VITE_KANJOB_API_ENDPOINT } = import.meta.env;

const doesUserExist = async email => {
    try {
        const response = await fetch(`${VITE_KANJOB_API_ENDPOINT}/users/${email}`);
        const data = await response.json();
        if (data === null) {
            return false;
        }
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const addUser = async userObject => {
    try {
        const response = await fetch(`${VITE_KANJOB_API_ENDPOINT}/users/add`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObject)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export { doesUserExist, addUser }