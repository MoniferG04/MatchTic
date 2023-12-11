class ServerRequest {
    async getCourses() {
        try {
          const response = await fetch("http://localhost:8080/materias", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });
    
          const data = await response.json();
          return data;
        } catch (error) {
          console.error("Error en la peticion de cursos:", error);
          throw error;
        }
      }
}
export default ServerRequest;