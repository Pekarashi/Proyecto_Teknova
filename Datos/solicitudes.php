<?php
include "../Datos/conexion.php";
require_once "Usuario.php";

class Solicitudes
{
    private $conexion;

    public function __construct()
    {
        $host = "localhost";
        $dbname = "draftosaurus";
        $usuario = "root";
        $password = "";

        $this->conexion = new mysqli($host, $usuario, $password, $dbname);

        if ($this->conexion->connect_error) {
            die("Error de conexión: " . $this->conexion->connect_error);
        }

        $this->conexion->set_charset("utf8");
    }

    public function login(string $correo, string $contrasenia): ?Usuario
    {
        $stmt = $this->conexion->prepare("SELECT * FROM usuario WHERE correo = ? AND contrasenia = ?");
        if (!$stmt) {
            return null;
        }
        $stmt->bind_param("ss", $correo, $contrasenia);
        $stmt->execute();
        $resultado = $stmt->get_result();
        $fila = $resultado->fetch_assoc();

        if ($fila) {
            return new Usuario(
                $fila["usuario_id"],
                $fila["nombre"],
                $fila["correo"],
                $fila["contrasenia"]
            );
        }
        return null;
    }

    public function registro($nombre, $correo, $password){
        $stmt = $this->conexion->prepare("INSERT INTO usuario (nombre, correo, contrasenia) VALUES (?, ?, ?)");
        if ($stmt === false) {
            die("Error en la preparación de la consulta: " . $conexion->error);
        }
        $stmt->bind_param("sss", $nombre, $correo, $password);
        if ($stmt->execute()) {
            $stmt->close();
            $this->conexion->close();
            return true;
        } else {
            return false;
        }

    }
}