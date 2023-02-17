namespace game {
    export enum Kind {
        //% block="player"
        Player,
        //% block="enemy"
        Enemy,
        //% block="food"
        Food,
        //% block="colletible"
        Colletible
    }
    //% block="create sprite %sprite of kind %kind"
    export function setSprite(sprite: any, kind: Kind){
        sprite = kind
        game.createSprite(2, 2)
    }
    //% block="show life %lifes"
    //% lifes.min=1 lifes.max=7
    export function showLife(lifes: number) {
        for(let i = 1; i < lifes; i++){
            led.plot(i, 0)
        }
    }
}
namespace serial {
    export function serialGamePoints () {
        serial.writeValue("score", game.score())
    }
}