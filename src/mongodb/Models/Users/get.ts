import UsersModel from "./UsersModel";

export const getUsers = async () => {
	const users = await UsersModel.find();
	return users;
};
