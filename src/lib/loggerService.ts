import { Logger } from "./types/Logger.ts";
import { LogLevel } from "./constants/LogLevel.ts";

export class loggerService implements Logger {
	constructor(
		private readonly logLevel: LogLevel,
		private readonly logger: Logger
	) {}

	private createTimestamp(date = new Date()): string {
		return `${date.getHours().toString().padStart(2, "0")}:${date
			.getMinutes()
			.toString()
			.padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
	}

	private loggerPrefix(): string {
		return `[VueQueryfy ${this.createTimestamp()}] `;
	}

	private concatArgs(...args: unknown[]): unknown[] {
		const res: unknown[] = [this.loggerPrefix()];

		for (const arg of args) {
			if (typeof arg === "string") res[0] += arg;
			else res.push(arg);
		}

		return res;
	}

	debug(...args: unknown[]): void {
		if (this.logLevel <= LogLevel.DEBUG) {
			this.logger.debug(...this.concatArgs(...args));
		}
	}

	log(...args: unknown[]): void {
		if (this.logLevel <= LogLevel.LOG) {
			this.logger.log(...this.concatArgs(...args));
		}
	}

	info(...args: unknown[]): void {
		if (this.logLevel <= LogLevel.INFO) {
			this.logger.info(...this.concatArgs(...args));
		}
	}

	warn(...args: unknown[]): void {
		if (this.logLevel <= LogLevel.WARN) {
			this.logger.warn(...this.concatArgs(...args));
		}
	}

	error(...args: unknown[]): void {
		if (this.logLevel <= LogLevel.ERROR) {
			this.logger.error(...this.concatArgs(...args));
		}
	}
}
