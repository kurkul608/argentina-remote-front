import { IMessageDto } from "shared/message/interfaces/message-dto.interface";
import { post } from "services/api";

export const createMessageService = (
	data: Omit<IMessageDto, "_id">,
	token: string
) => post<IMessageDto>("message", { authToken: token, body: data });
