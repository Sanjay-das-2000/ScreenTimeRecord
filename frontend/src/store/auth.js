
import { createSlice } from "@reduxjs/toolkit";

let adminAuthInitials = {
  isAdminAuthenticated: JSON.parse(localStorage.getItem("admin_details")) ? true : false,
}

const AdminAuthSlice = createSlice({
    name: "adminauthentication",
    initialState: adminAuthInitials,
    reducers: {
      login(state) {
        state.isAdminAuthenticated = true;
        let obj = {
          isAdminAuthenticated: true,
        }
        localStorage.setItem('admin_details', JSON.stringify(obj));
      },
      logout(state) {
        state.isAdminAuthenticated = false;
        localStorage.removeItem('admin_details');
      },
    },
  });

export const adminAuthActions = AdminAuthSlice.actions;

export default AdminAuthSlice.reducer