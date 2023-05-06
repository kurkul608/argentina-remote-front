import { get, post } from "services/api";
import { IPostDto } from "shared/post/interfaces/post-dto.interface";
import { ITableDataInterface } from "interfaces/dto/table-data.interface";
import { IPostCreateDto } from "shared/post/interfaces/post-create-dto.interface";

export const getPost = (id: string, token: string) =>
	get<IPostDto>(`post/${id}`, { authToken: token });

interface IPostsQuery {
	[key: string]: number | boolean;
	limit: number;
	offset: number;
}
export const getPosts = (token: string, query: IPostsQuery) =>
	get<ITableDataInterface<IPostDto>>("post", { authToken: token, query });

export const createPost = (token: string, body: IPostCreateDto) =>
	post<IPostDto>("post", { authToken: token, body });

export const changePost = (
	id: string,
	token: string,
	body: Partial<IPostDto>
) => post<IPostDto>(`post/${id}`, { authToken: token, body });
