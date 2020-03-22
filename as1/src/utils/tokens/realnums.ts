//Name of File : realnums.ts
//Purpose      : Tests to see if word is a real num
//Summary      : Uses the isNaN function in JavaScript to test if a word is a possile number if converted to a string

export const isRealnum = (word: string) => word !== '' && !isNaN(+word);
export const isRealnumRegex = (word: string) => RegExp('^[0-9]+([\\,\\.][0-9]+)?$').test(word);
