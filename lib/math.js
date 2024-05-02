// Copyright @ShortJS
// Author: Abdul Hannan - https://abdul-hannan.vercel.app

const geometry = {
    square: {
        area: (s) => {
            if (Array.isArray(s)) {
                let areas = [];
                s.forEach((side) => {
                    areas.push(math.geometry.square.area(side))
                })
                return areas;
            } else if (typeof (s) == 'string') {
                return eval(`${s}**2`).toString();
            }
            else if (typeof (s) == 'number') {
                return s ** 2
            } else {
                throw new Error(`Pass an argument of type String or Array. Received ${typeof (s)}`);
            }
        },
        perimeter: (s) => {
            if (Array.isArray(s)) {
                let perimeters = [];
                s.forEach((side) => {
                    perimeters.push(math.geometry.square.perimeter(side))
                })
                return perimeters;
            } else if (typeof (s) == 'string') {
                return eval(`${s}*4`).toString();
            }
            else if (typeof (s) == 'number') {
                return s * 4
            } else {
                throw new Error(`Pass an argument of type String, Number or Array. Received ${typeof (s)}`);
            }
        }

    },

}

const base = {
    percentage: {
        value: (total, value) => {
            if (total && !value) {
                if (Array.isArray(total)) {
                    let newArray = [];
                    total.forEach(([newTotal, newValue]) => {
                        let percentage = math.functions.base.percentage.value(newTotal, newValue);
                        newArray.push(percentage);
                    })
                    return newArray;
                }
            }
            else if (typeof (total) == 'number' && typeof (value) == 'number') {
                return (value / 100) * total
            }
            else if (typeof (total) == 'string' && typeof (value) == 'string') {
                return eval(`(${value}/100)*${total}`).toString();

            }
            else {
                throw new Error(`Pass arguments only of type Strings, Numbers or Arrays. Received ${typeof (total)} and ${typeof (value)}`);
            }

        },
        percent: (total, number) => {
            if (total && !number) {
                if (Array.isArray(total)) {
                    let newArray = [];
                    total.forEach(([newNumber, newTotal]) => {
                        let percentage = math.functions.base.percentage.value(newNumber, newTotal);
                        newArray.push(percentage);
                    })
                    return newArray;
                }
            }
            else if (typeof (number) == 'number' && typeof (total) == 'number') {
                return (number / total) * 100
            }
            else if (typeof (number) == 'string' && typeof (total) == 'string') {
                return eval(`(${number}/${total})*100`).toString();

            }
            else {
                throw new Error(`Pass arguments only of type Strings, Numbers or Arrays. Received ${typeof (total)} and ${typeof (value)}`);
            }
        }


    }
}


export const math = {
    geometry: geometry,
    functions: {
        base: base
    }


}    