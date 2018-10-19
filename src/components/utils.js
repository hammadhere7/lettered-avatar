import Colors from './colors'

export default {
    getColor: (letter) => {
        if (letter)
        {
            let charCode = letter.charCodeAt(0);
            let isNumber = charCode >= 48 && charCode <= 57
            let isAlphabet = charCode >= 65 && charCode <= 90
            if(isNumber || isAlphabet)
            {
                let charIndex = letter.charCodeAt(0) - (isAlphabet ? 65 : 48)
                let colorIndex = charIndex % (isAlphabet ? Colors.alphabets.length : Colors.numbers.length)
                return isAlphabet ? Colors.alphabets[colorIndex] : Colors.numbers[colorIndex]
            }
        }
        return Colors.default_color
    },
    getNameInitials: (name = '', twoLetters = false) => {
        let splittedName = name.toString().toUpperCase().split(' ')
        return twoLetters ? splittedName.length>1 ? splittedName[0].charAt(0) + splittedName[1].charAt(0) : splittedName[0].charAt(0) : splittedName[0].charAt(0)

    }

}
