let perfil = "administrador"

switch (perfil){
    case "":
        console.log("Debe especificar el perfil del usuario");
        break;
    case "administrador":
    case "Administrador":
    case "ADMINISTRADOR":
        console.log("Usted tiene todos los privilegios de uso del sistema");
        break;
    case "asistente":
    case "Asistente":
    case "ASISTENTE":
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
        break;
    case "invitado":
    case "Invitado":
    case "INVITADO":
        console.log("Usted sólo tiene permisos de consultar datos");
        break;
    default :
    console.log("Debe especificar un perfil válido")
}
