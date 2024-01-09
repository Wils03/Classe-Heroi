class classeDoHeroi{
    constructor(nomeHeroi,idadeHeroi,tipoClasse,){
        this.nomeHeroi = nomeHeroi;
        this.idadeHeroi = idadeHeroi;
        this.tipoClasse = tipoClasse;
    }
    ataque(){
        let classe = this.typeAtackClass(this.tipoClasse);
        console.log(`o ${this.tipoClasse} atacou usando ${classe}.`);
    }
    
    typeAtackClass(tipoClasse){
        let typeAtack;
        if (tipoClasse === "guerreiro"){
            return typeAtack = "espada";
        }else{
            if (tipoClasse === "mago"){
                return typeAtack = "mágia";
            }else{
                if (tipoClasse === "monge"){
                    return typeAtack = "artes marciais";
                }else if (tipoClasse === "ninja"){
                    return typeAtack = "shuriken";
                } else {
                    console.log("Digite uma classe válida.");
                }
            }
        }
    }
}
 let heroiCavaleiro = new classeDoHeroi ("Claudinho",18,"guerreiro");
 let heroiSabio  = new classeDoHeroi ("Merlin","80","mago");
 let heroiMonge  = new classeDoHeroi ("Jorge","100","monge");
 let heroiAssassino  = new classeDoHeroi ("Eredin","20","ninja");

 heroiCavaleiro.ataque();
 heroiSabio.ataque();
 heroiMonge.ataque();
 heroiAssassino.ataque();