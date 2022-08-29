class Randomizer {
    IMAGE_PATH = "./images/realms/";

    realms = {
        "Garden Of Joy": "Garden_Of_Joy.webp",
        "Forsaken Boneyard": "Forsaken_Boneyard.webp",
        "Raccoon City": "Raccoon_City.webp",
        "Silent Hill": "Silent_Hill.webp",
        "Grave of Glenvale": "Grave_Of_Glenvale.webp",
        "Yamaoka Estate": "Yamaoka_Estate.webp",
        "Red Forest": "Red_Forest.webp",
        "Ormond": "Ormond.webp",
        "Gideon Meat Plant": "Gideon_Meat_Plant.webp",
        "Springwoood": "Springwood.webp",
        "Léry's Memorial Institute": "Lerys_Memorial_Institute.webp",
        "Backwater Swamp": "Backwater_Swamp.webp",
        "Haddonfield": "Haddonfield.webp",
        "Crotus Prenn Asylum": "Crotus_Prenn_Asylum.webp",
        "Autohaven Wreckers": "Autohaven_Wreckers.webp",
        "The MacMillan Estate": "The_MacMillan_Estate.webp",
        "Coldwind Farm": "Coldwind_Farm.webp"
    }

    realmNames = Object.keys(this.realms);
    randomizationInProgress = false;
    currentRealm = null;

    /**
     * Selects a new random realm with a 1-second delay.
     * Loading spinner is visible during this time.
     */
    // arrow function definition used to prevent "this" referring to button when called from event listener
    processRandomizeButtonClick = () => {
        if (!this.randomizationInProgress) {
            this.randomizationInProgress = true;
            this.showSpinner(true);
            // wait a second
            setTimeout(() => {
                this.updateRealm();
                this.showSpinner(false);
                this.randomizationInProgress = false;
            }, 1000);
        }
    }

    /**
     * Show the progress spinner animation
     * @param visible show spinner if true
     */
    showSpinner(visible) {
        const button = document.getElementById("randomize-button");
        // only toggle spinner if spinner is not currently in the desired state
        if (button.classList.contains("button--loading") !== visible) {
            button.classList.toggle("button--loading");
        }
    }

    /**
     * Select a random realm and update realm fields.
     * The same realm will not be selected sequentially.
     */
    updateRealm() {
        const realmName = document.getElementById("realm-name");
        const realmImage = document.getElementById("realm-image");
        let newRealm = this.realmNames[this.getRandomInt(0, this.realmNames.length - 1)];
        while (this.currentRealm === newRealm) {
            newRealm = this.realmNames[this.getRandomInt(0, this.realmNames.length - 1)];
        }
        realmName.innerText = newRealm;
        realmImage.src = this.IMAGE_PATH + this.realms[newRealm];
        this.currentRealm = newRealm;
    }

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     */
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    init() {
        const randomizeButton = document.getElementById("randomize-button");
        randomizeButton.addEventListener("click", this.processRandomizeButtonClick);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const randomizer = new Randomizer();
    randomizer.init();
});

