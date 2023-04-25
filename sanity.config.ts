import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"

const config = defineConfig({
    projectId: "34on15oy",
    dataset: "production", 
    title: "My Personal Website",
    apiVersion: "2023-24-04",
    basePath: "/admin",
    plugins: [deskTool()]
})

export default config