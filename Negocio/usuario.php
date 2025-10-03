<?php

class Usuario
{
    private int $usuario_id;
    private string $nombre;
    private string $correo;
    private string $contrasenia;
    private ?string $imagen_perfil; 

    public function __construct(
        int $usuario_id, 
        string $nombre, 
        string $correo, 
        string $contrasenia, 
        ?string $imagen_perfil = null 
    ) {
        $this->usuario_id = $usuario_id;
        $this->nombre = $nombre;
        $this->correo = $correo;
        $this->contrasenia = $contrasenia;
        $this->imagen_perfil = $imagen_perfil;
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

    public function getImagenPerfil(): ?string
    {
        return $this->imagen_perfil;
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

    public function setImagenPerfil(?string $imagen_perfil): void
    {
        $this->imagen_perfil = $imagen_perfil;
    }
}
