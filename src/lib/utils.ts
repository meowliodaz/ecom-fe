import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formatPrice(
	price: number|string,
	options: {
		currency?: "USD" | "EUR" | "GBP" | "VND",
		notation?: Intl.NumberFormatOptions["notation"]
	} = {}
) {
	const {currency = "USD", notation = "compact"} = options;

	const numericPrice = typeof price === "string" ? parseFloat(price) : price

	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: currency,
		notation: notation
	}).format(numericPrice)
}

export function lstrip(
	str: String,
	chr: String[1]
) {
	let result = str
	try {
		while (result[0] === chr) {
			result = result.substring(1)
		}
		return result;
	}
	catch (e) {
		
	}
}

