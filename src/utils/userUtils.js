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

export { doesUserExist }