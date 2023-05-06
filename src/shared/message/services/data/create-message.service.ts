import { IMessageDto } from "shared/message/interfaces/message/message-dto.interface";
import { post } from "services/api";
import { ICreateMessageDtoInterface } from "shared/message/interfaces/message/create-message-dto.interface";

export const createMessageService = (
	data: ICreateMessageDtoInterface,
	token: string
) => post<IMessageDto>("message", { authToken: token, body: data });
