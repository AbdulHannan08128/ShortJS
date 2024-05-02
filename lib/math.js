// Copyright @ShortJS

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
                throw new Error(`Pass an argument of type String or Array. Received ${typeof (s)}`);
            }
        }

    }
}

export const math = {
    geometry: geometry
}    