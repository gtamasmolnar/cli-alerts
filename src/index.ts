import chalk from 'chalk';
import sym from 'log-symbols';

const green = chalk.green;
const greenI = chalk.green.inverse;
const red = chalk.red;
const redI = chalk.red.bold.inverse;
const orange = chalk.hex('#eb6315');
const orangeI = chalk.hex('#eb6315').inverse;
const blue = chalk.blue;
const blueI = chalk.blue.inverse;

type Options = { type: string; msg: string; name: string };

const alert = (options: Options): void => {
	const defaultOptions = {
		type: `error`,
		msg: `You forgot to define all options.`,
		name: ``,
	};
	const opts = { ...defaultOptions, ...options };
	const { type, msg, name } = opts;
	const printName = name ? name : type.toUpperCase();

	if (type === `success`) {
		console.log(`\n${sym.success} ${greenI(` ${printName} `)} ${green(msg)}\n`);
	}

	if (type === `warning`) {
		console.log(`\n${sym.warning} ${orangeI(` ${printName} `)} ${orange(msg)}\n`);
	}

	if (type === `info`) {
		console.log(`\n${sym.info} ${blueI(` ${printName} `)} ${blue(msg)}\n`);
	}

	if (type === `error`) {
		console.log(`\n${sym.error} ${redI(` ${printName} `)} ${red(msg)}\n`);
	}
};

export default alert;
