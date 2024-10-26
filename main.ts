import puppeteer from "puppeteer";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  if (!process.env.TC_NO)
    return console.error("TC_NO is not defined in .env file");
  if (!process.env.AD) return console.error("AD is not defined in .env file");
  if (!process.env.SOYAD)
    return console.error("SOYAD is not defined in .env file");
  if (!process.env.DOGUM_YILI)
    return console.error("DOGUM_YILI is not defined in .env file");

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("http://detectportal.brave-http-only.com", {
    waitUntil: "networkidle2",
  });

  await page.type('input[name="tckn"]', process.env.TC_NO);

  await page.type('input[name="name"]', process.env.AD);

  await page.type('input[name="surname"]', process.env.SOYAD);

  await page.type('input[name="birthyear"]', process.env.DOGUM_YILI);

  // Sözleşme kabul checkbox'ı
  await page.click(
    "#pid_auth_login_form > div.row.form-group.m-form__group.m-login__form-sub > div > label > span"
  );

  // "Bağlan" butonu
  await page.click(".auth-connect-button");

  await page.waitForNavigation({ waitUntil: "networkidle2" });
  await page.waitForFunction('window.location.href.includes("google.com")');

  await browser.close();
})();
