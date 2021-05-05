interface INumbers {
	number_1: number;
	number_2: number;
}

export const sum = ({ number_1, number_2 }: INumbers): number => {
	return number_1 + number_2;
};

export const multiply = ({ number_1, number_2 }: INumbers) :number => {
	return number_1 * number_2;
};

export const divide = ({ number_1, number_2 }: INumbers): number => {
	return number_1 / number_2;
};

export const isEquals = ({ number_1, number_2 }: INumbers): boolean => {
	return number_1 === number_2;
};
