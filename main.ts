player.onChat("ainfo", function () {
    player.say("Příkazy pro \"agenta\":")
    player.say("/aorej (num1) (num2) -> agent začne orat plochu 1 blok před sebou směrem doprava (num1) dozadu (num2) ")
    player.say("/atp -> teleportne agenta na tvoji pozici natočeného na sever (Z-)")
    player.say("/avlevo (num1) -> otočí agenta směrem doleva (num1)x")
    player.say("/avpravo (num1) -> otočí agenta směrem doprava (num1)x")
    player.say("/akopej vpred (num1) (num2) (num3) -> agent začne kopat tunel před sebe se zadanou výškou (num1), šířkou směrem doprava (num2) a délkou (num3)")
})
player.onChat("avlevo", function (num1) {
    for (let index = 0; index < num1; index++) {
        agent.turn(LEFT_TURN)
    }
})
player.onChat("aorej", function (num1, num2) {
    for (let index = 0; index < num2; index++) {
        for (let index = 0; index < num1; index++) {
            agent.till(FORWARD)
            agent.move(RIGHT, 1)
        }
        agent.move(BACK, 1)
        agent.move(LEFT, num1)
    }
})
player.onChat("atp", function () {
    agent.teleport(pos(0, 0, 0), NORTH)
})
player.onChat("avpravo", function (num1) {
    for (let index = 0; index < num1; index++) {
        agent.turn(RIGHT_TURN)
    }
})
player.onChat("akopej vpred", function (num1, num2, num3) {
    for (let index = 0; index < num3; index++) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        if (num1 >= 2) {
            for (let index = 0; index < num1 - 1; index++) {
                agent.destroy(UP)
            }
        }
        if (num2 >= 2) {
            agent.destroy(RIGHT)
            for (let index = 0; index < num2 - 1; index++) {
                agent.move(RIGHT, 1)
                for (let index = 0; index < num1; index++) {
                    agent.destroy(UP)
                }
            }
            agent.move(LEFT, num2 - 1)
        }
    }
})
