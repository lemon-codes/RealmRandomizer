
export class RealmRepo {
    REALM_IMAGE_PATH = "./images/realms/";
    OFFERING_IMAGE_PATH = "./images/offerings/";

    forsaken_boneyard = {
        name: "Forsaken Boneyard",
        realm_image: "Forsaken_Boneyard.webp",
        offering_name: "Crows Eye",
        offering_image: "ForsakenBoneyard_CrowsEye.webp"
    };

    raccoon_city = {
        name: "Raccoon City",
        realm_image: "Raccoon_City.webp",
        offering_name: "RPD Badge",
        offering_image: "RaccoonCity_RpdBadge.webp"
    };

    silent_hill = {
        name: "Silent Hill",
        realm_image: "Silent_Hill.webp",
        offering_name: "Mary's Letter",
        offering_image: "SilentHill_MarysLetter.webp"
    };

    grave_of_glenvale = {
        name: "Grave Of Glenvale",
        realm_image: "Grave_Of_Glenvale.webp",
        offering_name: "Dusty Noose",
        offering_image: "GraveOfGlenvale_DustyNoose.webp"
    };

    yamaoka_estate = {
        name: "Yamaoka Estate",
        realm_image: "Yamaoka_Estate.webp",
        offering_name: "Yamaoka Family Crest",
        offering_image: "YamaokaEstate_YamaokaFamilyCrest.webp"
    };

    red_forest = {
        name: "Red Forest",
        realm_image: "Red_Forest.webp",
        offering_name: "The Last Mask",
        offering_image: "RedForest_TheLastMask.webp"
    };

    ormond = {
        name: "Ormond",
        realm_image: "Ormond.webp",
        offering_name: "Damaged Photo",
        offering_image: "Ormond_DamagedPhoto.webp"
    };

    gideon_meat_plant = {
        name: "Gideon Meat Plant",
        realm_image: "Gideon_Meat_Plant.webp",
        offering_name: "Jigsaw Piece",
        offering_image: "GideonMeatPlant_JigsawPiece.webp"
    };

    springwood = {
        name: "Springwood",
        realm_image: "Springwood.webp",
        offering_name: "The Pied Piper",
        offering_image: "Springwood_ThePiedPiper.webp"
    };

    lerys_memorial_institute = {
        name: "Léry's Memorial Institute",
        realm_image: "Lerys_Memorial_Institute.webp",
        offering_name: "Shattered Glasses",
        offering_image: "LerysMemorialInstitute_ShatteredGlasses.webp"
    };

    backwater_swamp = {
        name: "Backwater Swamp",
        realm_image: "Backwater_Swamp.webp",
        offering_name: "Granmas Cookbook",
        offering_image: "BackwaterSwamp_GranmasCookbook.webp"
    };

    haddonfield = {
        name: "Haddonfield",
        realm_image: "Haddonfield.webp",
        offering_name: "Strode Realty Key",
        offering_image: "Haddonfield_StrodeRealtyKey.webp"
    };

    crotus_prenn_asylum = {
        name: "Crotus Prenn Asylum",
        realm_image: "Crotus_Prenn_Asylum.webp",
        offering_name: "Charred Wedding Photograph",
        offering_image: "CrotusPrennAsylum_CharredWeddingPhotograph.webp"
    };

    autohaven_wreckers = {
        name: "Autohaven Wreckers",
        realm_image: "Autohaven_Wreckers.webp",
        offering_name: "Azarov's Key",
        offering_image: "AutohavenWreckers_AzarovsKey.webp"
    };

    the_macmillan_estate = {
        name: "The MacMillan Estate",
        realm_image: "The_MacMillan_Estate.webp",
        offering_name: "MacMillan's Phalanx Bone",
        offering_image: "TheMacMillanEstate_MacMillansPhalanxBone.webp"
    };

    coldwind_farm = {
        name: "Coldwind Farm",
        realm_image: "Coldwind_Farm.webp",
        offering_name: "Heart Locket",
        offering_image: "ColdwindFarm_HeartLocket.webp"
    };

    withered_isle = {
        name: "Withered Isle",
        realm_image: "Withered_Isle.webp",
        offering_name: "Ichorous Loam",
        offering_image: "WitheredIsle_IchorousLoam.webp"
    }

    unknown = {
        name: "Unknown",
        realm_image: "Unknown.webp",
        offering_name: "Unknown",
        offering_image: "Unknown.webp"
    }

    realms = {
        "Forsaken Boneyard": this.forsaken_boneyard,
        "Raccoon City": this.raccoon_city,
        "Silent Hill": this.silent_hill,
        "Grave of Glenvale": this.grave_of_glenvale,
        "Yamaoka Estate": this.yamaoka_estate,
        "Red Forest": this.red_forest,
        "Ormond": this.ormond,
        "Gideon Meat Plant": this.gideon_meat_plant,
        "Springwoood": this.springwood,
        "Léry's Memorial Institute": this.lerys_memorial_institute,
        "Backwater Swamp": this.backwater_swamp,
        "Haddonfield": this.haddonfield,
        "Crotus Prenn Asylum": this.crotus_prenn_asylum,
        "Autohaven Wreckers": this.autohaven_wreckers,
        "The MacMillan Estate": this.the_macmillan_estate,
        "Coldwind Farm": this.coldwind_farm,
        "Withered Isle": this.withered_isle,
    };

    getAllRealmNames() {
        return Object.keys(this.realms);
    }

    getRealm(name) {
        return this.realms[name];
    }

    getRealmImage(realmName) {
        if (realmName in this.realms) {
            return this.realms[realmName]["realm_image"];
        }
        else {
            return this.unknown["realm_image"];
        }
    }

    getRealmImagePath(realmName) {
        let image;
        if (realmName in this.realms) {
            image = this.realms[realmName]["realm_image"];
        }
        else {
            image = this.unknown["realm_image"];
        }
        return this.REALM_IMAGE_PATH + image;
    }

    getOfferingName(realmName) {
        if (realmName in this.realms) {
            return this.realms[realmName]["offering_name"];
        }
        else {
            return this.unknown["offering_name"];
        }
    }

    getOfferingImage(realmName) {
        if (realmName in this.realms) {
            return this.realms[realmName]["offering_image"];
        }
        else {
            return this.unknown["offering_image"];
        }
    }

    getOfferingImagePath(realmName) {
        let image;
        if (realmName in this.realms) {
            image = this.realms[realmName]["offering_image"];
        }
        else {
            image = this.unknown["offering_image"];
        }
        return this.OFFERING_IMAGE_PATH + image;
    }
}

