export class RealmRepo {
    REALM_IMAGE_PATH = "./images/realms/";
    OFFERING_IMAGE_PATH = "./images/offerings/";

    autohaven_wreckers = new Realm("Autohaven Wreckers", "Autohaven_Wreckers.webp", "Azarov's Key", "AutohavenWreckers_AzarovsKey.webp");
    backwater_swamp = new Realm("Backwater Swamp", "Backwater_Swamp.webp", "Granmas Cookbook", "BackwaterSwamp_GranmasCookbook.webp");
    coldwind_farm = new Realm("Coldwind Farm", "Coldwind_Farm.webp", "Heart Locket", "ColdwindFarm_HeartLocket.webp");
    crotus_prenn_asylum = new Realm("Crotus Prenn Asylum", "Crotus_Prenn_Asylum.webp", "Charred Wedding Photograph", "CrotusPrennAsylum_CharredWeddingPhotograph.webp");
    forsaken_boneyard = new Realm("Forsaken Boneyard", "Forsaken_Boneyard.webp", "Crows Eye", "ForsakenBoneyard_CrowsEye.webp");
    gideon_meat_plant = new Realm("Gideon Meat Plant", "Gideon_Meat_Plant.webp", "Jigsaw Piece", "GideonMeatPlant_JigsawPiece.webp");
    grave_of_glenvale = new Realm("Grave Of Glenvale", "Grave_Of_Glenvale.webp", "Dusty Noose", "GraveOfGlenvale_DustyNoose.webp");
    haddonfield = new Realm("Haddonfield", "Haddonfield.webp", "Strode Realty Key", "Haddonfield_StrodeRealtyKey.webp");
    lerys_memorial_institute = new Realm("Léry's Memorial Institute", "Lerys_Memorial_Institute.webp", "Shattered Glasses", "LerysMemorialInstitute_ShatteredGlasses.webp");
    ormond = new Realm("Ormond", "Ormond.webp", "Damaged Photo", "Ormond_DamagedPhoto.webp");
    raccoon_city = new Realm("Raccoon City", "Raccoon_City.webp", "RPD Badge", "RaccoonCity_RpdBadge.webp");
    red_forest = new Realm("Red Forest", "Red_Forest.webp", "The Last Mask", "RedForest_TheLastMask.webp");
    silent_hill = new Realm("Silent Hill", "Silent_Hill.webp", "Mary's Letter", "SilentHill_MarysLetter.webp");
    springwood = new Realm("Springwood", "Springwood.webp", "The Pied Piper", "Springwood_ThePiedPiper.webp");
    the_macmillan_estate = new Realm("The MacMillan Estate", "The_MacMillan_Estate.webp", "MacMillan's Phalanx Bone", "TheMacMillanEstate_MacMillansPhalanxBone.webp");
    withered_isle = new Realm("Withered Isle", "Withered_Isle.webp", "Ichorous Loam", "WitheredIsle_IchorousLoam.webp");
    yamaoka_estate = new Realm("Yamaoka Estate", "Yamaoka_Estate.webp", "Yamaoka Family Crest", "YamaokaEstate_YamaokaFamilyCrest.webp");
    unknown = new Realm("Unknown", "Unknown.webp", "Unknown", "Unknown.webp");

    realms = {
        "Autohaven Wreckers": this.autohaven_wreckers,
        "Backwater Swamp": this.backwater_swamp,
        "Coldwind Farm": this.coldwind_farm,
        "Crotus Prenn Asylum": this.crotus_prenn_asylum,
        "Forsaken Boneyard": this.forsaken_boneyard,
        "Gideon Meat Plant": this.gideon_meat_plant,
        "Grave of Glenvale": this.grave_of_glenvale,
        "Haddonfield": this.haddonfield,
        "Léry's Memorial Institute": this.lerys_memorial_institute,
        "Ormond": this.ormond,
        "Raccoon City": this.raccoon_city,
        "Red Forest": this.red_forest,
        "Silent Hill": this.silent_hill,
        "Springwoood": this.springwood,
        "The MacMillan Estate": this.the_macmillan_estate,
        "Withered Isle": this.withered_isle,
        "Yamaoka Estate": this.yamaoka_estate
    };

    getAllRealmNames() {
        return Object.keys(this.realms);
    }

    getRealm(name) {
        return this.realms[name];
    }

    getRealmImage(realmName) {
        if (realmName in this.realms) {
            return this.realms[realmName].image;
        } else {
            return this.unknown.image;
        }
    }

    getRealmImagePath(realmName) {
        let image;
        if (realmName in this.realms) {
            image = this.realms[realmName].image;
        } else {
            image = this.unknown.image;
        }
        return this.REALM_IMAGE_PATH + image;
    }

    getOfferingName(realmName) {
        if (realmName in this.realms) {
            return this.realms[realmName].offeringName;
        } else {
            return this.unknown.offeringName;
        }
    }

    getOfferingImage(realmName) {
        if (realmName in this.realms) {
            return this.realms[realmName].offeringImage;
        } else {
            return this.unknown.offeringImage;
        }
    }

    getOfferingImagePath(realmName) {
        let image;
        if (realmName in this.realms) {
            image = this.realms[realmName].offeringImage;
        } else {
            image = this.unknown.offeringImage;
        }
        return this.OFFERING_IMAGE_PATH + image;
    }
}

class Realm {
    constructor(name, image, offeringName, offeringImage) {
        this.name = name;
        this.image = image;
        this.offeringName = offeringName;
        this.offeringImage = offeringImage;
    }
}