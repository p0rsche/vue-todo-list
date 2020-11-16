export default function uuid() {
    return Math.round((Math.random() * 36 ** 12)).toString(36);
}