export function formatFio(string: string) {
    if (string === '') return string;
    
    const firstLetter = `${string[0].toUpperCase()}.`;
    const secondLetter = string.length > 1 ? `${string[1].toUpperCase()}.` : '';
    const thirdLetter = string.length > 2 ? `${string[2].toUpperCase()}` : '';
    const lastLetters = string.length > 3 ? string.slice(3) : '';

    return `${firstLetter} ${secondLetter} ${thirdLetter}${lastLetters}`;
}
