const PAGES = {
    CHARACTERS: "CHARACTERS_PAGE",
    COMBAT: "COMBAT_PAGE"
}
const initialState = {
    current: "CHARACTERS_PAGE"
};

const page = (state = initialState, action) => {
    switch (action.type) {
        case PAGES.COMBAT:
            return {
                current: PAGES.COMBAT
            }
        case PAGES.CHARACTERS:
            return {
                current: PAGES.CHARACTERS
            }
        default:
            return state;
    }
};

export default page;
