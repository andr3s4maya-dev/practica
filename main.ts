let lluvia_dias = 0
let total_lluvia = 0
let promedio_lluvia = 0
let dias = 0
function simulador_lluvia () {
    lluvia_dias = 0
    total_lluvia = 0
    promedio_lluvia = 0
    dias = 0
    basic.showString("Lluvia en mts2 durant...")
    while (dias <= 30) {
        lluvia_dias = randint(0, 6)
        total_lluvia += lluvia_dias
        dias += 1
        promedio_lluvia += total_lluvia / 30
        basic.showNumber(promedio_lluvia)
    }
}
