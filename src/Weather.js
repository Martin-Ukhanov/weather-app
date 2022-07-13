const Weather = (name, temp, desc) => {
    const getName = () => name;
    const getTemp = () => temp;
    const getDesc = () => desc;
    return { getName, getTemp, getDesc };
}

export { Weather };