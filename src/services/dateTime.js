import dayjs from 'dayjs'

export const dateFormat = (date) => {

    const nowFormated =  dayjs(new Date())
    const dateFormated = dayjs(date)
 

    const result = nowFormated.diff(dateFormated.set('hour', 24), "year")
    if (result === 0){
        const result = nowFormated.diff(dateFormated.set('hour', 24), 'months')
        if (result === 0){
            const result = nowFormated.diff(dateFormated.set('hour', 24), 'days')
            const str = result===1 ? 'dia' : 'dias'    

            return `${result} ${str}`

        }

        const str = result===1 ? 'mês' : 'meses'    

        return `${result} ${str}`
    }

    return `${result} anos`
}


export const dateConvert = (date) => {
    const dateFormated = dayjs(date).set('hour', 24)
    const result = dateFormated.format('DD/MM/YYYY')
    return result
}
