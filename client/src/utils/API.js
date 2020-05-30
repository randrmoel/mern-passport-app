import axios from "axios";

export default {
    // Add Category Categories are unique
    addCat: function(data){
        return axios.post("/api/users/cat", data);
    },

    findAllCat: function(data){
        return axios.get("/api/users/allcat", data);
    },

    findCatByName: function(data){
        return axios.get("/api/users/catbyname", data);
    },

    delCatByName: function(data){
        return axios.delete("/api/users/delcatname", data);
    },

    delCatByID: function(data){
        return axios.delete("/api/users/cat", data);
    },

    addSkill: function(data){
        return axios.post("/api/users/skill", data);
    },

    getAllSkillsByUser: function(data){
        return axios.get("/api/users/skill", data)
    },

    delSkillById: function(data){
        return axios.delete("/api/users/skill", data)
    },
    masterSkill: function(data){
        return axios.put("/api/users/skill", data)
    },
    unmasterSkill: function(data){
        return axios.put("/api/users/unskill", data)
    },
    getAllMasteredSkills: function(data){
        return axios.get("/api/users/allmasteredskill", data)
    },

    getAllUnmasteredSkills: function(data){
        return axios.get("/api/users/allunmasteredskill", data)
    },

    addDef: function(data){
        return axios.post("/api/users/def", data)
    },

    updateDef: function(data){
        return axios.put("/api/users/def", data)
    },

    getDefById: function(data){
        return axios.get("/api/users/def", data)
    },

    delDefById: function(data){
        return axios.delete("/api/users/def", data)
    },

    getAllDefByUser: function(data){
        return axios.get("/api/users/alldeff", data)
    },

    addLib: function(data){
        return axios.post("/api/users/lib", data)
    },

    updateLibUrl: function(data){
        return axios.put("/api/users/liburl", data)
    },
    updateLibType: function(data){
        return axios.put("/api/users/libtype", data)
    },

    getAllLibByUser: function(data){
        return axios.get("/api/users/alllib", data)
    },

    getLibById: function(data){
        return axios.get("/api/users/lib", data)
    },

    getAllVidLib: function(data){
        return axios.get("allvidlib", data)
    },

    getAllTextLib: function(data){
        return axios.get("/api/users/alltextlib", data)
    },

    delLibById: function(data){
        return axios.delete("/api/users/lib", data)
        }
    }