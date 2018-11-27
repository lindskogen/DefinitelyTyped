// Type definitions for react-datepicker 2.0
// Project: https://github.com/Hacker0x01/react-datepicker
// Definitions by: Rajab Shakirov <https://github.com/radziksh>,
//                 Andrey Balokha <https://github.com/andrewBalekha>,
//                 Greg Smith <https://github.com/smrq>,
//                 Platon Pronko <https://github.com/Rogach>
//                 Roy Xue <https://github.com/royxue>
//                 Koala Human <https://github.com/KoalaHuman>
//                 Sean Kelley <https://github.com/seansfkelley>
//                 Jake Boone <https://github.com/jakeboone02>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import * as Popper from "popper.js";

export interface ReactDatePickerProps {
	adjustDateOnChange?: boolean;
	allowSameDay?: boolean;
	autoComplete?: string;
	autoFocus?: boolean;
	calendarClassName?: string;
	calendarContainer?(props: { children: React.ReactNode[] }): React.ReactNode;
	children?: React.ReactNode;
	className?: string;
	customInput?: React.ReactNode;
	customInputRef?: string;
	dateFormat?: string | string[];
	dateFormatCalendar?: string;
	dayClassName?(date: Date): string | null;
	disabled?: boolean;
	disabledKeyboardNavigation?: boolean;
	dropdownMode?: 'scroll' | 'select';
	endDate?: Date;
	excludeDates?: Date[];
	excludeTimes?: Date[];
	filterDate?(date: Date): boolean;
	fixedHeight?: boolean;
	forceShowMonthNavigation?: boolean;
	formatWeekNumber?(date: Date): string | number;
	highlightDates?: Date[];
	id?: string;
	includeDates?: Date[];
	includeTimes?: Date[];
	injectTimes?: Date[];
	inline?: boolean;
	isClearable?: boolean;
	locale?: string;
	maxDate?: Date;
	maxTime?: Date;
	minDate?: Date;
	minTime?: Date;
	monthsShown?: number;
	name?: string;
	onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
	onChange(date: Date | null, event: React.SyntheticEvent<any> | undefined): void;
	onChangeRaw?(event: React.FocusEvent<HTMLInputElement>): void;
	onClickOutside?(event: React.MouseEvent<HTMLDivElement>): void;
	onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
	onKeyDown?(event: React.KeyboardEvent<HTMLDivElement>): void;
	onMonthChange?(date: Date): void;
	onSelect?(date: Date, event: React.SyntheticEvent<any> | undefined): void;
	onWeekSelect?(firstDayOfWeek: Date, weekNumber: string | number, event: React.SyntheticEvent<any> | undefined): void;
	onInputClick?(): void;
	onYearChange?(date: Date): void;
	onInputError?(err: {code: number; msg: string}): void;
	open?: boolean;
	openToDate?: Date;
	peekNextMonth?: boolean;
	placeholderText?: string;
	popperClassName?: string;
	popperContainer?(props: { children: React.ReactNode[] }): React.ReactNode;
	popperModifiers?: Popper.Modifiers;
	popperPlacement?: string;
	popperProps?: {};
	preventOpenOnFocus?: boolean;
	readOnly?: boolean;
	required?: boolean;
	scrollableMonthYearDropdown?: boolean;
	scrollableYearDropdown?: boolean;
	selected?: Date | null;
	selectsEnd?: boolean;
	selectsStart?: boolean;
	shouldCloseOnSelect?: boolean;
	showDisabledMonthNavigation?: boolean;
	showMonthDropdown?: boolean;
	showMonthYearDropdown?: boolean;
	showTimeSelect?: boolean;
	showTimeSelectOnly?: boolean;
	showWeekNumbers?: boolean;
	showYearDropdown?: boolean;
	startDate?: Date;
	startOpen?: boolean;
	tabIndex?: number;
	timeCaption?: string;
	timeFormat?: string;
	timeIntervals?: number;
	title?: string;
	todayButton?: React.ReactNode;
	useShortMonthInDropdown?: boolean;
	useWeekdaysShort?: boolean;
	value?: string;
	weekLabel?: string;
	withPortal?: boolean;
	yearDropdownItemNumber?: number;
	formatWeekDay?(date: Date): string;
	clearButtonTitle?: string;
	previousMonthButtonLabel?: string;
	nextMonthButtonLabel?: string;
	renderCustomHeader?(params: {
		date: Date;
		changeYear(year: number): void;
		changeMonth(month: number): void;
		decreaseMonth(): void;
		increaseMonth(): void;
		prevMonthButtonDisabled: boolean;
		nextMonthButtonDisabled: boolean;
	}): React.ReactNode;
	renderDayContents?(dayOfMonth: number): React.ReactNode;
}
declare const ReactDatePicker: React.ClassicComponentClass<ReactDatePickerProps>;
export default ReactDatePicker;
