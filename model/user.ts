export interface Account {
  id: string;
  name?: string;
  email?: string;
  password?: number;
  role: "true" | "false" | "";
  image?: string;
}
