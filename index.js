// criando a classe para representar o herói

class heroiDeUmaAventura{
        constructor(nomeHeroi, idadeHeroi, tipoHeroi){
                this.nomeHeroi = nomeHeroi;
                this.idadeHeroi = idadeHeroi;
                this.tipoHeroi = tipoHeroi;
        }
        
        
        // criando o método atacar
        atacar(){
                let ataque = " ";

                // definindo o ataque conforme o tipo de herói
                switch(this.tipoHeroi){
                        case "mago":
                                ataque = "magia";
                                break;
                        case "guerreiro":
                                ataque = "espada";
                                break;
                        case "monge":
                                ataque = "artes marciais";
                                break;
                        case "ninja":
                                ataque = "shuriken";
                }

                // exibindo a mensagem
                console.log("O " + this.tipoHeroi + " atacaou usando " + ataque);
        }
}

// exemplo
let primeiroHeroi = new heroiDeUmaAventura("Merlin", 100, "mago");
let segundoHeroi = new heroiDeUmaAventura("Arthur", 150, "guerreiro");
let terceiroHeroi = new heroiDeUmaAventura("Francisco", 200, "monge");
let quartoHeroi = new heroiDeUmaAventura("Hattori", 250, "ninja");

primeiroHeroi.atacar();
segundoHeroi.atacar();
terceiroHeroi.atacar();
quartoHeroi.atacar();