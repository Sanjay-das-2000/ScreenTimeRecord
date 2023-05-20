import axios from "axios";

const usersUrl = "http://localhost:8000";


export const addUser = async (user) => {
    try {
        const obj = {
            url: `${usersUrl}/adduser`,
            method: "POST",
            data: user,
        };
        const result = await axios(obj);
        return {
            success: true,
            data: result
        };
    } catch (error) {
        return {
            success: false,
            data: error
        }
    }
};

export const deleteUser = async (id) => {
    try{
        const obj = {
            url: `${usersUrl}/${id}`,
            method: "DELETE"
        };
        const result = await axios(obj);
        console.log(result);

        return{
            status: true,
            data: result.data,
        }
    }
    catch(error){
        return{
            success: false,
            data: error,
        }
    }
};

export const editUser = async (id, user) => {
    try {
        const obj = {
            url: `${usersUrl}/${id}`,
            method: "PUT",
            data: user,
        };
        const result = await axios(obj);
        console.log(result);
        return {
            status: true,
            data: result.data
        }
    } catch (error) {
        return {
            success: false,
            data: error
        }
    }
};

export const getAllUsers = async () => {
    try {
        const obj = {
            url: `${usersUrl}/getallusers`,
            method: "GET",
        };
        const result = await axios(obj);
        return {
            status: true,
            data: result.data
        }
    } catch (error) {
        return {
            success: false,
            data: error
        }
    }
};


export const getUserById = async (id) => {
    try {
        const obj = {
            url: `${usersUrl}/${id}`,
            method: "GET",
            data: id
        };
        const result = await axios(obj);
        return {
            status: true,
            data: result.data
        }
    } catch (error) {
        return {
            success: false,
            data: error
        }
    }
}

export const addAdmin = async (user) => {
    try {
        const obj = {
            url: `${usersUrl}/addadmin`,
            method: "POST",
            data: user
        };
        const result = await axios(obj);
        return {
            status: true,
            data: result.data
        }
    } catch (error) {
        return {
            success: false,
            data: error
        }
    }
}

export const getAdmin = async (email) => {
    try {
        const obj = {
            url: `${usersUrl}/getadmin`,
            method: "POST",
            data: email
        };
        const result = await axios(obj);
        return {
            status: true,
            data: result.data
        }
    } catch (error) {
        return {
            success: false,
            data: error
        }
    }
}