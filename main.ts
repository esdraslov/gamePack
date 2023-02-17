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
}