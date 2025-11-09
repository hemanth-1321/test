import { modulo } from "./helper";
import { sendTelegramMessage } from "./telegram";

function sum(a: number, c: number) {
  console.log(a + c);
}

sum(4, 5);
multiply1(5, 3);

sum(9, 0);

sum(4, 5);
multiply1(5, 3);

sendTelegramMessage(process.env.TELEGRAM_CHAT_ID, "Test message");