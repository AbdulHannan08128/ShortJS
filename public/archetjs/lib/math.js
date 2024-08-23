const math = {
    geometry: {
        square: {
            area: (s) => {
                if (Array.isArray(s)) {
                    let areas = [];
                    s.forEach((side) => {
                        areas.push(math.geometry.square.area(side));
                    });
                    return areas;
                } else if (typeof s === 'string') {
                    return eval(`${s}**2`).toString();
                } else if (typeof s === 'number') {
                    return s ** 2;
                } else {
                    throw new Error(`Pass an argument of type String or Array. Received ${typeof s}`);
                }
            },
            perimeter: (s) => {
                if (Array.isArray(s)) {
                    let perimeters = [];
                    s.forEach((side) => {
                        perimeters.push(math.geometry.square.perimeter(side));
                    });
                    return perimeters;
                } else if (typeof s === 'string') {
                    return eval(`${s}*4`).toString();
                } else if (typeof s === 'number') {
                    return s * 4;
                } else {
                    throw new Error(`Pass an argument of type String, Number or Array. Received ${typeof s}`);
                }
            }
        }
    },

    base: {
        percentage: {
            value: (total, value) => {
                if (total && !value) {
                    if (Array.isArray(total)) {
                        let newArray = [];
                        total.forEach(([newTotal, newValue]) => {
                            let percentage = math.base.percentage.value(newTotal, newValue);
                            newArray.push(percentage);
                        });
                        return newArray;
                    }
                } else if (typeof total === 'number' && typeof value === 'number') {
                    return (value / 100) * total;
                } else if (typeof total === 'string' && typeof value === 'string') {
                    return eval(`(${value}/100)*${total}`).toString();
                } else {
                    throw new Error(`Pass arguments only of type Strings, Numbers or Arrays. Received ${typeof total} and ${typeof value}`);
                }
            },
            percent: (total, number) => {
                if (total && !number) {
                    if (Array.isArray(total)) {
                        let newArray = [];
                        total.forEach(([newNumber, newTotal]) => {
                            let percentage = math.base.percentage.percent(newNumber, newTotal);
                            newArray.push(percentage);
                        });
                        return newArray;
                    }
                } else if (typeof number === 'number' && typeof total === 'number') {
                    return (number / total) * 100;
                } else if (typeof number === 'string' && typeof total === 'string') {
                    return eval(`(${number}/${total})*100`).toString();
                } else {
                    throw new Error(`Pass arguments only of type Strings, Numbers or Arrays. Received ${typeof total} and ${typeof value}`);
                }
            }
        },
        square: (n) => {
            if (Array.isArray(n)) {
                let newSquares = [];
                n.forEach(number => {
                    newSquares.push(math.base.square(number));
                })
                return newSquares;
            } else if (typeof (n) == 'number') {
                return n ** 2;
            }
            else if (typeof (n) == 'string') {
                return eval(`${n}**2`).toString();
            }
            else {

            }
        },
        cube: (n) => {
            if (Array.isArray(n)) {
                let newCubes = [];
                n.forEach(number => {
                    newCubes.push(math.base.cube(number));
                })
                return newCubes;
            } else if (typeof (n) == 'number') {
                return n ** 3;
            }
            else if (typeof (n) == 'string') {
                return eval(`${n}**3`).toString();
            }
            else {

            }
        }

    },
    power: (number, degree) => {
        if (number && !degree) {
            if (Array.isArray(number)) {
                let newArray = [];
                number.forEach(([newNumber, newDegree]) => {
                    let power = math.power(newNumber, newDegree);
                    newArray.push(power);
                });
                return newArray;
            }
        } else if (typeof number === 'number' && typeof degree === 'number') {
            return number ** degree;
        } else if (typeof number === 'string' && typeof degree === 'string') {
            return eval(`${number}**${degree}`).toString();
        } else {
            throw new Error(`Pass arguments only of type Strings, Numbers or Arrays. Received ${typeof total} and ${typeof degree}`);
        }
    }


};

export { math };
