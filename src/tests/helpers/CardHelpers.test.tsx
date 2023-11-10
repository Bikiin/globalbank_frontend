import { validFormatDate, calculateAge } from '../../helpers/CardHelpers'

describe('Card helpers', ()=>{
    it('should calculate the correct age from a birthdate', () => {
        const birthdate = '11-25-2002';
        const expectedAge = new Date().getFullYear() - 2002;
        expect(calculateAge(birthdate)).toBe(expectedAge);
    });

    it('should account for the birthdate not yet passed this year', () => {
        const today = new Date();
        expect(calculateAge(today.toDateString())).toBe(0);
    });

    it('should format date string to dd/mm/yyyy', () => {
        expect(validFormatDate('2023-01-14')).toBe('15/01/2023');
        expect(validFormatDate('2023-11-08')).toBe('09/11/2023');
    });
})