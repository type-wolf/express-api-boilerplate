import { set, disconnect } from "mongoose";

const disconnectMongodb = async () => {
	set("strictQuery", true);
	await disconnect();
};

export default disconnectMongodb;
