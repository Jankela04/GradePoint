const convertNumber = (str: string): number => {
    if (str === "") {
        throw new Error("Empty string");
    }
    const num = Number(str);
    if (isNaN(num) || num <= 0) {
        throw new Error("Please Enter a positive number");
    }

    return num;
};

export default convertNumber;
