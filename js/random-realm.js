import {RealmRepo} from "./realmRepo.js";

class Randomizer {
    randomizationInProgress = false;
    currentRealm = null;

    constructor() {
        this.realmRepo = new RealmRepo();
        this.realmNames = this.realmRepo.getAllRealmNames();
        this.initEventListeners();
    }

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
     * Select a random realm and update realm and offering fields.
     * The same realm will not be selected sequentially.
     */
    updateRealm() {
        const realmName = document.getElementById("realm-name");
        const realmImage = document.getElementById("realm-image");
        const offeringName = document.getElementById("offering-name");
        const offeringImage = document.getElementById("offering-image");
        const newRealm = this.getRandomRealmName();

        realmName.innerText = newRealm;
        realmImage.src = this.realmRepo.getRealmImagePath(newRealm);
        offeringName.innerText = this.realmRepo.getOfferingName(newRealm);
        offeringImage.src = this.realmRepo.getOfferingImagePath(newRealm);

        this.currentRealm = newRealm;
    }

    /**
     * Returns a random realm name - will not return current realm.
     */
    getRandomRealmName() {
        let newRealm = this.realmNames[this.getRandomInt(0, this.realmNames.length - 1)];
        while (this.currentRealm === newRealm) {
            newRealm = this.realmNames[this.getRandomInt(0, this.realmNames.length - 1)];
        }
        return newRealm;
    }

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     */
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Initialise event listeners for UI components.
     * Currently, this only applies to the randomize button.
     */
    initEventListeners() {
        const randomizeButton = document.getElementById("randomize-button");
        randomizeButton.addEventListener("click", this.processRandomizeButtonClick);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new Randomizer();
});

