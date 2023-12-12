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

  async getCoursesTutoship(id) {
    try {
      const response = await fetch(`http://localhost:8080/posibleHorario/${id}`, {
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

  async getViewCourses(id) {
    try {
      const response = await fetch(`http://localhost:8080/curso/${id}`, {
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

  async getStudent() {
    try {
      const response = await fetch(`http://localhost:8080/personas`, {
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

  async getStudentTutoship(id) {
    try {
      const response = await fetch(`http://localhost:8080/estudiante/${id}`, {
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

  async postCreatePerson(formData) {
    try {
      const response = await fetch("http://localhost:8080/insertarPersona", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Enviar los datos del formulario en el cuerpo
      });
  
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error en la petición POST:", error);
      throw error;
    }
  }

}
export default ServerRequest;