export type LevelType = {
    title: string,
    color: string,
    icon: string,
    imc: number[]
}

export const Level: LevelType[] = [
    { title: 'Magreza', color: '#96a3ab', icon: 'bi-hand-thumbs-down-fill', imc: [0, 18.5] },
    { title: 'Normal', color: '#0ead69', icon: 'bi-hand-thumbs-up-fill', imc: [18.6, 24.9] },
    { title: 'Sobrepeso', color: '#e2b039', icon: 'bi-hand-thumbs-down-fill', imc: [25, 30] },
    { title: 'Obesidade', color: '#c3423f', icon: 'bi-hand-thumbs-down-fill', imc: [30.1, 99] }
]