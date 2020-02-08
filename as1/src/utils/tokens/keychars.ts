import { separators } from './separators';
import { operators } from './operators';

// const keychars = [
//     ...separators.map((separator) => ({
//         value: separator,
//         type: 'separator'
//     })),
//     ...operators.map((operator) => ({
//         value: operator,
//         type: 'operator'
//     }))
// ];

const keycharsArr = [...separators, ...operators];

export const isKeychar = (char: string) => keycharsArr.includes(char);

export const hasKeychar = (word: string) => keycharsArr.some((char) => word.includes(char));

// export const findKeychars = (word: string) => {
//     let isFound = false;
//     let foundKeychars: any[] = [];
//     word.split('').forEach((char, index) => {
//         if (isKeychar(char)) {
//             isFound = true;
//             let foundKeychar = keychars.find((keychar) => keychar.value === char);
//             foundKeychars.push({
//                 value: foundKeychar?.value,
//                 type: foundKeychar?.type,
//                 index: index
//             });
//         }
//     });
//     return {
//         isFound,
//         foundKeychars
//     };
// };
