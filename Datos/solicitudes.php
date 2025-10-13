<?php
include "../Datos/conexion.php";  // Incluimos la conexión (aunque luego la volvemos a crear)
require_once "Usuario.php";       // Incluimos la clase Usuario

class Solicitudes
{
    private $conexion; // Variable interna para guardar la conexión a la DB

    // Constructor: se ejecuta cuando creas un objeto de esta clase
    public function __construct()
    {
        $host = "localhost";
        $dbname = "draftosaurus";
        $usuario = "root";
        $password = "";

        // Creamos la conexión a MySQL
        $this->conexion = new mysqli($host, $usuario, $password, $dbname);

        // Si hubo error, detenemos todo y mostramos el error
        if ($this->conexion->connect_error) {
            die("Error de conexión: " . $this->conexion->connect_error);
        }

        // Establecemos el conjunto de caracteres UTF-8
        $this->conexion->set_charset("utf8");
    }

    // Función de login: recibe correo y contraseña
    public function login(string $correo, string $contrasenia): ?Usuario
    {
        // Preparamos la consulta de forma segura
        $stmt = $this->conexion->prepare("SELECT * FROM usuario WHERE correo = ? AND contrasenia = ?");
        if (!$stmt) {
            return null; // Si falla la preparación, devuelve null
        }

        $stmt->bind_param("ss", $correo, $contrasenia); // Vinculamos parámetros
        $stmt->execute();                               // Ejecutamos la consulta
        $resultado = $stmt->get_result();              // Obtenemos los resultados
        $fila = $resultado->fetch_assoc();             // Tomamos la primera fila

        // Si encontramos el usuario, devolvemos un objeto Usuario
        if ($fila) {
            return new Usuario(
                $fila["usuario_id"],
                $fila["nombre"],
                $fila["correo"],
                $fila["contrasenia"]
            );
        }

        // Si no se encontró, devolvemos null
        return null;
    }

    // Función para registrar un nuevo usuario
    public function registro($nombre, $correo, $password)
    {
        // Preparamos la consulta INSERT
        $stmt = $this->conexion->prepare("INSERT INTO usuario (nombre, correo, contrasenia) VALUES (?, ?, ?)");
        if ($stmt === false) {
            die("Error en la preparación de la consulta: " . $this->conexion->error);
        }

        $stmt->bind_param("sss", $nombre, $correo, $password); // Vinculamos los datos

        if ($stmt->execute()) { // Si se ejecuta correctamente
            $stmt->close();      // Cerramos la consulta
            $this->conexion->close(); // Cerramos la conexión
            return true;         // Indicamos éxito
        } else {
            return false;        // Si hubo error, devolvemos false
        }
    }
}
