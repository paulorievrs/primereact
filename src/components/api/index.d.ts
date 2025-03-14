// Config
export default interface PrimeReact {
    ripple: boolean;
    locale: string;
    zIndex: number;
}

// Locale
export declare function locale(locale: string): object;
export declare function addLocale(locale: string, options: object): void;
export declare function updateLocaleOption(key: string, value: any, locale: string): void;
export declare function updateLocaleOptions(options: object, locale: string): void;
export declare function localeOption(key: string, locale: string): void;
export declare function localeOptions(locale: string): void;

// Icons
export interface PrimeIcons {
    readonly ALIGN_CENTER: string;
    readonly ALIGN_JUSTIFY: string;
    readonly ALIGN_LEFT: string;
    readonly ALIGN_RIGHT: string;
    readonly AMAZON: string;
    readonly ANDROID: string;
    readonly ANGLE_DOUBLE_DOWN: string;
    readonly ANGLE_DOUBLE_LEFT: string;
    readonly ANGLE_DOUBLE_RIGHT: string;
    readonly ANGLE_DOUBLE_UP: string;
    readonly ANGLE_DOWN: string;
    readonly ANGLE_LEFT: string;
    readonly ANGLE_RIGHT: string;
    readonly ANGLE_UP: string;
    readonly APPLE: string;
    readonly ARROW_CIRCLE_DOWN: string;
    readonly ARROW_CIRCLE_LEFT: string;
    readonly ARROW_CIRCLE_RIGHT: string;
    readonly ARROW_CIRCLE_UP: string;
    readonly ARROW_DOWN: string;
    readonly ARROW_LEFT: string;
    readonly ARROW_RIGHT: string;
    readonly ARROW_UP: string;
    readonly BACKWARD: string;
    readonly BAN: string;
    readonly BARS: string;
    readonly BELL: string;
    readonly BOOK: string;
    readonly BOOKMARK: string;
    readonly BRIEFCASE: string;
    readonly CALENDAR_MINUS: string;
    readonly CALENDAR_PLUS: string;
    readonly CALENDAR_TIMES: string;
    readonly CALENDAR: string;
    readonly CAMERA: string;
    readonly CARET_DOWN: string;
    readonly CARET_LEFT: string;
    readonly CARET_RIGHT: string;
    readonly CARET_UP: string;
    readonly CHART_BAR: string;
    readonly CHART_LINE: string;
    readonly CHECK_CIRCLE: string;
    readonly CHECK_SQUARE: string;
    readonly CHECK: string;
    readonly CHEVRON_CIRCLE_DOWN: string;
    readonly CHEVRON_CIRCLE_LEFT: string;
    readonly CHEVRON_CIRCLE_RIGHT: string;
    readonly CHEVRON_CIRCLE_UP: string;
    readonly CHEVRON_DOWN: string;
    readonly CHEVRON_LEFT: string;
    readonly CHEVRON_RIGHT: string;
    readonly CHEVRON_UP: string;
    readonly CLOCK: string;
    readonly CLONE: string;
    readonly CLOUD_DOWNLOAD: string;
    readonly CLOUD_UPLOAD: string;
    readonly CLOUD: string;
    readonly COG: string;
    readonly COMMENT: string;
    readonly COMMENTS: string;
    readonly COMPASS: string;
    readonly COPY: string;
    readonly CREDIT_CARD: string;
    readonly DESKTOP: string;
    readonly DISCORD: string;
    readonly DIRECTIONS_ALT: string;
    readonly DIRECTIONS: string;
    readonly DOLLAR: string;
    readonly DOWNLOAD: string;
    readonly EJECT: string;
    readonly ELLIPSIS_H: string;
    readonly ELLIPSIS_V: string;
    readonly ENVELOPE: string;
    readonly EXCLAMATION_CIRCLE: string;
    readonly EXCLAMATION_TRIANGLE: string;
    readonly EXTERNAL_LINK: string;
    readonly EYE_SLASH: string;
    readonly EYE: string;
    readonly FACEBOOK: string;
    readonly FAST_BACKWARD: string;
    readonly FAST_FORWARD: string;
    readonly FILE_EXCEL: string;
    readonly FILE_O: string;
    readonly FILE_PDF: string;
    readonly FILE: string;
    readonly FILTER: string;
    readonly FILTER_SLASH: string;
    readonly FLAG: string;
    readonly FOLDER_OPEN: string;
    readonly FOLDER: string;
    readonly FORWARD: string;
    readonly GITHUB: string;
    readonly GLOBE: string;
    readonly GOOGLE: string;
    readonly HEART: string;
    readonly HOME: string;
    readonly ID_CARD: string;
    readonly IMAGE: string;
    readonly IMAGES: string;
    readonly INBOX: string;
    readonly INFO_CIRCLE: string;
    readonly INFO: string;
    readonly KEY: string;
    readonly LINK: string;
    readonly LIST: string;
    readonly LOCK_OPEN: string;
    readonly LOCK: string;
    readonly MAP: string;
    readonly MAP_MARKER: string;
    readonly MICROSOFT: string;
    readonly MINUS_CIRCLE: string;
    readonly MINUS: string;
    readonly MOBILE: string;
    readonly MONEY_BILL: string;
    readonly MOON: string;
    readonly PALETTE: string;
    readonly PAPERCLIP: string;
    readonly PAUSE: string;
    readonly PAYPAL: string;
    readonly PENCIL: string;
    readonly PERCENTAGE: string;
    readonly PHONE: string;
    readonly PLAY: string;
    readonly PLUS_CIRCLE: string;
    readonly PLUS: string;
    readonly POWER_OFF: string;
    readonly PRINT: string;
    readonly QUESTION_CIRCLE: string;
    readonly QUESTION: string;
    readonly RADIO_OFF: string;
    readonly RADIO_ON: string;
    readonly REFRESH: string;
    readonly REPLAY: string;
    readonly REPLY: string;
    readonly SAVE: string;
    readonly SEARCH_MINUS: string;
    readonly SEARCH_PLUS: string;
    readonly SEARCH: string;
    readonly SEND: string;
    readonly SHARE_ALT: string;
    readonly SHIELD: string;
    readonly SHOPPING_CART: string;
    readonly SIGN_IN: string;
    readonly SIGN_OUT: string;
    readonly SITEMAP: string;
    readonly SLACK: string;
    readonly SLIDERS_H: string;
    readonly SLIDERS_V: string;
    readonly SORT_ALPHA_ALT_DOWN: string;
    readonly SORT_ALPHA_ALT_UP: string;
    readonly SORT_ALPHA_DOWN: string;
    readonly SORT_ALPHA_UP: string;
    readonly SORT_ALT: string;
    readonly SORT_AMOUNT_DOWN_ALT: string;
    readonly SORT_AMOUNT_DOWN: string;
    readonly SORT_AMOUNT_UP_ALT: string;
    readonly SORT_AMOUNT_UP: string;
    readonly SORT_DOWN: string;
    readonly SORT_NUMERIC_ALT_DOWN: string;
    readonly SORT_NUMERIC_ALT_UP: string;
    readonly SORT_NUMERIC_DOWN: string;
    readonly SORT_NUMERIC_UP: string;
    readonly SORT_UP: string;
    readonly SORT: string;
    readonly SPINNER: string;
    readonly STAR_O: string;
    readonly STAR: string;
    readonly STEP_BACKWARD_ALT: string;
    readonly STEP_BACKWARD: string;
    readonly STEP_FORWARD_ALT: string;
    readonly STEP_FORWARD: string;
    readonly SUN: string;
    readonly TABLE: string;
    readonly TABLET: string;
    readonly TAG: string;
    readonly TAGS: string;
    readonly TH_LARGE: string;
    readonly THUMBS_DOWN: string;
    readonly THUMBS_UP: string;
    readonly TICKET: string;
    readonly TIMES_CIRCLE: string;
    readonly TIMES: string;
    readonly TRASH: string;
    readonly TWITTER: string;
    readonly UNDO: string;
    readonly UNLOCK: string;
    readonly UPLOAD: string;
    readonly USER_EDIT: string;
    readonly USER_MINUS: string;
    readonly USER_PLUS: string;
    readonly USER: string;
    readonly USERS: string;
    readonly VIDEO: string;
    readonly VIMEO: string;
    readonly VOLUME_DOWN: string;
    readonly VOLUME_OFF: string;
    readonly VOLUME_UP: string;
    readonly YOUTUBE: string;
    readonly WALLET: string;
    readonly WIFI: string;
    readonly WINDOW_MAXIMIZE: string;
    readonly WINDOW_MINIMIZE: string;
}
