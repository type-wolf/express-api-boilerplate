import { connect, set } from "mongoose";
import { ConnectMongodbType } from "../types/Mongodb/Connect";

const connectMongogb = async (datas: ConnectMongodbType) => {
	const { uri } = datas;
	const DEFAULT_MONGODB_URI = process.env.MONGODB_URI as string;
	const MONGODB_URI = uri || DEFAULT_MONGODB_URI;
	set("strictQuery", true);
	const mongoose = await connect(MONGODB_URI);
	return mongoose;
};

export default connectMongogb;
