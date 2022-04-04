export class SistemaAuteticacao{

    static login(autenticavel,senha){
        if(SistemaAuteticacao.ehautenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehautenticavel(autenticavel){
        return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function;
    }
}