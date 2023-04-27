import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"
// import project from "./sanity/schemas/project-schema";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "34on15oy",
    dataset: "production", 
    title: "My Personal Website",
    apiVersion: "2023-24-04",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: schemas}
})

export default config