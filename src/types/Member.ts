type ImageUrl = string;

export interface Member{
  login: string;
  id: number;
  avatar_url: ImageUrl;
  name: string;
}