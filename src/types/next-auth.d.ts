import { DefaultSession } from "next-auth";

// Permet d'étendre la session utilisateur de NextAuth
declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Ajoute l'id !
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
  }
}
