import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UsersState } from "../../../types/types";

const initialUserState: UsersState = {
  list: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialUserState,
  reducers: {
    loadUsers: (
      currentUsersState,
      action: PayloadAction<User[]>
    ): UsersState => ({ ...currentUsersState, list: [...action.payload] }),
  },
});

export const usersReducer = usersSlice.reducer;

export const { loadUsers: loadUsersActionCreator } = usersSlice.actions;
