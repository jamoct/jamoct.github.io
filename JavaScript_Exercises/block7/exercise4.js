var Universe = function (value, type) {

    this.matter = {
        total: 0,
        destroy: (value) => {
            value *= -1;
            this.matter.total += value;
            this.energy.total += value * -1;
        },
        create: (value) => {
            this.energy.total -= value;
            this.matter.total += value;
        }
    }

    this.energy = {
        total: 0,
        create: (value) => {
            this.energy.total += value;
            this.matter.total -= value;
        }
    }

    if (isNaN(value) === false) {
        if (type === 'matter' ) {
            this.matter.total = value;
        } else if (type === 'energy') {
            this.energy.total = value;
        }
    }
}
