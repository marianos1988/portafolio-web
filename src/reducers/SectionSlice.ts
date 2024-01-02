import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  sobreMi: {
    perfil: string,
    skills: string,
    educacion: string,
  },
  portafolio: {
    trabajos: string,
    proyectos: string,
    github: string
  },
  contacto: {
    email: string
    instagram: string,
    linkedin: string
  }
}

const initialState:InitialState = {
  sobreMi: {
    perfil: "perfil",
    skills: "skills" ,
    educacion: "educacion",
  },
  portafolio: {
    trabajos: "trabajos",
    proyectos: "proyectos",
    github: "github"
  },
  contacto: {
    email: "email",
    instagram: "instagram",
    linkedin: "linkedin"
  }
};

export const sectionSlice = createSlice({
  name: "section",
  initialState: initialState,
  reducers:{


  }
});

export const {} = sectionSlice.actions;

export default sectionSlice.reducer;