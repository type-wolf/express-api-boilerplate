import { model, Schema } from "mongoose";
import type { UsersModelType } from "../../../types/Mongodb/Model/Users/UsersModel";

export const Users = new Schema();

export default model<UsersModelType>("user", Users);
