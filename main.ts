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
    let newSprite
    //% block="create sprite %sprite of kind %kind"
    export function setSprite(sprite: string, kind: Kind){
        newSprite = kind
        game.createSprite(2, 2)
    }
}