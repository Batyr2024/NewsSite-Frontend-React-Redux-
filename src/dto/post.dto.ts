import { TagDto } from "./tag.dto";

export class PostDto {
    readonly content!: string;
    readonly topic!: string;
    readonly idPostUser!: number;
    tag? : Array<TagDto>;
}