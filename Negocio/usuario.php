<?php

class Usuario
{
    private int $usuario_id;
    private string $nombre;
    private string $correo;
    private string $contrasenia;

    public function __construct(int $usuario_id, string $nombre, string $correo, string $contrasenia)
    {
        $this->usuario_id = $usuario_id;
        $this->nombre = $nombre;
        $this->correo = $correo;
        $this->contrasenia = $contrasenia;
    }

    public function getUsuarioId(): int
    {
        return $this->usuario_id;
    }

    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function getCorreo(): string
    {
        return $this->correo;
    }

    public function getContrasenia(): string
    {
        return $this->contrasenia;
    }

    public function setNombre(string $nombre): void
    {
        $this->nombre = $nombre;
    }

    public function setCorreo(string $correo): void
    {
        $this->correo = $correo;
    }

    public function setContrasenia(string $contrasenia): void
    {
        $this->contrasenia = $contrasenia;
    }
}
